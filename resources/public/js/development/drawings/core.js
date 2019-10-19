// Compiled by ClojureScript 1.10.520 {}
goog.provide('drawings.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
drawings.core.setup = (function drawings$core$setup(){
quil.core.frame_rate.call(null,(1));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return cljs.core.PersistentArrayMap.EMPTY;
});
drawings.core.tree_lines = (function drawings$core$tree_lines(x,y,amp,beg_space){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p__52933){
var vec__52934 = p__52933;
var layer1 = cljs.core.nth.call(null,vec__52934,(0),null);
var layer2 = cljs.core.nth.call(null,vec__52934,(1),null);
return cljs.core.mapv.call(null,((function (vec__52934,layer1,layer2){
return (function (p1,p2){
return cljs.core.concat.call(null,p1,p2);
});})(vec__52934,layer1,layer2))
,cljs.core.interleave.call(null,layer1,layer1),layer2);
}),cljs.core.partition.call(null,(2),(1),(function (){var vertices_layers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (10))], null)], null)], null);
var space = beg_space;
var depth = (0);
while(true){
if((depth > (9))){
return vertices_layers;
} else {
var top_vertices = cljs.core.last.call(null,vertices_layers);
var new_top_vertices = cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,((function (vertices_layers,space,depth,top_vertices){
return (function (p__52941){
var vec__52942 = p__52941;
var x__$1 = cljs.core.nth.call(null,vec__52942,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__52942,(1),null);
var a = (space + quil.core.random.call(null,(0)));
var bf = ((function (vertices_layers,space,depth,a,vec__52942,x__$1,y__$1,top_vertices){
return (function (p1__52932_SHARP_){
return ((amp * quil.core.sin.call(null,(3.14 * (p1__52932_SHARP_ / quil.core.width.call(null))))) + quil.core.random.call(null,(5)));
});})(vertices_layers,space,depth,a,vec__52942,x__$1,y__$1,top_vertices))
;
var lx = (x__$1 - a);
var rx = (x__$1 + a);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lx,(y__$1 - bf.call(null,lx))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,(y__$1 - bf.call(null,rx))], null)], null);
});})(vertices_layers,space,depth,top_vertices))
,top_vertices));
var G__52945 = cljs.core.conj.call(null,vertices_layers,new_top_vertices);
var G__52946 = (0.5 * space);
var G__52947 = (depth + (1));
vertices_layers = G__52945;
space = G__52946;
depth = G__52947;
continue;
}
break;
}
})())));
});
drawings.core.update_state = (function drawings$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703),cljs.core.concat.call(null,drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(30),(75)))], null);
});
drawings.core.draw_state = (function drawings$core$draw_state(p__52948){
var map__52949 = p__52948;
var map__52949__$1 = (((((!((map__52949 == null))))?(((((map__52949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52949):map__52949);
var tree_lines = cljs.core.get.call(null,map__52949__$1,new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703));
quil.core.background.call(null,(140));

quil.core.stroke_weight.call(null,0.3);

var seq__52951 = cljs.core.seq.call(null,tree_lines);
var chunk__52952 = null;
var count__52953 = (0);
var i__52954 = (0);
while(true){
if((i__52954 < count__52953)){
var vec__52961 = cljs.core._nth.call(null,chunk__52952,i__52954);
var x1 = cljs.core.nth.call(null,vec__52961,(0),null);
var y1 = cljs.core.nth.call(null,vec__52961,(1),null);
var x2 = cljs.core.nth.call(null,vec__52961,(2),null);
var y2 = cljs.core.nth.call(null,vec__52961,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__52967 = seq__52951;
var G__52968 = chunk__52952;
var G__52969 = count__52953;
var G__52970 = (i__52954 + (1));
seq__52951 = G__52967;
chunk__52952 = G__52968;
count__52953 = G__52969;
i__52954 = G__52970;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__52951);
if(temp__5735__auto__){
var seq__52951__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52951__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__52951__$1);
var G__52971 = cljs.core.chunk_rest.call(null,seq__52951__$1);
var G__52972 = c__4550__auto__;
var G__52973 = cljs.core.count.call(null,c__4550__auto__);
var G__52974 = (0);
seq__52951 = G__52971;
chunk__52952 = G__52972;
count__52953 = G__52973;
i__52954 = G__52974;
continue;
} else {
var vec__52964 = cljs.core.first.call(null,seq__52951__$1);
var x1 = cljs.core.nth.call(null,vec__52964,(0),null);
var y1 = cljs.core.nth.call(null,vec__52964,(1),null);
var x2 = cljs.core.nth.call(null,vec__52964,(2),null);
var y2 = cljs.core.nth.call(null,vec__52964,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__52975 = cljs.core.next.call(null,seq__52951__$1);
var G__52976 = null;
var G__52977 = (0);
var G__52978 = (0);
seq__52951 = G__52975;
chunk__52952 = G__52976;
count__52953 = G__52977;
i__52954 = G__52978;
continue;
}
} else {
return null;
}
}
break;
}
});
drawings.core.run_sketch = (function drawings$core$run_sketch(){
drawings.core.drawings = (function drawings$core$run_sketch_$_drawings(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"drawings",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,drawings.core.update_state))?(function() { 
var G__52979__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.update_state,args);
};
var G__52979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52980__i = 0, G__52980__a = new Array(arguments.length -  0);
while (G__52980__i < G__52980__a.length) {G__52980__a[G__52980__i] = arguments[G__52980__i + 0]; ++G__52980__i;}
  args = new cljs.core.IndexedSeq(G__52980__a,0,null);
} 
return G__52979__delegate.call(this,args);};
G__52979.cljs$lang$maxFixedArity = 0;
G__52979.cljs$lang$applyTo = (function (arglist__52981){
var args = cljs.core.seq(arglist__52981);
return G__52979__delegate(args);
});
G__52979.cljs$core$IFn$_invoke$arity$variadic = G__52979__delegate;
return G__52979;
})()
:drawings.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,drawings.core.setup))?(function() { 
var G__52982__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.setup,args);
};
var G__52982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52983__i = 0, G__52983__a = new Array(arguments.length -  0);
while (G__52983__i < G__52983__a.length) {G__52983__a[G__52983__i] = arguments[G__52983__i + 0]; ++G__52983__i;}
  args = new cljs.core.IndexedSeq(G__52983__a,0,null);
} 
return G__52982__delegate.call(this,args);};
G__52982.cljs$lang$maxFixedArity = 0;
G__52982.cljs$lang$applyTo = (function (arglist__52984){
var args = cljs.core.seq(arglist__52984);
return G__52982__delegate(args);
});
G__52982.cljs$core$IFn$_invoke$arity$variadic = G__52982__delegate;
return G__52982;
})()
:drawings.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,drawings.core.draw_state))?(function() { 
var G__52985__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.draw_state,args);
};
var G__52985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52986__i = 0, G__52986__a = new Array(arguments.length -  0);
while (G__52986__i < G__52986__a.length) {G__52986__a[G__52986__i] = arguments[G__52986__i + 0]; ++G__52986__i;}
  args = new cljs.core.IndexedSeq(G__52986__a,0,null);
} 
return G__52985__delegate.call(this,args);};
G__52985.cljs$lang$maxFixedArity = 0;
G__52985.cljs$lang$applyTo = (function (arglist__52987){
var args = cljs.core.seq(arglist__52987);
return G__52985__delegate(args);
});
G__52985.cljs$core$IFn$_invoke$arity$variadic = G__52985__delegate;
return G__52985;
})()
:drawings.core.draw_state));
});
goog.exportSymbol('drawings.core.drawings', drawings.core.drawings);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__27602__27603__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__27602__27603__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),drawings.core.drawings,new cljs.core.Keyword(null,"host-id","host-id",742376279),"drawings"], null));
}
});
goog.exportSymbol('drawings.core.run_sketch', drawings.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1571505324113
