// Compiled by ClojureScript 1.10.520 {}
goog.provide('drawings.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
drawings.core.setup = (function drawings$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return cljs.core.PersistentArrayMap.EMPTY;
});
drawings.core.tree_lines = (function drawings$core$tree_lines(x,y,amp,beg_space){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p__52701){
var vec__52702 = p__52701;
var layer1 = cljs.core.nth.call(null,vec__52702,(0),null);
var layer2 = cljs.core.nth.call(null,vec__52702,(1),null);
return cljs.core.mapv.call(null,((function (vec__52702,layer1,layer2){
return (function (p1,p2){
return cljs.core.concat.call(null,p1,p2);
});})(vec__52702,layer1,layer2))
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
return (function (p__52709){
var vec__52710 = p__52709;
var x__$1 = cljs.core.nth.call(null,vec__52710,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__52710,(1),null);
var a = (space + quil.core.random.call(null,(0)));
var bf = ((function (vertices_layers,space,depth,a,vec__52710,x__$1,y__$1,top_vertices){
return (function (p1__52700_SHARP_){
return ((amp * quil.core.sin.call(null,(3.14 * (p1__52700_SHARP_ / quil.core.width.call(null))))) + quil.core.random.call(null,(5)));
});})(vertices_layers,space,depth,a,vec__52710,x__$1,y__$1,top_vertices))
;
var lx = (x__$1 - a);
var rx = (x__$1 + a);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lx,(y__$1 - bf.call(null,lx))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,(y__$1 - bf.call(null,rx))], null)], null);
});})(vertices_layers,space,depth,top_vertices))
,top_vertices));
var G__52713 = cljs.core.conj.call(null,vertices_layers,new_top_vertices);
var G__52714 = (0.5 * space);
var G__52715 = (depth + (1));
vertices_layers = G__52713;
space = G__52714;
depth = G__52715;
continue;
}
break;
}
})())));
});
drawings.core.update_state = (function drawings$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703),cljs.core.concat.call(null,drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(30),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(33),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(29),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(28),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(25),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(20),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(15),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(13),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(10),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(7),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(5),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(3),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(1),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(0),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(0),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(0),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(-1),(75)),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null),(-2),(75)))], null);
});
drawings.core.draw_state = (function drawings$core$draw_state(p__52716){
var map__52717 = p__52716;
var map__52717__$1 = (((((!((map__52717 == null))))?(((((map__52717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52717):map__52717);
var tree_lines = cljs.core.get.call(null,map__52717__$1,new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703));
quil.core.background.call(null,(140));

quil.core.stroke_weight.call(null,0.3);

var seq__52719 = cljs.core.seq.call(null,tree_lines);
var chunk__52720 = null;
var count__52721 = (0);
var i__52722 = (0);
while(true){
if((i__52722 < count__52721)){
var vec__52729 = cljs.core._nth.call(null,chunk__52720,i__52722);
var x1 = cljs.core.nth.call(null,vec__52729,(0),null);
var y1 = cljs.core.nth.call(null,vec__52729,(1),null);
var x2 = cljs.core.nth.call(null,vec__52729,(2),null);
var y2 = cljs.core.nth.call(null,vec__52729,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__52735 = seq__52719;
var G__52736 = chunk__52720;
var G__52737 = count__52721;
var G__52738 = (i__52722 + (1));
seq__52719 = G__52735;
chunk__52720 = G__52736;
count__52721 = G__52737;
i__52722 = G__52738;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__52719);
if(temp__5735__auto__){
var seq__52719__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52719__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__52719__$1);
var G__52739 = cljs.core.chunk_rest.call(null,seq__52719__$1);
var G__52740 = c__4550__auto__;
var G__52741 = cljs.core.count.call(null,c__4550__auto__);
var G__52742 = (0);
seq__52719 = G__52739;
chunk__52720 = G__52740;
count__52721 = G__52741;
i__52722 = G__52742;
continue;
} else {
var vec__52732 = cljs.core.first.call(null,seq__52719__$1);
var x1 = cljs.core.nth.call(null,vec__52732,(0),null);
var y1 = cljs.core.nth.call(null,vec__52732,(1),null);
var x2 = cljs.core.nth.call(null,vec__52732,(2),null);
var y2 = cljs.core.nth.call(null,vec__52732,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__52743 = cljs.core.next.call(null,seq__52719__$1);
var G__52744 = null;
var G__52745 = (0);
var G__52746 = (0);
seq__52719 = G__52743;
chunk__52720 = G__52744;
count__52721 = G__52745;
i__52722 = G__52746;
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
var G__52747__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.update_state,args);
};
var G__52747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52748__i = 0, G__52748__a = new Array(arguments.length -  0);
while (G__52748__i < G__52748__a.length) {G__52748__a[G__52748__i] = arguments[G__52748__i + 0]; ++G__52748__i;}
  args = new cljs.core.IndexedSeq(G__52748__a,0,null);
} 
return G__52747__delegate.call(this,args);};
G__52747.cljs$lang$maxFixedArity = 0;
G__52747.cljs$lang$applyTo = (function (arglist__52749){
var args = cljs.core.seq(arglist__52749);
return G__52747__delegate(args);
});
G__52747.cljs$core$IFn$_invoke$arity$variadic = G__52747__delegate;
return G__52747;
})()
:drawings.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,drawings.core.setup))?(function() { 
var G__52750__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.setup,args);
};
var G__52750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52751__i = 0, G__52751__a = new Array(arguments.length -  0);
while (G__52751__i < G__52751__a.length) {G__52751__a[G__52751__i] = arguments[G__52751__i + 0]; ++G__52751__i;}
  args = new cljs.core.IndexedSeq(G__52751__a,0,null);
} 
return G__52750__delegate.call(this,args);};
G__52750.cljs$lang$maxFixedArity = 0;
G__52750.cljs$lang$applyTo = (function (arglist__52752){
var args = cljs.core.seq(arglist__52752);
return G__52750__delegate(args);
});
G__52750.cljs$core$IFn$_invoke$arity$variadic = G__52750__delegate;
return G__52750;
})()
:drawings.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,drawings.core.draw_state))?(function() { 
var G__52753__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.draw_state,args);
};
var G__52753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52754__i = 0, G__52754__a = new Array(arguments.length -  0);
while (G__52754__i < G__52754__a.length) {G__52754__a[G__52754__i] = arguments[G__52754__i + 0]; ++G__52754__i;}
  args = new cljs.core.IndexedSeq(G__52754__a,0,null);
} 
return G__52753__delegate.call(this,args);};
G__52753.cljs$lang$maxFixedArity = 0;
G__52753.cljs$lang$applyTo = (function (arglist__52755){
var args = cljs.core.seq(arglist__52755);
return G__52753__delegate(args);
});
G__52753.cljs$core$IFn$_invoke$arity$variadic = G__52753__delegate;
return G__52753;
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

//# sourceMappingURL=core.js.map?rel=1571505263401
