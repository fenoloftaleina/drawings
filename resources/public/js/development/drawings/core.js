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
drawings.core.tree_lines = (function drawings$core$tree_lines(x,y){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p__34026){
var vec__34027 = p__34026;
var layer1 = cljs.core.nth.call(null,vec__34027,(0),null);
var layer2 = cljs.core.nth.call(null,vec__34027,(1),null);
var iter__4523__auto__ = ((function (vec__34027,layer1,layer2){
return (function drawings$core$tree_lines_$_iter__34030(s__34031){
return (new cljs.core.LazySeq(null,((function (vec__34027,layer1,layer2){
return (function (){
var s__34031__$1 = s__34031;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34031__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var p1 = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__34031__$1,p1,xs__6292__auto__,temp__5735__auto__,vec__34027,layer1,layer2){
return (function drawings$core$tree_lines_$_iter__34030_$_iter__34032(s__34033){
return (new cljs.core.LazySeq(null,((function (s__34031__$1,p1,xs__6292__auto__,temp__5735__auto__,vec__34027,layer1,layer2){
return (function (){
var s__34033__$1 = s__34033;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__34033__$1);
if(temp__5735__auto____$1){
var s__34033__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34033__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34033__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34035 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34034 = (0);
while(true){
if((i__34034 < size__4522__auto__)){
var p2 = cljs.core._nth.call(null,c__4521__auto__,i__34034);
cljs.core.chunk_append.call(null,b__34035,cljs.core.concat.call(null,p1,p2));

var G__34044 = (i__34034 + (1));
i__34034 = G__34044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34035),drawings$core$tree_lines_$_iter__34030_$_iter__34032.call(null,cljs.core.chunk_rest.call(null,s__34033__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34035),null);
}
} else {
var p2 = cljs.core.first.call(null,s__34033__$2);
return cljs.core.cons.call(null,cljs.core.concat.call(null,p1,p2),drawings$core$tree_lines_$_iter__34030_$_iter__34032.call(null,cljs.core.rest.call(null,s__34033__$2)));
}
} else {
return null;
}
break;
}
});})(s__34031__$1,p1,xs__6292__auto__,temp__5735__auto__,vec__34027,layer1,layer2))
,null,null));
});})(s__34031__$1,p1,xs__6292__auto__,temp__5735__auto__,vec__34027,layer1,layer2))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,layer2));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,drawings$core$tree_lines_$_iter__34030.call(null,cljs.core.rest.call(null,s__34031__$1)));
} else {
var G__34045 = cljs.core.rest.call(null,s__34031__$1);
s__34031__$1 = G__34045;
continue;
}
} else {
return null;
}
break;
}
});})(vec__34027,layer1,layer2))
,null,null));
});})(vec__34027,layer1,layer2))
;
return iter__4523__auto__.call(null,layer1);
}),cljs.core.partition.call(null,(2),(1),(function (){var middle = (160);
var bottom = (300);
var vertices_layers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [middle,bottom], null)], null)], null);
var depth = (0);
while(true){
if((depth > (5))){
return vertices_layers;
} else {
var top_vertices = cljs.core.last.call(null,vertices_layers);
var new_top_vertices = cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,((function (vertices_layers,depth,top_vertices,middle,bottom){
return (function (p__34040){
var vec__34041 = p__34040;
var x__$1 = cljs.core.nth.call(null,vec__34041,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__34041,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x__$1 - (20)) - quil.core.random.call(null,(5))),((y__$1 - (((5) * depth) * depth)) - quil.core.random.call(null,(7)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x__$1 + (20)) + quil.core.random.call(null,(5))),((y__$1 - (((5) * depth) * depth)) - quil.core.random.call(null,(7)))], null)], null);
});})(vertices_layers,depth,top_vertices,middle,bottom))
,top_vertices));
var G__34046 = cljs.core.conj.call(null,vertices_layers,new_top_vertices);
var G__34047 = (depth + (1));
vertices_layers = G__34046;
depth = G__34047;
continue;
}
break;
}
})())));
});
drawings.core.update_state = (function drawings$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null))], null);
});
drawings.core.draw_state = (function drawings$core$draw_state(p__34048){
var map__34049 = p__34048;
var map__34049__$1 = (((((!((map__34049 == null))))?(((((map__34049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34049):map__34049);
var tree_lines = cljs.core.get.call(null,map__34049__$1,new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703));
quil.core.background.call(null,(140));

quil.core.stroke_weight.call(null,0.3);

var seq__34051 = cljs.core.seq.call(null,tree_lines);
var chunk__34052 = null;
var count__34053 = (0);
var i__34054 = (0);
while(true){
if((i__34054 < count__34053)){
var vec__34061 = cljs.core._nth.call(null,chunk__34052,i__34054);
var x1 = cljs.core.nth.call(null,vec__34061,(0),null);
var y1 = cljs.core.nth.call(null,vec__34061,(1),null);
var x2 = cljs.core.nth.call(null,vec__34061,(2),null);
var y2 = cljs.core.nth.call(null,vec__34061,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__34067 = seq__34051;
var G__34068 = chunk__34052;
var G__34069 = count__34053;
var G__34070 = (i__34054 + (1));
seq__34051 = G__34067;
chunk__34052 = G__34068;
count__34053 = G__34069;
i__34054 = G__34070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34051);
if(temp__5735__auto__){
var seq__34051__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34051__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34051__$1);
var G__34071 = cljs.core.chunk_rest.call(null,seq__34051__$1);
var G__34072 = c__4550__auto__;
var G__34073 = cljs.core.count.call(null,c__4550__auto__);
var G__34074 = (0);
seq__34051 = G__34071;
chunk__34052 = G__34072;
count__34053 = G__34073;
i__34054 = G__34074;
continue;
} else {
var vec__34064 = cljs.core.first.call(null,seq__34051__$1);
var x1 = cljs.core.nth.call(null,vec__34064,(0),null);
var y1 = cljs.core.nth.call(null,vec__34064,(1),null);
var x2 = cljs.core.nth.call(null,vec__34064,(2),null);
var y2 = cljs.core.nth.call(null,vec__34064,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__34075 = cljs.core.next.call(null,seq__34051__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__34051 = G__34075;
chunk__34052 = G__34076;
count__34053 = G__34077;
i__34054 = G__34078;
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
var G__34079__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.update_state,args);
};
var G__34079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34080__i = 0, G__34080__a = new Array(arguments.length -  0);
while (G__34080__i < G__34080__a.length) {G__34080__a[G__34080__i] = arguments[G__34080__i + 0]; ++G__34080__i;}
  args = new cljs.core.IndexedSeq(G__34080__a,0,null);
} 
return G__34079__delegate.call(this,args);};
G__34079.cljs$lang$maxFixedArity = 0;
G__34079.cljs$lang$applyTo = (function (arglist__34081){
var args = cljs.core.seq(arglist__34081);
return G__34079__delegate(args);
});
G__34079.cljs$core$IFn$_invoke$arity$variadic = G__34079__delegate;
return G__34079;
})()
:drawings.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,drawings.core.setup))?(function() { 
var G__34082__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.setup,args);
};
var G__34082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34083__i = 0, G__34083__a = new Array(arguments.length -  0);
while (G__34083__i < G__34083__a.length) {G__34083__a[G__34083__i] = arguments[G__34083__i + 0]; ++G__34083__i;}
  args = new cljs.core.IndexedSeq(G__34083__a,0,null);
} 
return G__34082__delegate.call(this,args);};
G__34082.cljs$lang$maxFixedArity = 0;
G__34082.cljs$lang$applyTo = (function (arglist__34084){
var args = cljs.core.seq(arglist__34084);
return G__34082__delegate(args);
});
G__34082.cljs$core$IFn$_invoke$arity$variadic = G__34082__delegate;
return G__34082;
})()
:drawings.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,drawings.core.draw_state))?(function() { 
var G__34085__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.draw_state,args);
};
var G__34085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34086__i = 0, G__34086__a = new Array(arguments.length -  0);
while (G__34086__i < G__34086__a.length) {G__34086__a[G__34086__i] = arguments[G__34086__i + 0]; ++G__34086__i;}
  args = new cljs.core.IndexedSeq(G__34086__a,0,null);
} 
return G__34085__delegate.call(this,args);};
G__34085.cljs$lang$maxFixedArity = 0;
G__34085.cljs$lang$applyTo = (function (arglist__34087){
var args = cljs.core.seq(arglist__34087);
return G__34085__delegate(args);
});
G__34085.cljs$core$IFn$_invoke$arity$variadic = G__34085__delegate;
return G__34085;
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

//# sourceMappingURL=core.js.map?rel=1571434516285
