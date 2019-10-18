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
drawings.core.tree_lines = (function drawings$core$tree_lines(x,y){
var iter__4523__auto__ = (function drawings$core$tree_lines_$_iter__29060(s__29061){
return (new cljs.core.LazySeq(null,(function (){
var s__29061__$1 = s__29061;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__29061__$1);
if(temp__5735__auto__){
var s__29061__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29061__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__29061__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__29063 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__29062 = (0);
while(true){
if((i__29062 < size__4522__auto__)){
var j = cljs.core._nth.call(null,c__4521__auto__,i__29062);
cljs.core.chunk_append.call(null,b__29063,(function (){var w = ((j + (1)) * (2));
var d = (10);
var iter__4523__auto__ = ((function (i__29062,w,d,j,c__4521__auto__,size__4522__auto__,b__29063,s__29061__$2,temp__5735__auto__){
return (function drawings$core$tree_lines_$_iter__29060_$_iter__29064(s__29065){
return (new cljs.core.LazySeq(null,((function (i__29062,w,d,j,c__4521__auto__,size__4522__auto__,b__29063,s__29061__$2,temp__5735__auto__){
return (function (){
var s__29065__$1 = s__29065;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__29065__$1);
if(temp__5735__auto____$1){
var s__29065__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29065__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__29065__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__29067 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__29066 = (0);
while(true){
if((i__29066 < size__4522__auto____$1)){
var i = cljs.core._nth.call(null,c__4521__auto____$1,i__29066);
cljs.core.chunk_append.call(null,b__29067,(i * d));

var G__29072 = (i__29066 + (1));
i__29066 = G__29072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29067),drawings$core$tree_lines_$_iter__29060_$_iter__29064.call(null,cljs.core.chunk_rest.call(null,s__29065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29067),null);
}
} else {
var i = cljs.core.first.call(null,s__29065__$2);
return cljs.core.cons.call(null,(i * d),drawings$core$tree_lines_$_iter__29060_$_iter__29064.call(null,cljs.core.rest.call(null,s__29065__$2)));
}
} else {
return null;
}
break;
}
});})(i__29062,w,d,j,c__4521__auto__,size__4522__auto__,b__29063,s__29061__$2,temp__5735__auto__))
,null,null));
});})(i__29062,w,d,j,c__4521__auto__,size__4522__auto__,b__29063,s__29061__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,w));
})());

var G__29073 = (i__29062 + (1));
i__29062 = G__29073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29063),drawings$core$tree_lines_$_iter__29060.call(null,cljs.core.chunk_rest.call(null,s__29061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29063),null);
}
} else {
var j = cljs.core.first.call(null,s__29061__$2);
return cljs.core.cons.call(null,(function (){var w = ((j + (1)) * (2));
var d = (10);
var iter__4523__auto__ = ((function (w,d,j,s__29061__$2,temp__5735__auto__){
return (function drawings$core$tree_lines_$_iter__29060_$_iter__29068(s__29069){
return (new cljs.core.LazySeq(null,((function (w,d,j,s__29061__$2,temp__5735__auto__){
return (function (){
var s__29069__$1 = s__29069;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__29069__$1);
if(temp__5735__auto____$1){
var s__29069__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29069__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__29069__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__29071 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__29070 = (0);
while(true){
if((i__29070 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__29070);
cljs.core.chunk_append.call(null,b__29071,(i * d));

var G__29074 = (i__29070 + (1));
i__29070 = G__29074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29071),drawings$core$tree_lines_$_iter__29060_$_iter__29068.call(null,cljs.core.chunk_rest.call(null,s__29069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29071),null);
}
} else {
var i = cljs.core.first.call(null,s__29069__$2);
return cljs.core.cons.call(null,(i * d),drawings$core$tree_lines_$_iter__29060_$_iter__29068.call(null,cljs.core.rest.call(null,s__29069__$2)));
}
} else {
return null;
}
break;
}
});})(w,d,j,s__29061__$2,temp__5735__auto__))
,null,null));
});})(w,d,j,s__29061__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,w));
})(),drawings$core$tree_lines_$_iter__29060.call(null,cljs.core.rest.call(null,s__29061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(6)));
});
drawings.core.update_state = (function drawings$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703),drawings.core.tree_lines.call(null,(quil.core.width.call(null) / 2.0),quil.core.height.call(null))], null);
});
drawings.core.draw_state = (function drawings$core$draw_state(p__29075){
var map__29076 = p__29075;
var map__29076__$1 = (((((!((map__29076 == null))))?(((((map__29076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29076):map__29076);
var tree_lines = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703));
quil.core.background.call(null,(140));

quil.core.stroke_weight.call(null,0.3);

var seq__29078 = cljs.core.seq.call(null,tree_lines);
var chunk__29079 = null;
var count__29080 = (0);
var i__29081 = (0);
while(true){
if((i__29081 < count__29080)){
var vec__29088 = cljs.core._nth.call(null,chunk__29079,i__29081);
var x1 = cljs.core.nth.call(null,vec__29088,(0),null);
var y1 = cljs.core.nth.call(null,vec__29088,(1),null);
var x2 = cljs.core.nth.call(null,vec__29088,(2),null);
var y2 = cljs.core.nth.call(null,vec__29088,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__29094 = seq__29078;
var G__29095 = chunk__29079;
var G__29096 = count__29080;
var G__29097 = (i__29081 + (1));
seq__29078 = G__29094;
chunk__29079 = G__29095;
count__29080 = G__29096;
i__29081 = G__29097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29078);
if(temp__5735__auto__){
var seq__29078__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29078__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29078__$1);
var G__29098 = cljs.core.chunk_rest.call(null,seq__29078__$1);
var G__29099 = c__4550__auto__;
var G__29100 = cljs.core.count.call(null,c__4550__auto__);
var G__29101 = (0);
seq__29078 = G__29098;
chunk__29079 = G__29099;
count__29080 = G__29100;
i__29081 = G__29101;
continue;
} else {
var vec__29091 = cljs.core.first.call(null,seq__29078__$1);
var x1 = cljs.core.nth.call(null,vec__29091,(0),null);
var y1 = cljs.core.nth.call(null,vec__29091,(1),null);
var x2 = cljs.core.nth.call(null,vec__29091,(2),null);
var y2 = cljs.core.nth.call(null,vec__29091,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__29102 = cljs.core.next.call(null,seq__29078__$1);
var G__29103 = null;
var G__29104 = (0);
var G__29105 = (0);
seq__29078 = G__29102;
chunk__29079 = G__29103;
count__29080 = G__29104;
i__29081 = G__29105;
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
var G__29106__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.update_state,args);
};
var G__29106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29107__i = 0, G__29107__a = new Array(arguments.length -  0);
while (G__29107__i < G__29107__a.length) {G__29107__a[G__29107__i] = arguments[G__29107__i + 0]; ++G__29107__i;}
  args = new cljs.core.IndexedSeq(G__29107__a,0,null);
} 
return G__29106__delegate.call(this,args);};
G__29106.cljs$lang$maxFixedArity = 0;
G__29106.cljs$lang$applyTo = (function (arglist__29108){
var args = cljs.core.seq(arglist__29108);
return G__29106__delegate(args);
});
G__29106.cljs$core$IFn$_invoke$arity$variadic = G__29106__delegate;
return G__29106;
})()
:drawings.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,drawings.core.setup))?(function() { 
var G__29109__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.setup,args);
};
var G__29109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29110__i = 0, G__29110__a = new Array(arguments.length -  0);
while (G__29110__i < G__29110__a.length) {G__29110__a[G__29110__i] = arguments[G__29110__i + 0]; ++G__29110__i;}
  args = new cljs.core.IndexedSeq(G__29110__a,0,null);
} 
return G__29109__delegate.call(this,args);};
G__29109.cljs$lang$maxFixedArity = 0;
G__29109.cljs$lang$applyTo = (function (arglist__29111){
var args = cljs.core.seq(arglist__29111);
return G__29109__delegate(args);
});
G__29109.cljs$core$IFn$_invoke$arity$variadic = G__29109__delegate;
return G__29109;
})()
:drawings.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,drawings.core.draw_state))?(function() { 
var G__29112__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.draw_state,args);
};
var G__29112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29113__i = 0, G__29113__a = new Array(arguments.length -  0);
while (G__29113__i < G__29113__a.length) {G__29113__a[G__29113__i] = arguments[G__29113__i + 0]; ++G__29113__i;}
  args = new cljs.core.IndexedSeq(G__29113__a,0,null);
} 
return G__29112__delegate.call(this,args);};
G__29112.cljs$lang$maxFixedArity = 0;
G__29112.cljs$lang$applyTo = (function (arglist__29114){
var args = cljs.core.seq(arglist__29114);
return G__29112__delegate(args);
});
G__29112.cljs$core$IFn$_invoke$arity$variadic = G__29112__delegate;
return G__29112;
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

//# sourceMappingURL=core.js.map?rel=1571430741716
