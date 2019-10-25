// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23752 = arguments.length;
switch (G__23752) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23753 = (function (f,blockable,meta23754){
this.f = f;
this.blockable = blockable;
this.meta23754 = meta23754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23755,meta23754__$1){
var self__ = this;
var _23755__$1 = this;
return (new cljs.core.async.t_cljs$core$async23753(self__.f,self__.blockable,meta23754__$1));
});

cljs.core.async.t_cljs$core$async23753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23755){
var self__ = this;
var _23755__$1 = this;
return self__.meta23754;
});

cljs.core.async.t_cljs$core$async23753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23754","meta23754",42612792,null)], null);
});

cljs.core.async.t_cljs$core$async23753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23753";

cljs.core.async.t_cljs$core$async23753.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23753");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23753.
 */
cljs.core.async.__GT_t_cljs$core$async23753 = (function cljs$core$async$__GT_t_cljs$core$async23753(f__$1,blockable__$1,meta23754){
return (new cljs.core.async.t_cljs$core$async23753(f__$1,blockable__$1,meta23754));
});

}

return (new cljs.core.async.t_cljs$core$async23753(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23759 = arguments.length;
switch (G__23759) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23762 = arguments.length;
switch (G__23762) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23765 = arguments.length;
switch (G__23765) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23767 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23767);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23767,ret){
return (function (){
return fn1.call(null,val_23767);
});})(val_23767,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23769 = arguments.length;
switch (G__23769) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23771 = n;
var x_23772 = (0);
while(true){
if((x_23772 < n__4607__auto___23771)){
(a[x_23772] = (0));

var G__23773 = (x_23772 + (1));
x_23772 = G__23773;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23774 = (i + (1));
i = G__23774;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23775 = (function (flag,meta23776){
this.flag = flag;
this.meta23776 = meta23776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23777,meta23776__$1){
var self__ = this;
var _23777__$1 = this;
return (new cljs.core.async.t_cljs$core$async23775(self__.flag,meta23776__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23777){
var self__ = this;
var _23777__$1 = this;
return self__.meta23776;
});})(flag))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23775.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23776","meta23776",-1928484357,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23775";

cljs.core.async.t_cljs$core$async23775.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23775");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23775.
 */
cljs.core.async.__GT_t_cljs$core$async23775 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23775(flag__$1,meta23776){
return (new cljs.core.async.t_cljs$core$async23775(flag__$1,meta23776));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23778 = (function (flag,cb,meta23779){
this.flag = flag;
this.cb = cb;
this.meta23779 = meta23779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23780,meta23779__$1){
var self__ = this;
var _23780__$1 = this;
return (new cljs.core.async.t_cljs$core$async23778(self__.flag,self__.cb,meta23779__$1));
});

cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23780){
var self__ = this;
var _23780__$1 = this;
return self__.meta23779;
});

cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23779","meta23779",1600392058,null)], null);
});

cljs.core.async.t_cljs$core$async23778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23778";

cljs.core.async.t_cljs$core$async23778.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23778");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23778.
 */
cljs.core.async.__GT_t_cljs$core$async23778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23778(flag__$1,cb__$1,meta23779){
return (new cljs.core.async.t_cljs$core$async23778(flag__$1,cb__$1,meta23779));
});

}

return (new cljs.core.async.t_cljs$core$async23778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23781_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23781_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23782_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23782_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23783 = (i + (1));
i = G__23783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23789 = arguments.length;
var i__4731__auto___23790 = (0);
while(true){
if((i__4731__auto___23790 < len__4730__auto___23789)){
args__4736__auto__.push((arguments[i__4731__auto___23790]));

var G__23791 = (i__4731__auto___23790 + (1));
i__4731__auto___23790 = G__23791;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23786){
var map__23787 = p__23786;
var map__23787__$1 = (((((!((map__23787 == null))))?(((((map__23787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23787):map__23787);
var opts = map__23787__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23784){
var G__23785 = cljs.core.first.call(null,seq23784);
var seq23784__$1 = cljs.core.next.call(null,seq23784);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23785,seq23784__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23793 = arguments.length;
switch (G__23793) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23692__auto___23839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___23839){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___23839){
return (function (state_23817){
var state_val_23818 = (state_23817[(1)]);
if((state_val_23818 === (7))){
var inst_23813 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23819_23840 = state_23817__$1;
(statearr_23819_23840[(2)] = inst_23813);

(statearr_23819_23840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (1))){
var state_23817__$1 = state_23817;
var statearr_23820_23841 = state_23817__$1;
(statearr_23820_23841[(2)] = null);

(statearr_23820_23841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (4))){
var inst_23796 = (state_23817[(7)]);
var inst_23796__$1 = (state_23817[(2)]);
var inst_23797 = (inst_23796__$1 == null);
var state_23817__$1 = (function (){var statearr_23821 = state_23817;
(statearr_23821[(7)] = inst_23796__$1);

return statearr_23821;
})();
if(cljs.core.truth_(inst_23797)){
var statearr_23822_23842 = state_23817__$1;
(statearr_23822_23842[(1)] = (5));

} else {
var statearr_23823_23843 = state_23817__$1;
(statearr_23823_23843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (13))){
var state_23817__$1 = state_23817;
var statearr_23824_23844 = state_23817__$1;
(statearr_23824_23844[(2)] = null);

(statearr_23824_23844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (6))){
var inst_23796 = (state_23817[(7)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23817__$1,(11),to,inst_23796);
} else {
if((state_val_23818 === (3))){
var inst_23815 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23817__$1,inst_23815);
} else {
if((state_val_23818 === (12))){
var state_23817__$1 = state_23817;
var statearr_23825_23845 = state_23817__$1;
(statearr_23825_23845[(2)] = null);

(statearr_23825_23845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (2))){
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(4),from);
} else {
if((state_val_23818 === (11))){
var inst_23806 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23806)){
var statearr_23826_23846 = state_23817__$1;
(statearr_23826_23846[(1)] = (12));

} else {
var statearr_23827_23847 = state_23817__$1;
(statearr_23827_23847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (9))){
var state_23817__$1 = state_23817;
var statearr_23828_23848 = state_23817__$1;
(statearr_23828_23848[(2)] = null);

(statearr_23828_23848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (5))){
var state_23817__$1 = state_23817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23829_23849 = state_23817__$1;
(statearr_23829_23849[(1)] = (8));

} else {
var statearr_23830_23850 = state_23817__$1;
(statearr_23830_23850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (14))){
var inst_23811 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23831_23851 = state_23817__$1;
(statearr_23831_23851[(2)] = inst_23811);

(statearr_23831_23851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (10))){
var inst_23803 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23832_23852 = state_23817__$1;
(statearr_23832_23852[(2)] = inst_23803);

(statearr_23832_23852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (8))){
var inst_23800 = cljs.core.async.close_BANG_.call(null,to);
var state_23817__$1 = state_23817;
var statearr_23833_23853 = state_23817__$1;
(statearr_23833_23853[(2)] = inst_23800);

(statearr_23833_23853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___23839))
;
return ((function (switch__23597__auto__,c__23692__auto___23839){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_23834 = [null,null,null,null,null,null,null,null];
(statearr_23834[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_23834[(1)] = (1));

return statearr_23834;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_23817){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_23817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e23835){if((e23835 instanceof Object)){
var ex__23601__auto__ = e23835;
var statearr_23836_23854 = state_23817;
(statearr_23836_23854[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23855 = state_23817;
state_23817 = G__23855;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_23817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_23817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___23839))
})();
var state__23694__auto__ = (function (){var statearr_23837 = f__23693__auto__.call(null);
(statearr_23837[(6)] = c__23692__auto___23839);

return statearr_23837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___23839))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23856){
var vec__23857 = p__23856;
var v = cljs.core.nth.call(null,vec__23857,(0),null);
var p = cljs.core.nth.call(null,vec__23857,(1),null);
var job = vec__23857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23692__auto___24028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___24028,res,vec__23857,v,p,job,jobs,results){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___24028,res,vec__23857,v,p,job,jobs,results){
return (function (state_23864){
var state_val_23865 = (state_23864[(1)]);
if((state_val_23865 === (1))){
var state_23864__$1 = state_23864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23864__$1,(2),res,v);
} else {
if((state_val_23865 === (2))){
var inst_23861 = (state_23864[(2)]);
var inst_23862 = cljs.core.async.close_BANG_.call(null,res);
var state_23864__$1 = (function (){var statearr_23866 = state_23864;
(statearr_23866[(7)] = inst_23861);

return statearr_23866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23864__$1,inst_23862);
} else {
return null;
}
}
});})(c__23692__auto___24028,res,vec__23857,v,p,job,jobs,results))
;
return ((function (switch__23597__auto__,c__23692__auto___24028,res,vec__23857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null,null];
(statearr_23867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1 = (function (state_23864){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_23864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__23601__auto__ = e23868;
var statearr_23869_24029 = state_23864;
(statearr_23869_24029[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24030 = state_23864;
state_23864 = G__24030;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = function(state_23864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1.call(this,state_23864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___24028,res,vec__23857,v,p,job,jobs,results))
})();
var state__23694__auto__ = (function (){var statearr_23870 = f__23693__auto__.call(null);
(statearr_23870[(6)] = c__23692__auto___24028);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___24028,res,vec__23857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23871){
var vec__23872 = p__23871;
var v = cljs.core.nth.call(null,vec__23872,(0),null);
var p = cljs.core.nth.call(null,vec__23872,(1),null);
var job = vec__23872;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24031 = n;
var __24032 = (0);
while(true){
if((__24032 < n__4607__auto___24031)){
var G__23875_24033 = type;
var G__23875_24034__$1 = (((G__23875_24033 instanceof cljs.core.Keyword))?G__23875_24033.fqn:null);
switch (G__23875_24034__$1) {
case "compute":
var c__23692__auto___24036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24032,c__23692__auto___24036,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (__24032,c__23692__auto___24036,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async){
return (function (state_23888){
var state_val_23889 = (state_23888[(1)]);
if((state_val_23889 === (1))){
var state_23888__$1 = state_23888;
var statearr_23890_24037 = state_23888__$1;
(statearr_23890_24037[(2)] = null);

(statearr_23890_24037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (2))){
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23888__$1,(4),jobs);
} else {
if((state_val_23889 === (3))){
var inst_23886 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23888__$1,inst_23886);
} else {
if((state_val_23889 === (4))){
var inst_23878 = (state_23888[(2)]);
var inst_23879 = process.call(null,inst_23878);
var state_23888__$1 = state_23888;
if(cljs.core.truth_(inst_23879)){
var statearr_23891_24038 = state_23888__$1;
(statearr_23891_24038[(1)] = (5));

} else {
var statearr_23892_24039 = state_23888__$1;
(statearr_23892_24039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (5))){
var state_23888__$1 = state_23888;
var statearr_23893_24040 = state_23888__$1;
(statearr_23893_24040[(2)] = null);

(statearr_23893_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (6))){
var state_23888__$1 = state_23888;
var statearr_23894_24041 = state_23888__$1;
(statearr_23894_24041[(2)] = null);

(statearr_23894_24041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (7))){
var inst_23884 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
var statearr_23895_24042 = state_23888__$1;
(statearr_23895_24042[(2)] = inst_23884);

(statearr_23895_24042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24032,c__23692__auto___24036,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async))
;
return ((function (__24032,switch__23597__auto__,c__23692__auto___24036,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0 = (function (){
var statearr_23896 = [null,null,null,null,null,null,null];
(statearr_23896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__);

(statearr_23896[(1)] = (1));

return statearr_23896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1 = (function (state_23888){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_23888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e23897){if((e23897 instanceof Object)){
var ex__23601__auto__ = e23897;
var statearr_23898_24043 = state_23888;
(statearr_23898_24043[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24044 = state_23888;
state_23888 = G__24044;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = function(state_23888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1.call(this,state_23888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__;
})()
;})(__24032,switch__23597__auto__,c__23692__auto___24036,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async))
})();
var state__23694__auto__ = (function (){var statearr_23899 = f__23693__auto__.call(null);
(statearr_23899[(6)] = c__23692__auto___24036);

return statearr_23899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(__24032,c__23692__auto___24036,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async))
);


break;
case "async":
var c__23692__auto___24045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24032,c__23692__auto___24045,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (__24032,c__23692__auto___24045,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async){
return (function (state_23912){
var state_val_23913 = (state_23912[(1)]);
if((state_val_23913 === (1))){
var state_23912__$1 = state_23912;
var statearr_23914_24046 = state_23912__$1;
(statearr_23914_24046[(2)] = null);

(statearr_23914_24046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (2))){
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23912__$1,(4),jobs);
} else {
if((state_val_23913 === (3))){
var inst_23910 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23912__$1,inst_23910);
} else {
if((state_val_23913 === (4))){
var inst_23902 = (state_23912[(2)]);
var inst_23903 = async.call(null,inst_23902);
var state_23912__$1 = state_23912;
if(cljs.core.truth_(inst_23903)){
var statearr_23915_24047 = state_23912__$1;
(statearr_23915_24047[(1)] = (5));

} else {
var statearr_23916_24048 = state_23912__$1;
(statearr_23916_24048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (5))){
var state_23912__$1 = state_23912;
var statearr_23917_24049 = state_23912__$1;
(statearr_23917_24049[(2)] = null);

(statearr_23917_24049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (6))){
var state_23912__$1 = state_23912;
var statearr_23918_24050 = state_23912__$1;
(statearr_23918_24050[(2)] = null);

(statearr_23918_24050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (7))){
var inst_23908 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
var statearr_23919_24051 = state_23912__$1;
(statearr_23919_24051[(2)] = inst_23908);

(statearr_23919_24051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24032,c__23692__auto___24045,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async))
;
return ((function (__24032,switch__23597__auto__,c__23692__auto___24045,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0 = (function (){
var statearr_23920 = [null,null,null,null,null,null,null];
(statearr_23920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__);

(statearr_23920[(1)] = (1));

return statearr_23920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1 = (function (state_23912){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_23912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e23921){if((e23921 instanceof Object)){
var ex__23601__auto__ = e23921;
var statearr_23922_24052 = state_23912;
(statearr_23922_24052[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24053 = state_23912;
state_23912 = G__24053;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = function(state_23912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1.call(this,state_23912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__;
})()
;})(__24032,switch__23597__auto__,c__23692__auto___24045,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async))
})();
var state__23694__auto__ = (function (){var statearr_23923 = f__23693__auto__.call(null);
(statearr_23923[(6)] = c__23692__auto___24045);

return statearr_23923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(__24032,c__23692__auto___24045,G__23875_24033,G__23875_24034__$1,n__4607__auto___24031,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23875_24034__$1)].join('')));

}

var G__24054 = (__24032 + (1));
__24032 = G__24054;
continue;
} else {
}
break;
}

var c__23692__auto___24055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___24055,jobs,results,process,async){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___24055,jobs,results,process,async){
return (function (state_23945){
var state_val_23946 = (state_23945[(1)]);
if((state_val_23946 === (7))){
var inst_23941 = (state_23945[(2)]);
var state_23945__$1 = state_23945;
var statearr_23947_24056 = state_23945__$1;
(statearr_23947_24056[(2)] = inst_23941);

(statearr_23947_24056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (1))){
var state_23945__$1 = state_23945;
var statearr_23948_24057 = state_23945__$1;
(statearr_23948_24057[(2)] = null);

(statearr_23948_24057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (4))){
var inst_23926 = (state_23945[(7)]);
var inst_23926__$1 = (state_23945[(2)]);
var inst_23927 = (inst_23926__$1 == null);
var state_23945__$1 = (function (){var statearr_23949 = state_23945;
(statearr_23949[(7)] = inst_23926__$1);

return statearr_23949;
})();
if(cljs.core.truth_(inst_23927)){
var statearr_23950_24058 = state_23945__$1;
(statearr_23950_24058[(1)] = (5));

} else {
var statearr_23951_24059 = state_23945__$1;
(statearr_23951_24059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (6))){
var inst_23926 = (state_23945[(7)]);
var inst_23931 = (state_23945[(8)]);
var inst_23931__$1 = cljs.core.async.chan.call(null,(1));
var inst_23932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23933 = [inst_23926,inst_23931__$1];
var inst_23934 = (new cljs.core.PersistentVector(null,2,(5),inst_23932,inst_23933,null));
var state_23945__$1 = (function (){var statearr_23952 = state_23945;
(statearr_23952[(8)] = inst_23931__$1);

return statearr_23952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23945__$1,(8),jobs,inst_23934);
} else {
if((state_val_23946 === (3))){
var inst_23943 = (state_23945[(2)]);
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23945__$1,inst_23943);
} else {
if((state_val_23946 === (2))){
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23945__$1,(4),from);
} else {
if((state_val_23946 === (9))){
var inst_23938 = (state_23945[(2)]);
var state_23945__$1 = (function (){var statearr_23953 = state_23945;
(statearr_23953[(9)] = inst_23938);

return statearr_23953;
})();
var statearr_23954_24060 = state_23945__$1;
(statearr_23954_24060[(2)] = null);

(statearr_23954_24060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (5))){
var inst_23929 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23945__$1 = state_23945;
var statearr_23955_24061 = state_23945__$1;
(statearr_23955_24061[(2)] = inst_23929);

(statearr_23955_24061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (8))){
var inst_23931 = (state_23945[(8)]);
var inst_23936 = (state_23945[(2)]);
var state_23945__$1 = (function (){var statearr_23956 = state_23945;
(statearr_23956[(10)] = inst_23936);

return statearr_23956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23945__$1,(9),results,inst_23931);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___24055,jobs,results,process,async))
;
return ((function (switch__23597__auto__,c__23692__auto___24055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0 = (function (){
var statearr_23957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__);

(statearr_23957[(1)] = (1));

return statearr_23957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1 = (function (state_23945){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_23945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e23958){if((e23958 instanceof Object)){
var ex__23601__auto__ = e23958;
var statearr_23959_24062 = state_23945;
(statearr_23959_24062[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24063 = state_23945;
state_23945 = G__24063;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = function(state_23945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1.call(this,state_23945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___24055,jobs,results,process,async))
})();
var state__23694__auto__ = (function (){var statearr_23960 = f__23693__auto__.call(null);
(statearr_23960[(6)] = c__23692__auto___24055);

return statearr_23960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___24055,jobs,results,process,async))
);


var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__,jobs,results,process,async){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__,jobs,results,process,async){
return (function (state_23998){
var state_val_23999 = (state_23998[(1)]);
if((state_val_23999 === (7))){
var inst_23994 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24000_24064 = state_23998__$1;
(statearr_24000_24064[(2)] = inst_23994);

(statearr_24000_24064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (20))){
var state_23998__$1 = state_23998;
var statearr_24001_24065 = state_23998__$1;
(statearr_24001_24065[(2)] = null);

(statearr_24001_24065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (1))){
var state_23998__$1 = state_23998;
var statearr_24002_24066 = state_23998__$1;
(statearr_24002_24066[(2)] = null);

(statearr_24002_24066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (4))){
var inst_23963 = (state_23998[(7)]);
var inst_23963__$1 = (state_23998[(2)]);
var inst_23964 = (inst_23963__$1 == null);
var state_23998__$1 = (function (){var statearr_24003 = state_23998;
(statearr_24003[(7)] = inst_23963__$1);

return statearr_24003;
})();
if(cljs.core.truth_(inst_23964)){
var statearr_24004_24067 = state_23998__$1;
(statearr_24004_24067[(1)] = (5));

} else {
var statearr_24005_24068 = state_23998__$1;
(statearr_24005_24068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (15))){
var inst_23976 = (state_23998[(8)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23998__$1,(18),to,inst_23976);
} else {
if((state_val_23999 === (21))){
var inst_23989 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24006_24069 = state_23998__$1;
(statearr_24006_24069[(2)] = inst_23989);

(statearr_24006_24069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (13))){
var inst_23991 = (state_23998[(2)]);
var state_23998__$1 = (function (){var statearr_24007 = state_23998;
(statearr_24007[(9)] = inst_23991);

return statearr_24007;
})();
var statearr_24008_24070 = state_23998__$1;
(statearr_24008_24070[(2)] = null);

(statearr_24008_24070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (6))){
var inst_23963 = (state_23998[(7)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23998__$1,(11),inst_23963);
} else {
if((state_val_23999 === (17))){
var inst_23984 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23984)){
var statearr_24009_24071 = state_23998__$1;
(statearr_24009_24071[(1)] = (19));

} else {
var statearr_24010_24072 = state_23998__$1;
(statearr_24010_24072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (3))){
var inst_23996 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23998__$1,inst_23996);
} else {
if((state_val_23999 === (12))){
var inst_23973 = (state_23998[(10)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23998__$1,(14),inst_23973);
} else {
if((state_val_23999 === (2))){
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23998__$1,(4),results);
} else {
if((state_val_23999 === (19))){
var state_23998__$1 = state_23998;
var statearr_24011_24073 = state_23998__$1;
(statearr_24011_24073[(2)] = null);

(statearr_24011_24073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (11))){
var inst_23973 = (state_23998[(2)]);
var state_23998__$1 = (function (){var statearr_24012 = state_23998;
(statearr_24012[(10)] = inst_23973);

return statearr_24012;
})();
var statearr_24013_24074 = state_23998__$1;
(statearr_24013_24074[(2)] = null);

(statearr_24013_24074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (9))){
var state_23998__$1 = state_23998;
var statearr_24014_24075 = state_23998__$1;
(statearr_24014_24075[(2)] = null);

(statearr_24014_24075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (5))){
var state_23998__$1 = state_23998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24015_24076 = state_23998__$1;
(statearr_24015_24076[(1)] = (8));

} else {
var statearr_24016_24077 = state_23998__$1;
(statearr_24016_24077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (14))){
var inst_23976 = (state_23998[(8)]);
var inst_23978 = (state_23998[(11)]);
var inst_23976__$1 = (state_23998[(2)]);
var inst_23977 = (inst_23976__$1 == null);
var inst_23978__$1 = cljs.core.not.call(null,inst_23977);
var state_23998__$1 = (function (){var statearr_24017 = state_23998;
(statearr_24017[(8)] = inst_23976__$1);

(statearr_24017[(11)] = inst_23978__$1);

return statearr_24017;
})();
if(inst_23978__$1){
var statearr_24018_24078 = state_23998__$1;
(statearr_24018_24078[(1)] = (15));

} else {
var statearr_24019_24079 = state_23998__$1;
(statearr_24019_24079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (16))){
var inst_23978 = (state_23998[(11)]);
var state_23998__$1 = state_23998;
var statearr_24020_24080 = state_23998__$1;
(statearr_24020_24080[(2)] = inst_23978);

(statearr_24020_24080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (10))){
var inst_23970 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24021_24081 = state_23998__$1;
(statearr_24021_24081[(2)] = inst_23970);

(statearr_24021_24081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (18))){
var inst_23981 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24022_24082 = state_23998__$1;
(statearr_24022_24082[(2)] = inst_23981);

(statearr_24022_24082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (8))){
var inst_23967 = cljs.core.async.close_BANG_.call(null,to);
var state_23998__$1 = state_23998;
var statearr_24023_24083 = state_23998__$1;
(statearr_24023_24083[(2)] = inst_23967);

(statearr_24023_24083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto__,jobs,results,process,async))
;
return ((function (switch__23597__auto__,c__23692__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0 = (function (){
var statearr_24024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__);

(statearr_24024[(1)] = (1));

return statearr_24024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1 = (function (state_23998){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_23998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24025){if((e24025 instanceof Object)){
var ex__23601__auto__ = e24025;
var statearr_24026_24084 = state_23998;
(statearr_24026_24084[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24085 = state_23998;
state_23998 = G__24085;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__ = function(state_23998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1.call(this,state_23998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__,jobs,results,process,async))
})();
var state__23694__auto__ = (function (){var statearr_24027 = f__23693__auto__.call(null);
(statearr_24027[(6)] = c__23692__auto__);

return statearr_24027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__,jobs,results,process,async))
);

return c__23692__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24087 = arguments.length;
switch (G__24087) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24090 = arguments.length;
switch (G__24090) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24093 = arguments.length;
switch (G__24093) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23692__auto___24142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___24142,tc,fc){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___24142,tc,fc){
return (function (state_24119){
var state_val_24120 = (state_24119[(1)]);
if((state_val_24120 === (7))){
var inst_24115 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24121_24143 = state_24119__$1;
(statearr_24121_24143[(2)] = inst_24115);

(statearr_24121_24143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (1))){
var state_24119__$1 = state_24119;
var statearr_24122_24144 = state_24119__$1;
(statearr_24122_24144[(2)] = null);

(statearr_24122_24144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (4))){
var inst_24096 = (state_24119[(7)]);
var inst_24096__$1 = (state_24119[(2)]);
var inst_24097 = (inst_24096__$1 == null);
var state_24119__$1 = (function (){var statearr_24123 = state_24119;
(statearr_24123[(7)] = inst_24096__$1);

return statearr_24123;
})();
if(cljs.core.truth_(inst_24097)){
var statearr_24124_24145 = state_24119__$1;
(statearr_24124_24145[(1)] = (5));

} else {
var statearr_24125_24146 = state_24119__$1;
(statearr_24125_24146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (13))){
var state_24119__$1 = state_24119;
var statearr_24126_24147 = state_24119__$1;
(statearr_24126_24147[(2)] = null);

(statearr_24126_24147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (6))){
var inst_24096 = (state_24119[(7)]);
var inst_24102 = p.call(null,inst_24096);
var state_24119__$1 = state_24119;
if(cljs.core.truth_(inst_24102)){
var statearr_24127_24148 = state_24119__$1;
(statearr_24127_24148[(1)] = (9));

} else {
var statearr_24128_24149 = state_24119__$1;
(statearr_24128_24149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (3))){
var inst_24117 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24119__$1,inst_24117);
} else {
if((state_val_24120 === (12))){
var state_24119__$1 = state_24119;
var statearr_24129_24150 = state_24119__$1;
(statearr_24129_24150[(2)] = null);

(statearr_24129_24150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (2))){
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24119__$1,(4),ch);
} else {
if((state_val_24120 === (11))){
var inst_24096 = (state_24119[(7)]);
var inst_24106 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24119__$1,(8),inst_24106,inst_24096);
} else {
if((state_val_24120 === (9))){
var state_24119__$1 = state_24119;
var statearr_24130_24151 = state_24119__$1;
(statearr_24130_24151[(2)] = tc);

(statearr_24130_24151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (5))){
var inst_24099 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24100 = cljs.core.async.close_BANG_.call(null,fc);
var state_24119__$1 = (function (){var statearr_24131 = state_24119;
(statearr_24131[(8)] = inst_24099);

return statearr_24131;
})();
var statearr_24132_24152 = state_24119__$1;
(statearr_24132_24152[(2)] = inst_24100);

(statearr_24132_24152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (14))){
var inst_24113 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24133_24153 = state_24119__$1;
(statearr_24133_24153[(2)] = inst_24113);

(statearr_24133_24153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (10))){
var state_24119__$1 = state_24119;
var statearr_24134_24154 = state_24119__$1;
(statearr_24134_24154[(2)] = fc);

(statearr_24134_24154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (8))){
var inst_24108 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
if(cljs.core.truth_(inst_24108)){
var statearr_24135_24155 = state_24119__$1;
(statearr_24135_24155[(1)] = (12));

} else {
var statearr_24136_24156 = state_24119__$1;
(statearr_24136_24156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___24142,tc,fc))
;
return ((function (switch__23597__auto__,c__23692__auto___24142,tc,fc){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_24137 = [null,null,null,null,null,null,null,null,null];
(statearr_24137[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_24137[(1)] = (1));

return statearr_24137;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_24119){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_24119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24138){if((e24138 instanceof Object)){
var ex__23601__auto__ = e24138;
var statearr_24139_24157 = state_24119;
(statearr_24139_24157[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24158 = state_24119;
state_24119 = G__24158;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_24119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_24119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___24142,tc,fc))
})();
var state__23694__auto__ = (function (){var statearr_24140 = f__23693__auto__.call(null);
(statearr_24140[(6)] = c__23692__auto___24142);

return statearr_24140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___24142,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__){
return (function (state_24179){
var state_val_24180 = (state_24179[(1)]);
if((state_val_24180 === (7))){
var inst_24175 = (state_24179[(2)]);
var state_24179__$1 = state_24179;
var statearr_24181_24199 = state_24179__$1;
(statearr_24181_24199[(2)] = inst_24175);

(statearr_24181_24199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (1))){
var inst_24159 = init;
var state_24179__$1 = (function (){var statearr_24182 = state_24179;
(statearr_24182[(7)] = inst_24159);

return statearr_24182;
})();
var statearr_24183_24200 = state_24179__$1;
(statearr_24183_24200[(2)] = null);

(statearr_24183_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (4))){
var inst_24162 = (state_24179[(8)]);
var inst_24162__$1 = (state_24179[(2)]);
var inst_24163 = (inst_24162__$1 == null);
var state_24179__$1 = (function (){var statearr_24184 = state_24179;
(statearr_24184[(8)] = inst_24162__$1);

return statearr_24184;
})();
if(cljs.core.truth_(inst_24163)){
var statearr_24185_24201 = state_24179__$1;
(statearr_24185_24201[(1)] = (5));

} else {
var statearr_24186_24202 = state_24179__$1;
(statearr_24186_24202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (6))){
var inst_24162 = (state_24179[(8)]);
var inst_24159 = (state_24179[(7)]);
var inst_24166 = (state_24179[(9)]);
var inst_24166__$1 = f.call(null,inst_24159,inst_24162);
var inst_24167 = cljs.core.reduced_QMARK_.call(null,inst_24166__$1);
var state_24179__$1 = (function (){var statearr_24187 = state_24179;
(statearr_24187[(9)] = inst_24166__$1);

return statearr_24187;
})();
if(inst_24167){
var statearr_24188_24203 = state_24179__$1;
(statearr_24188_24203[(1)] = (8));

} else {
var statearr_24189_24204 = state_24179__$1;
(statearr_24189_24204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (3))){
var inst_24177 = (state_24179[(2)]);
var state_24179__$1 = state_24179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24179__$1,inst_24177);
} else {
if((state_val_24180 === (2))){
var state_24179__$1 = state_24179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24179__$1,(4),ch);
} else {
if((state_val_24180 === (9))){
var inst_24166 = (state_24179[(9)]);
var inst_24159 = inst_24166;
var state_24179__$1 = (function (){var statearr_24190 = state_24179;
(statearr_24190[(7)] = inst_24159);

return statearr_24190;
})();
var statearr_24191_24205 = state_24179__$1;
(statearr_24191_24205[(2)] = null);

(statearr_24191_24205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (5))){
var inst_24159 = (state_24179[(7)]);
var state_24179__$1 = state_24179;
var statearr_24192_24206 = state_24179__$1;
(statearr_24192_24206[(2)] = inst_24159);

(statearr_24192_24206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (10))){
var inst_24173 = (state_24179[(2)]);
var state_24179__$1 = state_24179;
var statearr_24193_24207 = state_24179__$1;
(statearr_24193_24207[(2)] = inst_24173);

(statearr_24193_24207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24180 === (8))){
var inst_24166 = (state_24179[(9)]);
var inst_24169 = cljs.core.deref.call(null,inst_24166);
var state_24179__$1 = state_24179;
var statearr_24194_24208 = state_24179__$1;
(statearr_24194_24208[(2)] = inst_24169);

(statearr_24194_24208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto__))
;
return ((function (switch__23597__auto__,c__23692__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23598__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23598__auto____0 = (function (){
var statearr_24195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24195[(0)] = cljs$core$async$reduce_$_state_machine__23598__auto__);

(statearr_24195[(1)] = (1));

return statearr_24195;
});
var cljs$core$async$reduce_$_state_machine__23598__auto____1 = (function (state_24179){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_24179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24196){if((e24196 instanceof Object)){
var ex__23601__auto__ = e24196;
var statearr_24197_24209 = state_24179;
(statearr_24197_24209[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24210 = state_24179;
state_24179 = G__24210;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23598__auto__ = function(state_24179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23598__auto____1.call(this,state_24179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23598__auto____0;
cljs$core$async$reduce_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23598__auto____1;
return cljs$core$async$reduce_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__))
})();
var state__23694__auto__ = (function (){var statearr_24198 = f__23693__auto__.call(null);
(statearr_24198[(6)] = c__23692__auto__);

return statearr_24198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__))
);

return c__23692__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__,f__$1){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__,f__$1){
return (function (state_24216){
var state_val_24217 = (state_24216[(1)]);
if((state_val_24217 === (1))){
var inst_24211 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24216__$1,(2),inst_24211);
} else {
if((state_val_24217 === (2))){
var inst_24213 = (state_24216[(2)]);
var inst_24214 = f__$1.call(null,inst_24213);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24216__$1,inst_24214);
} else {
return null;
}
}
});})(c__23692__auto__,f__$1))
;
return ((function (switch__23597__auto__,c__23692__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23598__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23598__auto____0 = (function (){
var statearr_24218 = [null,null,null,null,null,null,null];
(statearr_24218[(0)] = cljs$core$async$transduce_$_state_machine__23598__auto__);

(statearr_24218[(1)] = (1));

return statearr_24218;
});
var cljs$core$async$transduce_$_state_machine__23598__auto____1 = (function (state_24216){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_24216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24219){if((e24219 instanceof Object)){
var ex__23601__auto__ = e24219;
var statearr_24220_24222 = state_24216;
(statearr_24220_24222[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24223 = state_24216;
state_24216 = G__24223;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23598__auto__ = function(state_24216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23598__auto____1.call(this,state_24216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23598__auto____0;
cljs$core$async$transduce_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23598__auto____1;
return cljs$core$async$transduce_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__,f__$1))
})();
var state__23694__auto__ = (function (){var statearr_24221 = f__23693__auto__.call(null);
(statearr_24221[(6)] = c__23692__auto__);

return statearr_24221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__,f__$1))
);

return c__23692__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24225 = arguments.length;
switch (G__24225) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__){
return (function (state_24250){
var state_val_24251 = (state_24250[(1)]);
if((state_val_24251 === (7))){
var inst_24232 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24252_24273 = state_24250__$1;
(statearr_24252_24273[(2)] = inst_24232);

(statearr_24252_24273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (1))){
var inst_24226 = cljs.core.seq.call(null,coll);
var inst_24227 = inst_24226;
var state_24250__$1 = (function (){var statearr_24253 = state_24250;
(statearr_24253[(7)] = inst_24227);

return statearr_24253;
})();
var statearr_24254_24274 = state_24250__$1;
(statearr_24254_24274[(2)] = null);

(statearr_24254_24274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (4))){
var inst_24227 = (state_24250[(7)]);
var inst_24230 = cljs.core.first.call(null,inst_24227);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24250__$1,(7),ch,inst_24230);
} else {
if((state_val_24251 === (13))){
var inst_24244 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24255_24275 = state_24250__$1;
(statearr_24255_24275[(2)] = inst_24244);

(statearr_24255_24275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (6))){
var inst_24235 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24235)){
var statearr_24256_24276 = state_24250__$1;
(statearr_24256_24276[(1)] = (8));

} else {
var statearr_24257_24277 = state_24250__$1;
(statearr_24257_24277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (3))){
var inst_24248 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24250__$1,inst_24248);
} else {
if((state_val_24251 === (12))){
var state_24250__$1 = state_24250;
var statearr_24258_24278 = state_24250__$1;
(statearr_24258_24278[(2)] = null);

(statearr_24258_24278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (2))){
var inst_24227 = (state_24250[(7)]);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24227)){
var statearr_24259_24279 = state_24250__$1;
(statearr_24259_24279[(1)] = (4));

} else {
var statearr_24260_24280 = state_24250__$1;
(statearr_24260_24280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (11))){
var inst_24241 = cljs.core.async.close_BANG_.call(null,ch);
var state_24250__$1 = state_24250;
var statearr_24261_24281 = state_24250__$1;
(statearr_24261_24281[(2)] = inst_24241);

(statearr_24261_24281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (9))){
var state_24250__$1 = state_24250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24262_24282 = state_24250__$1;
(statearr_24262_24282[(1)] = (11));

} else {
var statearr_24263_24283 = state_24250__$1;
(statearr_24263_24283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (5))){
var inst_24227 = (state_24250[(7)]);
var state_24250__$1 = state_24250;
var statearr_24264_24284 = state_24250__$1;
(statearr_24264_24284[(2)] = inst_24227);

(statearr_24264_24284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (10))){
var inst_24246 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24265_24285 = state_24250__$1;
(statearr_24265_24285[(2)] = inst_24246);

(statearr_24265_24285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (8))){
var inst_24227 = (state_24250[(7)]);
var inst_24237 = cljs.core.next.call(null,inst_24227);
var inst_24227__$1 = inst_24237;
var state_24250__$1 = (function (){var statearr_24266 = state_24250;
(statearr_24266[(7)] = inst_24227__$1);

return statearr_24266;
})();
var statearr_24267_24286 = state_24250__$1;
(statearr_24267_24286[(2)] = null);

(statearr_24267_24286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto__))
;
return ((function (switch__23597__auto__,c__23692__auto__){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_24268 = [null,null,null,null,null,null,null,null];
(statearr_24268[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_24268[(1)] = (1));

return statearr_24268;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_24250){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_24250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24269){if((e24269 instanceof Object)){
var ex__23601__auto__ = e24269;
var statearr_24270_24287 = state_24250;
(statearr_24270_24287[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24288 = state_24250;
state_24250 = G__24288;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_24250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_24250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__))
})();
var state__23694__auto__ = (function (){var statearr_24271 = f__23693__auto__.call(null);
(statearr_24271[(6)] = c__23692__auto__);

return statearr_24271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__))
);

return c__23692__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24289 = (function (ch,cs,meta24290){
this.ch = ch;
this.cs = cs;
this.meta24290 = meta24290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24291,meta24290__$1){
var self__ = this;
var _24291__$1 = this;
return (new cljs.core.async.t_cljs$core$async24289(self__.ch,self__.cs,meta24290__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24291){
var self__ = this;
var _24291__$1 = this;
return self__.meta24290;
});})(cs))
;

cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24289.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24289.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24290","meta24290",1867976615,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24289";

cljs.core.async.t_cljs$core$async24289.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24289");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24289.
 */
cljs.core.async.__GT_t_cljs$core$async24289 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24289(ch__$1,cs__$1,meta24290){
return (new cljs.core.async.t_cljs$core$async24289(ch__$1,cs__$1,meta24290));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24289(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23692__auto___24511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___24511,cs,m,dchan,dctr,done){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___24511,cs,m,dchan,dctr,done){
return (function (state_24426){
var state_val_24427 = (state_24426[(1)]);
if((state_val_24427 === (7))){
var inst_24422 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24428_24512 = state_24426__$1;
(statearr_24428_24512[(2)] = inst_24422);

(statearr_24428_24512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (20))){
var inst_24325 = (state_24426[(7)]);
var inst_24337 = cljs.core.first.call(null,inst_24325);
var inst_24338 = cljs.core.nth.call(null,inst_24337,(0),null);
var inst_24339 = cljs.core.nth.call(null,inst_24337,(1),null);
var state_24426__$1 = (function (){var statearr_24429 = state_24426;
(statearr_24429[(8)] = inst_24338);

return statearr_24429;
})();
if(cljs.core.truth_(inst_24339)){
var statearr_24430_24513 = state_24426__$1;
(statearr_24430_24513[(1)] = (22));

} else {
var statearr_24431_24514 = state_24426__$1;
(statearr_24431_24514[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (27))){
var inst_24374 = (state_24426[(9)]);
var inst_24369 = (state_24426[(10)]);
var inst_24367 = (state_24426[(11)]);
var inst_24294 = (state_24426[(12)]);
var inst_24374__$1 = cljs.core._nth.call(null,inst_24367,inst_24369);
var inst_24375 = cljs.core.async.put_BANG_.call(null,inst_24374__$1,inst_24294,done);
var state_24426__$1 = (function (){var statearr_24432 = state_24426;
(statearr_24432[(9)] = inst_24374__$1);

return statearr_24432;
})();
if(cljs.core.truth_(inst_24375)){
var statearr_24433_24515 = state_24426__$1;
(statearr_24433_24515[(1)] = (30));

} else {
var statearr_24434_24516 = state_24426__$1;
(statearr_24434_24516[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (1))){
var state_24426__$1 = state_24426;
var statearr_24435_24517 = state_24426__$1;
(statearr_24435_24517[(2)] = null);

(statearr_24435_24517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (24))){
var inst_24325 = (state_24426[(7)]);
var inst_24344 = (state_24426[(2)]);
var inst_24345 = cljs.core.next.call(null,inst_24325);
var inst_24303 = inst_24345;
var inst_24304 = null;
var inst_24305 = (0);
var inst_24306 = (0);
var state_24426__$1 = (function (){var statearr_24436 = state_24426;
(statearr_24436[(13)] = inst_24306);

(statearr_24436[(14)] = inst_24344);

(statearr_24436[(15)] = inst_24303);

(statearr_24436[(16)] = inst_24304);

(statearr_24436[(17)] = inst_24305);

return statearr_24436;
})();
var statearr_24437_24518 = state_24426__$1;
(statearr_24437_24518[(2)] = null);

(statearr_24437_24518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (39))){
var state_24426__$1 = state_24426;
var statearr_24441_24519 = state_24426__$1;
(statearr_24441_24519[(2)] = null);

(statearr_24441_24519[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (4))){
var inst_24294 = (state_24426[(12)]);
var inst_24294__$1 = (state_24426[(2)]);
var inst_24295 = (inst_24294__$1 == null);
var state_24426__$1 = (function (){var statearr_24442 = state_24426;
(statearr_24442[(12)] = inst_24294__$1);

return statearr_24442;
})();
if(cljs.core.truth_(inst_24295)){
var statearr_24443_24520 = state_24426__$1;
(statearr_24443_24520[(1)] = (5));

} else {
var statearr_24444_24521 = state_24426__$1;
(statearr_24444_24521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (15))){
var inst_24306 = (state_24426[(13)]);
var inst_24303 = (state_24426[(15)]);
var inst_24304 = (state_24426[(16)]);
var inst_24305 = (state_24426[(17)]);
var inst_24321 = (state_24426[(2)]);
var inst_24322 = (inst_24306 + (1));
var tmp24438 = inst_24303;
var tmp24439 = inst_24304;
var tmp24440 = inst_24305;
var inst_24303__$1 = tmp24438;
var inst_24304__$1 = tmp24439;
var inst_24305__$1 = tmp24440;
var inst_24306__$1 = inst_24322;
var state_24426__$1 = (function (){var statearr_24445 = state_24426;
(statearr_24445[(13)] = inst_24306__$1);

(statearr_24445[(15)] = inst_24303__$1);

(statearr_24445[(16)] = inst_24304__$1);

(statearr_24445[(17)] = inst_24305__$1);

(statearr_24445[(18)] = inst_24321);

return statearr_24445;
})();
var statearr_24446_24522 = state_24426__$1;
(statearr_24446_24522[(2)] = null);

(statearr_24446_24522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (21))){
var inst_24348 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24450_24523 = state_24426__$1;
(statearr_24450_24523[(2)] = inst_24348);

(statearr_24450_24523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (31))){
var inst_24374 = (state_24426[(9)]);
var inst_24378 = done.call(null,null);
var inst_24379 = cljs.core.async.untap_STAR_.call(null,m,inst_24374);
var state_24426__$1 = (function (){var statearr_24451 = state_24426;
(statearr_24451[(19)] = inst_24378);

return statearr_24451;
})();
var statearr_24452_24524 = state_24426__$1;
(statearr_24452_24524[(2)] = inst_24379);

(statearr_24452_24524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (32))){
var inst_24369 = (state_24426[(10)]);
var inst_24367 = (state_24426[(11)]);
var inst_24366 = (state_24426[(20)]);
var inst_24368 = (state_24426[(21)]);
var inst_24381 = (state_24426[(2)]);
var inst_24382 = (inst_24369 + (1));
var tmp24447 = inst_24367;
var tmp24448 = inst_24366;
var tmp24449 = inst_24368;
var inst_24366__$1 = tmp24448;
var inst_24367__$1 = tmp24447;
var inst_24368__$1 = tmp24449;
var inst_24369__$1 = inst_24382;
var state_24426__$1 = (function (){var statearr_24453 = state_24426;
(statearr_24453[(10)] = inst_24369__$1);

(statearr_24453[(11)] = inst_24367__$1);

(statearr_24453[(20)] = inst_24366__$1);

(statearr_24453[(22)] = inst_24381);

(statearr_24453[(21)] = inst_24368__$1);

return statearr_24453;
})();
var statearr_24454_24525 = state_24426__$1;
(statearr_24454_24525[(2)] = null);

(statearr_24454_24525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (40))){
var inst_24394 = (state_24426[(23)]);
var inst_24398 = done.call(null,null);
var inst_24399 = cljs.core.async.untap_STAR_.call(null,m,inst_24394);
var state_24426__$1 = (function (){var statearr_24455 = state_24426;
(statearr_24455[(24)] = inst_24398);

return statearr_24455;
})();
var statearr_24456_24526 = state_24426__$1;
(statearr_24456_24526[(2)] = inst_24399);

(statearr_24456_24526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (33))){
var inst_24385 = (state_24426[(25)]);
var inst_24387 = cljs.core.chunked_seq_QMARK_.call(null,inst_24385);
var state_24426__$1 = state_24426;
if(inst_24387){
var statearr_24457_24527 = state_24426__$1;
(statearr_24457_24527[(1)] = (36));

} else {
var statearr_24458_24528 = state_24426__$1;
(statearr_24458_24528[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (13))){
var inst_24315 = (state_24426[(26)]);
var inst_24318 = cljs.core.async.close_BANG_.call(null,inst_24315);
var state_24426__$1 = state_24426;
var statearr_24459_24529 = state_24426__$1;
(statearr_24459_24529[(2)] = inst_24318);

(statearr_24459_24529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (22))){
var inst_24338 = (state_24426[(8)]);
var inst_24341 = cljs.core.async.close_BANG_.call(null,inst_24338);
var state_24426__$1 = state_24426;
var statearr_24460_24530 = state_24426__$1;
(statearr_24460_24530[(2)] = inst_24341);

(statearr_24460_24530[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (36))){
var inst_24385 = (state_24426[(25)]);
var inst_24389 = cljs.core.chunk_first.call(null,inst_24385);
var inst_24390 = cljs.core.chunk_rest.call(null,inst_24385);
var inst_24391 = cljs.core.count.call(null,inst_24389);
var inst_24366 = inst_24390;
var inst_24367 = inst_24389;
var inst_24368 = inst_24391;
var inst_24369 = (0);
var state_24426__$1 = (function (){var statearr_24461 = state_24426;
(statearr_24461[(10)] = inst_24369);

(statearr_24461[(11)] = inst_24367);

(statearr_24461[(20)] = inst_24366);

(statearr_24461[(21)] = inst_24368);

return statearr_24461;
})();
var statearr_24462_24531 = state_24426__$1;
(statearr_24462_24531[(2)] = null);

(statearr_24462_24531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (41))){
var inst_24385 = (state_24426[(25)]);
var inst_24401 = (state_24426[(2)]);
var inst_24402 = cljs.core.next.call(null,inst_24385);
var inst_24366 = inst_24402;
var inst_24367 = null;
var inst_24368 = (0);
var inst_24369 = (0);
var state_24426__$1 = (function (){var statearr_24463 = state_24426;
(statearr_24463[(10)] = inst_24369);

(statearr_24463[(11)] = inst_24367);

(statearr_24463[(27)] = inst_24401);

(statearr_24463[(20)] = inst_24366);

(statearr_24463[(21)] = inst_24368);

return statearr_24463;
})();
var statearr_24464_24532 = state_24426__$1;
(statearr_24464_24532[(2)] = null);

(statearr_24464_24532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (43))){
var state_24426__$1 = state_24426;
var statearr_24465_24533 = state_24426__$1;
(statearr_24465_24533[(2)] = null);

(statearr_24465_24533[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (29))){
var inst_24410 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24466_24534 = state_24426__$1;
(statearr_24466_24534[(2)] = inst_24410);

(statearr_24466_24534[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (44))){
var inst_24419 = (state_24426[(2)]);
var state_24426__$1 = (function (){var statearr_24467 = state_24426;
(statearr_24467[(28)] = inst_24419);

return statearr_24467;
})();
var statearr_24468_24535 = state_24426__$1;
(statearr_24468_24535[(2)] = null);

(statearr_24468_24535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (6))){
var inst_24358 = (state_24426[(29)]);
var inst_24357 = cljs.core.deref.call(null,cs);
var inst_24358__$1 = cljs.core.keys.call(null,inst_24357);
var inst_24359 = cljs.core.count.call(null,inst_24358__$1);
var inst_24360 = cljs.core.reset_BANG_.call(null,dctr,inst_24359);
var inst_24365 = cljs.core.seq.call(null,inst_24358__$1);
var inst_24366 = inst_24365;
var inst_24367 = null;
var inst_24368 = (0);
var inst_24369 = (0);
var state_24426__$1 = (function (){var statearr_24469 = state_24426;
(statearr_24469[(30)] = inst_24360);

(statearr_24469[(10)] = inst_24369);

(statearr_24469[(11)] = inst_24367);

(statearr_24469[(20)] = inst_24366);

(statearr_24469[(29)] = inst_24358__$1);

(statearr_24469[(21)] = inst_24368);

return statearr_24469;
})();
var statearr_24470_24536 = state_24426__$1;
(statearr_24470_24536[(2)] = null);

(statearr_24470_24536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (28))){
var inst_24385 = (state_24426[(25)]);
var inst_24366 = (state_24426[(20)]);
var inst_24385__$1 = cljs.core.seq.call(null,inst_24366);
var state_24426__$1 = (function (){var statearr_24471 = state_24426;
(statearr_24471[(25)] = inst_24385__$1);

return statearr_24471;
})();
if(inst_24385__$1){
var statearr_24472_24537 = state_24426__$1;
(statearr_24472_24537[(1)] = (33));

} else {
var statearr_24473_24538 = state_24426__$1;
(statearr_24473_24538[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (25))){
var inst_24369 = (state_24426[(10)]);
var inst_24368 = (state_24426[(21)]);
var inst_24371 = (inst_24369 < inst_24368);
var inst_24372 = inst_24371;
var state_24426__$1 = state_24426;
if(cljs.core.truth_(inst_24372)){
var statearr_24474_24539 = state_24426__$1;
(statearr_24474_24539[(1)] = (27));

} else {
var statearr_24475_24540 = state_24426__$1;
(statearr_24475_24540[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (34))){
var state_24426__$1 = state_24426;
var statearr_24476_24541 = state_24426__$1;
(statearr_24476_24541[(2)] = null);

(statearr_24476_24541[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (17))){
var state_24426__$1 = state_24426;
var statearr_24477_24542 = state_24426__$1;
(statearr_24477_24542[(2)] = null);

(statearr_24477_24542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (3))){
var inst_24424 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24426__$1,inst_24424);
} else {
if((state_val_24427 === (12))){
var inst_24353 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24478_24543 = state_24426__$1;
(statearr_24478_24543[(2)] = inst_24353);

(statearr_24478_24543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (2))){
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,(4),ch);
} else {
if((state_val_24427 === (23))){
var state_24426__$1 = state_24426;
var statearr_24479_24544 = state_24426__$1;
(statearr_24479_24544[(2)] = null);

(statearr_24479_24544[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (35))){
var inst_24408 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24480_24545 = state_24426__$1;
(statearr_24480_24545[(2)] = inst_24408);

(statearr_24480_24545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (19))){
var inst_24325 = (state_24426[(7)]);
var inst_24329 = cljs.core.chunk_first.call(null,inst_24325);
var inst_24330 = cljs.core.chunk_rest.call(null,inst_24325);
var inst_24331 = cljs.core.count.call(null,inst_24329);
var inst_24303 = inst_24330;
var inst_24304 = inst_24329;
var inst_24305 = inst_24331;
var inst_24306 = (0);
var state_24426__$1 = (function (){var statearr_24481 = state_24426;
(statearr_24481[(13)] = inst_24306);

(statearr_24481[(15)] = inst_24303);

(statearr_24481[(16)] = inst_24304);

(statearr_24481[(17)] = inst_24305);

return statearr_24481;
})();
var statearr_24482_24546 = state_24426__$1;
(statearr_24482_24546[(2)] = null);

(statearr_24482_24546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (11))){
var inst_24325 = (state_24426[(7)]);
var inst_24303 = (state_24426[(15)]);
var inst_24325__$1 = cljs.core.seq.call(null,inst_24303);
var state_24426__$1 = (function (){var statearr_24483 = state_24426;
(statearr_24483[(7)] = inst_24325__$1);

return statearr_24483;
})();
if(inst_24325__$1){
var statearr_24484_24547 = state_24426__$1;
(statearr_24484_24547[(1)] = (16));

} else {
var statearr_24485_24548 = state_24426__$1;
(statearr_24485_24548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (9))){
var inst_24355 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24486_24549 = state_24426__$1;
(statearr_24486_24549[(2)] = inst_24355);

(statearr_24486_24549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (5))){
var inst_24301 = cljs.core.deref.call(null,cs);
var inst_24302 = cljs.core.seq.call(null,inst_24301);
var inst_24303 = inst_24302;
var inst_24304 = null;
var inst_24305 = (0);
var inst_24306 = (0);
var state_24426__$1 = (function (){var statearr_24487 = state_24426;
(statearr_24487[(13)] = inst_24306);

(statearr_24487[(15)] = inst_24303);

(statearr_24487[(16)] = inst_24304);

(statearr_24487[(17)] = inst_24305);

return statearr_24487;
})();
var statearr_24488_24550 = state_24426__$1;
(statearr_24488_24550[(2)] = null);

(statearr_24488_24550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (14))){
var state_24426__$1 = state_24426;
var statearr_24489_24551 = state_24426__$1;
(statearr_24489_24551[(2)] = null);

(statearr_24489_24551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (45))){
var inst_24416 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24490_24552 = state_24426__$1;
(statearr_24490_24552[(2)] = inst_24416);

(statearr_24490_24552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (26))){
var inst_24358 = (state_24426[(29)]);
var inst_24412 = (state_24426[(2)]);
var inst_24413 = cljs.core.seq.call(null,inst_24358);
var state_24426__$1 = (function (){var statearr_24491 = state_24426;
(statearr_24491[(31)] = inst_24412);

return statearr_24491;
})();
if(inst_24413){
var statearr_24492_24553 = state_24426__$1;
(statearr_24492_24553[(1)] = (42));

} else {
var statearr_24493_24554 = state_24426__$1;
(statearr_24493_24554[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (16))){
var inst_24325 = (state_24426[(7)]);
var inst_24327 = cljs.core.chunked_seq_QMARK_.call(null,inst_24325);
var state_24426__$1 = state_24426;
if(inst_24327){
var statearr_24494_24555 = state_24426__$1;
(statearr_24494_24555[(1)] = (19));

} else {
var statearr_24495_24556 = state_24426__$1;
(statearr_24495_24556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (38))){
var inst_24405 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24496_24557 = state_24426__$1;
(statearr_24496_24557[(2)] = inst_24405);

(statearr_24496_24557[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (30))){
var state_24426__$1 = state_24426;
var statearr_24497_24558 = state_24426__$1;
(statearr_24497_24558[(2)] = null);

(statearr_24497_24558[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (10))){
var inst_24306 = (state_24426[(13)]);
var inst_24304 = (state_24426[(16)]);
var inst_24314 = cljs.core._nth.call(null,inst_24304,inst_24306);
var inst_24315 = cljs.core.nth.call(null,inst_24314,(0),null);
var inst_24316 = cljs.core.nth.call(null,inst_24314,(1),null);
var state_24426__$1 = (function (){var statearr_24498 = state_24426;
(statearr_24498[(26)] = inst_24315);

return statearr_24498;
})();
if(cljs.core.truth_(inst_24316)){
var statearr_24499_24559 = state_24426__$1;
(statearr_24499_24559[(1)] = (13));

} else {
var statearr_24500_24560 = state_24426__$1;
(statearr_24500_24560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (18))){
var inst_24351 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24501_24561 = state_24426__$1;
(statearr_24501_24561[(2)] = inst_24351);

(statearr_24501_24561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (42))){
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,(45),dchan);
} else {
if((state_val_24427 === (37))){
var inst_24385 = (state_24426[(25)]);
var inst_24394 = (state_24426[(23)]);
var inst_24294 = (state_24426[(12)]);
var inst_24394__$1 = cljs.core.first.call(null,inst_24385);
var inst_24395 = cljs.core.async.put_BANG_.call(null,inst_24394__$1,inst_24294,done);
var state_24426__$1 = (function (){var statearr_24502 = state_24426;
(statearr_24502[(23)] = inst_24394__$1);

return statearr_24502;
})();
if(cljs.core.truth_(inst_24395)){
var statearr_24503_24562 = state_24426__$1;
(statearr_24503_24562[(1)] = (39));

} else {
var statearr_24504_24563 = state_24426__$1;
(statearr_24504_24563[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (8))){
var inst_24306 = (state_24426[(13)]);
var inst_24305 = (state_24426[(17)]);
var inst_24308 = (inst_24306 < inst_24305);
var inst_24309 = inst_24308;
var state_24426__$1 = state_24426;
if(cljs.core.truth_(inst_24309)){
var statearr_24505_24564 = state_24426__$1;
(statearr_24505_24564[(1)] = (10));

} else {
var statearr_24506_24565 = state_24426__$1;
(statearr_24506_24565[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___24511,cs,m,dchan,dctr,done))
;
return ((function (switch__23597__auto__,c__23692__auto___24511,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23598__auto__ = null;
var cljs$core$async$mult_$_state_machine__23598__auto____0 = (function (){
var statearr_24507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24507[(0)] = cljs$core$async$mult_$_state_machine__23598__auto__);

(statearr_24507[(1)] = (1));

return statearr_24507;
});
var cljs$core$async$mult_$_state_machine__23598__auto____1 = (function (state_24426){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_24426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24508){if((e24508 instanceof Object)){
var ex__23601__auto__ = e24508;
var statearr_24509_24566 = state_24426;
(statearr_24509_24566[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24567 = state_24426;
state_24426 = G__24567;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23598__auto__ = function(state_24426){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23598__auto____1.call(this,state_24426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23598__auto____0;
cljs$core$async$mult_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23598__auto____1;
return cljs$core$async$mult_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___24511,cs,m,dchan,dctr,done))
})();
var state__23694__auto__ = (function (){var statearr_24510 = f__23693__auto__.call(null);
(statearr_24510[(6)] = c__23692__auto___24511);

return statearr_24510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___24511,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24569 = arguments.length;
switch (G__24569) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24581 = arguments.length;
var i__4731__auto___24582 = (0);
while(true){
if((i__4731__auto___24582 < len__4730__auto___24581)){
args__4736__auto__.push((arguments[i__4731__auto___24582]));

var G__24583 = (i__4731__auto___24582 + (1));
i__4731__auto___24582 = G__24583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24575){
var map__24576 = p__24575;
var map__24576__$1 = (((((!((map__24576 == null))))?(((((map__24576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24576):map__24576);
var opts = map__24576__$1;
var statearr_24578_24584 = state;
(statearr_24578_24584[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24576,map__24576__$1,opts){
return (function (val){
var statearr_24579_24585 = state;
(statearr_24579_24585[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24576,map__24576__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24580_24586 = state;
(statearr_24580_24586[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24571){
var G__24572 = cljs.core.first.call(null,seq24571);
var seq24571__$1 = cljs.core.next.call(null,seq24571);
var G__24573 = cljs.core.first.call(null,seq24571__$1);
var seq24571__$2 = cljs.core.next.call(null,seq24571__$1);
var G__24574 = cljs.core.first.call(null,seq24571__$2);
var seq24571__$3 = cljs.core.next.call(null,seq24571__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24572,G__24573,G__24574,seq24571__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24587 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24588){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24588 = meta24588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24589,meta24588__$1){
var self__ = this;
var _24589__$1 = this;
return (new cljs.core.async.t_cljs$core$async24587(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24588__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24589){
var self__ = this;
var _24589__$1 = this;
return self__.meta24588;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24588","meta24588",816554062,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24587";

cljs.core.async.t_cljs$core$async24587.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24587");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24587.
 */
cljs.core.async.__GT_t_cljs$core$async24587 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24587(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24588){
return (new cljs.core.async.t_cljs$core$async24587(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24588));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24587(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23692__auto___24751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___24751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___24751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24691){
var state_val_24692 = (state_24691[(1)]);
if((state_val_24692 === (7))){
var inst_24606 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24693_24752 = state_24691__$1;
(statearr_24693_24752[(2)] = inst_24606);

(statearr_24693_24752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (20))){
var inst_24618 = (state_24691[(7)]);
var state_24691__$1 = state_24691;
var statearr_24694_24753 = state_24691__$1;
(statearr_24694_24753[(2)] = inst_24618);

(statearr_24694_24753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (27))){
var state_24691__$1 = state_24691;
var statearr_24695_24754 = state_24691__$1;
(statearr_24695_24754[(2)] = null);

(statearr_24695_24754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (1))){
var inst_24593 = (state_24691[(8)]);
var inst_24593__$1 = calc_state.call(null);
var inst_24595 = (inst_24593__$1 == null);
var inst_24596 = cljs.core.not.call(null,inst_24595);
var state_24691__$1 = (function (){var statearr_24696 = state_24691;
(statearr_24696[(8)] = inst_24593__$1);

return statearr_24696;
})();
if(inst_24596){
var statearr_24697_24755 = state_24691__$1;
(statearr_24697_24755[(1)] = (2));

} else {
var statearr_24698_24756 = state_24691__$1;
(statearr_24698_24756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (24))){
var inst_24651 = (state_24691[(9)]);
var inst_24642 = (state_24691[(10)]);
var inst_24665 = (state_24691[(11)]);
var inst_24665__$1 = inst_24642.call(null,inst_24651);
var state_24691__$1 = (function (){var statearr_24699 = state_24691;
(statearr_24699[(11)] = inst_24665__$1);

return statearr_24699;
})();
if(cljs.core.truth_(inst_24665__$1)){
var statearr_24700_24757 = state_24691__$1;
(statearr_24700_24757[(1)] = (29));

} else {
var statearr_24701_24758 = state_24691__$1;
(statearr_24701_24758[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (4))){
var inst_24609 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24609)){
var statearr_24702_24759 = state_24691__$1;
(statearr_24702_24759[(1)] = (8));

} else {
var statearr_24703_24760 = state_24691__$1;
(statearr_24703_24760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (15))){
var inst_24636 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24636)){
var statearr_24704_24761 = state_24691__$1;
(statearr_24704_24761[(1)] = (19));

} else {
var statearr_24705_24762 = state_24691__$1;
(statearr_24705_24762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (21))){
var inst_24641 = (state_24691[(12)]);
var inst_24641__$1 = (state_24691[(2)]);
var inst_24642 = cljs.core.get.call(null,inst_24641__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24643 = cljs.core.get.call(null,inst_24641__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24644 = cljs.core.get.call(null,inst_24641__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24691__$1 = (function (){var statearr_24706 = state_24691;
(statearr_24706[(12)] = inst_24641__$1);

(statearr_24706[(13)] = inst_24643);

(statearr_24706[(10)] = inst_24642);

return statearr_24706;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24691__$1,(22),inst_24644);
} else {
if((state_val_24692 === (31))){
var inst_24673 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24673)){
var statearr_24707_24763 = state_24691__$1;
(statearr_24707_24763[(1)] = (32));

} else {
var statearr_24708_24764 = state_24691__$1;
(statearr_24708_24764[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (32))){
var inst_24650 = (state_24691[(14)]);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24691__$1,(35),out,inst_24650);
} else {
if((state_val_24692 === (33))){
var inst_24641 = (state_24691[(12)]);
var inst_24618 = inst_24641;
var state_24691__$1 = (function (){var statearr_24709 = state_24691;
(statearr_24709[(7)] = inst_24618);

return statearr_24709;
})();
var statearr_24710_24765 = state_24691__$1;
(statearr_24710_24765[(2)] = null);

(statearr_24710_24765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (13))){
var inst_24618 = (state_24691[(7)]);
var inst_24625 = inst_24618.cljs$lang$protocol_mask$partition0$;
var inst_24626 = (inst_24625 & (64));
var inst_24627 = inst_24618.cljs$core$ISeq$;
var inst_24628 = (cljs.core.PROTOCOL_SENTINEL === inst_24627);
var inst_24629 = ((inst_24626) || (inst_24628));
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24629)){
var statearr_24711_24766 = state_24691__$1;
(statearr_24711_24766[(1)] = (16));

} else {
var statearr_24712_24767 = state_24691__$1;
(statearr_24712_24767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (22))){
var inst_24650 = (state_24691[(14)]);
var inst_24651 = (state_24691[(9)]);
var inst_24649 = (state_24691[(2)]);
var inst_24650__$1 = cljs.core.nth.call(null,inst_24649,(0),null);
var inst_24651__$1 = cljs.core.nth.call(null,inst_24649,(1),null);
var inst_24652 = (inst_24650__$1 == null);
var inst_24653 = cljs.core._EQ_.call(null,inst_24651__$1,change);
var inst_24654 = ((inst_24652) || (inst_24653));
var state_24691__$1 = (function (){var statearr_24713 = state_24691;
(statearr_24713[(14)] = inst_24650__$1);

(statearr_24713[(9)] = inst_24651__$1);

return statearr_24713;
})();
if(cljs.core.truth_(inst_24654)){
var statearr_24714_24768 = state_24691__$1;
(statearr_24714_24768[(1)] = (23));

} else {
var statearr_24715_24769 = state_24691__$1;
(statearr_24715_24769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (36))){
var inst_24641 = (state_24691[(12)]);
var inst_24618 = inst_24641;
var state_24691__$1 = (function (){var statearr_24716 = state_24691;
(statearr_24716[(7)] = inst_24618);

return statearr_24716;
})();
var statearr_24717_24770 = state_24691__$1;
(statearr_24717_24770[(2)] = null);

(statearr_24717_24770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (29))){
var inst_24665 = (state_24691[(11)]);
var state_24691__$1 = state_24691;
var statearr_24718_24771 = state_24691__$1;
(statearr_24718_24771[(2)] = inst_24665);

(statearr_24718_24771[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (6))){
var state_24691__$1 = state_24691;
var statearr_24719_24772 = state_24691__$1;
(statearr_24719_24772[(2)] = false);

(statearr_24719_24772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (28))){
var inst_24661 = (state_24691[(2)]);
var inst_24662 = calc_state.call(null);
var inst_24618 = inst_24662;
var state_24691__$1 = (function (){var statearr_24720 = state_24691;
(statearr_24720[(7)] = inst_24618);

(statearr_24720[(15)] = inst_24661);

return statearr_24720;
})();
var statearr_24721_24773 = state_24691__$1;
(statearr_24721_24773[(2)] = null);

(statearr_24721_24773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (25))){
var inst_24687 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24722_24774 = state_24691__$1;
(statearr_24722_24774[(2)] = inst_24687);

(statearr_24722_24774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (34))){
var inst_24685 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24723_24775 = state_24691__$1;
(statearr_24723_24775[(2)] = inst_24685);

(statearr_24723_24775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (17))){
var state_24691__$1 = state_24691;
var statearr_24724_24776 = state_24691__$1;
(statearr_24724_24776[(2)] = false);

(statearr_24724_24776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (3))){
var state_24691__$1 = state_24691;
var statearr_24725_24777 = state_24691__$1;
(statearr_24725_24777[(2)] = false);

(statearr_24725_24777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (12))){
var inst_24689 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24691__$1,inst_24689);
} else {
if((state_val_24692 === (2))){
var inst_24593 = (state_24691[(8)]);
var inst_24598 = inst_24593.cljs$lang$protocol_mask$partition0$;
var inst_24599 = (inst_24598 & (64));
var inst_24600 = inst_24593.cljs$core$ISeq$;
var inst_24601 = (cljs.core.PROTOCOL_SENTINEL === inst_24600);
var inst_24602 = ((inst_24599) || (inst_24601));
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24602)){
var statearr_24726_24778 = state_24691__$1;
(statearr_24726_24778[(1)] = (5));

} else {
var statearr_24727_24779 = state_24691__$1;
(statearr_24727_24779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (23))){
var inst_24650 = (state_24691[(14)]);
var inst_24656 = (inst_24650 == null);
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24656)){
var statearr_24728_24780 = state_24691__$1;
(statearr_24728_24780[(1)] = (26));

} else {
var statearr_24729_24781 = state_24691__$1;
(statearr_24729_24781[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (35))){
var inst_24676 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24676)){
var statearr_24730_24782 = state_24691__$1;
(statearr_24730_24782[(1)] = (36));

} else {
var statearr_24731_24783 = state_24691__$1;
(statearr_24731_24783[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (19))){
var inst_24618 = (state_24691[(7)]);
var inst_24638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24618);
var state_24691__$1 = state_24691;
var statearr_24732_24784 = state_24691__$1;
(statearr_24732_24784[(2)] = inst_24638);

(statearr_24732_24784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (11))){
var inst_24618 = (state_24691[(7)]);
var inst_24622 = (inst_24618 == null);
var inst_24623 = cljs.core.not.call(null,inst_24622);
var state_24691__$1 = state_24691;
if(inst_24623){
var statearr_24733_24785 = state_24691__$1;
(statearr_24733_24785[(1)] = (13));

} else {
var statearr_24734_24786 = state_24691__$1;
(statearr_24734_24786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (9))){
var inst_24593 = (state_24691[(8)]);
var state_24691__$1 = state_24691;
var statearr_24735_24787 = state_24691__$1;
(statearr_24735_24787[(2)] = inst_24593);

(statearr_24735_24787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (5))){
var state_24691__$1 = state_24691;
var statearr_24736_24788 = state_24691__$1;
(statearr_24736_24788[(2)] = true);

(statearr_24736_24788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (14))){
var state_24691__$1 = state_24691;
var statearr_24737_24789 = state_24691__$1;
(statearr_24737_24789[(2)] = false);

(statearr_24737_24789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (26))){
var inst_24651 = (state_24691[(9)]);
var inst_24658 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24651);
var state_24691__$1 = state_24691;
var statearr_24738_24790 = state_24691__$1;
(statearr_24738_24790[(2)] = inst_24658);

(statearr_24738_24790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (16))){
var state_24691__$1 = state_24691;
var statearr_24739_24791 = state_24691__$1;
(statearr_24739_24791[(2)] = true);

(statearr_24739_24791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (38))){
var inst_24681 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24740_24792 = state_24691__$1;
(statearr_24740_24792[(2)] = inst_24681);

(statearr_24740_24792[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (30))){
var inst_24651 = (state_24691[(9)]);
var inst_24643 = (state_24691[(13)]);
var inst_24642 = (state_24691[(10)]);
var inst_24668 = cljs.core.empty_QMARK_.call(null,inst_24642);
var inst_24669 = inst_24643.call(null,inst_24651);
var inst_24670 = cljs.core.not.call(null,inst_24669);
var inst_24671 = ((inst_24668) && (inst_24670));
var state_24691__$1 = state_24691;
var statearr_24741_24793 = state_24691__$1;
(statearr_24741_24793[(2)] = inst_24671);

(statearr_24741_24793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (10))){
var inst_24593 = (state_24691[(8)]);
var inst_24614 = (state_24691[(2)]);
var inst_24615 = cljs.core.get.call(null,inst_24614,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24616 = cljs.core.get.call(null,inst_24614,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24617 = cljs.core.get.call(null,inst_24614,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24618 = inst_24593;
var state_24691__$1 = (function (){var statearr_24742 = state_24691;
(statearr_24742[(16)] = inst_24615);

(statearr_24742[(7)] = inst_24618);

(statearr_24742[(17)] = inst_24617);

(statearr_24742[(18)] = inst_24616);

return statearr_24742;
})();
var statearr_24743_24794 = state_24691__$1;
(statearr_24743_24794[(2)] = null);

(statearr_24743_24794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (18))){
var inst_24633 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24744_24795 = state_24691__$1;
(statearr_24744_24795[(2)] = inst_24633);

(statearr_24744_24795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (37))){
var state_24691__$1 = state_24691;
var statearr_24745_24796 = state_24691__$1;
(statearr_24745_24796[(2)] = null);

(statearr_24745_24796[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (8))){
var inst_24593 = (state_24691[(8)]);
var inst_24611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24593);
var state_24691__$1 = state_24691;
var statearr_24746_24797 = state_24691__$1;
(statearr_24746_24797[(2)] = inst_24611);

(statearr_24746_24797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___24751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23597__auto__,c__23692__auto___24751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23598__auto__ = null;
var cljs$core$async$mix_$_state_machine__23598__auto____0 = (function (){
var statearr_24747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24747[(0)] = cljs$core$async$mix_$_state_machine__23598__auto__);

(statearr_24747[(1)] = (1));

return statearr_24747;
});
var cljs$core$async$mix_$_state_machine__23598__auto____1 = (function (state_24691){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_24691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24748){if((e24748 instanceof Object)){
var ex__23601__auto__ = e24748;
var statearr_24749_24798 = state_24691;
(statearr_24749_24798[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24799 = state_24691;
state_24691 = G__24799;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23598__auto__ = function(state_24691){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23598__auto____1.call(this,state_24691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23598__auto____0;
cljs$core$async$mix_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23598__auto____1;
return cljs$core$async$mix_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___24751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23694__auto__ = (function (){var statearr_24750 = f__23693__auto__.call(null);
(statearr_24750[(6)] = c__23692__auto___24751);

return statearr_24750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___24751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24801 = arguments.length;
switch (G__24801) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24805 = arguments.length;
switch (G__24805) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24803_SHARP_){
if(cljs.core.truth_(p1__24803_SHARP_.call(null,topic))){
return p1__24803_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24803_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24806 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24807){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24807 = meta24807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24808,meta24807__$1){
var self__ = this;
var _24808__$1 = this;
return (new cljs.core.async.t_cljs$core$async24806(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24807__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24808){
var self__ = this;
var _24808__$1 = this;
return self__.meta24807;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24807","meta24807",-446542387,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24806";

cljs.core.async.t_cljs$core$async24806.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24806");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24806.
 */
cljs.core.async.__GT_t_cljs$core$async24806 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24807){
return (new cljs.core.async.t_cljs$core$async24806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24807));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24806(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23692__auto___24926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___24926,mults,ensure_mult,p){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___24926,mults,ensure_mult,p){
return (function (state_24880){
var state_val_24881 = (state_24880[(1)]);
if((state_val_24881 === (7))){
var inst_24876 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24882_24927 = state_24880__$1;
(statearr_24882_24927[(2)] = inst_24876);

(statearr_24882_24927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (20))){
var state_24880__$1 = state_24880;
var statearr_24883_24928 = state_24880__$1;
(statearr_24883_24928[(2)] = null);

(statearr_24883_24928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (1))){
var state_24880__$1 = state_24880;
var statearr_24884_24929 = state_24880__$1;
(statearr_24884_24929[(2)] = null);

(statearr_24884_24929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (24))){
var inst_24859 = (state_24880[(7)]);
var inst_24868 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24859);
var state_24880__$1 = state_24880;
var statearr_24885_24930 = state_24880__$1;
(statearr_24885_24930[(2)] = inst_24868);

(statearr_24885_24930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (4))){
var inst_24811 = (state_24880[(8)]);
var inst_24811__$1 = (state_24880[(2)]);
var inst_24812 = (inst_24811__$1 == null);
var state_24880__$1 = (function (){var statearr_24886 = state_24880;
(statearr_24886[(8)] = inst_24811__$1);

return statearr_24886;
})();
if(cljs.core.truth_(inst_24812)){
var statearr_24887_24931 = state_24880__$1;
(statearr_24887_24931[(1)] = (5));

} else {
var statearr_24888_24932 = state_24880__$1;
(statearr_24888_24932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (15))){
var inst_24853 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24889_24933 = state_24880__$1;
(statearr_24889_24933[(2)] = inst_24853);

(statearr_24889_24933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (21))){
var inst_24873 = (state_24880[(2)]);
var state_24880__$1 = (function (){var statearr_24890 = state_24880;
(statearr_24890[(9)] = inst_24873);

return statearr_24890;
})();
var statearr_24891_24934 = state_24880__$1;
(statearr_24891_24934[(2)] = null);

(statearr_24891_24934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (13))){
var inst_24835 = (state_24880[(10)]);
var inst_24837 = cljs.core.chunked_seq_QMARK_.call(null,inst_24835);
var state_24880__$1 = state_24880;
if(inst_24837){
var statearr_24892_24935 = state_24880__$1;
(statearr_24892_24935[(1)] = (16));

} else {
var statearr_24893_24936 = state_24880__$1;
(statearr_24893_24936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (22))){
var inst_24865 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
if(cljs.core.truth_(inst_24865)){
var statearr_24894_24937 = state_24880__$1;
(statearr_24894_24937[(1)] = (23));

} else {
var statearr_24895_24938 = state_24880__$1;
(statearr_24895_24938[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (6))){
var inst_24859 = (state_24880[(7)]);
var inst_24811 = (state_24880[(8)]);
var inst_24861 = (state_24880[(11)]);
var inst_24859__$1 = topic_fn.call(null,inst_24811);
var inst_24860 = cljs.core.deref.call(null,mults);
var inst_24861__$1 = cljs.core.get.call(null,inst_24860,inst_24859__$1);
var state_24880__$1 = (function (){var statearr_24896 = state_24880;
(statearr_24896[(7)] = inst_24859__$1);

(statearr_24896[(11)] = inst_24861__$1);

return statearr_24896;
})();
if(cljs.core.truth_(inst_24861__$1)){
var statearr_24897_24939 = state_24880__$1;
(statearr_24897_24939[(1)] = (19));

} else {
var statearr_24898_24940 = state_24880__$1;
(statearr_24898_24940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (25))){
var inst_24870 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24899_24941 = state_24880__$1;
(statearr_24899_24941[(2)] = inst_24870);

(statearr_24899_24941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (17))){
var inst_24835 = (state_24880[(10)]);
var inst_24844 = cljs.core.first.call(null,inst_24835);
var inst_24845 = cljs.core.async.muxch_STAR_.call(null,inst_24844);
var inst_24846 = cljs.core.async.close_BANG_.call(null,inst_24845);
var inst_24847 = cljs.core.next.call(null,inst_24835);
var inst_24821 = inst_24847;
var inst_24822 = null;
var inst_24823 = (0);
var inst_24824 = (0);
var state_24880__$1 = (function (){var statearr_24900 = state_24880;
(statearr_24900[(12)] = inst_24822);

(statearr_24900[(13)] = inst_24821);

(statearr_24900[(14)] = inst_24824);

(statearr_24900[(15)] = inst_24846);

(statearr_24900[(16)] = inst_24823);

return statearr_24900;
})();
var statearr_24901_24942 = state_24880__$1;
(statearr_24901_24942[(2)] = null);

(statearr_24901_24942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (3))){
var inst_24878 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24880__$1,inst_24878);
} else {
if((state_val_24881 === (12))){
var inst_24855 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24902_24943 = state_24880__$1;
(statearr_24902_24943[(2)] = inst_24855);

(statearr_24902_24943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (2))){
var state_24880__$1 = state_24880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24880__$1,(4),ch);
} else {
if((state_val_24881 === (23))){
var state_24880__$1 = state_24880;
var statearr_24903_24944 = state_24880__$1;
(statearr_24903_24944[(2)] = null);

(statearr_24903_24944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (19))){
var inst_24811 = (state_24880[(8)]);
var inst_24861 = (state_24880[(11)]);
var inst_24863 = cljs.core.async.muxch_STAR_.call(null,inst_24861);
var state_24880__$1 = state_24880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24880__$1,(22),inst_24863,inst_24811);
} else {
if((state_val_24881 === (11))){
var inst_24835 = (state_24880[(10)]);
var inst_24821 = (state_24880[(13)]);
var inst_24835__$1 = cljs.core.seq.call(null,inst_24821);
var state_24880__$1 = (function (){var statearr_24904 = state_24880;
(statearr_24904[(10)] = inst_24835__$1);

return statearr_24904;
})();
if(inst_24835__$1){
var statearr_24905_24945 = state_24880__$1;
(statearr_24905_24945[(1)] = (13));

} else {
var statearr_24906_24946 = state_24880__$1;
(statearr_24906_24946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (9))){
var inst_24857 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24907_24947 = state_24880__$1;
(statearr_24907_24947[(2)] = inst_24857);

(statearr_24907_24947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (5))){
var inst_24818 = cljs.core.deref.call(null,mults);
var inst_24819 = cljs.core.vals.call(null,inst_24818);
var inst_24820 = cljs.core.seq.call(null,inst_24819);
var inst_24821 = inst_24820;
var inst_24822 = null;
var inst_24823 = (0);
var inst_24824 = (0);
var state_24880__$1 = (function (){var statearr_24908 = state_24880;
(statearr_24908[(12)] = inst_24822);

(statearr_24908[(13)] = inst_24821);

(statearr_24908[(14)] = inst_24824);

(statearr_24908[(16)] = inst_24823);

return statearr_24908;
})();
var statearr_24909_24948 = state_24880__$1;
(statearr_24909_24948[(2)] = null);

(statearr_24909_24948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (14))){
var state_24880__$1 = state_24880;
var statearr_24913_24949 = state_24880__$1;
(statearr_24913_24949[(2)] = null);

(statearr_24913_24949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (16))){
var inst_24835 = (state_24880[(10)]);
var inst_24839 = cljs.core.chunk_first.call(null,inst_24835);
var inst_24840 = cljs.core.chunk_rest.call(null,inst_24835);
var inst_24841 = cljs.core.count.call(null,inst_24839);
var inst_24821 = inst_24840;
var inst_24822 = inst_24839;
var inst_24823 = inst_24841;
var inst_24824 = (0);
var state_24880__$1 = (function (){var statearr_24914 = state_24880;
(statearr_24914[(12)] = inst_24822);

(statearr_24914[(13)] = inst_24821);

(statearr_24914[(14)] = inst_24824);

(statearr_24914[(16)] = inst_24823);

return statearr_24914;
})();
var statearr_24915_24950 = state_24880__$1;
(statearr_24915_24950[(2)] = null);

(statearr_24915_24950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (10))){
var inst_24822 = (state_24880[(12)]);
var inst_24821 = (state_24880[(13)]);
var inst_24824 = (state_24880[(14)]);
var inst_24823 = (state_24880[(16)]);
var inst_24829 = cljs.core._nth.call(null,inst_24822,inst_24824);
var inst_24830 = cljs.core.async.muxch_STAR_.call(null,inst_24829);
var inst_24831 = cljs.core.async.close_BANG_.call(null,inst_24830);
var inst_24832 = (inst_24824 + (1));
var tmp24910 = inst_24822;
var tmp24911 = inst_24821;
var tmp24912 = inst_24823;
var inst_24821__$1 = tmp24911;
var inst_24822__$1 = tmp24910;
var inst_24823__$1 = tmp24912;
var inst_24824__$1 = inst_24832;
var state_24880__$1 = (function (){var statearr_24916 = state_24880;
(statearr_24916[(12)] = inst_24822__$1);

(statearr_24916[(13)] = inst_24821__$1);

(statearr_24916[(14)] = inst_24824__$1);

(statearr_24916[(17)] = inst_24831);

(statearr_24916[(16)] = inst_24823__$1);

return statearr_24916;
})();
var statearr_24917_24951 = state_24880__$1;
(statearr_24917_24951[(2)] = null);

(statearr_24917_24951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (18))){
var inst_24850 = (state_24880[(2)]);
var state_24880__$1 = state_24880;
var statearr_24918_24952 = state_24880__$1;
(statearr_24918_24952[(2)] = inst_24850);

(statearr_24918_24952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24881 === (8))){
var inst_24824 = (state_24880[(14)]);
var inst_24823 = (state_24880[(16)]);
var inst_24826 = (inst_24824 < inst_24823);
var inst_24827 = inst_24826;
var state_24880__$1 = state_24880;
if(cljs.core.truth_(inst_24827)){
var statearr_24919_24953 = state_24880__$1;
(statearr_24919_24953[(1)] = (10));

} else {
var statearr_24920_24954 = state_24880__$1;
(statearr_24920_24954[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___24926,mults,ensure_mult,p))
;
return ((function (switch__23597__auto__,c__23692__auto___24926,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_24921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24921[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_24921[(1)] = (1));

return statearr_24921;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_24880){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_24880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object)){
var ex__23601__auto__ = e24922;
var statearr_24923_24955 = state_24880;
(statearr_24923_24955[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24956 = state_24880;
state_24880 = G__24956;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_24880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_24880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___24926,mults,ensure_mult,p))
})();
var state__23694__auto__ = (function (){var statearr_24924 = f__23693__auto__.call(null);
(statearr_24924[(6)] = c__23692__auto___24926);

return statearr_24924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___24926,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24958 = arguments.length;
switch (G__24958) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24961 = arguments.length;
switch (G__24961) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24964 = arguments.length;
switch (G__24964) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23692__auto___25031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___25031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___25031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25003){
var state_val_25004 = (state_25003[(1)]);
if((state_val_25004 === (7))){
var state_25003__$1 = state_25003;
var statearr_25005_25032 = state_25003__$1;
(statearr_25005_25032[(2)] = null);

(statearr_25005_25032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (1))){
var state_25003__$1 = state_25003;
var statearr_25006_25033 = state_25003__$1;
(statearr_25006_25033[(2)] = null);

(statearr_25006_25033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (4))){
var inst_24967 = (state_25003[(7)]);
var inst_24969 = (inst_24967 < cnt);
var state_25003__$1 = state_25003;
if(cljs.core.truth_(inst_24969)){
var statearr_25007_25034 = state_25003__$1;
(statearr_25007_25034[(1)] = (6));

} else {
var statearr_25008_25035 = state_25003__$1;
(statearr_25008_25035[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (15))){
var inst_24999 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25009_25036 = state_25003__$1;
(statearr_25009_25036[(2)] = inst_24999);

(statearr_25009_25036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (13))){
var inst_24992 = cljs.core.async.close_BANG_.call(null,out);
var state_25003__$1 = state_25003;
var statearr_25010_25037 = state_25003__$1;
(statearr_25010_25037[(2)] = inst_24992);

(statearr_25010_25037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (6))){
var state_25003__$1 = state_25003;
var statearr_25011_25038 = state_25003__$1;
(statearr_25011_25038[(2)] = null);

(statearr_25011_25038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (3))){
var inst_25001 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25003__$1,inst_25001);
} else {
if((state_val_25004 === (12))){
var inst_24989 = (state_25003[(8)]);
var inst_24989__$1 = (state_25003[(2)]);
var inst_24990 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24989__$1);
var state_25003__$1 = (function (){var statearr_25012 = state_25003;
(statearr_25012[(8)] = inst_24989__$1);

return statearr_25012;
})();
if(cljs.core.truth_(inst_24990)){
var statearr_25013_25039 = state_25003__$1;
(statearr_25013_25039[(1)] = (13));

} else {
var statearr_25014_25040 = state_25003__$1;
(statearr_25014_25040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (2))){
var inst_24966 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24967 = (0);
var state_25003__$1 = (function (){var statearr_25015 = state_25003;
(statearr_25015[(7)] = inst_24967);

(statearr_25015[(9)] = inst_24966);

return statearr_25015;
})();
var statearr_25016_25041 = state_25003__$1;
(statearr_25016_25041[(2)] = null);

(statearr_25016_25041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (11))){
var inst_24967 = (state_25003[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25003,(10),Object,null,(9));
var inst_24976 = chs__$1.call(null,inst_24967);
var inst_24977 = done.call(null,inst_24967);
var inst_24978 = cljs.core.async.take_BANG_.call(null,inst_24976,inst_24977);
var state_25003__$1 = state_25003;
var statearr_25017_25042 = state_25003__$1;
(statearr_25017_25042[(2)] = inst_24978);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (9))){
var inst_24967 = (state_25003[(7)]);
var inst_24980 = (state_25003[(2)]);
var inst_24981 = (inst_24967 + (1));
var inst_24967__$1 = inst_24981;
var state_25003__$1 = (function (){var statearr_25018 = state_25003;
(statearr_25018[(7)] = inst_24967__$1);

(statearr_25018[(10)] = inst_24980);

return statearr_25018;
})();
var statearr_25019_25043 = state_25003__$1;
(statearr_25019_25043[(2)] = null);

(statearr_25019_25043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (5))){
var inst_24987 = (state_25003[(2)]);
var state_25003__$1 = (function (){var statearr_25020 = state_25003;
(statearr_25020[(11)] = inst_24987);

return statearr_25020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25003__$1,(12),dchan);
} else {
if((state_val_25004 === (14))){
var inst_24989 = (state_25003[(8)]);
var inst_24994 = cljs.core.apply.call(null,f,inst_24989);
var state_25003__$1 = state_25003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25003__$1,(16),out,inst_24994);
} else {
if((state_val_25004 === (16))){
var inst_24996 = (state_25003[(2)]);
var state_25003__$1 = (function (){var statearr_25021 = state_25003;
(statearr_25021[(12)] = inst_24996);

return statearr_25021;
})();
var statearr_25022_25044 = state_25003__$1;
(statearr_25022_25044[(2)] = null);

(statearr_25022_25044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (10))){
var inst_24971 = (state_25003[(2)]);
var inst_24972 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25003__$1 = (function (){var statearr_25023 = state_25003;
(statearr_25023[(13)] = inst_24971);

return statearr_25023;
})();
var statearr_25024_25045 = state_25003__$1;
(statearr_25024_25045[(2)] = inst_24972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25004 === (8))){
var inst_24985 = (state_25003[(2)]);
var state_25003__$1 = state_25003;
var statearr_25025_25046 = state_25003__$1;
(statearr_25025_25046[(2)] = inst_24985);

(statearr_25025_25046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___25031,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23597__auto__,c__23692__auto___25031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_25026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25026[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_25026[(1)] = (1));

return statearr_25026;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_25003){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25027){if((e25027 instanceof Object)){
var ex__23601__auto__ = e25027;
var statearr_25028_25047 = state_25003;
(statearr_25028_25047[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25048 = state_25003;
state_25003 = G__25048;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_25003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_25003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___25031,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23694__auto__ = (function (){var statearr_25029 = f__23693__auto__.call(null);
(statearr_25029[(6)] = c__23692__auto___25031);

return statearr_25029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___25031,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25051 = arguments.length;
switch (G__25051) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23692__auto___25105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___25105,out){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___25105,out){
return (function (state_25083){
var state_val_25084 = (state_25083[(1)]);
if((state_val_25084 === (7))){
var inst_25063 = (state_25083[(7)]);
var inst_25062 = (state_25083[(8)]);
var inst_25062__$1 = (state_25083[(2)]);
var inst_25063__$1 = cljs.core.nth.call(null,inst_25062__$1,(0),null);
var inst_25064 = cljs.core.nth.call(null,inst_25062__$1,(1),null);
var inst_25065 = (inst_25063__$1 == null);
var state_25083__$1 = (function (){var statearr_25085 = state_25083;
(statearr_25085[(9)] = inst_25064);

(statearr_25085[(7)] = inst_25063__$1);

(statearr_25085[(8)] = inst_25062__$1);

return statearr_25085;
})();
if(cljs.core.truth_(inst_25065)){
var statearr_25086_25106 = state_25083__$1;
(statearr_25086_25106[(1)] = (8));

} else {
var statearr_25087_25107 = state_25083__$1;
(statearr_25087_25107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (1))){
var inst_25052 = cljs.core.vec.call(null,chs);
var inst_25053 = inst_25052;
var state_25083__$1 = (function (){var statearr_25088 = state_25083;
(statearr_25088[(10)] = inst_25053);

return statearr_25088;
})();
var statearr_25089_25108 = state_25083__$1;
(statearr_25089_25108[(2)] = null);

(statearr_25089_25108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (4))){
var inst_25053 = (state_25083[(10)]);
var state_25083__$1 = state_25083;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25083__$1,(7),inst_25053);
} else {
if((state_val_25084 === (6))){
var inst_25079 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25090_25109 = state_25083__$1;
(statearr_25090_25109[(2)] = inst_25079);

(statearr_25090_25109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (3))){
var inst_25081 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25083__$1,inst_25081);
} else {
if((state_val_25084 === (2))){
var inst_25053 = (state_25083[(10)]);
var inst_25055 = cljs.core.count.call(null,inst_25053);
var inst_25056 = (inst_25055 > (0));
var state_25083__$1 = state_25083;
if(cljs.core.truth_(inst_25056)){
var statearr_25092_25110 = state_25083__$1;
(statearr_25092_25110[(1)] = (4));

} else {
var statearr_25093_25111 = state_25083__$1;
(statearr_25093_25111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (11))){
var inst_25053 = (state_25083[(10)]);
var inst_25072 = (state_25083[(2)]);
var tmp25091 = inst_25053;
var inst_25053__$1 = tmp25091;
var state_25083__$1 = (function (){var statearr_25094 = state_25083;
(statearr_25094[(10)] = inst_25053__$1);

(statearr_25094[(11)] = inst_25072);

return statearr_25094;
})();
var statearr_25095_25112 = state_25083__$1;
(statearr_25095_25112[(2)] = null);

(statearr_25095_25112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (9))){
var inst_25063 = (state_25083[(7)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25083__$1,(11),out,inst_25063);
} else {
if((state_val_25084 === (5))){
var inst_25077 = cljs.core.async.close_BANG_.call(null,out);
var state_25083__$1 = state_25083;
var statearr_25096_25113 = state_25083__$1;
(statearr_25096_25113[(2)] = inst_25077);

(statearr_25096_25113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (10))){
var inst_25075 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25097_25114 = state_25083__$1;
(statearr_25097_25114[(2)] = inst_25075);

(statearr_25097_25114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (8))){
var inst_25064 = (state_25083[(9)]);
var inst_25053 = (state_25083[(10)]);
var inst_25063 = (state_25083[(7)]);
var inst_25062 = (state_25083[(8)]);
var inst_25067 = (function (){var cs = inst_25053;
var vec__25058 = inst_25062;
var v = inst_25063;
var c = inst_25064;
return ((function (cs,vec__25058,v,c,inst_25064,inst_25053,inst_25063,inst_25062,state_val_25084,c__23692__auto___25105,out){
return (function (p1__25049_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25049_SHARP_);
});
;})(cs,vec__25058,v,c,inst_25064,inst_25053,inst_25063,inst_25062,state_val_25084,c__23692__auto___25105,out))
})();
var inst_25068 = cljs.core.filterv.call(null,inst_25067,inst_25053);
var inst_25053__$1 = inst_25068;
var state_25083__$1 = (function (){var statearr_25098 = state_25083;
(statearr_25098[(10)] = inst_25053__$1);

return statearr_25098;
})();
var statearr_25099_25115 = state_25083__$1;
(statearr_25099_25115[(2)] = null);

(statearr_25099_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___25105,out))
;
return ((function (switch__23597__auto__,c__23692__auto___25105,out){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_25083){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__23601__auto__ = e25101;
var statearr_25102_25116 = state_25083;
(statearr_25102_25116[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25117 = state_25083;
state_25083 = G__25117;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_25083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_25083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___25105,out))
})();
var state__23694__auto__ = (function (){var statearr_25103 = f__23693__auto__.call(null);
(statearr_25103[(6)] = c__23692__auto___25105);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___25105,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25119 = arguments.length;
switch (G__25119) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23692__auto___25164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___25164,out){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___25164,out){
return (function (state_25143){
var state_val_25144 = (state_25143[(1)]);
if((state_val_25144 === (7))){
var inst_25125 = (state_25143[(7)]);
var inst_25125__$1 = (state_25143[(2)]);
var inst_25126 = (inst_25125__$1 == null);
var inst_25127 = cljs.core.not.call(null,inst_25126);
var state_25143__$1 = (function (){var statearr_25145 = state_25143;
(statearr_25145[(7)] = inst_25125__$1);

return statearr_25145;
})();
if(inst_25127){
var statearr_25146_25165 = state_25143__$1;
(statearr_25146_25165[(1)] = (8));

} else {
var statearr_25147_25166 = state_25143__$1;
(statearr_25147_25166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (1))){
var inst_25120 = (0);
var state_25143__$1 = (function (){var statearr_25148 = state_25143;
(statearr_25148[(8)] = inst_25120);

return statearr_25148;
})();
var statearr_25149_25167 = state_25143__$1;
(statearr_25149_25167[(2)] = null);

(statearr_25149_25167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (4))){
var state_25143__$1 = state_25143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25143__$1,(7),ch);
} else {
if((state_val_25144 === (6))){
var inst_25138 = (state_25143[(2)]);
var state_25143__$1 = state_25143;
var statearr_25150_25168 = state_25143__$1;
(statearr_25150_25168[(2)] = inst_25138);

(statearr_25150_25168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (3))){
var inst_25140 = (state_25143[(2)]);
var inst_25141 = cljs.core.async.close_BANG_.call(null,out);
var state_25143__$1 = (function (){var statearr_25151 = state_25143;
(statearr_25151[(9)] = inst_25140);

return statearr_25151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25143__$1,inst_25141);
} else {
if((state_val_25144 === (2))){
var inst_25120 = (state_25143[(8)]);
var inst_25122 = (inst_25120 < n);
var state_25143__$1 = state_25143;
if(cljs.core.truth_(inst_25122)){
var statearr_25152_25169 = state_25143__$1;
(statearr_25152_25169[(1)] = (4));

} else {
var statearr_25153_25170 = state_25143__$1;
(statearr_25153_25170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (11))){
var inst_25120 = (state_25143[(8)]);
var inst_25130 = (state_25143[(2)]);
var inst_25131 = (inst_25120 + (1));
var inst_25120__$1 = inst_25131;
var state_25143__$1 = (function (){var statearr_25154 = state_25143;
(statearr_25154[(10)] = inst_25130);

(statearr_25154[(8)] = inst_25120__$1);

return statearr_25154;
})();
var statearr_25155_25171 = state_25143__$1;
(statearr_25155_25171[(2)] = null);

(statearr_25155_25171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (9))){
var state_25143__$1 = state_25143;
var statearr_25156_25172 = state_25143__$1;
(statearr_25156_25172[(2)] = null);

(statearr_25156_25172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (5))){
var state_25143__$1 = state_25143;
var statearr_25157_25173 = state_25143__$1;
(statearr_25157_25173[(2)] = null);

(statearr_25157_25173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (10))){
var inst_25135 = (state_25143[(2)]);
var state_25143__$1 = state_25143;
var statearr_25158_25174 = state_25143__$1;
(statearr_25158_25174[(2)] = inst_25135);

(statearr_25158_25174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25144 === (8))){
var inst_25125 = (state_25143[(7)]);
var state_25143__$1 = state_25143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25143__$1,(11),out,inst_25125);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___25164,out))
;
return ((function (switch__23597__auto__,c__23692__auto___25164,out){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_25159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25159[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_25159[(1)] = (1));

return statearr_25159;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_25143){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25160){if((e25160 instanceof Object)){
var ex__23601__auto__ = e25160;
var statearr_25161_25175 = state_25143;
(statearr_25161_25175[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25176 = state_25143;
state_25143 = G__25176;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_25143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_25143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___25164,out))
})();
var state__23694__auto__ = (function (){var statearr_25162 = f__23693__auto__.call(null);
(statearr_25162[(6)] = c__23692__auto___25164);

return statearr_25162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___25164,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25178 = (function (f,ch,meta25179){
this.f = f;
this.ch = ch;
this.meta25179 = meta25179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25180,meta25179__$1){
var self__ = this;
var _25180__$1 = this;
return (new cljs.core.async.t_cljs$core$async25178(self__.f,self__.ch,meta25179__$1));
});

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25180){
var self__ = this;
var _25180__$1 = this;
return self__.meta25179;
});

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25181 = (function (f,ch,meta25179,_,fn1,meta25182){
this.f = f;
this.ch = ch;
this.meta25179 = meta25179;
this._ = _;
this.fn1 = fn1;
this.meta25182 = meta25182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25183,meta25182__$1){
var self__ = this;
var _25183__$1 = this;
return (new cljs.core.async.t_cljs$core$async25181(self__.f,self__.ch,self__.meta25179,self__._,self__.fn1,meta25182__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25183){
var self__ = this;
var _25183__$1 = this;
return self__.meta25182;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25177_SHARP_){
return f1.call(null,(((p1__25177_SHARP_ == null))?null:self__.f.call(null,p1__25177_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25181.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25179","meta25179",-367598564,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25178","cljs.core.async/t_cljs$core$async25178",-622395138,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25182","meta25182",1141986728,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25181";

cljs.core.async.t_cljs$core$async25181.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25181");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25181.
 */
cljs.core.async.__GT_t_cljs$core$async25181 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25181(f__$1,ch__$1,meta25179__$1,___$2,fn1__$1,meta25182){
return (new cljs.core.async.t_cljs$core$async25181(f__$1,ch__$1,meta25179__$1,___$2,fn1__$1,meta25182));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25181(self__.f,self__.ch,self__.meta25179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25179","meta25179",-367598564,null)], null);
});

cljs.core.async.t_cljs$core$async25178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25178";

cljs.core.async.t_cljs$core$async25178.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25178");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25178.
 */
cljs.core.async.__GT_t_cljs$core$async25178 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25178(f__$1,ch__$1,meta25179){
return (new cljs.core.async.t_cljs$core$async25178(f__$1,ch__$1,meta25179));
});

}

return (new cljs.core.async.t_cljs$core$async25178(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25184 = (function (f,ch,meta25185){
this.f = f;
this.ch = ch;
this.meta25185 = meta25185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25186,meta25185__$1){
var self__ = this;
var _25186__$1 = this;
return (new cljs.core.async.t_cljs$core$async25184(self__.f,self__.ch,meta25185__$1));
});

cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25186){
var self__ = this;
var _25186__$1 = this;
return self__.meta25185;
});

cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25185","meta25185",879322741,null)], null);
});

cljs.core.async.t_cljs$core$async25184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25184";

cljs.core.async.t_cljs$core$async25184.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25184");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25184.
 */
cljs.core.async.__GT_t_cljs$core$async25184 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25184(f__$1,ch__$1,meta25185){
return (new cljs.core.async.t_cljs$core$async25184(f__$1,ch__$1,meta25185));
});

}

return (new cljs.core.async.t_cljs$core$async25184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25187 = (function (p,ch,meta25188){
this.p = p;
this.ch = ch;
this.meta25188 = meta25188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25189,meta25188__$1){
var self__ = this;
var _25189__$1 = this;
return (new cljs.core.async.t_cljs$core$async25187(self__.p,self__.ch,meta25188__$1));
});

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25189){
var self__ = this;
var _25189__$1 = this;
return self__.meta25188;
});

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25188","meta25188",1532818435,null)], null);
});

cljs.core.async.t_cljs$core$async25187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25187";

cljs.core.async.t_cljs$core$async25187.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25187");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25187.
 */
cljs.core.async.__GT_t_cljs$core$async25187 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25187(p__$1,ch__$1,meta25188){
return (new cljs.core.async.t_cljs$core$async25187(p__$1,ch__$1,meta25188));
});

}

return (new cljs.core.async.t_cljs$core$async25187(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25191 = arguments.length;
switch (G__25191) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23692__auto___25231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___25231,out){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___25231,out){
return (function (state_25212){
var state_val_25213 = (state_25212[(1)]);
if((state_val_25213 === (7))){
var inst_25208 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25214_25232 = state_25212__$1;
(statearr_25214_25232[(2)] = inst_25208);

(statearr_25214_25232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (1))){
var state_25212__$1 = state_25212;
var statearr_25215_25233 = state_25212__$1;
(statearr_25215_25233[(2)] = null);

(statearr_25215_25233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (4))){
var inst_25194 = (state_25212[(7)]);
var inst_25194__$1 = (state_25212[(2)]);
var inst_25195 = (inst_25194__$1 == null);
var state_25212__$1 = (function (){var statearr_25216 = state_25212;
(statearr_25216[(7)] = inst_25194__$1);

return statearr_25216;
})();
if(cljs.core.truth_(inst_25195)){
var statearr_25217_25234 = state_25212__$1;
(statearr_25217_25234[(1)] = (5));

} else {
var statearr_25218_25235 = state_25212__$1;
(statearr_25218_25235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (6))){
var inst_25194 = (state_25212[(7)]);
var inst_25199 = p.call(null,inst_25194);
var state_25212__$1 = state_25212;
if(cljs.core.truth_(inst_25199)){
var statearr_25219_25236 = state_25212__$1;
(statearr_25219_25236[(1)] = (8));

} else {
var statearr_25220_25237 = state_25212__$1;
(statearr_25220_25237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (3))){
var inst_25210 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25212__$1,inst_25210);
} else {
if((state_val_25213 === (2))){
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25212__$1,(4),ch);
} else {
if((state_val_25213 === (11))){
var inst_25202 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25221_25238 = state_25212__$1;
(statearr_25221_25238[(2)] = inst_25202);

(statearr_25221_25238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (9))){
var state_25212__$1 = state_25212;
var statearr_25222_25239 = state_25212__$1;
(statearr_25222_25239[(2)] = null);

(statearr_25222_25239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (5))){
var inst_25197 = cljs.core.async.close_BANG_.call(null,out);
var state_25212__$1 = state_25212;
var statearr_25223_25240 = state_25212__$1;
(statearr_25223_25240[(2)] = inst_25197);

(statearr_25223_25240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (10))){
var inst_25205 = (state_25212[(2)]);
var state_25212__$1 = (function (){var statearr_25224 = state_25212;
(statearr_25224[(8)] = inst_25205);

return statearr_25224;
})();
var statearr_25225_25241 = state_25212__$1;
(statearr_25225_25241[(2)] = null);

(statearr_25225_25241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (8))){
var inst_25194 = (state_25212[(7)]);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25212__$1,(11),out,inst_25194);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___25231,out))
;
return ((function (switch__23597__auto__,c__23692__auto___25231,out){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null,null,null];
(statearr_25226[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_25212){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__23601__auto__ = e25227;
var statearr_25228_25242 = state_25212;
(statearr_25228_25242[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25243 = state_25212;
state_25212 = G__25243;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_25212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_25212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___25231,out))
})();
var state__23694__auto__ = (function (){var statearr_25229 = f__23693__auto__.call(null);
(statearr_25229[(6)] = c__23692__auto___25231);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___25231,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25245 = arguments.length;
switch (G__25245) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__){
return (function (state_25308){
var state_val_25309 = (state_25308[(1)]);
if((state_val_25309 === (7))){
var inst_25304 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25310_25348 = state_25308__$1;
(statearr_25310_25348[(2)] = inst_25304);

(statearr_25310_25348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (20))){
var inst_25274 = (state_25308[(7)]);
var inst_25285 = (state_25308[(2)]);
var inst_25286 = cljs.core.next.call(null,inst_25274);
var inst_25260 = inst_25286;
var inst_25261 = null;
var inst_25262 = (0);
var inst_25263 = (0);
var state_25308__$1 = (function (){var statearr_25311 = state_25308;
(statearr_25311[(8)] = inst_25261);

(statearr_25311[(9)] = inst_25260);

(statearr_25311[(10)] = inst_25263);

(statearr_25311[(11)] = inst_25262);

(statearr_25311[(12)] = inst_25285);

return statearr_25311;
})();
var statearr_25312_25349 = state_25308__$1;
(statearr_25312_25349[(2)] = null);

(statearr_25312_25349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (1))){
var state_25308__$1 = state_25308;
var statearr_25313_25350 = state_25308__$1;
(statearr_25313_25350[(2)] = null);

(statearr_25313_25350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (4))){
var inst_25249 = (state_25308[(13)]);
var inst_25249__$1 = (state_25308[(2)]);
var inst_25250 = (inst_25249__$1 == null);
var state_25308__$1 = (function (){var statearr_25314 = state_25308;
(statearr_25314[(13)] = inst_25249__$1);

return statearr_25314;
})();
if(cljs.core.truth_(inst_25250)){
var statearr_25315_25351 = state_25308__$1;
(statearr_25315_25351[(1)] = (5));

} else {
var statearr_25316_25352 = state_25308__$1;
(statearr_25316_25352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (15))){
var state_25308__$1 = state_25308;
var statearr_25320_25353 = state_25308__$1;
(statearr_25320_25353[(2)] = null);

(statearr_25320_25353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (21))){
var state_25308__$1 = state_25308;
var statearr_25321_25354 = state_25308__$1;
(statearr_25321_25354[(2)] = null);

(statearr_25321_25354[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (13))){
var inst_25261 = (state_25308[(8)]);
var inst_25260 = (state_25308[(9)]);
var inst_25263 = (state_25308[(10)]);
var inst_25262 = (state_25308[(11)]);
var inst_25270 = (state_25308[(2)]);
var inst_25271 = (inst_25263 + (1));
var tmp25317 = inst_25261;
var tmp25318 = inst_25260;
var tmp25319 = inst_25262;
var inst_25260__$1 = tmp25318;
var inst_25261__$1 = tmp25317;
var inst_25262__$1 = tmp25319;
var inst_25263__$1 = inst_25271;
var state_25308__$1 = (function (){var statearr_25322 = state_25308;
(statearr_25322[(14)] = inst_25270);

(statearr_25322[(8)] = inst_25261__$1);

(statearr_25322[(9)] = inst_25260__$1);

(statearr_25322[(10)] = inst_25263__$1);

(statearr_25322[(11)] = inst_25262__$1);

return statearr_25322;
})();
var statearr_25323_25355 = state_25308__$1;
(statearr_25323_25355[(2)] = null);

(statearr_25323_25355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (22))){
var state_25308__$1 = state_25308;
var statearr_25324_25356 = state_25308__$1;
(statearr_25324_25356[(2)] = null);

(statearr_25324_25356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (6))){
var inst_25249 = (state_25308[(13)]);
var inst_25258 = f.call(null,inst_25249);
var inst_25259 = cljs.core.seq.call(null,inst_25258);
var inst_25260 = inst_25259;
var inst_25261 = null;
var inst_25262 = (0);
var inst_25263 = (0);
var state_25308__$1 = (function (){var statearr_25325 = state_25308;
(statearr_25325[(8)] = inst_25261);

(statearr_25325[(9)] = inst_25260);

(statearr_25325[(10)] = inst_25263);

(statearr_25325[(11)] = inst_25262);

return statearr_25325;
})();
var statearr_25326_25357 = state_25308__$1;
(statearr_25326_25357[(2)] = null);

(statearr_25326_25357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (17))){
var inst_25274 = (state_25308[(7)]);
var inst_25278 = cljs.core.chunk_first.call(null,inst_25274);
var inst_25279 = cljs.core.chunk_rest.call(null,inst_25274);
var inst_25280 = cljs.core.count.call(null,inst_25278);
var inst_25260 = inst_25279;
var inst_25261 = inst_25278;
var inst_25262 = inst_25280;
var inst_25263 = (0);
var state_25308__$1 = (function (){var statearr_25327 = state_25308;
(statearr_25327[(8)] = inst_25261);

(statearr_25327[(9)] = inst_25260);

(statearr_25327[(10)] = inst_25263);

(statearr_25327[(11)] = inst_25262);

return statearr_25327;
})();
var statearr_25328_25358 = state_25308__$1;
(statearr_25328_25358[(2)] = null);

(statearr_25328_25358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (3))){
var inst_25306 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25308__$1,inst_25306);
} else {
if((state_val_25309 === (12))){
var inst_25294 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25329_25359 = state_25308__$1;
(statearr_25329_25359[(2)] = inst_25294);

(statearr_25329_25359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (2))){
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25308__$1,(4),in$);
} else {
if((state_val_25309 === (23))){
var inst_25302 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25330_25360 = state_25308__$1;
(statearr_25330_25360[(2)] = inst_25302);

(statearr_25330_25360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (19))){
var inst_25289 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25331_25361 = state_25308__$1;
(statearr_25331_25361[(2)] = inst_25289);

(statearr_25331_25361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (11))){
var inst_25260 = (state_25308[(9)]);
var inst_25274 = (state_25308[(7)]);
var inst_25274__$1 = cljs.core.seq.call(null,inst_25260);
var state_25308__$1 = (function (){var statearr_25332 = state_25308;
(statearr_25332[(7)] = inst_25274__$1);

return statearr_25332;
})();
if(inst_25274__$1){
var statearr_25333_25362 = state_25308__$1;
(statearr_25333_25362[(1)] = (14));

} else {
var statearr_25334_25363 = state_25308__$1;
(statearr_25334_25363[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (9))){
var inst_25296 = (state_25308[(2)]);
var inst_25297 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25308__$1 = (function (){var statearr_25335 = state_25308;
(statearr_25335[(15)] = inst_25296);

return statearr_25335;
})();
if(cljs.core.truth_(inst_25297)){
var statearr_25336_25364 = state_25308__$1;
(statearr_25336_25364[(1)] = (21));

} else {
var statearr_25337_25365 = state_25308__$1;
(statearr_25337_25365[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (5))){
var inst_25252 = cljs.core.async.close_BANG_.call(null,out);
var state_25308__$1 = state_25308;
var statearr_25338_25366 = state_25308__$1;
(statearr_25338_25366[(2)] = inst_25252);

(statearr_25338_25366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (14))){
var inst_25274 = (state_25308[(7)]);
var inst_25276 = cljs.core.chunked_seq_QMARK_.call(null,inst_25274);
var state_25308__$1 = state_25308;
if(inst_25276){
var statearr_25339_25367 = state_25308__$1;
(statearr_25339_25367[(1)] = (17));

} else {
var statearr_25340_25368 = state_25308__$1;
(statearr_25340_25368[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (16))){
var inst_25292 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25341_25369 = state_25308__$1;
(statearr_25341_25369[(2)] = inst_25292);

(statearr_25341_25369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (10))){
var inst_25261 = (state_25308[(8)]);
var inst_25263 = (state_25308[(10)]);
var inst_25268 = cljs.core._nth.call(null,inst_25261,inst_25263);
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25308__$1,(13),out,inst_25268);
} else {
if((state_val_25309 === (18))){
var inst_25274 = (state_25308[(7)]);
var inst_25283 = cljs.core.first.call(null,inst_25274);
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25308__$1,(20),out,inst_25283);
} else {
if((state_val_25309 === (8))){
var inst_25263 = (state_25308[(10)]);
var inst_25262 = (state_25308[(11)]);
var inst_25265 = (inst_25263 < inst_25262);
var inst_25266 = inst_25265;
var state_25308__$1 = state_25308;
if(cljs.core.truth_(inst_25266)){
var statearr_25342_25370 = state_25308__$1;
(statearr_25342_25370[(1)] = (10));

} else {
var statearr_25343_25371 = state_25308__$1;
(statearr_25343_25371[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto__))
;
return ((function (switch__23597__auto__,c__23692__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23598__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23598__auto____0 = (function (){
var statearr_25344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25344[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23598__auto__);

(statearr_25344[(1)] = (1));

return statearr_25344;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23598__auto____1 = (function (state_25308){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25345){if((e25345 instanceof Object)){
var ex__23601__auto__ = e25345;
var statearr_25346_25372 = state_25308;
(statearr_25346_25372[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25373 = state_25308;
state_25308 = G__25373;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23598__auto__ = function(state_25308){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23598__auto____1.call(this,state_25308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23598__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23598__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__))
})();
var state__23694__auto__ = (function (){var statearr_25347 = f__23693__auto__.call(null);
(statearr_25347[(6)] = c__23692__auto__);

return statearr_25347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__))
);

return c__23692__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25375 = arguments.length;
switch (G__25375) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25378 = arguments.length;
switch (G__25378) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25381 = arguments.length;
switch (G__25381) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23692__auto___25428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___25428,out){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___25428,out){
return (function (state_25405){
var state_val_25406 = (state_25405[(1)]);
if((state_val_25406 === (7))){
var inst_25400 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
var statearr_25407_25429 = state_25405__$1;
(statearr_25407_25429[(2)] = inst_25400);

(statearr_25407_25429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (1))){
var inst_25382 = null;
var state_25405__$1 = (function (){var statearr_25408 = state_25405;
(statearr_25408[(7)] = inst_25382);

return statearr_25408;
})();
var statearr_25409_25430 = state_25405__$1;
(statearr_25409_25430[(2)] = null);

(statearr_25409_25430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (4))){
var inst_25385 = (state_25405[(8)]);
var inst_25385__$1 = (state_25405[(2)]);
var inst_25386 = (inst_25385__$1 == null);
var inst_25387 = cljs.core.not.call(null,inst_25386);
var state_25405__$1 = (function (){var statearr_25410 = state_25405;
(statearr_25410[(8)] = inst_25385__$1);

return statearr_25410;
})();
if(inst_25387){
var statearr_25411_25431 = state_25405__$1;
(statearr_25411_25431[(1)] = (5));

} else {
var statearr_25412_25432 = state_25405__$1;
(statearr_25412_25432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (6))){
var state_25405__$1 = state_25405;
var statearr_25413_25433 = state_25405__$1;
(statearr_25413_25433[(2)] = null);

(statearr_25413_25433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (3))){
var inst_25402 = (state_25405[(2)]);
var inst_25403 = cljs.core.async.close_BANG_.call(null,out);
var state_25405__$1 = (function (){var statearr_25414 = state_25405;
(statearr_25414[(9)] = inst_25402);

return statearr_25414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25405__$1,inst_25403);
} else {
if((state_val_25406 === (2))){
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25405__$1,(4),ch);
} else {
if((state_val_25406 === (11))){
var inst_25385 = (state_25405[(8)]);
var inst_25394 = (state_25405[(2)]);
var inst_25382 = inst_25385;
var state_25405__$1 = (function (){var statearr_25415 = state_25405;
(statearr_25415[(10)] = inst_25394);

(statearr_25415[(7)] = inst_25382);

return statearr_25415;
})();
var statearr_25416_25434 = state_25405__$1;
(statearr_25416_25434[(2)] = null);

(statearr_25416_25434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (9))){
var inst_25385 = (state_25405[(8)]);
var state_25405__$1 = state_25405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25405__$1,(11),out,inst_25385);
} else {
if((state_val_25406 === (5))){
var inst_25385 = (state_25405[(8)]);
var inst_25382 = (state_25405[(7)]);
var inst_25389 = cljs.core._EQ_.call(null,inst_25385,inst_25382);
var state_25405__$1 = state_25405;
if(inst_25389){
var statearr_25418_25435 = state_25405__$1;
(statearr_25418_25435[(1)] = (8));

} else {
var statearr_25419_25436 = state_25405__$1;
(statearr_25419_25436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (10))){
var inst_25397 = (state_25405[(2)]);
var state_25405__$1 = state_25405;
var statearr_25420_25437 = state_25405__$1;
(statearr_25420_25437[(2)] = inst_25397);

(statearr_25420_25437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25406 === (8))){
var inst_25382 = (state_25405[(7)]);
var tmp25417 = inst_25382;
var inst_25382__$1 = tmp25417;
var state_25405__$1 = (function (){var statearr_25421 = state_25405;
(statearr_25421[(7)] = inst_25382__$1);

return statearr_25421;
})();
var statearr_25422_25438 = state_25405__$1;
(statearr_25422_25438[(2)] = null);

(statearr_25422_25438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___25428,out))
;
return ((function (switch__23597__auto__,c__23692__auto___25428,out){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_25423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25423[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_25423[(1)] = (1));

return statearr_25423;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_25405){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25424){if((e25424 instanceof Object)){
var ex__23601__auto__ = e25424;
var statearr_25425_25439 = state_25405;
(statearr_25425_25439[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25440 = state_25405;
state_25405 = G__25440;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_25405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_25405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___25428,out))
})();
var state__23694__auto__ = (function (){var statearr_25426 = f__23693__auto__.call(null);
(statearr_25426[(6)] = c__23692__auto___25428);

return statearr_25426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___25428,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25442 = arguments.length;
switch (G__25442) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23692__auto___25508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___25508,out){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___25508,out){
return (function (state_25480){
var state_val_25481 = (state_25480[(1)]);
if((state_val_25481 === (7))){
var inst_25476 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25482_25509 = state_25480__$1;
(statearr_25482_25509[(2)] = inst_25476);

(statearr_25482_25509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (1))){
var inst_25443 = (new Array(n));
var inst_25444 = inst_25443;
var inst_25445 = (0);
var state_25480__$1 = (function (){var statearr_25483 = state_25480;
(statearr_25483[(7)] = inst_25445);

(statearr_25483[(8)] = inst_25444);

return statearr_25483;
})();
var statearr_25484_25510 = state_25480__$1;
(statearr_25484_25510[(2)] = null);

(statearr_25484_25510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (4))){
var inst_25448 = (state_25480[(9)]);
var inst_25448__$1 = (state_25480[(2)]);
var inst_25449 = (inst_25448__$1 == null);
var inst_25450 = cljs.core.not.call(null,inst_25449);
var state_25480__$1 = (function (){var statearr_25485 = state_25480;
(statearr_25485[(9)] = inst_25448__$1);

return statearr_25485;
})();
if(inst_25450){
var statearr_25486_25511 = state_25480__$1;
(statearr_25486_25511[(1)] = (5));

} else {
var statearr_25487_25512 = state_25480__$1;
(statearr_25487_25512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (15))){
var inst_25470 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25488_25513 = state_25480__$1;
(statearr_25488_25513[(2)] = inst_25470);

(statearr_25488_25513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (13))){
var state_25480__$1 = state_25480;
var statearr_25489_25514 = state_25480__$1;
(statearr_25489_25514[(2)] = null);

(statearr_25489_25514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (6))){
var inst_25445 = (state_25480[(7)]);
var inst_25466 = (inst_25445 > (0));
var state_25480__$1 = state_25480;
if(cljs.core.truth_(inst_25466)){
var statearr_25490_25515 = state_25480__$1;
(statearr_25490_25515[(1)] = (12));

} else {
var statearr_25491_25516 = state_25480__$1;
(statearr_25491_25516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (3))){
var inst_25478 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25480__$1,inst_25478);
} else {
if((state_val_25481 === (12))){
var inst_25444 = (state_25480[(8)]);
var inst_25468 = cljs.core.vec.call(null,inst_25444);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25480__$1,(15),out,inst_25468);
} else {
if((state_val_25481 === (2))){
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25480__$1,(4),ch);
} else {
if((state_val_25481 === (11))){
var inst_25460 = (state_25480[(2)]);
var inst_25461 = (new Array(n));
var inst_25444 = inst_25461;
var inst_25445 = (0);
var state_25480__$1 = (function (){var statearr_25492 = state_25480;
(statearr_25492[(10)] = inst_25460);

(statearr_25492[(7)] = inst_25445);

(statearr_25492[(8)] = inst_25444);

return statearr_25492;
})();
var statearr_25493_25517 = state_25480__$1;
(statearr_25493_25517[(2)] = null);

(statearr_25493_25517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (9))){
var inst_25444 = (state_25480[(8)]);
var inst_25458 = cljs.core.vec.call(null,inst_25444);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25480__$1,(11),out,inst_25458);
} else {
if((state_val_25481 === (5))){
var inst_25448 = (state_25480[(9)]);
var inst_25445 = (state_25480[(7)]);
var inst_25453 = (state_25480[(11)]);
var inst_25444 = (state_25480[(8)]);
var inst_25452 = (inst_25444[inst_25445] = inst_25448);
var inst_25453__$1 = (inst_25445 + (1));
var inst_25454 = (inst_25453__$1 < n);
var state_25480__$1 = (function (){var statearr_25494 = state_25480;
(statearr_25494[(11)] = inst_25453__$1);

(statearr_25494[(12)] = inst_25452);

return statearr_25494;
})();
if(cljs.core.truth_(inst_25454)){
var statearr_25495_25518 = state_25480__$1;
(statearr_25495_25518[(1)] = (8));

} else {
var statearr_25496_25519 = state_25480__$1;
(statearr_25496_25519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (14))){
var inst_25473 = (state_25480[(2)]);
var inst_25474 = cljs.core.async.close_BANG_.call(null,out);
var state_25480__$1 = (function (){var statearr_25498 = state_25480;
(statearr_25498[(13)] = inst_25473);

return statearr_25498;
})();
var statearr_25499_25520 = state_25480__$1;
(statearr_25499_25520[(2)] = inst_25474);

(statearr_25499_25520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (10))){
var inst_25464 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25500_25521 = state_25480__$1;
(statearr_25500_25521[(2)] = inst_25464);

(statearr_25500_25521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (8))){
var inst_25453 = (state_25480[(11)]);
var inst_25444 = (state_25480[(8)]);
var tmp25497 = inst_25444;
var inst_25444__$1 = tmp25497;
var inst_25445 = inst_25453;
var state_25480__$1 = (function (){var statearr_25501 = state_25480;
(statearr_25501[(7)] = inst_25445);

(statearr_25501[(8)] = inst_25444__$1);

return statearr_25501;
})();
var statearr_25502_25522 = state_25480__$1;
(statearr_25502_25522[(2)] = null);

(statearr_25502_25522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___25508,out))
;
return ((function (switch__23597__auto__,c__23692__auto___25508,out){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_25503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25503[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_25503[(1)] = (1));

return statearr_25503;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_25480){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25504){if((e25504 instanceof Object)){
var ex__23601__auto__ = e25504;
var statearr_25505_25523 = state_25480;
(statearr_25505_25523[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25524 = state_25480;
state_25480 = G__25524;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_25480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_25480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___25508,out))
})();
var state__23694__auto__ = (function (){var statearr_25506 = f__23693__auto__.call(null);
(statearr_25506[(6)] = c__23692__auto___25508);

return statearr_25506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___25508,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25526 = arguments.length;
switch (G__25526) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23692__auto___25596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___25596,out){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___25596,out){
return (function (state_25568){
var state_val_25569 = (state_25568[(1)]);
if((state_val_25569 === (7))){
var inst_25564 = (state_25568[(2)]);
var state_25568__$1 = state_25568;
var statearr_25570_25597 = state_25568__$1;
(statearr_25570_25597[(2)] = inst_25564);

(statearr_25570_25597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (1))){
var inst_25527 = [];
var inst_25528 = inst_25527;
var inst_25529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25568__$1 = (function (){var statearr_25571 = state_25568;
(statearr_25571[(7)] = inst_25528);

(statearr_25571[(8)] = inst_25529);

return statearr_25571;
})();
var statearr_25572_25598 = state_25568__$1;
(statearr_25572_25598[(2)] = null);

(statearr_25572_25598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (4))){
var inst_25532 = (state_25568[(9)]);
var inst_25532__$1 = (state_25568[(2)]);
var inst_25533 = (inst_25532__$1 == null);
var inst_25534 = cljs.core.not.call(null,inst_25533);
var state_25568__$1 = (function (){var statearr_25573 = state_25568;
(statearr_25573[(9)] = inst_25532__$1);

return statearr_25573;
})();
if(inst_25534){
var statearr_25574_25599 = state_25568__$1;
(statearr_25574_25599[(1)] = (5));

} else {
var statearr_25575_25600 = state_25568__$1;
(statearr_25575_25600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (15))){
var inst_25558 = (state_25568[(2)]);
var state_25568__$1 = state_25568;
var statearr_25576_25601 = state_25568__$1;
(statearr_25576_25601[(2)] = inst_25558);

(statearr_25576_25601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (13))){
var state_25568__$1 = state_25568;
var statearr_25577_25602 = state_25568__$1;
(statearr_25577_25602[(2)] = null);

(statearr_25577_25602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (6))){
var inst_25528 = (state_25568[(7)]);
var inst_25553 = inst_25528.length;
var inst_25554 = (inst_25553 > (0));
var state_25568__$1 = state_25568;
if(cljs.core.truth_(inst_25554)){
var statearr_25578_25603 = state_25568__$1;
(statearr_25578_25603[(1)] = (12));

} else {
var statearr_25579_25604 = state_25568__$1;
(statearr_25579_25604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (3))){
var inst_25566 = (state_25568[(2)]);
var state_25568__$1 = state_25568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25568__$1,inst_25566);
} else {
if((state_val_25569 === (12))){
var inst_25528 = (state_25568[(7)]);
var inst_25556 = cljs.core.vec.call(null,inst_25528);
var state_25568__$1 = state_25568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25568__$1,(15),out,inst_25556);
} else {
if((state_val_25569 === (2))){
var state_25568__$1 = state_25568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25568__$1,(4),ch);
} else {
if((state_val_25569 === (11))){
var inst_25532 = (state_25568[(9)]);
var inst_25536 = (state_25568[(10)]);
var inst_25546 = (state_25568[(2)]);
var inst_25547 = [];
var inst_25548 = inst_25547.push(inst_25532);
var inst_25528 = inst_25547;
var inst_25529 = inst_25536;
var state_25568__$1 = (function (){var statearr_25580 = state_25568;
(statearr_25580[(11)] = inst_25546);

(statearr_25580[(12)] = inst_25548);

(statearr_25580[(7)] = inst_25528);

(statearr_25580[(8)] = inst_25529);

return statearr_25580;
})();
var statearr_25581_25605 = state_25568__$1;
(statearr_25581_25605[(2)] = null);

(statearr_25581_25605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (9))){
var inst_25528 = (state_25568[(7)]);
var inst_25544 = cljs.core.vec.call(null,inst_25528);
var state_25568__$1 = state_25568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25568__$1,(11),out,inst_25544);
} else {
if((state_val_25569 === (5))){
var inst_25532 = (state_25568[(9)]);
var inst_25536 = (state_25568[(10)]);
var inst_25529 = (state_25568[(8)]);
var inst_25536__$1 = f.call(null,inst_25532);
var inst_25537 = cljs.core._EQ_.call(null,inst_25536__$1,inst_25529);
var inst_25538 = cljs.core.keyword_identical_QMARK_.call(null,inst_25529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25539 = ((inst_25537) || (inst_25538));
var state_25568__$1 = (function (){var statearr_25582 = state_25568;
(statearr_25582[(10)] = inst_25536__$1);

return statearr_25582;
})();
if(cljs.core.truth_(inst_25539)){
var statearr_25583_25606 = state_25568__$1;
(statearr_25583_25606[(1)] = (8));

} else {
var statearr_25584_25607 = state_25568__$1;
(statearr_25584_25607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (14))){
var inst_25561 = (state_25568[(2)]);
var inst_25562 = cljs.core.async.close_BANG_.call(null,out);
var state_25568__$1 = (function (){var statearr_25586 = state_25568;
(statearr_25586[(13)] = inst_25561);

return statearr_25586;
})();
var statearr_25587_25608 = state_25568__$1;
(statearr_25587_25608[(2)] = inst_25562);

(statearr_25587_25608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (10))){
var inst_25551 = (state_25568[(2)]);
var state_25568__$1 = state_25568;
var statearr_25588_25609 = state_25568__$1;
(statearr_25588_25609[(2)] = inst_25551);

(statearr_25588_25609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25569 === (8))){
var inst_25532 = (state_25568[(9)]);
var inst_25536 = (state_25568[(10)]);
var inst_25528 = (state_25568[(7)]);
var inst_25541 = inst_25528.push(inst_25532);
var tmp25585 = inst_25528;
var inst_25528__$1 = tmp25585;
var inst_25529 = inst_25536;
var state_25568__$1 = (function (){var statearr_25589 = state_25568;
(statearr_25589[(14)] = inst_25541);

(statearr_25589[(7)] = inst_25528__$1);

(statearr_25589[(8)] = inst_25529);

return statearr_25589;
})();
var statearr_25590_25610 = state_25568__$1;
(statearr_25590_25610[(2)] = null);

(statearr_25590_25610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23692__auto___25596,out))
;
return ((function (switch__23597__auto__,c__23692__auto___25596,out){
return (function() {
var cljs$core$async$state_machine__23598__auto__ = null;
var cljs$core$async$state_machine__23598__auto____0 = (function (){
var statearr_25591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25591[(0)] = cljs$core$async$state_machine__23598__auto__);

(statearr_25591[(1)] = (1));

return statearr_25591;
});
var cljs$core$async$state_machine__23598__auto____1 = (function (state_25568){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_25568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e25592){if((e25592 instanceof Object)){
var ex__23601__auto__ = e25592;
var statearr_25593_25611 = state_25568;
(statearr_25593_25611[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25612 = state_25568;
state_25568 = G__25612;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
cljs$core$async$state_machine__23598__auto__ = function(state_25568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23598__auto____1.call(this,state_25568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23598__auto____0;
cljs$core$async$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23598__auto____1;
return cljs$core$async$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___25596,out))
})();
var state__23694__auto__ = (function (){var statearr_25594 = f__23693__auto__.call(null);
(statearr_25594[(6)] = c__23692__auto___25596);

return statearr_25594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___25596,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1571951936386
