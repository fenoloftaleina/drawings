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
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27014){if((e27014 instanceof Error)){
var e = e27014;
return "Error: Unable to stringify";
} else {
throw e27014;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27017 = arguments.length;
switch (G__27017) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27015_SHARP_){
if(typeof p1__27015_SHARP_ === 'string'){
return p1__27015_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27015_SHARP_);
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
var len__4730__auto___27020 = arguments.length;
var i__4731__auto___27021 = (0);
while(true){
if((i__4731__auto___27021 < len__4730__auto___27020)){
args__4736__auto__.push((arguments[i__4731__auto___27021]));

var G__27022 = (i__4731__auto___27021 + (1));
i__4731__auto___27021 = G__27022;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27019){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27019));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27024 = arguments.length;
var i__4731__auto___27025 = (0);
while(true){
if((i__4731__auto___27025 < len__4730__auto___27024)){
args__4736__auto__.push((arguments[i__4731__auto___27025]));

var G__27026 = (i__4731__auto___27025 + (1));
i__4731__auto___27025 = G__27026;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27023){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27023));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27027){
var map__27028 = p__27027;
var map__27028__$1 = (((((!((map__27028 == null))))?(((((map__27028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27028):map__27028);
var message = cljs.core.get.call(null,map__27028__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27028__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24702__auto___27107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto___27107,ch){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto___27107,ch){
return (function (state_27079){
var state_val_27080 = (state_27079[(1)]);
if((state_val_27080 === (7))){
var inst_27075 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27081_27108 = state_27079__$1;
(statearr_27081_27108[(2)] = inst_27075);

(statearr_27081_27108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (1))){
var state_27079__$1 = state_27079;
var statearr_27082_27109 = state_27079__$1;
(statearr_27082_27109[(2)] = null);

(statearr_27082_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (4))){
var inst_27032 = (state_27079[(7)]);
var inst_27032__$1 = (state_27079[(2)]);
var state_27079__$1 = (function (){var statearr_27083 = state_27079;
(statearr_27083[(7)] = inst_27032__$1);

return statearr_27083;
})();
if(cljs.core.truth_(inst_27032__$1)){
var statearr_27084_27110 = state_27079__$1;
(statearr_27084_27110[(1)] = (5));

} else {
var statearr_27085_27111 = state_27079__$1;
(statearr_27085_27111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (15))){
var inst_27039 = (state_27079[(8)]);
var inst_27054 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27039);
var inst_27055 = cljs.core.first.call(null,inst_27054);
var inst_27056 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27055);
var inst_27057 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27056)].join('');
var inst_27058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27057);
var state_27079__$1 = state_27079;
var statearr_27086_27112 = state_27079__$1;
(statearr_27086_27112[(2)] = inst_27058);

(statearr_27086_27112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (13))){
var inst_27063 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27087_27113 = state_27079__$1;
(statearr_27087_27113[(2)] = inst_27063);

(statearr_27087_27113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (6))){
var state_27079__$1 = state_27079;
var statearr_27088_27114 = state_27079__$1;
(statearr_27088_27114[(2)] = null);

(statearr_27088_27114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (17))){
var inst_27061 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27089_27115 = state_27079__$1;
(statearr_27089_27115[(2)] = inst_27061);

(statearr_27089_27115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (3))){
var inst_27077 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27079__$1,inst_27077);
} else {
if((state_val_27080 === (12))){
var inst_27038 = (state_27079[(9)]);
var inst_27052 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27038,opts);
var state_27079__$1 = state_27079;
if(inst_27052){
var statearr_27090_27116 = state_27079__$1;
(statearr_27090_27116[(1)] = (15));

} else {
var statearr_27091_27117 = state_27079__$1;
(statearr_27091_27117[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (2))){
var state_27079__$1 = state_27079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27079__$1,(4),ch);
} else {
if((state_val_27080 === (11))){
var inst_27039 = (state_27079[(8)]);
var inst_27044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27045 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27039);
var inst_27046 = cljs.core.async.timeout.call(null,(1000));
var inst_27047 = [inst_27045,inst_27046];
var inst_27048 = (new cljs.core.PersistentVector(null,2,(5),inst_27044,inst_27047,null));
var state_27079__$1 = state_27079;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27079__$1,(14),inst_27048);
} else {
if((state_val_27080 === (9))){
var inst_27039 = (state_27079[(8)]);
var inst_27065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27066 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27039);
var inst_27067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27066);
var inst_27068 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27067)].join('');
var inst_27069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27068);
var state_27079__$1 = (function (){var statearr_27092 = state_27079;
(statearr_27092[(10)] = inst_27065);

return statearr_27092;
})();
var statearr_27093_27118 = state_27079__$1;
(statearr_27093_27118[(2)] = inst_27069);

(statearr_27093_27118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (5))){
var inst_27032 = (state_27079[(7)]);
var inst_27034 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27035 = (new cljs.core.PersistentArrayMap(null,2,inst_27034,null));
var inst_27036 = (new cljs.core.PersistentHashSet(null,inst_27035,null));
var inst_27037 = figwheel.client.focus_msgs.call(null,inst_27036,inst_27032);
var inst_27038 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27037);
var inst_27039 = cljs.core.first.call(null,inst_27037);
var inst_27040 = figwheel.client.autoload_QMARK_.call(null);
var state_27079__$1 = (function (){var statearr_27094 = state_27079;
(statearr_27094[(8)] = inst_27039);

(statearr_27094[(9)] = inst_27038);

return statearr_27094;
})();
if(cljs.core.truth_(inst_27040)){
var statearr_27095_27119 = state_27079__$1;
(statearr_27095_27119[(1)] = (8));

} else {
var statearr_27096_27120 = state_27079__$1;
(statearr_27096_27120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (14))){
var inst_27050 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27097_27121 = state_27079__$1;
(statearr_27097_27121[(2)] = inst_27050);

(statearr_27097_27121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (16))){
var state_27079__$1 = state_27079;
var statearr_27098_27122 = state_27079__$1;
(statearr_27098_27122[(2)] = null);

(statearr_27098_27122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (10))){
var inst_27071 = (state_27079[(2)]);
var state_27079__$1 = (function (){var statearr_27099 = state_27079;
(statearr_27099[(11)] = inst_27071);

return statearr_27099;
})();
var statearr_27100_27123 = state_27079__$1;
(statearr_27100_27123[(2)] = null);

(statearr_27100_27123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (8))){
var inst_27038 = (state_27079[(9)]);
var inst_27042 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27038,opts);
var state_27079__$1 = state_27079;
if(cljs.core.truth_(inst_27042)){
var statearr_27101_27124 = state_27079__$1;
(statearr_27101_27124[(1)] = (11));

} else {
var statearr_27102_27125 = state_27079__$1;
(statearr_27102_27125[(1)] = (12));

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
});})(c__24702__auto___27107,ch))
;
return ((function (switch__24679__auto__,c__24702__auto___27107,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24680__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24680__auto____0 = (function (){
var statearr_27103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27103[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24680__auto__);

(statearr_27103[(1)] = (1));

return statearr_27103;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24680__auto____1 = (function (state_27079){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_27079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e27104){if((e27104 instanceof Object)){
var ex__24683__auto__ = e27104;
var statearr_27105_27126 = state_27079;
(statearr_27105_27126[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27127 = state_27079;
state_27079 = G__27127;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24680__auto__ = function(state_27079){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24680__auto____1.call(this,state_27079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24680__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24680__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto___27107,ch))
})();
var state__24704__auto__ = (function (){var statearr_27106 = f__24703__auto__.call(null);
(statearr_27106[(6)] = c__24702__auto___27107);

return statearr_27106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto___27107,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27128_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27128_SHARP_));
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
var base_path_27134 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27134){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27130 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27131 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27132 = true;
var _STAR_print_fn_STAR__temp_val__27133 = ((function (_STAR_print_newline_STAR__orig_val__27130,_STAR_print_fn_STAR__orig_val__27131,_STAR_print_newline_STAR__temp_val__27132,sb,base_path_27134){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__27130,_STAR_print_fn_STAR__orig_val__27131,_STAR_print_newline_STAR__temp_val__27132,sb,base_path_27134))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27132;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27133;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27131;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27130;
}}catch (e27129){if((e27129 instanceof Error)){
var e = e27129;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27134], null));
} else {
var e = e27129;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27134))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27135){
var map__27136 = p__27135;
var map__27136__$1 = (((((!((map__27136 == null))))?(((((map__27136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27136):map__27136);
var opts = map__27136__$1;
var build_id = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27136,map__27136__$1,opts,build_id){
return (function (p__27138){
var vec__27139 = p__27138;
var seq__27140 = cljs.core.seq.call(null,vec__27139);
var first__27141 = cljs.core.first.call(null,seq__27140);
var seq__27140__$1 = cljs.core.next.call(null,seq__27140);
var map__27142 = first__27141;
var map__27142__$1 = (((((!((map__27142 == null))))?(((((map__27142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27142):map__27142);
var msg = map__27142__$1;
var msg_name = cljs.core.get.call(null,map__27142__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27140__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27139,seq__27140,first__27141,seq__27140__$1,map__27142,map__27142__$1,msg,msg_name,_,map__27136,map__27136__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27139,seq__27140,first__27141,seq__27140__$1,map__27142,map__27142__$1,msg,msg_name,_,map__27136,map__27136__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27136,map__27136__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27144){
var vec__27145 = p__27144;
var seq__27146 = cljs.core.seq.call(null,vec__27145);
var first__27147 = cljs.core.first.call(null,seq__27146);
var seq__27146__$1 = cljs.core.next.call(null,seq__27146);
var map__27148 = first__27147;
var map__27148__$1 = (((((!((map__27148 == null))))?(((((map__27148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27148):map__27148);
var msg = map__27148__$1;
var msg_name = cljs.core.get.call(null,map__27148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27146__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27150){
var map__27151 = p__27150;
var map__27151__$1 = (((((!((map__27151 == null))))?(((((map__27151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27151):map__27151);
var on_compile_warning = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27151,map__27151__$1,on_compile_warning,on_compile_fail){
return (function (p__27153){
var vec__27154 = p__27153;
var seq__27155 = cljs.core.seq.call(null,vec__27154);
var first__27156 = cljs.core.first.call(null,seq__27155);
var seq__27155__$1 = cljs.core.next.call(null,seq__27155);
var map__27157 = first__27156;
var map__27157__$1 = (((((!((map__27157 == null))))?(((((map__27157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27157):map__27157);
var msg = map__27157__$1;
var msg_name = cljs.core.get.call(null,map__27157__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27155__$1;
var pred__27159 = cljs.core._EQ_;
var expr__27160 = msg_name;
if(cljs.core.truth_(pred__27159.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27160))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27159.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27160))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27151,map__27151__$1,on_compile_warning,on_compile_fail))
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
var c__24702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto__,msg_hist,msg_names,msg){
return (function (state_27249){
var state_val_27250 = (state_27249[(1)]);
if((state_val_27250 === (7))){
var inst_27169 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27169)){
var statearr_27251_27298 = state_27249__$1;
(statearr_27251_27298[(1)] = (8));

} else {
var statearr_27252_27299 = state_27249__$1;
(statearr_27252_27299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (20))){
var inst_27243 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27253_27300 = state_27249__$1;
(statearr_27253_27300[(2)] = inst_27243);

(statearr_27253_27300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (27))){
var inst_27239 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27254_27301 = state_27249__$1;
(statearr_27254_27301[(2)] = inst_27239);

(statearr_27254_27301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (1))){
var inst_27162 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27162)){
var statearr_27255_27302 = state_27249__$1;
(statearr_27255_27302[(1)] = (2));

} else {
var statearr_27256_27303 = state_27249__$1;
(statearr_27256_27303[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (24))){
var inst_27241 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27257_27304 = state_27249__$1;
(statearr_27257_27304[(2)] = inst_27241);

(statearr_27257_27304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (4))){
var inst_27247 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27249__$1,inst_27247);
} else {
if((state_val_27250 === (15))){
var inst_27245 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27258_27305 = state_27249__$1;
(statearr_27258_27305[(2)] = inst_27245);

(statearr_27258_27305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (21))){
var inst_27198 = (state_27249[(2)]);
var inst_27199 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27200 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27199);
var state_27249__$1 = (function (){var statearr_27259 = state_27249;
(statearr_27259[(7)] = inst_27198);

return statearr_27259;
})();
var statearr_27260_27306 = state_27249__$1;
(statearr_27260_27306[(2)] = inst_27200);

(statearr_27260_27306[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (31))){
var inst_27228 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(inst_27228){
var statearr_27261_27307 = state_27249__$1;
(statearr_27261_27307[(1)] = (34));

} else {
var statearr_27262_27308 = state_27249__$1;
(statearr_27262_27308[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (32))){
var inst_27237 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27263_27309 = state_27249__$1;
(statearr_27263_27309[(2)] = inst_27237);

(statearr_27263_27309[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (33))){
var inst_27224 = (state_27249[(2)]);
var inst_27225 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27226 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27225);
var state_27249__$1 = (function (){var statearr_27264 = state_27249;
(statearr_27264[(8)] = inst_27224);

return statearr_27264;
})();
var statearr_27265_27310 = state_27249__$1;
(statearr_27265_27310[(2)] = inst_27226);

(statearr_27265_27310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (13))){
var inst_27183 = figwheel.client.heads_up.clear.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(16),inst_27183);
} else {
if((state_val_27250 === (22))){
var inst_27204 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27205 = figwheel.client.heads_up.append_warning_message.call(null,inst_27204);
var state_27249__$1 = state_27249;
var statearr_27266_27311 = state_27249__$1;
(statearr_27266_27311[(2)] = inst_27205);

(statearr_27266_27311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (36))){
var inst_27235 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27267_27312 = state_27249__$1;
(statearr_27267_27312[(2)] = inst_27235);

(statearr_27267_27312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (29))){
var inst_27215 = (state_27249[(2)]);
var inst_27216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27217 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27216);
var state_27249__$1 = (function (){var statearr_27268 = state_27249;
(statearr_27268[(9)] = inst_27215);

return statearr_27268;
})();
var statearr_27269_27313 = state_27249__$1;
(statearr_27269_27313[(2)] = inst_27217);

(statearr_27269_27313[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (6))){
var inst_27164 = (state_27249[(10)]);
var state_27249__$1 = state_27249;
var statearr_27270_27314 = state_27249__$1;
(statearr_27270_27314[(2)] = inst_27164);

(statearr_27270_27314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (28))){
var inst_27211 = (state_27249[(2)]);
var inst_27212 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27213 = figwheel.client.heads_up.display_warning.call(null,inst_27212);
var state_27249__$1 = (function (){var statearr_27271 = state_27249;
(statearr_27271[(11)] = inst_27211);

return statearr_27271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(29),inst_27213);
} else {
if((state_val_27250 === (25))){
var inst_27209 = figwheel.client.heads_up.clear.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(28),inst_27209);
} else {
if((state_val_27250 === (34))){
var inst_27230 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(37),inst_27230);
} else {
if((state_val_27250 === (17))){
var inst_27189 = (state_27249[(2)]);
var inst_27190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27191 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27190);
var state_27249__$1 = (function (){var statearr_27272 = state_27249;
(statearr_27272[(12)] = inst_27189);

return statearr_27272;
})();
var statearr_27273_27315 = state_27249__$1;
(statearr_27273_27315[(2)] = inst_27191);

(statearr_27273_27315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (3))){
var inst_27181 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(inst_27181){
var statearr_27274_27316 = state_27249__$1;
(statearr_27274_27316[(1)] = (13));

} else {
var statearr_27275_27317 = state_27249__$1;
(statearr_27275_27317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (12))){
var inst_27177 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27276_27318 = state_27249__$1;
(statearr_27276_27318[(2)] = inst_27177);

(statearr_27276_27318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (2))){
var inst_27164 = (state_27249[(10)]);
var inst_27164__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27249__$1 = (function (){var statearr_27277 = state_27249;
(statearr_27277[(10)] = inst_27164__$1);

return statearr_27277;
})();
if(cljs.core.truth_(inst_27164__$1)){
var statearr_27278_27319 = state_27249__$1;
(statearr_27278_27319[(1)] = (5));

} else {
var statearr_27279_27320 = state_27249__$1;
(statearr_27279_27320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (23))){
var inst_27207 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(inst_27207){
var statearr_27280_27321 = state_27249__$1;
(statearr_27280_27321[(1)] = (25));

} else {
var statearr_27281_27322 = state_27249__$1;
(statearr_27281_27322[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (35))){
var state_27249__$1 = state_27249;
var statearr_27282_27323 = state_27249__$1;
(statearr_27282_27323[(2)] = null);

(statearr_27282_27323[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (19))){
var inst_27202 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(inst_27202){
var statearr_27283_27324 = state_27249__$1;
(statearr_27283_27324[(1)] = (22));

} else {
var statearr_27284_27325 = state_27249__$1;
(statearr_27284_27325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (11))){
var inst_27173 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27285_27326 = state_27249__$1;
(statearr_27285_27326[(2)] = inst_27173);

(statearr_27285_27326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (9))){
var inst_27175 = figwheel.client.heads_up.clear.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(12),inst_27175);
} else {
if((state_val_27250 === (5))){
var inst_27166 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27249__$1 = state_27249;
var statearr_27286_27327 = state_27249__$1;
(statearr_27286_27327[(2)] = inst_27166);

(statearr_27286_27327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (14))){
var inst_27193 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(inst_27193){
var statearr_27287_27328 = state_27249__$1;
(statearr_27287_27328[(1)] = (18));

} else {
var statearr_27288_27329 = state_27249__$1;
(statearr_27288_27329[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (26))){
var inst_27219 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(inst_27219){
var statearr_27289_27330 = state_27249__$1;
(statearr_27289_27330[(1)] = (30));

} else {
var statearr_27290_27331 = state_27249__$1;
(statearr_27290_27331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (16))){
var inst_27185 = (state_27249[(2)]);
var inst_27186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27187 = figwheel.client.heads_up.display_exception.call(null,inst_27186);
var state_27249__$1 = (function (){var statearr_27291 = state_27249;
(statearr_27291[(13)] = inst_27185);

return statearr_27291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(17),inst_27187);
} else {
if((state_val_27250 === (30))){
var inst_27221 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27222 = figwheel.client.heads_up.display_warning.call(null,inst_27221);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(33),inst_27222);
} else {
if((state_val_27250 === (10))){
var inst_27179 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27292_27332 = state_27249__$1;
(statearr_27292_27332[(2)] = inst_27179);

(statearr_27292_27332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (18))){
var inst_27195 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27196 = figwheel.client.heads_up.display_exception.call(null,inst_27195);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(21),inst_27196);
} else {
if((state_val_27250 === (37))){
var inst_27232 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27293_27333 = state_27249__$1;
(statearr_27293_27333[(2)] = inst_27232);

(statearr_27293_27333[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (8))){
var inst_27171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(11),inst_27171);
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
});})(c__24702__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24679__auto__,c__24702__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto____0 = (function (){
var statearr_27294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27294[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto__);

(statearr_27294[(1)] = (1));

return statearr_27294;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto____1 = (function (state_27249){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_27249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e27295){if((e27295 instanceof Object)){
var ex__24683__auto__ = e27295;
var statearr_27296_27334 = state_27249;
(statearr_27296_27334[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27335 = state_27249;
state_27249 = G__27335;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto__ = function(state_27249){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto____1.call(this,state_27249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto__,msg_hist,msg_names,msg))
})();
var state__24704__auto__ = (function (){var statearr_27297 = f__24703__auto__.call(null);
(statearr_27297[(6)] = c__24702__auto__);

return statearr_27297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto__,msg_hist,msg_names,msg))
);

return c__24702__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24702__auto___27364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto___27364,ch){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto___27364,ch){
return (function (state_27350){
var state_val_27351 = (state_27350[(1)]);
if((state_val_27351 === (1))){
var state_27350__$1 = state_27350;
var statearr_27352_27365 = state_27350__$1;
(statearr_27352_27365[(2)] = null);

(statearr_27352_27365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (2))){
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27350__$1,(4),ch);
} else {
if((state_val_27351 === (3))){
var inst_27348 = (state_27350[(2)]);
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27350__$1,inst_27348);
} else {
if((state_val_27351 === (4))){
var inst_27338 = (state_27350[(7)]);
var inst_27338__$1 = (state_27350[(2)]);
var state_27350__$1 = (function (){var statearr_27353 = state_27350;
(statearr_27353[(7)] = inst_27338__$1);

return statearr_27353;
})();
if(cljs.core.truth_(inst_27338__$1)){
var statearr_27354_27366 = state_27350__$1;
(statearr_27354_27366[(1)] = (5));

} else {
var statearr_27355_27367 = state_27350__$1;
(statearr_27355_27367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (5))){
var inst_27338 = (state_27350[(7)]);
var inst_27340 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27338);
var state_27350__$1 = state_27350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27350__$1,(8),inst_27340);
} else {
if((state_val_27351 === (6))){
var state_27350__$1 = state_27350;
var statearr_27356_27368 = state_27350__$1;
(statearr_27356_27368[(2)] = null);

(statearr_27356_27368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (7))){
var inst_27346 = (state_27350[(2)]);
var state_27350__$1 = state_27350;
var statearr_27357_27369 = state_27350__$1;
(statearr_27357_27369[(2)] = inst_27346);

(statearr_27357_27369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27351 === (8))){
var inst_27342 = (state_27350[(2)]);
var state_27350__$1 = (function (){var statearr_27358 = state_27350;
(statearr_27358[(8)] = inst_27342);

return statearr_27358;
})();
var statearr_27359_27370 = state_27350__$1;
(statearr_27359_27370[(2)] = null);

(statearr_27359_27370[(1)] = (2));


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
});})(c__24702__auto___27364,ch))
;
return ((function (switch__24679__auto__,c__24702__auto___27364,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24680__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24680__auto____0 = (function (){
var statearr_27360 = [null,null,null,null,null,null,null,null,null];
(statearr_27360[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24680__auto__);

(statearr_27360[(1)] = (1));

return statearr_27360;
});
var figwheel$client$heads_up_plugin_$_state_machine__24680__auto____1 = (function (state_27350){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_27350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e27361){if((e27361 instanceof Object)){
var ex__24683__auto__ = e27361;
var statearr_27362_27371 = state_27350;
(statearr_27362_27371[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27372 = state_27350;
state_27350 = G__27372;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24680__auto__ = function(state_27350){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24680__auto____1.call(this,state_27350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24680__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24680__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto___27364,ch))
})();
var state__24704__auto__ = (function (){var statearr_27363 = f__24703__auto__.call(null);
(statearr_27363[(6)] = c__24702__auto___27364);

return statearr_27363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto___27364,ch))
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
var c__24702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto__){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto__){
return (function (state_27378){
var state_val_27379 = (state_27378[(1)]);
if((state_val_27379 === (1))){
var inst_27373 = cljs.core.async.timeout.call(null,(3000));
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27378__$1,(2),inst_27373);
} else {
if((state_val_27379 === (2))){
var inst_27375 = (state_27378[(2)]);
var inst_27376 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27378__$1 = (function (){var statearr_27380 = state_27378;
(statearr_27380[(7)] = inst_27375);

return statearr_27380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27378__$1,inst_27376);
} else {
return null;
}
}
});})(c__24702__auto__))
;
return ((function (switch__24679__auto__,c__24702__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24680__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24680__auto____0 = (function (){
var statearr_27381 = [null,null,null,null,null,null,null,null];
(statearr_27381[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24680__auto__);

(statearr_27381[(1)] = (1));

return statearr_27381;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24680__auto____1 = (function (state_27378){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_27378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e27382){if((e27382 instanceof Object)){
var ex__24683__auto__ = e27382;
var statearr_27383_27385 = state_27378;
(statearr_27383_27385[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27386 = state_27378;
state_27378 = G__27386;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24680__auto__ = function(state_27378){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24680__auto____1.call(this,state_27378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24680__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24680__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto__))
})();
var state__24704__auto__ = (function (){var statearr_27384 = f__24703__auto__.call(null);
(statearr_27384[(6)] = c__24702__auto__);

return statearr_27384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto__))
);

return c__24702__auto__;
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
var c__24702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto__,figwheel_version,temp__5735__auto__){
return (function (state_27393){
var state_val_27394 = (state_27393[(1)]);
if((state_val_27394 === (1))){
var inst_27387 = cljs.core.async.timeout.call(null,(2000));
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(2),inst_27387);
} else {
if((state_val_27394 === (2))){
var inst_27389 = (state_27393[(2)]);
var inst_27390 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27391 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27390);
var state_27393__$1 = (function (){var statearr_27395 = state_27393;
(statearr_27395[(7)] = inst_27389);

return statearr_27395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27393__$1,inst_27391);
} else {
return null;
}
}
});})(c__24702__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__24679__auto__,c__24702__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto____0 = (function (){
var statearr_27396 = [null,null,null,null,null,null,null,null];
(statearr_27396[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto__);

(statearr_27396[(1)] = (1));

return statearr_27396;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto____1 = (function (state_27393){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_27393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e27397){if((e27397 instanceof Object)){
var ex__24683__auto__ = e27397;
var statearr_27398_27400 = state_27393;
(statearr_27398_27400[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27401 = state_27393;
state_27393 = G__27401;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto__ = function(state_27393){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto____1.call(this,state_27393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24704__auto__ = (function (){var statearr_27399 = f__24703__auto__.call(null);
(statearr_27399[(6)] = c__24702__auto__);

return statearr_27399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto__,figwheel_version,temp__5735__auto__))
);

return c__24702__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27402){
var map__27403 = p__27402;
var map__27403__$1 = (((((!((map__27403 == null))))?(((((map__27403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403):map__27403);
var file = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27405 = "";
var G__27405__$1 = (cljs.core.truth_(file)?[G__27405,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27405);
var G__27405__$2 = (cljs.core.truth_(line)?[G__27405__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27405__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__27405__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27405__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27406){
var map__27407 = p__27406;
var map__27407__$1 = (((((!((map__27407 == null))))?(((((map__27407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27407):map__27407);
var ed = map__27407__$1;
var formatted_exception = cljs.core.get.call(null,map__27407__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27407__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27407__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27409_27413 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27410_27414 = null;
var count__27411_27415 = (0);
var i__27412_27416 = (0);
while(true){
if((i__27412_27416 < count__27411_27415)){
var msg_27417 = cljs.core._nth.call(null,chunk__27410_27414,i__27412_27416);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27417);


var G__27418 = seq__27409_27413;
var G__27419 = chunk__27410_27414;
var G__27420 = count__27411_27415;
var G__27421 = (i__27412_27416 + (1));
seq__27409_27413 = G__27418;
chunk__27410_27414 = G__27419;
count__27411_27415 = G__27420;
i__27412_27416 = G__27421;
continue;
} else {
var temp__5735__auto___27422 = cljs.core.seq.call(null,seq__27409_27413);
if(temp__5735__auto___27422){
var seq__27409_27423__$1 = temp__5735__auto___27422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27409_27423__$1)){
var c__4550__auto___27424 = cljs.core.chunk_first.call(null,seq__27409_27423__$1);
var G__27425 = cljs.core.chunk_rest.call(null,seq__27409_27423__$1);
var G__27426 = c__4550__auto___27424;
var G__27427 = cljs.core.count.call(null,c__4550__auto___27424);
var G__27428 = (0);
seq__27409_27413 = G__27425;
chunk__27410_27414 = G__27426;
count__27411_27415 = G__27427;
i__27412_27416 = G__27428;
continue;
} else {
var msg_27429 = cljs.core.first.call(null,seq__27409_27423__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27429);


var G__27430 = cljs.core.next.call(null,seq__27409_27423__$1);
var G__27431 = null;
var G__27432 = (0);
var G__27433 = (0);
seq__27409_27413 = G__27430;
chunk__27410_27414 = G__27431;
count__27411_27415 = G__27432;
i__27412_27416 = G__27433;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",figwheel.client.file_line_column.call(null,ed)].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27434){
var map__27435 = p__27434;
var map__27435__$1 = (((((!((map__27435 == null))))?(((((map__27435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27435):map__27435);
var w = map__27435__$1;
var message = cljs.core.get.call(null,map__27435__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__27437 = cljs.core.seq.call(null,plugins);
var chunk__27438 = null;
var count__27439 = (0);
var i__27440 = (0);
while(true){
if((i__27440 < count__27439)){
var vec__27447 = cljs.core._nth.call(null,chunk__27438,i__27440);
var k = cljs.core.nth.call(null,vec__27447,(0),null);
var plugin = cljs.core.nth.call(null,vec__27447,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27453 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27437,chunk__27438,count__27439,i__27440,pl_27453,vec__27447,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27453.call(null,msg_hist);
});})(seq__27437,chunk__27438,count__27439,i__27440,pl_27453,vec__27447,k,plugin))
);
} else {
}


var G__27454 = seq__27437;
var G__27455 = chunk__27438;
var G__27456 = count__27439;
var G__27457 = (i__27440 + (1));
seq__27437 = G__27454;
chunk__27438 = G__27455;
count__27439 = G__27456;
i__27440 = G__27457;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27437);
if(temp__5735__auto__){
var seq__27437__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27437__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27437__$1);
var G__27458 = cljs.core.chunk_rest.call(null,seq__27437__$1);
var G__27459 = c__4550__auto__;
var G__27460 = cljs.core.count.call(null,c__4550__auto__);
var G__27461 = (0);
seq__27437 = G__27458;
chunk__27438 = G__27459;
count__27439 = G__27460;
i__27440 = G__27461;
continue;
} else {
var vec__27450 = cljs.core.first.call(null,seq__27437__$1);
var k = cljs.core.nth.call(null,vec__27450,(0),null);
var plugin = cljs.core.nth.call(null,vec__27450,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27462 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27437,chunk__27438,count__27439,i__27440,pl_27462,vec__27450,k,plugin,seq__27437__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27462.call(null,msg_hist);
});})(seq__27437,chunk__27438,count__27439,i__27440,pl_27462,vec__27450,k,plugin,seq__27437__$1,temp__5735__auto__))
);
} else {
}


var G__27463 = cljs.core.next.call(null,seq__27437__$1);
var G__27464 = null;
var G__27465 = (0);
var G__27466 = (0);
seq__27437 = G__27463;
chunk__27438 = G__27464;
count__27439 = G__27465;
i__27440 = G__27466;
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
var G__27468 = arguments.length;
switch (G__27468) {
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

var seq__27469_27474 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27470_27475 = null;
var count__27471_27476 = (0);
var i__27472_27477 = (0);
while(true){
if((i__27472_27477 < count__27471_27476)){
var msg_27478 = cljs.core._nth.call(null,chunk__27470_27475,i__27472_27477);
figwheel.client.socket.handle_incoming_message.call(null,msg_27478);


var G__27479 = seq__27469_27474;
var G__27480 = chunk__27470_27475;
var G__27481 = count__27471_27476;
var G__27482 = (i__27472_27477 + (1));
seq__27469_27474 = G__27479;
chunk__27470_27475 = G__27480;
count__27471_27476 = G__27481;
i__27472_27477 = G__27482;
continue;
} else {
var temp__5735__auto___27483 = cljs.core.seq.call(null,seq__27469_27474);
if(temp__5735__auto___27483){
var seq__27469_27484__$1 = temp__5735__auto___27483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27469_27484__$1)){
var c__4550__auto___27485 = cljs.core.chunk_first.call(null,seq__27469_27484__$1);
var G__27486 = cljs.core.chunk_rest.call(null,seq__27469_27484__$1);
var G__27487 = c__4550__auto___27485;
var G__27488 = cljs.core.count.call(null,c__4550__auto___27485);
var G__27489 = (0);
seq__27469_27474 = G__27486;
chunk__27470_27475 = G__27487;
count__27471_27476 = G__27488;
i__27472_27477 = G__27489;
continue;
} else {
var msg_27490 = cljs.core.first.call(null,seq__27469_27484__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27490);


var G__27491 = cljs.core.next.call(null,seq__27469_27484__$1);
var G__27492 = null;
var G__27493 = (0);
var G__27494 = (0);
seq__27469_27474 = G__27491;
chunk__27470_27475 = G__27492;
count__27471_27476 = G__27493;
i__27472_27477 = G__27494;
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
var len__4730__auto___27499 = arguments.length;
var i__4731__auto___27500 = (0);
while(true){
if((i__4731__auto___27500 < len__4730__auto___27499)){
args__4736__auto__.push((arguments[i__4731__auto___27500]));

var G__27501 = (i__4731__auto___27500 + (1));
i__4731__auto___27500 = G__27501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27496){
var map__27497 = p__27496;
var map__27497__$1 = (((((!((map__27497 == null))))?(((((map__27497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497):map__27497);
var opts = map__27497__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27495){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27495));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27502){if((e27502 instanceof Error)){
var e = e27502;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27502;

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
return (function (p__27503){
var map__27504 = p__27503;
var map__27504__$1 = (((((!((map__27504 == null))))?(((((map__27504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27504):map__27504);
var msg_name = cljs.core.get.call(null,map__27504__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1571428113440
