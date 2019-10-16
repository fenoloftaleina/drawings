// Compiled by ClojureScript 1.10.520 {}
goog.provide('drawings.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
drawings.core.setup = (function drawings$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"vertices","vertices",2008905731),cljs.core.PersistentVector.EMPTY], null);
});
drawings.core.update_state = (function drawings$core$update_state(p__35486){
var map__35487 = p__35486;
var map__35487__$1 = (((((!((map__35487 == null))))?(((((map__35487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35487):map__35487);
var color = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var vertices = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(color + 0.9),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(angle + 0.01),new cljs.core.Keyword(null,"vertices","vertices",2008905731),cljs.core.conj.call(null,vertices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((450) * quil.core.cos.call(null,angle)) + quil.core.random.call(null,(0))),(((250) * quil.core.sin.call(null,(angle * quil.core.random.call(null,(4))))) + quil.core.random.call(null,(0)))], null))], null);
});
drawings.core.draw_state = (function drawings$core$draw_state(p__35489){
var map__35490 = p__35489;
var map__35490__$1 = (((((!((map__35490 == null))))?(((((map__35490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35490):map__35490);
var color = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var vertices = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
quil.core.background.call(null,(240));

quil.core.fill.call(null,color,(255),(255));

var tr__34359__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__34359__auto__);

var seq__35492 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),vertices));
var chunk__35493 = null;
var count__35494 = (0);
var i__35495 = (0);
while(true){
if((i__35495 < count__35494)){
var vec__35514 = cljs.core._nth.call(null,chunk__35493,i__35495);
var vec__35517 = cljs.core.nth.call(null,vec__35514,(0),null);
var x1 = cljs.core.nth.call(null,vec__35517,(0),null);
var y1 = cljs.core.nth.call(null,vec__35517,(1),null);
var vec__35520 = cljs.core.nth.call(null,vec__35514,(1),null);
var x2 = cljs.core.nth.call(null,vec__35520,(0),null);
var y2 = cljs.core.nth.call(null,vec__35520,(1),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__35532 = seq__35492;
var G__35533 = chunk__35493;
var G__35534 = count__35494;
var G__35535 = (i__35495 + (1));
seq__35492 = G__35532;
chunk__35493 = G__35533;
count__35494 = G__35534;
i__35495 = G__35535;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35492);
if(temp__5735__auto__){
var seq__35492__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35492__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35492__$1);
var G__35536 = cljs.core.chunk_rest.call(null,seq__35492__$1);
var G__35537 = c__4550__auto__;
var G__35538 = cljs.core.count.call(null,c__4550__auto__);
var G__35539 = (0);
seq__35492 = G__35536;
chunk__35493 = G__35537;
count__35494 = G__35538;
i__35495 = G__35539;
continue;
} else {
var vec__35523 = cljs.core.first.call(null,seq__35492__$1);
var vec__35526 = cljs.core.nth.call(null,vec__35523,(0),null);
var x1 = cljs.core.nth.call(null,vec__35526,(0),null);
var y1 = cljs.core.nth.call(null,vec__35526,(1),null);
var vec__35529 = cljs.core.nth.call(null,vec__35523,(1),null);
var x2 = cljs.core.nth.call(null,vec__35529,(0),null);
var y2 = cljs.core.nth.call(null,vec__35529,(1),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__35540 = cljs.core.next.call(null,seq__35492__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__35492 = G__35540;
chunk__35493 = G__35541;
count__35494 = G__35542;
i__35495 = G__35543;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}});
drawings.core.run_sketch = (function drawings$core$run_sketch(){
drawings.core.drawings = (function drawings$core$run_sketch_$_drawings(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"drawings",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,drawings.core.update_state))?(function() { 
var G__35544__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.update_state,args);
};
var G__35544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35545__i = 0, G__35545__a = new Array(arguments.length -  0);
while (G__35545__i < G__35545__a.length) {G__35545__a[G__35545__i] = arguments[G__35545__i + 0]; ++G__35545__i;}
  args = new cljs.core.IndexedSeq(G__35545__a,0,null);
} 
return G__35544__delegate.call(this,args);};
G__35544.cljs$lang$maxFixedArity = 0;
G__35544.cljs$lang$applyTo = (function (arglist__35546){
var args = cljs.core.seq(arglist__35546);
return G__35544__delegate(args);
});
G__35544.cljs$core$IFn$_invoke$arity$variadic = G__35544__delegate;
return G__35544;
})()
:drawings.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,drawings.core.setup))?(function() { 
var G__35547__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.setup,args);
};
var G__35547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35548__i = 0, G__35548__a = new Array(arguments.length -  0);
while (G__35548__i < G__35548__a.length) {G__35548__a[G__35548__i] = arguments[G__35548__i + 0]; ++G__35548__i;}
  args = new cljs.core.IndexedSeq(G__35548__a,0,null);
} 
return G__35547__delegate.call(this,args);};
G__35547.cljs$lang$maxFixedArity = 0;
G__35547.cljs$lang$applyTo = (function (arglist__35549){
var args = cljs.core.seq(arglist__35549);
return G__35547__delegate(args);
});
G__35547.cljs$core$IFn$_invoke$arity$variadic = G__35547__delegate;
return G__35547;
})()
:drawings.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,drawings.core.draw_state))?(function() { 
var G__35550__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.draw_state,args);
};
var G__35550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35551__i = 0, G__35551__a = new Array(arguments.length -  0);
while (G__35551__i < G__35551__a.length) {G__35551__a[G__35551__i] = arguments[G__35551__i + 0]; ++G__35551__i;}
  args = new cljs.core.IndexedSeq(G__35551__a,0,null);
} 
return G__35550__delegate.call(this,args);};
G__35550.cljs$lang$maxFixedArity = 0;
G__35550.cljs$lang$applyTo = (function (arglist__35552){
var args = cljs.core.seq(arglist__35552);
return G__35550__delegate(args);
});
G__35550.cljs$core$IFn$_invoke$arity$variadic = G__35550__delegate;
return G__35550;
})()
:drawings.core.draw_state));
});
goog.exportSymbol('drawings.core.drawings', drawings.core.drawings);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__33953__33954__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__33953__33954__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),drawings.core.drawings,new cljs.core.Keyword(null,"host-id","host-id",742376279),"drawings"], null));
}
});
goog.exportSymbol('drawings.core.run_sketch', drawings.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1571257281206
