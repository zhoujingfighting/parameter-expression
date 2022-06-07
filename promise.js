lconst PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECT = 'rejected';
function PromiseZhou(handler) {
    if (typeof handler !== 'function') {
        throw new Error('handler must be a function!!');
    }
    if (!this instanceof PromiseZhou) {
        return PromiseZhou(handler);
    }
    let self = this; // 改变this指针名字
    self.resolveCallBacks = []; //存放resolve成功的函数数组
    self.rejectCallCacks = []; //存放reject时候的函数数组
    self.value = null;
    self.reason = null;
    self.status = PENDING;

    function resolve(value) {
        if (self.status !== PENDING) {
            return; //非pending状态不进入这个逻辑
        }
        self.status = FULFILLED;
        self.value = value;
        self.resolveCallBacks.forEach(func => func(value))
    }

    function reject(reason) {
        if (self.status !== PENDING) {
            return; //非pending状态不进入这个逻辑
        }
        self.status = REJECT;
        self.reason = reason;
        self.resolveCallBacks.forEach(func => func(value))
    }
    try {
        handler(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

PromiseZhou.prototype.then = function (onFulfilled, onRejected) {

}