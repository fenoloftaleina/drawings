// Compiled by ClojureScript 1.10.520 {}
goog.provide('drawings.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
drawings.core.point_on = (function drawings$core$point_on(p__67380,fract){
var vec__67381 = p__67380;
var x1 = cljs.core.nth.call(null,vec__67381,(0),null);
var y1 = cljs.core.nth.call(null,vec__67381,(1),null);
var x2 = cljs.core.nth.call(null,vec__67381,(2),null);
var y2 = cljs.core.nth.call(null,vec__67381,(3),null);
var ny = (y1 - (fract * (y1 - y2)));
var a = ((y2 - y1) / (x2 - x1));
var b = (y1 - (a * x1));
var nx = ((ny - b) / a);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null);
});
drawings.core.start_x = (function drawings$core$start_x(){
return (quil.core.width.call(null) / 2.0);
});
drawings.core.start_y = (function drawings$core$start_y(){
return quil.core.height.call(null);
});
drawings.core.other_side = (function drawings$core$other_side(x){
return ((x * (-1)) + ((2) * drawings.core.start_x.call(null)));
});
drawings.core.max_hop = (5);
drawings.core.branches = (function drawings$core$branches(p__67384){
var map__67385 = p__67384;
var map__67385__$1 = (((((!((map__67385 == null))))?(((((map__67385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67385):map__67385);
var vec__67386 = cljs.core.get.call(null,map__67385__$1,new cljs.core.Keyword(null,"cur-line","cur-line",-1413380545));
var x1 = cljs.core.nth.call(null,vec__67386,(0),null);
var y1 = cljs.core.nth.call(null,vec__67386,(1),null);
var x2 = cljs.core.nth.call(null,vec__67386,(2),null);
var y2 = cljs.core.nth.call(null,vec__67386,(3),null);
var cur_line = cljs.core.get.call(null,map__67385__$1,new cljs.core.Keyword(null,"cur-line","cur-line",-1413380545));
var branch = cljs.core.get.call(null,map__67385__$1,new cljs.core.Keyword(null,"branch","branch",-74633925));
var depth = cljs.core.get.call(null,map__67385__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var hops_to_make = cljs.core.get.call(null,map__67385__$1,new cljs.core.Keyword(null,"hops-to-make","hops-to-make",955644713));
var left = cljs.core.get.call(null,map__67385__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var lines = cljs.core.get.call(null,map__67385__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var cur_line__$1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,x2,y2], null);
if((depth > drawings.core.max_hop)){
return lines;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (cur_line__$1,map__67385,map__67385__$1,vec__67386,x1,y1,x2,y2,cur_line,branch,depth,hops_to_make,left,lines){
return (function (hop){
var fract_of_cur_line = (hop / hops_to_make);
var fract_of_length = (cljs.core.partial.call(null,cljs.core._,(1)).call(null,(hop / hops_to_make)) / depth);
var vec__67390 = drawings.core.point_on.call(null,cur_line__$1,fract_of_cur_line);
var nx1 = cljs.core.nth.call(null,vec__67390,(0),null);
var ny1 = cljs.core.nth.call(null,vec__67390,(1),null);
var nx2 = (nx1 + ((fract_of_length * ((100) / branch)) * (cljs.core.truth_(left)?(1):(-1))));
var ny2 = (ny1 - (fract_of_length * ((55) * depth)));
return drawings.core.branches.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cur-line","cur-line",-1413380545),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1,nx2,ny2], null),new cljs.core.Keyword(null,"branch","branch",-74633925),(branch + hop),new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)),new cljs.core.Keyword(null,"hops-to-make","hops-to-make",955644713),(hops_to_make - (1)),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.not.call(null,left),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.call(null,cljs.core.conj.call(null,lines,cur_line__$1),cljs.core.update.call(null,cljs.core.update.call(null,cur_line__$1,(0),drawings.core.other_side),(2),drawings.core.other_side))], null));
});})(cur_line__$1,map__67385,map__67385__$1,vec__67386,x1,y1,x2,y2,cur_line,branch,depth,hops_to_make,left,lines))
,cljs.core.range.call(null,(1),(hops_to_make + (1)))));
}
});
drawings.core.tree_lines = (function drawings$core$tree_lines(x,y){
return drawings.core.branches.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cur-line","cur-line",-1413380545),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(x + 1.0E-4),(y - (150))], null),new cljs.core.Keyword(null,"branch","branch",-74633925),(1),new cljs.core.Keyword(null,"depth","depth",1768663640),(1),new cljs.core.Keyword(null,"hops-to-make","hops-to-make",955644713),drawings.core.max_hop,new cljs.core.Keyword(null,"left","left",-399115937),true,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.PersistentVector.EMPTY], null));
});
drawings.core.setup = (function drawings$core$setup(){
quil.core.frame_rate.call(null,(1));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703),drawings.core.tree_lines.call(null,drawings.core.start_x.call(null),drawings.core.start_y.call(null))], null);
});
drawings.core.update_state = (function drawings$core$update_state(state){
return state;
});
drawings.core.draw_state = (function drawings$core$draw_state(p__67393){
var map__67394 = p__67393;
var map__67394__$1 = (((((!((map__67394 == null))))?(((((map__67394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67394):map__67394);
var tree_lines = cljs.core.get.call(null,map__67394__$1,new cljs.core.Keyword(null,"tree-lines","tree-lines",-418017703));
quil.core.background.call(null,(140));

quil.core.stroke_weight.call(null,0.3);

var seq__67396 = cljs.core.seq.call(null,tree_lines);
var chunk__67397 = null;
var count__67398 = (0);
var i__67399 = (0);
while(true){
if((i__67399 < count__67398)){
var vec__67406 = cljs.core._nth.call(null,chunk__67397,i__67399);
var x1 = cljs.core.nth.call(null,vec__67406,(0),null);
var y1 = cljs.core.nth.call(null,vec__67406,(1),null);
var x2 = cljs.core.nth.call(null,vec__67406,(2),null);
var y2 = cljs.core.nth.call(null,vec__67406,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__67412 = seq__67396;
var G__67413 = chunk__67397;
var G__67414 = count__67398;
var G__67415 = (i__67399 + (1));
seq__67396 = G__67412;
chunk__67397 = G__67413;
count__67398 = G__67414;
i__67399 = G__67415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__67396);
if(temp__5735__auto__){
var seq__67396__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67396__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__67396__$1);
var G__67416 = cljs.core.chunk_rest.call(null,seq__67396__$1);
var G__67417 = c__4550__auto__;
var G__67418 = cljs.core.count.call(null,c__4550__auto__);
var G__67419 = (0);
seq__67396 = G__67416;
chunk__67397 = G__67417;
count__67398 = G__67418;
i__67399 = G__67419;
continue;
} else {
var vec__67409 = cljs.core.first.call(null,seq__67396__$1);
var x1 = cljs.core.nth.call(null,vec__67409,(0),null);
var y1 = cljs.core.nth.call(null,vec__67409,(1),null);
var x2 = cljs.core.nth.call(null,vec__67409,(2),null);
var y2 = cljs.core.nth.call(null,vec__67409,(3),null);
quil.core.line.call(null,x1,y1,x2,y2);


var G__67420 = cljs.core.next.call(null,seq__67396__$1);
var G__67421 = null;
var G__67422 = (0);
var G__67423 = (0);
seq__67396 = G__67420;
chunk__67397 = G__67421;
count__67398 = G__67422;
i__67399 = G__67423;
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
var G__67424__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.update_state,args);
};
var G__67424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67425__i = 0, G__67425__a = new Array(arguments.length -  0);
while (G__67425__i < G__67425__a.length) {G__67425__a[G__67425__i] = arguments[G__67425__i + 0]; ++G__67425__i;}
  args = new cljs.core.IndexedSeq(G__67425__a,0,null);
} 
return G__67424__delegate.call(this,args);};
G__67424.cljs$lang$maxFixedArity = 0;
G__67424.cljs$lang$applyTo = (function (arglist__67426){
var args = cljs.core.seq(arglist__67426);
return G__67424__delegate(args);
});
G__67424.cljs$core$IFn$_invoke$arity$variadic = G__67424__delegate;
return G__67424;
})()
:drawings.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,drawings.core.setup))?(function() { 
var G__67427__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.setup,args);
};
var G__67427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67428__i = 0, G__67428__a = new Array(arguments.length -  0);
while (G__67428__i < G__67428__a.length) {G__67428__a[G__67428__i] = arguments[G__67428__i + 0]; ++G__67428__i;}
  args = new cljs.core.IndexedSeq(G__67428__a,0,null);
} 
return G__67427__delegate.call(this,args);};
G__67427.cljs$lang$maxFixedArity = 0;
G__67427.cljs$lang$applyTo = (function (arglist__67429){
var args = cljs.core.seq(arglist__67429);
return G__67427__delegate(args);
});
G__67427.cljs$core$IFn$_invoke$arity$variadic = G__67427__delegate;
return G__67427;
})()
:drawings.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,drawings.core.draw_state))?(function() { 
var G__67430__delegate = function (args){
return cljs.core.apply.call(null,drawings.core.draw_state,args);
};
var G__67430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67431__i = 0, G__67431__a = new Array(arguments.length -  0);
while (G__67431__i < G__67431__a.length) {G__67431__a[G__67431__i] = arguments[G__67431__i + 0]; ++G__67431__i;}
  args = new cljs.core.IndexedSeq(G__67431__a,0,null);
} 
return G__67430__delegate.call(this,args);};
G__67430.cljs$lang$maxFixedArity = 0;
G__67430.cljs$lang$applyTo = (function (arglist__67432){
var args = cljs.core.seq(arglist__67432);
return G__67430__delegate(args);
});
G__67430.cljs$core$IFn$_invoke$arity$variadic = G__67430__delegate;
return G__67430;
})()
:drawings.core.draw_state));
});
goog.exportSymbol('drawings.core.drawings', drawings.core.drawings);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20929__20930__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20929__20930__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),drawings.core.drawings,new cljs.core.Keyword(null,"host-id","host-id",742376279),"drawings"], null));
}
});
goog.exportSymbol('drawings.core.run_sketch', drawings.core.run_sketch);
drawings.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1572039709515
