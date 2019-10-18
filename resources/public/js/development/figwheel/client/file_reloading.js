// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25460_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25460_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25461 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25462 = null;
var count__25463 = (0);
var i__25464 = (0);
while(true){
if((i__25464 < count__25463)){
var n = cljs.core._nth.call(null,chunk__25462,i__25464);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25465 = seq__25461;
var G__25466 = chunk__25462;
var G__25467 = count__25463;
var G__25468 = (i__25464 + (1));
seq__25461 = G__25465;
chunk__25462 = G__25466;
count__25463 = G__25467;
i__25464 = G__25468;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25461);
if(temp__5735__auto__){
var seq__25461__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25461__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25461__$1);
var G__25469 = cljs.core.chunk_rest.call(null,seq__25461__$1);
var G__25470 = c__4550__auto__;
var G__25471 = cljs.core.count.call(null,c__4550__auto__);
var G__25472 = (0);
seq__25461 = G__25469;
chunk__25462 = G__25470;
count__25463 = G__25471;
i__25464 = G__25472;
continue;
} else {
var n = cljs.core.first.call(null,seq__25461__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25473 = cljs.core.next.call(null,seq__25461__$1);
var G__25474 = null;
var G__25475 = (0);
var G__25476 = (0);
seq__25461 = G__25473;
chunk__25462 = G__25474;
count__25463 = G__25475;
i__25464 = G__25476;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__25477){
var vec__25478 = p__25477;
var _ = cljs.core.nth.call(null,vec__25478,(0),null);
var v = cljs.core.nth.call(null,vec__25478,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__25481){
var vec__25482 = p__25481;
var k = cljs.core.nth.call(null,vec__25482,(0),null);
var v = cljs.core.nth.call(null,vec__25482,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25494_25502 = cljs.core.seq.call(null,deps);
var chunk__25495_25503 = null;
var count__25496_25504 = (0);
var i__25497_25505 = (0);
while(true){
if((i__25497_25505 < count__25496_25504)){
var dep_25506 = cljs.core._nth.call(null,chunk__25495_25503,i__25497_25505);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25506;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25506));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25506,(depth + (1)),state);
} else {
}


var G__25507 = seq__25494_25502;
var G__25508 = chunk__25495_25503;
var G__25509 = count__25496_25504;
var G__25510 = (i__25497_25505 + (1));
seq__25494_25502 = G__25507;
chunk__25495_25503 = G__25508;
count__25496_25504 = G__25509;
i__25497_25505 = G__25510;
continue;
} else {
var temp__5735__auto___25511 = cljs.core.seq.call(null,seq__25494_25502);
if(temp__5735__auto___25511){
var seq__25494_25512__$1 = temp__5735__auto___25511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25494_25512__$1)){
var c__4550__auto___25513 = cljs.core.chunk_first.call(null,seq__25494_25512__$1);
var G__25514 = cljs.core.chunk_rest.call(null,seq__25494_25512__$1);
var G__25515 = c__4550__auto___25513;
var G__25516 = cljs.core.count.call(null,c__4550__auto___25513);
var G__25517 = (0);
seq__25494_25502 = G__25514;
chunk__25495_25503 = G__25515;
count__25496_25504 = G__25516;
i__25497_25505 = G__25517;
continue;
} else {
var dep_25518 = cljs.core.first.call(null,seq__25494_25512__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25518;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25518));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25518,(depth + (1)),state);
} else {
}


var G__25519 = cljs.core.next.call(null,seq__25494_25512__$1);
var G__25520 = null;
var G__25521 = (0);
var G__25522 = (0);
seq__25494_25502 = G__25519;
chunk__25495_25503 = G__25520;
count__25496_25504 = G__25521;
i__25497_25505 = G__25522;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25498){
var vec__25499 = p__25498;
var seq__25500 = cljs.core.seq.call(null,vec__25499);
var first__25501 = cljs.core.first.call(null,seq__25500);
var seq__25500__$1 = cljs.core.next.call(null,seq__25500);
var x = first__25501;
var xs = seq__25500__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25499,seq__25500,first__25501,seq__25500__$1,x,xs,get_deps__$1){
return (function (p1__25485_SHARP_){
return clojure.set.difference.call(null,p1__25485_SHARP_,x);
});})(vec__25499,seq__25500,first__25501,seq__25500__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25523 = cljs.core.seq.call(null,provides);
var chunk__25524 = null;
var count__25525 = (0);
var i__25526 = (0);
while(true){
if((i__25526 < count__25525)){
var prov = cljs.core._nth.call(null,chunk__25524,i__25526);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25535_25543 = cljs.core.seq.call(null,requires);
var chunk__25536_25544 = null;
var count__25537_25545 = (0);
var i__25538_25546 = (0);
while(true){
if((i__25538_25546 < count__25537_25545)){
var req_25547 = cljs.core._nth.call(null,chunk__25536_25544,i__25538_25546);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25547,prov);


var G__25548 = seq__25535_25543;
var G__25549 = chunk__25536_25544;
var G__25550 = count__25537_25545;
var G__25551 = (i__25538_25546 + (1));
seq__25535_25543 = G__25548;
chunk__25536_25544 = G__25549;
count__25537_25545 = G__25550;
i__25538_25546 = G__25551;
continue;
} else {
var temp__5735__auto___25552 = cljs.core.seq.call(null,seq__25535_25543);
if(temp__5735__auto___25552){
var seq__25535_25553__$1 = temp__5735__auto___25552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25535_25553__$1)){
var c__4550__auto___25554 = cljs.core.chunk_first.call(null,seq__25535_25553__$1);
var G__25555 = cljs.core.chunk_rest.call(null,seq__25535_25553__$1);
var G__25556 = c__4550__auto___25554;
var G__25557 = cljs.core.count.call(null,c__4550__auto___25554);
var G__25558 = (0);
seq__25535_25543 = G__25555;
chunk__25536_25544 = G__25556;
count__25537_25545 = G__25557;
i__25538_25546 = G__25558;
continue;
} else {
var req_25559 = cljs.core.first.call(null,seq__25535_25553__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25559,prov);


var G__25560 = cljs.core.next.call(null,seq__25535_25553__$1);
var G__25561 = null;
var G__25562 = (0);
var G__25563 = (0);
seq__25535_25543 = G__25560;
chunk__25536_25544 = G__25561;
count__25537_25545 = G__25562;
i__25538_25546 = G__25563;
continue;
}
} else {
}
}
break;
}


var G__25564 = seq__25523;
var G__25565 = chunk__25524;
var G__25566 = count__25525;
var G__25567 = (i__25526 + (1));
seq__25523 = G__25564;
chunk__25524 = G__25565;
count__25525 = G__25566;
i__25526 = G__25567;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25523);
if(temp__5735__auto__){
var seq__25523__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25523__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25523__$1);
var G__25568 = cljs.core.chunk_rest.call(null,seq__25523__$1);
var G__25569 = c__4550__auto__;
var G__25570 = cljs.core.count.call(null,c__4550__auto__);
var G__25571 = (0);
seq__25523 = G__25568;
chunk__25524 = G__25569;
count__25525 = G__25570;
i__25526 = G__25571;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25523__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25539_25572 = cljs.core.seq.call(null,requires);
var chunk__25540_25573 = null;
var count__25541_25574 = (0);
var i__25542_25575 = (0);
while(true){
if((i__25542_25575 < count__25541_25574)){
var req_25576 = cljs.core._nth.call(null,chunk__25540_25573,i__25542_25575);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25576,prov);


var G__25577 = seq__25539_25572;
var G__25578 = chunk__25540_25573;
var G__25579 = count__25541_25574;
var G__25580 = (i__25542_25575 + (1));
seq__25539_25572 = G__25577;
chunk__25540_25573 = G__25578;
count__25541_25574 = G__25579;
i__25542_25575 = G__25580;
continue;
} else {
var temp__5735__auto___25581__$1 = cljs.core.seq.call(null,seq__25539_25572);
if(temp__5735__auto___25581__$1){
var seq__25539_25582__$1 = temp__5735__auto___25581__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25539_25582__$1)){
var c__4550__auto___25583 = cljs.core.chunk_first.call(null,seq__25539_25582__$1);
var G__25584 = cljs.core.chunk_rest.call(null,seq__25539_25582__$1);
var G__25585 = c__4550__auto___25583;
var G__25586 = cljs.core.count.call(null,c__4550__auto___25583);
var G__25587 = (0);
seq__25539_25572 = G__25584;
chunk__25540_25573 = G__25585;
count__25541_25574 = G__25586;
i__25542_25575 = G__25587;
continue;
} else {
var req_25588 = cljs.core.first.call(null,seq__25539_25582__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25588,prov);


var G__25589 = cljs.core.next.call(null,seq__25539_25582__$1);
var G__25590 = null;
var G__25591 = (0);
var G__25592 = (0);
seq__25539_25572 = G__25589;
chunk__25540_25573 = G__25590;
count__25541_25574 = G__25591;
i__25542_25575 = G__25592;
continue;
}
} else {
}
}
break;
}


var G__25593 = cljs.core.next.call(null,seq__25523__$1);
var G__25594 = null;
var G__25595 = (0);
var G__25596 = (0);
seq__25523 = G__25593;
chunk__25524 = G__25594;
count__25525 = G__25595;
i__25526 = G__25596;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25597_25601 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25598_25602 = null;
var count__25599_25603 = (0);
var i__25600_25604 = (0);
while(true){
if((i__25600_25604 < count__25599_25603)){
var ns_25605 = cljs.core._nth.call(null,chunk__25598_25602,i__25600_25604);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25605);


var G__25606 = seq__25597_25601;
var G__25607 = chunk__25598_25602;
var G__25608 = count__25599_25603;
var G__25609 = (i__25600_25604 + (1));
seq__25597_25601 = G__25606;
chunk__25598_25602 = G__25607;
count__25599_25603 = G__25608;
i__25600_25604 = G__25609;
continue;
} else {
var temp__5735__auto___25610 = cljs.core.seq.call(null,seq__25597_25601);
if(temp__5735__auto___25610){
var seq__25597_25611__$1 = temp__5735__auto___25610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25597_25611__$1)){
var c__4550__auto___25612 = cljs.core.chunk_first.call(null,seq__25597_25611__$1);
var G__25613 = cljs.core.chunk_rest.call(null,seq__25597_25611__$1);
var G__25614 = c__4550__auto___25612;
var G__25615 = cljs.core.count.call(null,c__4550__auto___25612);
var G__25616 = (0);
seq__25597_25601 = G__25613;
chunk__25598_25602 = G__25614;
count__25599_25603 = G__25615;
i__25600_25604 = G__25616;
continue;
} else {
var ns_25617 = cljs.core.first.call(null,seq__25597_25611__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25617);


var G__25618 = cljs.core.next.call(null,seq__25597_25611__$1);
var G__25619 = null;
var G__25620 = (0);
var G__25621 = (0);
seq__25597_25601 = G__25618;
chunk__25598_25602 = G__25619;
count__25599_25603 = G__25620;
i__25600_25604 = G__25621;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25622__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25623__i = 0, G__25623__a = new Array(arguments.length -  0);
while (G__25623__i < G__25623__a.length) {G__25623__a[G__25623__i] = arguments[G__25623__i + 0]; ++G__25623__i;}
  args = new cljs.core.IndexedSeq(G__25623__a,0,null);
} 
return G__25622__delegate.call(this,args);};
G__25622.cljs$lang$maxFixedArity = 0;
G__25622.cljs$lang$applyTo = (function (arglist__25624){
var args = cljs.core.seq(arglist__25624);
return G__25622__delegate(args);
});
G__25622.cljs$core$IFn$_invoke$arity$variadic = G__25622__delegate;
return G__25622;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__25625_SHARP_,p2__25626_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25625_SHARP_)),p2__25626_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__25627_SHARP_,p2__25628_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25627_SHARP_),p2__25628_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25629 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25629.addCallback(((function (G__25629){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25629))
);

G__25629.addErrback(((function (G__25629){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25629))
);

return G__25629;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25630){if((e25630 instanceof Error)){
var e = e25630;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25630;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25631){if((e25631 instanceof Error)){
var e = e25631;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25631;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25632 = cljs.core._EQ_;
var expr__25633 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25632.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25633))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25632.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25633))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25632.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25633))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25632,expr__25633){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25632,expr__25633))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25635,callback){
var map__25636 = p__25635;
var map__25636__$1 = (((((!((map__25636 == null))))?(((((map__25636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25636):map__25636);
var file_msg = map__25636__$1;
var request_url = cljs.core.get.call(null,map__25636__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25636,map__25636__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25636,map__25636__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto__){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto__){
return (function (state_25674){
var state_val_25675 = (state_25674[(1)]);
if((state_val_25675 === (7))){
var inst_25670 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25676_25702 = state_25674__$1;
(statearr_25676_25702[(2)] = inst_25670);

(statearr_25676_25702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (1))){
var state_25674__$1 = state_25674;
var statearr_25677_25703 = state_25674__$1;
(statearr_25677_25703[(2)] = null);

(statearr_25677_25703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (4))){
var inst_25640 = (state_25674[(7)]);
var inst_25640__$1 = (state_25674[(2)]);
var state_25674__$1 = (function (){var statearr_25678 = state_25674;
(statearr_25678[(7)] = inst_25640__$1);

return statearr_25678;
})();
if(cljs.core.truth_(inst_25640__$1)){
var statearr_25679_25704 = state_25674__$1;
(statearr_25679_25704[(1)] = (5));

} else {
var statearr_25680_25705 = state_25674__$1;
(statearr_25680_25705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (15))){
var inst_25653 = (state_25674[(8)]);
var inst_25655 = (state_25674[(9)]);
var inst_25657 = inst_25655.call(null,inst_25653);
var state_25674__$1 = state_25674;
var statearr_25681_25706 = state_25674__$1;
(statearr_25681_25706[(2)] = inst_25657);

(statearr_25681_25706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (13))){
var inst_25664 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25682_25707 = state_25674__$1;
(statearr_25682_25707[(2)] = inst_25664);

(statearr_25682_25707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (6))){
var state_25674__$1 = state_25674;
var statearr_25683_25708 = state_25674__$1;
(statearr_25683_25708[(2)] = null);

(statearr_25683_25708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (17))){
var inst_25661 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25684_25709 = state_25674__$1;
(statearr_25684_25709[(2)] = inst_25661);

(statearr_25684_25709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (3))){
var inst_25672 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25674__$1,inst_25672);
} else {
if((state_val_25675 === (12))){
var state_25674__$1 = state_25674;
var statearr_25685_25710 = state_25674__$1;
(statearr_25685_25710[(2)] = null);

(statearr_25685_25710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (2))){
var state_25674__$1 = state_25674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25674__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25675 === (11))){
var inst_25645 = (state_25674[(10)]);
var inst_25651 = figwheel.client.file_reloading.blocking_load.call(null,inst_25645);
var state_25674__$1 = state_25674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25674__$1,(14),inst_25651);
} else {
if((state_val_25675 === (9))){
var inst_25645 = (state_25674[(10)]);
var state_25674__$1 = state_25674;
if(cljs.core.truth_(inst_25645)){
var statearr_25686_25711 = state_25674__$1;
(statearr_25686_25711[(1)] = (11));

} else {
var statearr_25687_25712 = state_25674__$1;
(statearr_25687_25712[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (5))){
var inst_25640 = (state_25674[(7)]);
var inst_25646 = (state_25674[(11)]);
var inst_25645 = cljs.core.nth.call(null,inst_25640,(0),null);
var inst_25646__$1 = cljs.core.nth.call(null,inst_25640,(1),null);
var state_25674__$1 = (function (){var statearr_25688 = state_25674;
(statearr_25688[(11)] = inst_25646__$1);

(statearr_25688[(10)] = inst_25645);

return statearr_25688;
})();
if(cljs.core.truth_(inst_25646__$1)){
var statearr_25689_25713 = state_25674__$1;
(statearr_25689_25713[(1)] = (8));

} else {
var statearr_25690_25714 = state_25674__$1;
(statearr_25690_25714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (14))){
var inst_25655 = (state_25674[(9)]);
var inst_25645 = (state_25674[(10)]);
var inst_25653 = (state_25674[(2)]);
var inst_25654 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25655__$1 = cljs.core.get.call(null,inst_25654,inst_25645);
var state_25674__$1 = (function (){var statearr_25691 = state_25674;
(statearr_25691[(8)] = inst_25653);

(statearr_25691[(9)] = inst_25655__$1);

return statearr_25691;
})();
if(cljs.core.truth_(inst_25655__$1)){
var statearr_25692_25715 = state_25674__$1;
(statearr_25692_25715[(1)] = (15));

} else {
var statearr_25693_25716 = state_25674__$1;
(statearr_25693_25716[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (16))){
var inst_25653 = (state_25674[(8)]);
var inst_25659 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25653);
var state_25674__$1 = state_25674;
var statearr_25694_25717 = state_25674__$1;
(statearr_25694_25717[(2)] = inst_25659);

(statearr_25694_25717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (10))){
var inst_25666 = (state_25674[(2)]);
var state_25674__$1 = (function (){var statearr_25695 = state_25674;
(statearr_25695[(12)] = inst_25666);

return statearr_25695;
})();
var statearr_25696_25718 = state_25674__$1;
(statearr_25696_25718[(2)] = null);

(statearr_25696_25718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25675 === (8))){
var inst_25646 = (state_25674[(11)]);
var inst_25648 = eval(inst_25646);
var state_25674__$1 = state_25674;
var statearr_25697_25719 = state_25674__$1;
(statearr_25697_25719[(2)] = inst_25648);

(statearr_25697_25719[(1)] = (10));


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
});})(c__24702__auto__))
;
return ((function (switch__24679__auto__,c__24702__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24680__auto__ = null;
var figwheel$client$file_reloading$state_machine__24680__auto____0 = (function (){
var statearr_25698 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25698[(0)] = figwheel$client$file_reloading$state_machine__24680__auto__);

(statearr_25698[(1)] = (1));

return statearr_25698;
});
var figwheel$client$file_reloading$state_machine__24680__auto____1 = (function (state_25674){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_25674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e25699){if((e25699 instanceof Object)){
var ex__24683__auto__ = e25699;
var statearr_25700_25720 = state_25674;
(statearr_25700_25720[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25721 = state_25674;
state_25674 = G__25721;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24680__auto__ = function(state_25674){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24680__auto____1.call(this,state_25674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24680__auto____0;
figwheel$client$file_reloading$state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24680__auto____1;
return figwheel$client$file_reloading$state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto__))
})();
var state__24704__auto__ = (function (){var statearr_25701 = f__24703__auto__.call(null);
(statearr_25701[(6)] = c__24702__auto__);

return statearr_25701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto__))
);

return c__24702__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25723 = arguments.length;
switch (G__25723) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25725,callback){
var map__25726 = p__25725;
var map__25726__$1 = (((((!((map__25726 == null))))?(((((map__25726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25726):map__25726);
var file_msg = map__25726__$1;
var namespace = cljs.core.get.call(null,map__25726__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25726,map__25726__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25726,map__25726__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25728){
var map__25729 = p__25728;
var map__25729__$1 = (((((!((map__25729 == null))))?(((((map__25729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25729):map__25729);
var file_msg = map__25729__$1;
var namespace = cljs.core.get.call(null,map__25729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25731){
var map__25732 = p__25731;
var map__25732__$1 = (((((!((map__25732 == null))))?(((((map__25732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25732):map__25732);
var file_msg = map__25732__$1;
var namespace = cljs.core.get.call(null,map__25732__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25734,callback){
var map__25735 = p__25734;
var map__25735__$1 = (((((!((map__25735 == null))))?(((((map__25735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25735):map__25735);
var file_msg = map__25735__$1;
var request_url = cljs.core.get.call(null,map__25735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25735__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24702__auto___25785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto___25785,out){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto___25785,out){
return (function (state_25770){
var state_val_25771 = (state_25770[(1)]);
if((state_val_25771 === (1))){
var inst_25744 = cljs.core.seq.call(null,files);
var inst_25745 = cljs.core.first.call(null,inst_25744);
var inst_25746 = cljs.core.next.call(null,inst_25744);
var inst_25747 = files;
var state_25770__$1 = (function (){var statearr_25772 = state_25770;
(statearr_25772[(7)] = inst_25747);

(statearr_25772[(8)] = inst_25745);

(statearr_25772[(9)] = inst_25746);

return statearr_25772;
})();
var statearr_25773_25786 = state_25770__$1;
(statearr_25773_25786[(2)] = null);

(statearr_25773_25786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (2))){
var inst_25747 = (state_25770[(7)]);
var inst_25753 = (state_25770[(10)]);
var inst_25752 = cljs.core.seq.call(null,inst_25747);
var inst_25753__$1 = cljs.core.first.call(null,inst_25752);
var inst_25754 = cljs.core.next.call(null,inst_25752);
var inst_25755 = (inst_25753__$1 == null);
var inst_25756 = cljs.core.not.call(null,inst_25755);
var state_25770__$1 = (function (){var statearr_25774 = state_25770;
(statearr_25774[(10)] = inst_25753__$1);

(statearr_25774[(11)] = inst_25754);

return statearr_25774;
})();
if(inst_25756){
var statearr_25775_25787 = state_25770__$1;
(statearr_25775_25787[(1)] = (4));

} else {
var statearr_25776_25788 = state_25770__$1;
(statearr_25776_25788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (3))){
var inst_25768 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25770__$1,inst_25768);
} else {
if((state_val_25771 === (4))){
var inst_25753 = (state_25770[(10)]);
var inst_25758 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25753);
var state_25770__$1 = state_25770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25770__$1,(7),inst_25758);
} else {
if((state_val_25771 === (5))){
var inst_25764 = cljs.core.async.close_BANG_.call(null,out);
var state_25770__$1 = state_25770;
var statearr_25777_25789 = state_25770__$1;
(statearr_25777_25789[(2)] = inst_25764);

(statearr_25777_25789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (6))){
var inst_25766 = (state_25770[(2)]);
var state_25770__$1 = state_25770;
var statearr_25778_25790 = state_25770__$1;
(statearr_25778_25790[(2)] = inst_25766);

(statearr_25778_25790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25771 === (7))){
var inst_25754 = (state_25770[(11)]);
var inst_25760 = (state_25770[(2)]);
var inst_25761 = cljs.core.async.put_BANG_.call(null,out,inst_25760);
var inst_25747 = inst_25754;
var state_25770__$1 = (function (){var statearr_25779 = state_25770;
(statearr_25779[(7)] = inst_25747);

(statearr_25779[(12)] = inst_25761);

return statearr_25779;
})();
var statearr_25780_25791 = state_25770__$1;
(statearr_25780_25791[(2)] = null);

(statearr_25780_25791[(1)] = (2));


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
});})(c__24702__auto___25785,out))
;
return ((function (switch__24679__auto__,c__24702__auto___25785,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto____0 = (function (){
var statearr_25781 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25781[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto__);

(statearr_25781[(1)] = (1));

return statearr_25781;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto____1 = (function (state_25770){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_25770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e25782){if((e25782 instanceof Object)){
var ex__24683__auto__ = e25782;
var statearr_25783_25792 = state_25770;
(statearr_25783_25792[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25793 = state_25770;
state_25770 = G__25793;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto__ = function(state_25770){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto____1.call(this,state_25770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto___25785,out))
})();
var state__24704__auto__ = (function (){var statearr_25784 = f__24703__auto__.call(null);
(statearr_25784[(6)] = c__24702__auto___25785);

return statearr_25784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto___25785,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25794,opts){
var map__25795 = p__25794;
var map__25795__$1 = (((((!((map__25795 == null))))?(((((map__25795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25795):map__25795);
var eval_body = cljs.core.get.call(null,map__25795__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25797){var e = e25797;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25798_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25798_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25799){
var vec__25800 = p__25799;
var k = cljs.core.nth.call(null,vec__25800,(0),null);
var v = cljs.core.nth.call(null,vec__25800,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25803){
var vec__25804 = p__25803;
var k = cljs.core.nth.call(null,vec__25804,(0),null);
var v = cljs.core.nth.call(null,vec__25804,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25810,p__25811){
var map__25812 = p__25810;
var map__25812__$1 = (((((!((map__25812 == null))))?(((((map__25812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25812):map__25812);
var opts = map__25812__$1;
var before_jsload = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25813 = p__25811;
var map__25813__$1 = (((((!((map__25813 == null))))?(((((map__25813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25813):map__25813);
var msg = map__25813__$1;
var files = cljs.core.get.call(null,map__25813__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25813__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25813__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24703__auto__ = (function (){var switch__24679__auto__ = ((function (c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25967){
var state_val_25968 = (state_25967[(1)]);
if((state_val_25968 === (7))){
var inst_25827 = (state_25967[(7)]);
var inst_25830 = (state_25967[(8)]);
var inst_25829 = (state_25967[(9)]);
var inst_25828 = (state_25967[(10)]);
var inst_25835 = cljs.core._nth.call(null,inst_25828,inst_25830);
var inst_25836 = figwheel.client.file_reloading.eval_body.call(null,inst_25835,opts);
var inst_25837 = (inst_25830 + (1));
var tmp25969 = inst_25827;
var tmp25970 = inst_25829;
var tmp25971 = inst_25828;
var inst_25827__$1 = tmp25969;
var inst_25828__$1 = tmp25971;
var inst_25829__$1 = tmp25970;
var inst_25830__$1 = inst_25837;
var state_25967__$1 = (function (){var statearr_25972 = state_25967;
(statearr_25972[(7)] = inst_25827__$1);

(statearr_25972[(8)] = inst_25830__$1);

(statearr_25972[(11)] = inst_25836);

(statearr_25972[(9)] = inst_25829__$1);

(statearr_25972[(10)] = inst_25828__$1);

return statearr_25972;
})();
var statearr_25973_26056 = state_25967__$1;
(statearr_25973_26056[(2)] = null);

(statearr_25973_26056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (20))){
var inst_25870 = (state_25967[(12)]);
var inst_25878 = figwheel.client.file_reloading.sort_files.call(null,inst_25870);
var state_25967__$1 = state_25967;
var statearr_25974_26057 = state_25967__$1;
(statearr_25974_26057[(2)] = inst_25878);

(statearr_25974_26057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (27))){
var state_25967__$1 = state_25967;
var statearr_25975_26058 = state_25967__$1;
(statearr_25975_26058[(2)] = null);

(statearr_25975_26058[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (1))){
var inst_25819 = (state_25967[(13)]);
var inst_25816 = before_jsload.call(null,files);
var inst_25817 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25818 = (function (){return ((function (inst_25819,inst_25816,inst_25817,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25807_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25807_SHARP_);
});
;})(inst_25819,inst_25816,inst_25817,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25819__$1 = cljs.core.filter.call(null,inst_25818,files);
var inst_25820 = cljs.core.not_empty.call(null,inst_25819__$1);
var state_25967__$1 = (function (){var statearr_25976 = state_25967;
(statearr_25976[(13)] = inst_25819__$1);

(statearr_25976[(14)] = inst_25817);

(statearr_25976[(15)] = inst_25816);

return statearr_25976;
})();
if(cljs.core.truth_(inst_25820)){
var statearr_25977_26059 = state_25967__$1;
(statearr_25977_26059[(1)] = (2));

} else {
var statearr_25978_26060 = state_25967__$1;
(statearr_25978_26060[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (24))){
var state_25967__$1 = state_25967;
var statearr_25979_26061 = state_25967__$1;
(statearr_25979_26061[(2)] = null);

(statearr_25979_26061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (39))){
var inst_25920 = (state_25967[(16)]);
var state_25967__$1 = state_25967;
var statearr_25980_26062 = state_25967__$1;
(statearr_25980_26062[(2)] = inst_25920);

(statearr_25980_26062[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (46))){
var inst_25962 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
var statearr_25981_26063 = state_25967__$1;
(statearr_25981_26063[(2)] = inst_25962);

(statearr_25981_26063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (4))){
var inst_25864 = (state_25967[(2)]);
var inst_25865 = cljs.core.List.EMPTY;
var inst_25866 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25865);
var inst_25867 = (function (){return ((function (inst_25864,inst_25865,inst_25866,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25808_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25808_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25808_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25808_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_25864,inst_25865,inst_25866,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25868 = cljs.core.filter.call(null,inst_25867,files);
var inst_25869 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25870 = cljs.core.concat.call(null,inst_25868,inst_25869);
var state_25967__$1 = (function (){var statearr_25982 = state_25967;
(statearr_25982[(17)] = inst_25866);

(statearr_25982[(18)] = inst_25864);

(statearr_25982[(12)] = inst_25870);

return statearr_25982;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25983_26064 = state_25967__$1;
(statearr_25983_26064[(1)] = (16));

} else {
var statearr_25984_26065 = state_25967__$1;
(statearr_25984_26065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (15))){
var inst_25854 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
var statearr_25985_26066 = state_25967__$1;
(statearr_25985_26066[(2)] = inst_25854);

(statearr_25985_26066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (21))){
var inst_25880 = (state_25967[(19)]);
var inst_25880__$1 = (state_25967[(2)]);
var inst_25881 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25880__$1);
var state_25967__$1 = (function (){var statearr_25986 = state_25967;
(statearr_25986[(19)] = inst_25880__$1);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25967__$1,(22),inst_25881);
} else {
if((state_val_25968 === (31))){
var inst_25965 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25967__$1,inst_25965);
} else {
if((state_val_25968 === (32))){
var inst_25920 = (state_25967[(16)]);
var inst_25925 = inst_25920.cljs$lang$protocol_mask$partition0$;
var inst_25926 = (inst_25925 & (64));
var inst_25927 = inst_25920.cljs$core$ISeq$;
var inst_25928 = (cljs.core.PROTOCOL_SENTINEL === inst_25927);
var inst_25929 = ((inst_25926) || (inst_25928));
var state_25967__$1 = state_25967;
if(cljs.core.truth_(inst_25929)){
var statearr_25987_26067 = state_25967__$1;
(statearr_25987_26067[(1)] = (35));

} else {
var statearr_25988_26068 = state_25967__$1;
(statearr_25988_26068[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (40))){
var inst_25942 = (state_25967[(20)]);
var inst_25941 = (state_25967[(2)]);
var inst_25942__$1 = cljs.core.get.call(null,inst_25941,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25943 = cljs.core.get.call(null,inst_25941,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25944 = cljs.core.not_empty.call(null,inst_25942__$1);
var state_25967__$1 = (function (){var statearr_25989 = state_25967;
(statearr_25989[(21)] = inst_25943);

(statearr_25989[(20)] = inst_25942__$1);

return statearr_25989;
})();
if(cljs.core.truth_(inst_25944)){
var statearr_25990_26069 = state_25967__$1;
(statearr_25990_26069[(1)] = (41));

} else {
var statearr_25991_26070 = state_25967__$1;
(statearr_25991_26070[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (33))){
var state_25967__$1 = state_25967;
var statearr_25992_26071 = state_25967__$1;
(statearr_25992_26071[(2)] = false);

(statearr_25992_26071[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (13))){
var inst_25840 = (state_25967[(22)]);
var inst_25844 = cljs.core.chunk_first.call(null,inst_25840);
var inst_25845 = cljs.core.chunk_rest.call(null,inst_25840);
var inst_25846 = cljs.core.count.call(null,inst_25844);
var inst_25827 = inst_25845;
var inst_25828 = inst_25844;
var inst_25829 = inst_25846;
var inst_25830 = (0);
var state_25967__$1 = (function (){var statearr_25993 = state_25967;
(statearr_25993[(7)] = inst_25827);

(statearr_25993[(8)] = inst_25830);

(statearr_25993[(9)] = inst_25829);

(statearr_25993[(10)] = inst_25828);

return statearr_25993;
})();
var statearr_25994_26072 = state_25967__$1;
(statearr_25994_26072[(2)] = null);

(statearr_25994_26072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (22))){
var inst_25880 = (state_25967[(19)]);
var inst_25884 = (state_25967[(23)]);
var inst_25883 = (state_25967[(24)]);
var inst_25888 = (state_25967[(25)]);
var inst_25883__$1 = (state_25967[(2)]);
var inst_25884__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25883__$1);
var inst_25885 = (function (){var all_files = inst_25880;
var res_SINGLEQUOTE_ = inst_25883__$1;
var res = inst_25884__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25880,inst_25884,inst_25883,inst_25888,inst_25883__$1,inst_25884__$1,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25809_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25809_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25880,inst_25884,inst_25883,inst_25888,inst_25883__$1,inst_25884__$1,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25886 = cljs.core.filter.call(null,inst_25885,inst_25883__$1);
var inst_25887 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25888__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25887);
var inst_25889 = cljs.core.not_empty.call(null,inst_25888__$1);
var state_25967__$1 = (function (){var statearr_25995 = state_25967;
(statearr_25995[(26)] = inst_25886);

(statearr_25995[(23)] = inst_25884__$1);

(statearr_25995[(24)] = inst_25883__$1);

(statearr_25995[(25)] = inst_25888__$1);

return statearr_25995;
})();
if(cljs.core.truth_(inst_25889)){
var statearr_25996_26073 = state_25967__$1;
(statearr_25996_26073[(1)] = (23));

} else {
var statearr_25997_26074 = state_25967__$1;
(statearr_25997_26074[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (36))){
var state_25967__$1 = state_25967;
var statearr_25998_26075 = state_25967__$1;
(statearr_25998_26075[(2)] = false);

(statearr_25998_26075[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (41))){
var inst_25942 = (state_25967[(20)]);
var inst_25946 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25947 = cljs.core.map.call(null,inst_25946,inst_25942);
var inst_25948 = cljs.core.pr_str.call(null,inst_25947);
var inst_25949 = ["figwheel-no-load meta-data: ",inst_25948].join('');
var inst_25950 = figwheel.client.utils.log.call(null,inst_25949);
var state_25967__$1 = state_25967;
var statearr_25999_26076 = state_25967__$1;
(statearr_25999_26076[(2)] = inst_25950);

(statearr_25999_26076[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (43))){
var inst_25943 = (state_25967[(21)]);
var inst_25953 = (state_25967[(2)]);
var inst_25954 = cljs.core.not_empty.call(null,inst_25943);
var state_25967__$1 = (function (){var statearr_26000 = state_25967;
(statearr_26000[(27)] = inst_25953);

return statearr_26000;
})();
if(cljs.core.truth_(inst_25954)){
var statearr_26001_26077 = state_25967__$1;
(statearr_26001_26077[(1)] = (44));

} else {
var statearr_26002_26078 = state_25967__$1;
(statearr_26002_26078[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (29))){
var inst_25886 = (state_25967[(26)]);
var inst_25920 = (state_25967[(16)]);
var inst_25880 = (state_25967[(19)]);
var inst_25884 = (state_25967[(23)]);
var inst_25883 = (state_25967[(24)]);
var inst_25888 = (state_25967[(25)]);
var inst_25916 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25919 = (function (){var all_files = inst_25880;
var res_SINGLEQUOTE_ = inst_25883;
var res = inst_25884;
var files_not_loaded = inst_25886;
var dependencies_that_loaded = inst_25888;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25920,inst_25880,inst_25884,inst_25883,inst_25888,inst_25916,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25918){
var map__26003 = p__25918;
var map__26003__$1 = (((((!((map__26003 == null))))?(((((map__26003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26003):map__26003);
var namespace = cljs.core.get.call(null,map__26003__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25920,inst_25880,inst_25884,inst_25883,inst_25888,inst_25916,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25920__$1 = cljs.core.group_by.call(null,inst_25919,inst_25886);
var inst_25922 = (inst_25920__$1 == null);
var inst_25923 = cljs.core.not.call(null,inst_25922);
var state_25967__$1 = (function (){var statearr_26005 = state_25967;
(statearr_26005[(16)] = inst_25920__$1);

(statearr_26005[(28)] = inst_25916);

return statearr_26005;
})();
if(inst_25923){
var statearr_26006_26079 = state_25967__$1;
(statearr_26006_26079[(1)] = (32));

} else {
var statearr_26007_26080 = state_25967__$1;
(statearr_26007_26080[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (44))){
var inst_25943 = (state_25967[(21)]);
var inst_25956 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25943);
var inst_25957 = cljs.core.pr_str.call(null,inst_25956);
var inst_25958 = ["not required: ",inst_25957].join('');
var inst_25959 = figwheel.client.utils.log.call(null,inst_25958);
var state_25967__$1 = state_25967;
var statearr_26008_26081 = state_25967__$1;
(statearr_26008_26081[(2)] = inst_25959);

(statearr_26008_26081[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (6))){
var inst_25861 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
var statearr_26009_26082 = state_25967__$1;
(statearr_26009_26082[(2)] = inst_25861);

(statearr_26009_26082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (28))){
var inst_25886 = (state_25967[(26)]);
var inst_25913 = (state_25967[(2)]);
var inst_25914 = cljs.core.not_empty.call(null,inst_25886);
var state_25967__$1 = (function (){var statearr_26010 = state_25967;
(statearr_26010[(29)] = inst_25913);

return statearr_26010;
})();
if(cljs.core.truth_(inst_25914)){
var statearr_26011_26083 = state_25967__$1;
(statearr_26011_26083[(1)] = (29));

} else {
var statearr_26012_26084 = state_25967__$1;
(statearr_26012_26084[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (25))){
var inst_25884 = (state_25967[(23)]);
var inst_25900 = (state_25967[(2)]);
var inst_25901 = cljs.core.not_empty.call(null,inst_25884);
var state_25967__$1 = (function (){var statearr_26013 = state_25967;
(statearr_26013[(30)] = inst_25900);

return statearr_26013;
})();
if(cljs.core.truth_(inst_25901)){
var statearr_26014_26085 = state_25967__$1;
(statearr_26014_26085[(1)] = (26));

} else {
var statearr_26015_26086 = state_25967__$1;
(statearr_26015_26086[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (34))){
var inst_25936 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
if(cljs.core.truth_(inst_25936)){
var statearr_26016_26087 = state_25967__$1;
(statearr_26016_26087[(1)] = (38));

} else {
var statearr_26017_26088 = state_25967__$1;
(statearr_26017_26088[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (17))){
var state_25967__$1 = state_25967;
var statearr_26018_26089 = state_25967__$1;
(statearr_26018_26089[(2)] = recompile_dependents);

(statearr_26018_26089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (3))){
var state_25967__$1 = state_25967;
var statearr_26019_26090 = state_25967__$1;
(statearr_26019_26090[(2)] = null);

(statearr_26019_26090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (12))){
var inst_25857 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
var statearr_26020_26091 = state_25967__$1;
(statearr_26020_26091[(2)] = inst_25857);

(statearr_26020_26091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (2))){
var inst_25819 = (state_25967[(13)]);
var inst_25826 = cljs.core.seq.call(null,inst_25819);
var inst_25827 = inst_25826;
var inst_25828 = null;
var inst_25829 = (0);
var inst_25830 = (0);
var state_25967__$1 = (function (){var statearr_26021 = state_25967;
(statearr_26021[(7)] = inst_25827);

(statearr_26021[(8)] = inst_25830);

(statearr_26021[(9)] = inst_25829);

(statearr_26021[(10)] = inst_25828);

return statearr_26021;
})();
var statearr_26022_26092 = state_25967__$1;
(statearr_26022_26092[(2)] = null);

(statearr_26022_26092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (23))){
var inst_25886 = (state_25967[(26)]);
var inst_25880 = (state_25967[(19)]);
var inst_25884 = (state_25967[(23)]);
var inst_25883 = (state_25967[(24)]);
var inst_25888 = (state_25967[(25)]);
var inst_25891 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25893 = (function (){var all_files = inst_25880;
var res_SINGLEQUOTE_ = inst_25883;
var res = inst_25884;
var files_not_loaded = inst_25886;
var dependencies_that_loaded = inst_25888;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25880,inst_25884,inst_25883,inst_25888,inst_25891,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25892){
var map__26023 = p__25892;
var map__26023__$1 = (((((!((map__26023 == null))))?(((((map__26023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26023):map__26023);
var request_url = cljs.core.get.call(null,map__26023__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25880,inst_25884,inst_25883,inst_25888,inst_25891,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25894 = cljs.core.reverse.call(null,inst_25888);
var inst_25895 = cljs.core.map.call(null,inst_25893,inst_25894);
var inst_25896 = cljs.core.pr_str.call(null,inst_25895);
var inst_25897 = figwheel.client.utils.log.call(null,inst_25896);
var state_25967__$1 = (function (){var statearr_26025 = state_25967;
(statearr_26025[(31)] = inst_25891);

return statearr_26025;
})();
var statearr_26026_26093 = state_25967__$1;
(statearr_26026_26093[(2)] = inst_25897);

(statearr_26026_26093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (35))){
var state_25967__$1 = state_25967;
var statearr_26027_26094 = state_25967__$1;
(statearr_26027_26094[(2)] = true);

(statearr_26027_26094[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (19))){
var inst_25870 = (state_25967[(12)]);
var inst_25876 = figwheel.client.file_reloading.expand_files.call(null,inst_25870);
var state_25967__$1 = state_25967;
var statearr_26028_26095 = state_25967__$1;
(statearr_26028_26095[(2)] = inst_25876);

(statearr_26028_26095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (11))){
var state_25967__$1 = state_25967;
var statearr_26029_26096 = state_25967__$1;
(statearr_26029_26096[(2)] = null);

(statearr_26029_26096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (9))){
var inst_25859 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
var statearr_26030_26097 = state_25967__$1;
(statearr_26030_26097[(2)] = inst_25859);

(statearr_26030_26097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (5))){
var inst_25830 = (state_25967[(8)]);
var inst_25829 = (state_25967[(9)]);
var inst_25832 = (inst_25830 < inst_25829);
var inst_25833 = inst_25832;
var state_25967__$1 = state_25967;
if(cljs.core.truth_(inst_25833)){
var statearr_26031_26098 = state_25967__$1;
(statearr_26031_26098[(1)] = (7));

} else {
var statearr_26032_26099 = state_25967__$1;
(statearr_26032_26099[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (14))){
var inst_25840 = (state_25967[(22)]);
var inst_25849 = cljs.core.first.call(null,inst_25840);
var inst_25850 = figwheel.client.file_reloading.eval_body.call(null,inst_25849,opts);
var inst_25851 = cljs.core.next.call(null,inst_25840);
var inst_25827 = inst_25851;
var inst_25828 = null;
var inst_25829 = (0);
var inst_25830 = (0);
var state_25967__$1 = (function (){var statearr_26033 = state_25967;
(statearr_26033[(7)] = inst_25827);

(statearr_26033[(8)] = inst_25830);

(statearr_26033[(9)] = inst_25829);

(statearr_26033[(10)] = inst_25828);

(statearr_26033[(32)] = inst_25850);

return statearr_26033;
})();
var statearr_26034_26100 = state_25967__$1;
(statearr_26034_26100[(2)] = null);

(statearr_26034_26100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (45))){
var state_25967__$1 = state_25967;
var statearr_26035_26101 = state_25967__$1;
(statearr_26035_26101[(2)] = null);

(statearr_26035_26101[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (26))){
var inst_25886 = (state_25967[(26)]);
var inst_25880 = (state_25967[(19)]);
var inst_25884 = (state_25967[(23)]);
var inst_25883 = (state_25967[(24)]);
var inst_25888 = (state_25967[(25)]);
var inst_25903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25905 = (function (){var all_files = inst_25880;
var res_SINGLEQUOTE_ = inst_25883;
var res = inst_25884;
var files_not_loaded = inst_25886;
var dependencies_that_loaded = inst_25888;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25880,inst_25884,inst_25883,inst_25888,inst_25903,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25904){
var map__26036 = p__25904;
var map__26036__$1 = (((((!((map__26036 == null))))?(((((map__26036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26036):map__26036);
var namespace = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25880,inst_25884,inst_25883,inst_25888,inst_25903,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25906 = cljs.core.map.call(null,inst_25905,inst_25884);
var inst_25907 = cljs.core.pr_str.call(null,inst_25906);
var inst_25908 = figwheel.client.utils.log.call(null,inst_25907);
var inst_25909 = (function (){var all_files = inst_25880;
var res_SINGLEQUOTE_ = inst_25883;
var res = inst_25884;
var files_not_loaded = inst_25886;
var dependencies_that_loaded = inst_25888;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25880,inst_25884,inst_25883,inst_25888,inst_25903,inst_25905,inst_25906,inst_25907,inst_25908,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25886,inst_25880,inst_25884,inst_25883,inst_25888,inst_25903,inst_25905,inst_25906,inst_25907,inst_25908,state_val_25968,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25910 = setTimeout(inst_25909,(10));
var state_25967__$1 = (function (){var statearr_26038 = state_25967;
(statearr_26038[(33)] = inst_25908);

(statearr_26038[(34)] = inst_25903);

return statearr_26038;
})();
var statearr_26039_26102 = state_25967__$1;
(statearr_26039_26102[(2)] = inst_25910);

(statearr_26039_26102[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (16))){
var state_25967__$1 = state_25967;
var statearr_26040_26103 = state_25967__$1;
(statearr_26040_26103[(2)] = reload_dependents);

(statearr_26040_26103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (38))){
var inst_25920 = (state_25967[(16)]);
var inst_25938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25920);
var state_25967__$1 = state_25967;
var statearr_26041_26104 = state_25967__$1;
(statearr_26041_26104[(2)] = inst_25938);

(statearr_26041_26104[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (30))){
var state_25967__$1 = state_25967;
var statearr_26042_26105 = state_25967__$1;
(statearr_26042_26105[(2)] = null);

(statearr_26042_26105[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (10))){
var inst_25840 = (state_25967[(22)]);
var inst_25842 = cljs.core.chunked_seq_QMARK_.call(null,inst_25840);
var state_25967__$1 = state_25967;
if(inst_25842){
var statearr_26043_26106 = state_25967__$1;
(statearr_26043_26106[(1)] = (13));

} else {
var statearr_26044_26107 = state_25967__$1;
(statearr_26044_26107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (18))){
var inst_25874 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
if(cljs.core.truth_(inst_25874)){
var statearr_26045_26108 = state_25967__$1;
(statearr_26045_26108[(1)] = (19));

} else {
var statearr_26046_26109 = state_25967__$1;
(statearr_26046_26109[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (42))){
var state_25967__$1 = state_25967;
var statearr_26047_26110 = state_25967__$1;
(statearr_26047_26110[(2)] = null);

(statearr_26047_26110[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (37))){
var inst_25933 = (state_25967[(2)]);
var state_25967__$1 = state_25967;
var statearr_26048_26111 = state_25967__$1;
(statearr_26048_26111[(2)] = inst_25933);

(statearr_26048_26111[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25968 === (8))){
var inst_25840 = (state_25967[(22)]);
var inst_25827 = (state_25967[(7)]);
var inst_25840__$1 = cljs.core.seq.call(null,inst_25827);
var state_25967__$1 = (function (){var statearr_26049 = state_25967;
(statearr_26049[(22)] = inst_25840__$1);

return statearr_26049;
})();
if(inst_25840__$1){
var statearr_26050_26112 = state_25967__$1;
(statearr_26050_26112[(1)] = (10));

} else {
var statearr_26051_26113 = state_25967__$1;
(statearr_26051_26113[(1)] = (11));

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
}
});})(c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24679__auto__,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto____0 = (function (){
var statearr_26052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26052[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto__);

(statearr_26052[(1)] = (1));

return statearr_26052;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto____1 = (function (state_25967){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_25967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e26053){if((e26053 instanceof Object)){
var ex__24683__auto__ = e26053;
var statearr_26054_26114 = state_25967;
(statearr_26054_26114[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26115 = state_25967;
state_25967 = G__26115;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto__ = function(state_25967){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto____1.call(this,state_25967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24704__auto__ = (function (){var statearr_26055 = f__24703__auto__.call(null);
(statearr_26055[(6)] = c__24702__auto__);

return statearr_26055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24704__auto__);
});})(c__24702__auto__,map__25812,map__25812__$1,opts,before_jsload,on_jsload,reload_dependents,map__25813,map__25813__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24702__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26118,link){
var map__26119 = p__26118;
var map__26119__$1 = (((((!((map__26119 == null))))?(((((map__26119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26119):map__26119);
var file = cljs.core.get.call(null,map__26119__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__26119,map__26119__$1,file){
return (function (p1__26116_SHARP_,p2__26117_SHARP_){
if(cljs.core._EQ_.call(null,p1__26116_SHARP_,p2__26117_SHARP_)){
return p1__26116_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__26119,map__26119__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26122){
var map__26123 = p__26122;
var map__26123__$1 = (((((!((map__26123 == null))))?(((((map__26123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26123):map__26123);
var match_length = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26121_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26121_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26125_SHARP_,p2__26126_SHARP_){
return cljs.core.assoc.call(null,p1__26125_SHARP_,cljs.core.get.call(null,p2__26126_SHARP_,key),p2__26126_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26127 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26127);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26127);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26128,p__26129){
var map__26130 = p__26128;
var map__26130__$1 = (((((!((map__26130 == null))))?(((((map__26130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26130):map__26130);
var on_cssload = cljs.core.get.call(null,map__26130__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26131 = p__26129;
var map__26131__$1 = (((((!((map__26131 == null))))?(((((map__26131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26131):map__26131);
var files_msg = map__26131__$1;
var files = cljs.core.get.call(null,map__26131__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1571428112669
