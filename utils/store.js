/**
 * 全局储存辅助类
 */
export default class WxStore {
    /**
     *
     * @param store
     * @param option
     */
    constructor(store, option = {}) {
        this.debug = option.debug || false
        this.appFieldKey = option.appKey || "app"
        this.ctx = {}
        this.observer = {}
        this.store = store
    }

    setWxCtx(ctx, field) {
        let _this = this
        this.ctx[field] = ctx

        //初始化当前ctx（app or page)的数据
        this.setStore(field, Object.assign({}, this.getStore(field), ctx.data))

        ctx.setState = (function (obj, cb = function() {}) {
            _this._setState(field, obj)
            if (ctx.setData) {
                ctx.setData(obj)
            }

            _this._refreshObserver(field)
            cb()
        }).bind(ctx)

        ctx.observe = (function (tagetField, targetState, localState, callback = function () {}) {
            if (!localState) {
                localState = targetState
            }
            _this.observe(field, tagetField, targetState, localState, callback)
            ctx.setState({
                [localState]: _this.getStore(tagetField)[targetState]
            })
        }).bind(ctx)

        ctx.observeApp = (function (targetState, localState, callback = function () {}) {
            ctx.observe(_this.appFieldKey, targetState, localState, callback)
        }).bind(ctx)

        ctx.setState(this.getStore(field) || {})

    }


    observe(localField, targeField, targetState, localState, cb = function() {}) {
        const observer = this.observer[targeField] || {}
        const localObserver = observer[localField] || {
            ctx: localField,
            data: {},
            callback: {}
        }
        localObserver.data[localField] = targeField
        localObserver.callback[localState] = callback

        observer[localField] = localObserver
        this.observer[targeField] = observer
    }


    /**
     * 通知观察者
     * @param field
     * @private
     */
    _refreshObserver(field) {
        const observerObj = this.observer[field]
        for (let key in observerObj) {
            const item = observerObj[key]
            const ctx = this.ctx[item.ctx]
            const data = item.data
            const cbs = item.callback

            const newState = {}
            const callbackArr = []
            for (let localState in data) {
                const targetKey = data[localState]
                const callback =  cbs[localState]
                const targetState = this.getStore(field)[targetKey]
                newState[localState] = targetState
                callbackArr.push(callback)
            }

            ctx.setState(newState, () => {
                callbackArr.forEach((cb) => {
                    cb()
                })
            })
        }
    }




    setStore(key, value) {
        if (key === this.appFieldKey || this.debug) {
            wx.setStorageSync(key, value)
        } else {
            this.store[key] = value
        }
    }

    getStore(key) {
        if (key === this.appFieldKey || this.debug) {
            return wx.getStorageSync(key) || {}
        } else {
            return this.store[key]
        }
    }


    getAppState(key) {
        const appState = this.getStore(this.appFieldKey)
        if (key) {
            return appState[key]
        } else {
            return appState
        }
    }

    setAppState(obj) {
        this.setFieldState(this.appFieldKey, obj)
    }


    _setState(field, obj) {
        this.setStore(field, Object.assign(this.getStore(field), obj || {}))
    }

    setFieldState(field, obj) {
        this.ctx[field] && this.ctx[field] && this.ctx[field].setState(obj)
    }






}