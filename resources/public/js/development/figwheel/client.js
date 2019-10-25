// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29020){if((e29020 instanceof Error)){
var e = e29020;
return "Error: Unable to stringify";
} else {
throw e29020;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29023 = arguments.length;
switch (G__29023) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29021_SHARP_){
if(typeof p1__29021_SHARP_ === 'string'){
return p1__29021_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29021_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29026 = arguments.length;
var i__4731__auto___29027 = (0);
while(true){
if((i__4731__auto___29027 < len__4730__auto___29026)){
args__4736__auto__.push((arguments[i__4731__auto___29027]));

var G__29028 = (i__4731__auto___29027 + (1));
i__4731__auto___29027 = G__29028;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29025){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29025));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29030 = arguments.length;
var i__4731__auto___29031 = (0);
while(true){
if((i__4731__auto___29031 < len__4730__auto___29030)){
args__4736__auto__.push((arguments[i__4731__auto___29031]));

var G__29032 = (i__4731__auto___29031 + (1));
i__4731__auto___29031 = G__29032;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29029));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29033){
var map__29034 = p__29033;
var map__29034__$1 = (((((!((map__29034 == null))))?(((((map__29034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29034):map__29034);
var message = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29034__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23692__auto___29113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___29113,ch){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___29113,ch){
return (function (state_29085){
var state_val_29086 = (state_29085[(1)]);
if((state_val_29086 === (7))){
var inst_29081 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
var statearr_29087_29114 = state_29085__$1;
(statearr_29087_29114[(2)] = inst_29081);

(statearr_29087_29114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (1))){
var state_29085__$1 = state_29085;
var statearr_29088_29115 = state_29085__$1;
(statearr_29088_29115[(2)] = null);

(statearr_29088_29115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (4))){
var inst_29038 = (state_29085[(7)]);
var inst_29038__$1 = (state_29085[(2)]);
var state_29085__$1 = (function (){var statearr_29089 = state_29085;
(statearr_29089[(7)] = inst_29038__$1);

return statearr_29089;
})();
if(cljs.core.truth_(inst_29038__$1)){
var statearr_29090_29116 = state_29085__$1;
(statearr_29090_29116[(1)] = (5));

} else {
var statearr_29091_29117 = state_29085__$1;
(statearr_29091_29117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (15))){
var inst_29045 = (state_29085[(8)]);
var inst_29060 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29045);
var inst_29061 = cljs.core.first.call(null,inst_29060);
var inst_29062 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29061);
var inst_29063 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29062)].join('');
var inst_29064 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29063);
var state_29085__$1 = state_29085;
var statearr_29092_29118 = state_29085__$1;
(statearr_29092_29118[(2)] = inst_29064);

(statearr_29092_29118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (13))){
var inst_29069 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
var statearr_29093_29119 = state_29085__$1;
(statearr_29093_29119[(2)] = inst_29069);

(statearr_29093_29119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (6))){
var state_29085__$1 = state_29085;
var statearr_29094_29120 = state_29085__$1;
(statearr_29094_29120[(2)] = null);

(statearr_29094_29120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (17))){
var inst_29067 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
var statearr_29095_29121 = state_29085__$1;
(statearr_29095_29121[(2)] = inst_29067);

(statearr_29095_29121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (3))){
var inst_29083 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29085__$1,inst_29083);
} else {
if((state_val_29086 === (12))){
var inst_29044 = (state_29085[(9)]);
var inst_29058 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29044,opts);
var state_29085__$1 = state_29085;
if(inst_29058){
var statearr_29096_29122 = state_29085__$1;
(statearr_29096_29122[(1)] = (15));

} else {
var statearr_29097_29123 = state_29085__$1;
(statearr_29097_29123[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (2))){
var state_29085__$1 = state_29085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29085__$1,(4),ch);
} else {
if((state_val_29086 === (11))){
var inst_29045 = (state_29085[(8)]);
var inst_29050 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29051 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29045);
var inst_29052 = cljs.core.async.timeout.call(null,(1000));
var inst_29053 = [inst_29051,inst_29052];
var inst_29054 = (new cljs.core.PersistentVector(null,2,(5),inst_29050,inst_29053,null));
var state_29085__$1 = state_29085;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29085__$1,(14),inst_29054);
} else {
if((state_val_29086 === (9))){
var inst_29045 = (state_29085[(8)]);
var inst_29071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29072 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29045);
var inst_29073 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29072);
var inst_29074 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29073)].join('');
var inst_29075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29074);
var state_29085__$1 = (function (){var statearr_29098 = state_29085;
(statearr_29098[(10)] = inst_29071);

return statearr_29098;
})();
var statearr_29099_29124 = state_29085__$1;
(statearr_29099_29124[(2)] = inst_29075);

(statearr_29099_29124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (5))){
var inst_29038 = (state_29085[(7)]);
var inst_29040 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29041 = (new cljs.core.PersistentArrayMap(null,2,inst_29040,null));
var inst_29042 = (new cljs.core.PersistentHashSet(null,inst_29041,null));
var inst_29043 = figwheel.client.focus_msgs.call(null,inst_29042,inst_29038);
var inst_29044 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29043);
var inst_29045 = cljs.core.first.call(null,inst_29043);
var inst_29046 = figwheel.client.autoload_QMARK_.call(null);
var state_29085__$1 = (function (){var statearr_29100 = state_29085;
(statearr_29100[(8)] = inst_29045);

(statearr_29100[(9)] = inst_29044);

return statearr_29100;
})();
if(cljs.core.truth_(inst_29046)){
var statearr_29101_29125 = state_29085__$1;
(statearr_29101_29125[(1)] = (8));

} else {
var statearr_29102_29126 = state_29085__$1;
(statearr_29102_29126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (14))){
var inst_29056 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
var statearr_29103_29127 = state_29085__$1;
(statearr_29103_29127[(2)] = inst_29056);

(statearr_29103_29127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (16))){
var state_29085__$1 = state_29085;
var statearr_29104_29128 = state_29085__$1;
(statearr_29104_29128[(2)] = null);

(statearr_29104_29128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (10))){
var inst_29077 = (state_29085[(2)]);
var state_29085__$1 = (function (){var statearr_29105 = state_29085;
(statearr_29105[(11)] = inst_29077);

return statearr_29105;
})();
var statearr_29106_29129 = state_29085__$1;
(statearr_29106_29129[(2)] = null);

(statearr_29106_29129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (8))){
var inst_29044 = (state_29085[(9)]);
var inst_29048 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29044,opts);
var state_29085__$1 = state_29085;
if(cljs.core.truth_(inst_29048)){
var statearr_29107_29130 = state_29085__$1;
(statearr_29107_29130[(1)] = (11));

} else {
var statearr_29108_29131 = state_29085__$1;
(statearr_29108_29131[(1)] = (12));

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
});})(c__23692__auto___29113,ch))
;
return ((function (switch__23597__auto__,c__23692__auto___29113,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23598__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23598__auto____0 = (function (){
var statearr_29109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29109[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23598__auto__);

(statearr_29109[(1)] = (1));

return statearr_29109;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23598__auto____1 = (function (state_29085){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_29085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e29110){if((e29110 instanceof Object)){
var ex__23601__auto__ = e29110;
var statearr_29111_29132 = state_29085;
(statearr_29111_29132[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29133 = state_29085;
state_29085 = G__29133;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23598__auto__ = function(state_29085){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23598__auto____1.call(this,state_29085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23598__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23598__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___29113,ch))
})();
var state__23694__auto__ = (function (){var statearr_29112 = f__23693__auto__.call(null);
(statearr_29112[(6)] = c__23692__auto___29113);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___29113,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29134_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29134_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29140 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29140){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29136 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29137 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29138 = true;
var _STAR_print_fn_STAR__temp_val__29139 = ((function (_STAR_print_newline_STAR__orig_val__29136,_STAR_print_fn_STAR__orig_val__29137,_STAR_print_newline_STAR__temp_val__29138,sb,base_path_29140){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29136,_STAR_print_fn_STAR__orig_val__29137,_STAR_print_newline_STAR__temp_val__29138,sb,base_path_29140))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29138;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29139;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29137;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29136;
}}catch (e29135){if((e29135 instanceof Error)){
var e = e29135;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29140], null));
} else {
var e = e29135;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29140))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29141){
var map__29142 = p__29141;
var map__29142__$1 = (((((!((map__29142 == null))))?(((((map__29142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29142):map__29142);
var opts = map__29142__$1;
var build_id = cljs.core.get.call(null,map__29142__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29142,map__29142__$1,opts,build_id){
return (function (p__29144){
var vec__29145 = p__29144;
var seq__29146 = cljs.core.seq.call(null,vec__29145);
var first__29147 = cljs.core.first.call(null,seq__29146);
var seq__29146__$1 = cljs.core.next.call(null,seq__29146);
var map__29148 = first__29147;
var map__29148__$1 = (((((!((map__29148 == null))))?(((((map__29148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29148):map__29148);
var msg = map__29148__$1;
var msg_name = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29146__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29145,seq__29146,first__29147,seq__29146__$1,map__29148,map__29148__$1,msg,msg_name,_,map__29142,map__29142__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29145,seq__29146,first__29147,seq__29146__$1,map__29148,map__29148__$1,msg,msg_name,_,map__29142,map__29142__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29142,map__29142__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29150){
var vec__29151 = p__29150;
var seq__29152 = cljs.core.seq.call(null,vec__29151);
var first__29153 = cljs.core.first.call(null,seq__29152);
var seq__29152__$1 = cljs.core.next.call(null,seq__29152);
var map__29154 = first__29153;
var map__29154__$1 = (((((!((map__29154 == null))))?(((((map__29154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29154):map__29154);
var msg = map__29154__$1;
var msg_name = cljs.core.get.call(null,map__29154__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29152__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29156){
var map__29157 = p__29156;
var map__29157__$1 = (((((!((map__29157 == null))))?(((((map__29157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29157):map__29157);
var on_compile_warning = cljs.core.get.call(null,map__29157__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29157__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29157,map__29157__$1,on_compile_warning,on_compile_fail){
return (function (p__29159){
var vec__29160 = p__29159;
var seq__29161 = cljs.core.seq.call(null,vec__29160);
var first__29162 = cljs.core.first.call(null,seq__29161);
var seq__29161__$1 = cljs.core.next.call(null,seq__29161);
var map__29163 = first__29162;
var map__29163__$1 = (((((!((map__29163 == null))))?(((((map__29163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var msg = map__29163__$1;
var msg_name = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29161__$1;
var pred__29165 = cljs.core._EQ_;
var expr__29166 = msg_name;
if(cljs.core.truth_(pred__29165.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29166))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29165.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29166))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29157,map__29157__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__,msg_hist,msg_names,msg){
return (function (state_29255){
var state_val_29256 = (state_29255[(1)]);
if((state_val_29256 === (7))){
var inst_29175 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
if(cljs.core.truth_(inst_29175)){
var statearr_29257_29304 = state_29255__$1;
(statearr_29257_29304[(1)] = (8));

} else {
var statearr_29258_29305 = state_29255__$1;
(statearr_29258_29305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (20))){
var inst_29249 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29259_29306 = state_29255__$1;
(statearr_29259_29306[(2)] = inst_29249);

(statearr_29259_29306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (27))){
var inst_29245 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29260_29307 = state_29255__$1;
(statearr_29260_29307[(2)] = inst_29245);

(statearr_29260_29307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (1))){
var inst_29168 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29255__$1 = state_29255;
if(cljs.core.truth_(inst_29168)){
var statearr_29261_29308 = state_29255__$1;
(statearr_29261_29308[(1)] = (2));

} else {
var statearr_29262_29309 = state_29255__$1;
(statearr_29262_29309[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (24))){
var inst_29247 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29263_29310 = state_29255__$1;
(statearr_29263_29310[(2)] = inst_29247);

(statearr_29263_29310[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (4))){
var inst_29253 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29255__$1,inst_29253);
} else {
if((state_val_29256 === (15))){
var inst_29251 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29264_29311 = state_29255__$1;
(statearr_29264_29311[(2)] = inst_29251);

(statearr_29264_29311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (21))){
var inst_29204 = (state_29255[(2)]);
var inst_29205 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29206 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29205);
var state_29255__$1 = (function (){var statearr_29265 = state_29255;
(statearr_29265[(7)] = inst_29204);

return statearr_29265;
})();
var statearr_29266_29312 = state_29255__$1;
(statearr_29266_29312[(2)] = inst_29206);

(statearr_29266_29312[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (31))){
var inst_29234 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29255__$1 = state_29255;
if(inst_29234){
var statearr_29267_29313 = state_29255__$1;
(statearr_29267_29313[(1)] = (34));

} else {
var statearr_29268_29314 = state_29255__$1;
(statearr_29268_29314[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (32))){
var inst_29243 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29269_29315 = state_29255__$1;
(statearr_29269_29315[(2)] = inst_29243);

(statearr_29269_29315[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (33))){
var inst_29230 = (state_29255[(2)]);
var inst_29231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29232 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29231);
var state_29255__$1 = (function (){var statearr_29270 = state_29255;
(statearr_29270[(8)] = inst_29230);

return statearr_29270;
})();
var statearr_29271_29316 = state_29255__$1;
(statearr_29271_29316[(2)] = inst_29232);

(statearr_29271_29316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (13))){
var inst_29189 = figwheel.client.heads_up.clear.call(null);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(16),inst_29189);
} else {
if((state_val_29256 === (22))){
var inst_29210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29211 = figwheel.client.heads_up.append_warning_message.call(null,inst_29210);
var state_29255__$1 = state_29255;
var statearr_29272_29317 = state_29255__$1;
(statearr_29272_29317[(2)] = inst_29211);

(statearr_29272_29317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (36))){
var inst_29241 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29273_29318 = state_29255__$1;
(statearr_29273_29318[(2)] = inst_29241);

(statearr_29273_29318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (29))){
var inst_29221 = (state_29255[(2)]);
var inst_29222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29223 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29222);
var state_29255__$1 = (function (){var statearr_29274 = state_29255;
(statearr_29274[(9)] = inst_29221);

return statearr_29274;
})();
var statearr_29275_29319 = state_29255__$1;
(statearr_29275_29319[(2)] = inst_29223);

(statearr_29275_29319[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (6))){
var inst_29170 = (state_29255[(10)]);
var state_29255__$1 = state_29255;
var statearr_29276_29320 = state_29255__$1;
(statearr_29276_29320[(2)] = inst_29170);

(statearr_29276_29320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (28))){
var inst_29217 = (state_29255[(2)]);
var inst_29218 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29219 = figwheel.client.heads_up.display_warning.call(null,inst_29218);
var state_29255__$1 = (function (){var statearr_29277 = state_29255;
(statearr_29277[(11)] = inst_29217);

return statearr_29277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(29),inst_29219);
} else {
if((state_val_29256 === (25))){
var inst_29215 = figwheel.client.heads_up.clear.call(null);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(28),inst_29215);
} else {
if((state_val_29256 === (34))){
var inst_29236 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(37),inst_29236);
} else {
if((state_val_29256 === (17))){
var inst_29195 = (state_29255[(2)]);
var inst_29196 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29197 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29196);
var state_29255__$1 = (function (){var statearr_29278 = state_29255;
(statearr_29278[(12)] = inst_29195);

return statearr_29278;
})();
var statearr_29279_29321 = state_29255__$1;
(statearr_29279_29321[(2)] = inst_29197);

(statearr_29279_29321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (3))){
var inst_29187 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29255__$1 = state_29255;
if(inst_29187){
var statearr_29280_29322 = state_29255__$1;
(statearr_29280_29322[(1)] = (13));

} else {
var statearr_29281_29323 = state_29255__$1;
(statearr_29281_29323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (12))){
var inst_29183 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29282_29324 = state_29255__$1;
(statearr_29282_29324[(2)] = inst_29183);

(statearr_29282_29324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (2))){
var inst_29170 = (state_29255[(10)]);
var inst_29170__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29255__$1 = (function (){var statearr_29283 = state_29255;
(statearr_29283[(10)] = inst_29170__$1);

return statearr_29283;
})();
if(cljs.core.truth_(inst_29170__$1)){
var statearr_29284_29325 = state_29255__$1;
(statearr_29284_29325[(1)] = (5));

} else {
var statearr_29285_29326 = state_29255__$1;
(statearr_29285_29326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (23))){
var inst_29213 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29255__$1 = state_29255;
if(inst_29213){
var statearr_29286_29327 = state_29255__$1;
(statearr_29286_29327[(1)] = (25));

} else {
var statearr_29287_29328 = state_29255__$1;
(statearr_29287_29328[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (35))){
var state_29255__$1 = state_29255;
var statearr_29288_29329 = state_29255__$1;
(statearr_29288_29329[(2)] = null);

(statearr_29288_29329[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (19))){
var inst_29208 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29255__$1 = state_29255;
if(inst_29208){
var statearr_29289_29330 = state_29255__$1;
(statearr_29289_29330[(1)] = (22));

} else {
var statearr_29290_29331 = state_29255__$1;
(statearr_29290_29331[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (11))){
var inst_29179 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29291_29332 = state_29255__$1;
(statearr_29291_29332[(2)] = inst_29179);

(statearr_29291_29332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (9))){
var inst_29181 = figwheel.client.heads_up.clear.call(null);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(12),inst_29181);
} else {
if((state_val_29256 === (5))){
var inst_29172 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29255__$1 = state_29255;
var statearr_29292_29333 = state_29255__$1;
(statearr_29292_29333[(2)] = inst_29172);

(statearr_29292_29333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (14))){
var inst_29199 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29255__$1 = state_29255;
if(inst_29199){
var statearr_29293_29334 = state_29255__$1;
(statearr_29293_29334[(1)] = (18));

} else {
var statearr_29294_29335 = state_29255__$1;
(statearr_29294_29335[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (26))){
var inst_29225 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29255__$1 = state_29255;
if(inst_29225){
var statearr_29295_29336 = state_29255__$1;
(statearr_29295_29336[(1)] = (30));

} else {
var statearr_29296_29337 = state_29255__$1;
(statearr_29296_29337[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (16))){
var inst_29191 = (state_29255[(2)]);
var inst_29192 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29193 = figwheel.client.heads_up.display_exception.call(null,inst_29192);
var state_29255__$1 = (function (){var statearr_29297 = state_29255;
(statearr_29297[(13)] = inst_29191);

return statearr_29297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(17),inst_29193);
} else {
if((state_val_29256 === (30))){
var inst_29227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29228 = figwheel.client.heads_up.display_warning.call(null,inst_29227);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(33),inst_29228);
} else {
if((state_val_29256 === (10))){
var inst_29185 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29298_29338 = state_29255__$1;
(statearr_29298_29338[(2)] = inst_29185);

(statearr_29298_29338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (18))){
var inst_29201 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29202 = figwheel.client.heads_up.display_exception.call(null,inst_29201);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(21),inst_29202);
} else {
if((state_val_29256 === (37))){
var inst_29238 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29299_29339 = state_29255__$1;
(statearr_29299_29339[(2)] = inst_29238);

(statearr_29299_29339[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (8))){
var inst_29177 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29255__$1,(11),inst_29177);
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
});})(c__23692__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23597__auto__,c__23692__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto____0 = (function (){
var statearr_29300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29300[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto__);

(statearr_29300[(1)] = (1));

return statearr_29300;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto____1 = (function (state_29255){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_29255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e29301){if((e29301 instanceof Object)){
var ex__23601__auto__ = e29301;
var statearr_29302_29340 = state_29255;
(statearr_29302_29340[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29341 = state_29255;
state_29255 = G__29341;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto__ = function(state_29255){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto____1.call(this,state_29255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__,msg_hist,msg_names,msg))
})();
var state__23694__auto__ = (function (){var statearr_29303 = f__23693__auto__.call(null);
(statearr_29303[(6)] = c__23692__auto__);

return statearr_29303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__,msg_hist,msg_names,msg))
);

return c__23692__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23692__auto___29370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___29370,ch){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___29370,ch){
return (function (state_29356){
var state_val_29357 = (state_29356[(1)]);
if((state_val_29357 === (1))){
var state_29356__$1 = state_29356;
var statearr_29358_29371 = state_29356__$1;
(statearr_29358_29371[(2)] = null);

(statearr_29358_29371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (2))){
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(4),ch);
} else {
if((state_val_29357 === (3))){
var inst_29354 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29356__$1,inst_29354);
} else {
if((state_val_29357 === (4))){
var inst_29344 = (state_29356[(7)]);
var inst_29344__$1 = (state_29356[(2)]);
var state_29356__$1 = (function (){var statearr_29359 = state_29356;
(statearr_29359[(7)] = inst_29344__$1);

return statearr_29359;
})();
if(cljs.core.truth_(inst_29344__$1)){
var statearr_29360_29372 = state_29356__$1;
(statearr_29360_29372[(1)] = (5));

} else {
var statearr_29361_29373 = state_29356__$1;
(statearr_29361_29373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (5))){
var inst_29344 = (state_29356[(7)]);
var inst_29346 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29344);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(8),inst_29346);
} else {
if((state_val_29357 === (6))){
var state_29356__$1 = state_29356;
var statearr_29362_29374 = state_29356__$1;
(statearr_29362_29374[(2)] = null);

(statearr_29362_29374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (7))){
var inst_29352 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
var statearr_29363_29375 = state_29356__$1;
(statearr_29363_29375[(2)] = inst_29352);

(statearr_29363_29375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29357 === (8))){
var inst_29348 = (state_29356[(2)]);
var state_29356__$1 = (function (){var statearr_29364 = state_29356;
(statearr_29364[(8)] = inst_29348);

return statearr_29364;
})();
var statearr_29365_29376 = state_29356__$1;
(statearr_29365_29376[(2)] = null);

(statearr_29365_29376[(1)] = (2));


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
});})(c__23692__auto___29370,ch))
;
return ((function (switch__23597__auto__,c__23692__auto___29370,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23598__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23598__auto____0 = (function (){
var statearr_29366 = [null,null,null,null,null,null,null,null,null];
(statearr_29366[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23598__auto__);

(statearr_29366[(1)] = (1));

return statearr_29366;
});
var figwheel$client$heads_up_plugin_$_state_machine__23598__auto____1 = (function (state_29356){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_29356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e29367){if((e29367 instanceof Object)){
var ex__23601__auto__ = e29367;
var statearr_29368_29377 = state_29356;
(statearr_29368_29377[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29378 = state_29356;
state_29356 = G__29378;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23598__auto__ = function(state_29356){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23598__auto____1.call(this,state_29356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23598__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23598__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___29370,ch))
})();
var state__23694__auto__ = (function (){var statearr_29369 = f__23693__auto__.call(null);
(statearr_29369[(6)] = c__23692__auto___29370);

return statearr_29369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___29370,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__){
return (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (1))){
var inst_29379 = cljs.core.async.timeout.call(null,(3000));
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(2),inst_29379);
} else {
if((state_val_29385 === (2))){
var inst_29381 = (state_29384[(2)]);
var inst_29382 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29384__$1 = (function (){var statearr_29386 = state_29384;
(statearr_29386[(7)] = inst_29381);

return statearr_29386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
return null;
}
}
});})(c__23692__auto__))
;
return ((function (switch__23597__auto__,c__23692__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23598__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23598__auto____0 = (function (){
var statearr_29387 = [null,null,null,null,null,null,null,null];
(statearr_29387[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23598__auto__);

(statearr_29387[(1)] = (1));

return statearr_29387;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23598__auto____1 = (function (state_29384){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e29388){if((e29388 instanceof Object)){
var ex__23601__auto__ = e29388;
var statearr_29389_29391 = state_29384;
(statearr_29389_29391[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29392 = state_29384;
state_29384 = G__29392;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23598__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23598__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23598__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23598__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__))
})();
var state__23694__auto__ = (function (){var statearr_29390 = f__23693__auto__.call(null);
(statearr_29390[(6)] = c__23692__auto__);

return statearr_29390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__))
);

return c__23692__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29399){
var state_val_29400 = (state_29399[(1)]);
if((state_val_29400 === (1))){
var inst_29393 = cljs.core.async.timeout.call(null,(2000));
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29399__$1,(2),inst_29393);
} else {
if((state_val_29400 === (2))){
var inst_29395 = (state_29399[(2)]);
var inst_29396 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29397 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29396);
var state_29399__$1 = (function (){var statearr_29401 = state_29399;
(statearr_29401[(7)] = inst_29395);

return statearr_29401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29399__$1,inst_29397);
} else {
return null;
}
}
});})(c__23692__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23597__auto__,c__23692__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto____0 = (function (){
var statearr_29402 = [null,null,null,null,null,null,null,null];
(statearr_29402[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto__);

(statearr_29402[(1)] = (1));

return statearr_29402;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto____1 = (function (state_29399){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_29399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e29403){if((e29403 instanceof Object)){
var ex__23601__auto__ = e29403;
var statearr_29404_29406 = state_29399;
(statearr_29404_29406[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29407 = state_29399;
state_29399 = G__29407;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto__ = function(state_29399){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto____1.call(this,state_29399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23694__auto__ = (function (){var statearr_29405 = f__23693__auto__.call(null);
(statearr_29405[(6)] = c__23692__auto__);

return statearr_29405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__,figwheel_version,temp__5735__auto__))
);

return c__23692__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29408){
var map__29409 = p__29408;
var map__29409__$1 = (((((!((map__29409 == null))))?(((((map__29409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29409):map__29409);
var file = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29411 = "";
var G__29411__$1 = (cljs.core.truth_(file)?[G__29411,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29411);
var G__29411__$2 = (cljs.core.truth_(line)?[G__29411__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29411__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29411__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29411__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29412){
var map__29413 = p__29412;
var map__29413__$1 = (((((!((map__29413 == null))))?(((((map__29413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29413):map__29413);
var ed = map__29413__$1;
var exception_data = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29416 = (function (){var G__29415 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29415)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29415;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29416);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29417){
var map__29418 = p__29417;
var map__29418__$1 = (((((!((map__29418 == null))))?(((((map__29418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29418):map__29418);
var w = map__29418__$1;
var message = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29420 = cljs.core.seq.call(null,plugins);
var chunk__29421 = null;
var count__29422 = (0);
var i__29423 = (0);
while(true){
if((i__29423 < count__29422)){
var vec__29430 = cljs.core._nth.call(null,chunk__29421,i__29423);
var k = cljs.core.nth.call(null,vec__29430,(0),null);
var plugin = cljs.core.nth.call(null,vec__29430,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29436 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29420,chunk__29421,count__29422,i__29423,pl_29436,vec__29430,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29436.call(null,msg_hist);
});})(seq__29420,chunk__29421,count__29422,i__29423,pl_29436,vec__29430,k,plugin))
);
} else {
}


var G__29437 = seq__29420;
var G__29438 = chunk__29421;
var G__29439 = count__29422;
var G__29440 = (i__29423 + (1));
seq__29420 = G__29437;
chunk__29421 = G__29438;
count__29422 = G__29439;
i__29423 = G__29440;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29420);
if(temp__5735__auto__){
var seq__29420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29420__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29420__$1);
var G__29441 = cljs.core.chunk_rest.call(null,seq__29420__$1);
var G__29442 = c__4550__auto__;
var G__29443 = cljs.core.count.call(null,c__4550__auto__);
var G__29444 = (0);
seq__29420 = G__29441;
chunk__29421 = G__29442;
count__29422 = G__29443;
i__29423 = G__29444;
continue;
} else {
var vec__29433 = cljs.core.first.call(null,seq__29420__$1);
var k = cljs.core.nth.call(null,vec__29433,(0),null);
var plugin = cljs.core.nth.call(null,vec__29433,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29445 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29420,chunk__29421,count__29422,i__29423,pl_29445,vec__29433,k,plugin,seq__29420__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29445.call(null,msg_hist);
});})(seq__29420,chunk__29421,count__29422,i__29423,pl_29445,vec__29433,k,plugin,seq__29420__$1,temp__5735__auto__))
);
} else {
}


var G__29446 = cljs.core.next.call(null,seq__29420__$1);
var G__29447 = null;
var G__29448 = (0);
var G__29449 = (0);
seq__29420 = G__29446;
chunk__29421 = G__29447;
count__29422 = G__29448;
i__29423 = G__29449;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29451 = arguments.length;
switch (G__29451) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29452_29457 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29453_29458 = null;
var count__29454_29459 = (0);
var i__29455_29460 = (0);
while(true){
if((i__29455_29460 < count__29454_29459)){
var msg_29461 = cljs.core._nth.call(null,chunk__29453_29458,i__29455_29460);
figwheel.client.socket.handle_incoming_message.call(null,msg_29461);


var G__29462 = seq__29452_29457;
var G__29463 = chunk__29453_29458;
var G__29464 = count__29454_29459;
var G__29465 = (i__29455_29460 + (1));
seq__29452_29457 = G__29462;
chunk__29453_29458 = G__29463;
count__29454_29459 = G__29464;
i__29455_29460 = G__29465;
continue;
} else {
var temp__5735__auto___29466 = cljs.core.seq.call(null,seq__29452_29457);
if(temp__5735__auto___29466){
var seq__29452_29467__$1 = temp__5735__auto___29466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29452_29467__$1)){
var c__4550__auto___29468 = cljs.core.chunk_first.call(null,seq__29452_29467__$1);
var G__29469 = cljs.core.chunk_rest.call(null,seq__29452_29467__$1);
var G__29470 = c__4550__auto___29468;
var G__29471 = cljs.core.count.call(null,c__4550__auto___29468);
var G__29472 = (0);
seq__29452_29457 = G__29469;
chunk__29453_29458 = G__29470;
count__29454_29459 = G__29471;
i__29455_29460 = G__29472;
continue;
} else {
var msg_29473 = cljs.core.first.call(null,seq__29452_29467__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29473);


var G__29474 = cljs.core.next.call(null,seq__29452_29467__$1);
var G__29475 = null;
var G__29476 = (0);
var G__29477 = (0);
seq__29452_29457 = G__29474;
chunk__29453_29458 = G__29475;
count__29454_29459 = G__29476;
i__29455_29460 = G__29477;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29482 = arguments.length;
var i__4731__auto___29483 = (0);
while(true){
if((i__4731__auto___29483 < len__4730__auto___29482)){
args__4736__auto__.push((arguments[i__4731__auto___29483]));

var G__29484 = (i__4731__auto___29483 + (1));
i__4731__auto___29483 = G__29484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29479){
var map__29480 = p__29479;
var map__29480__$1 = (((((!((map__29480 == null))))?(((((map__29480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480):map__29480);
var opts = map__29480__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29478){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29478));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29485){if((e29485 instanceof Error)){
var e = e29485;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29485;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29486){
var map__29487 = p__29486;
var map__29487__$1 = (((((!((map__29487 == null))))?(((((map__29487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29487):map__29487);
var msg_name = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1571951939422
