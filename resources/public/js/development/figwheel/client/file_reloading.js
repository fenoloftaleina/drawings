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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27133_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27133_SHARP_));
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
var seq__27134 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27135 = null;
var count__27136 = (0);
var i__27137 = (0);
while(true){
if((i__27137 < count__27136)){
var n = cljs.core._nth.call(null,chunk__27135,i__27137);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27138 = seq__27134;
var G__27139 = chunk__27135;
var G__27140 = count__27136;
var G__27141 = (i__27137 + (1));
seq__27134 = G__27138;
chunk__27135 = G__27139;
count__27136 = G__27140;
i__27137 = G__27141;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27134);
if(temp__5735__auto__){
var seq__27134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27134__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27134__$1);
var G__27142 = cljs.core.chunk_rest.call(null,seq__27134__$1);
var G__27143 = c__4550__auto__;
var G__27144 = cljs.core.count.call(null,c__4550__auto__);
var G__27145 = (0);
seq__27134 = G__27142;
chunk__27135 = G__27143;
count__27136 = G__27144;
i__27137 = G__27145;
continue;
} else {
var n = cljs.core.first.call(null,seq__27134__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27146 = cljs.core.next.call(null,seq__27134__$1);
var G__27147 = null;
var G__27148 = (0);
var G__27149 = (0);
seq__27134 = G__27146;
chunk__27135 = G__27147;
count__27136 = G__27148;
i__27137 = G__27149;
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
return cljs.core.some.call(null,(function (p__27150){
var vec__27151 = p__27150;
var _ = cljs.core.nth.call(null,vec__27151,(0),null);
var v = cljs.core.nth.call(null,vec__27151,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27154){
var vec__27155 = p__27154;
var k = cljs.core.nth.call(null,vec__27155,(0),null);
var v = cljs.core.nth.call(null,vec__27155,(1),null);
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

var seq__27167_27175 = cljs.core.seq.call(null,deps);
var chunk__27168_27176 = null;
var count__27169_27177 = (0);
var i__27170_27178 = (0);
while(true){
if((i__27170_27178 < count__27169_27177)){
var dep_27179 = cljs.core._nth.call(null,chunk__27168_27176,i__27170_27178);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27179;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27179));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27179,(depth + (1)),state);
} else {
}


var G__27180 = seq__27167_27175;
var G__27181 = chunk__27168_27176;
var G__27182 = count__27169_27177;
var G__27183 = (i__27170_27178 + (1));
seq__27167_27175 = G__27180;
chunk__27168_27176 = G__27181;
count__27169_27177 = G__27182;
i__27170_27178 = G__27183;
continue;
} else {
var temp__5735__auto___27184 = cljs.core.seq.call(null,seq__27167_27175);
if(temp__5735__auto___27184){
var seq__27167_27185__$1 = temp__5735__auto___27184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27167_27185__$1)){
var c__4550__auto___27186 = cljs.core.chunk_first.call(null,seq__27167_27185__$1);
var G__27187 = cljs.core.chunk_rest.call(null,seq__27167_27185__$1);
var G__27188 = c__4550__auto___27186;
var G__27189 = cljs.core.count.call(null,c__4550__auto___27186);
var G__27190 = (0);
seq__27167_27175 = G__27187;
chunk__27168_27176 = G__27188;
count__27169_27177 = G__27189;
i__27170_27178 = G__27190;
continue;
} else {
var dep_27191 = cljs.core.first.call(null,seq__27167_27185__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27191;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27191));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27191,(depth + (1)),state);
} else {
}


var G__27192 = cljs.core.next.call(null,seq__27167_27185__$1);
var G__27193 = null;
var G__27194 = (0);
var G__27195 = (0);
seq__27167_27175 = G__27192;
chunk__27168_27176 = G__27193;
count__27169_27177 = G__27194;
i__27170_27178 = G__27195;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27171){
var vec__27172 = p__27171;
var seq__27173 = cljs.core.seq.call(null,vec__27172);
var first__27174 = cljs.core.first.call(null,seq__27173);
var seq__27173__$1 = cljs.core.next.call(null,seq__27173);
var x = first__27174;
var xs = seq__27173__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27172,seq__27173,first__27174,seq__27173__$1,x,xs,get_deps__$1){
return (function (p1__27158_SHARP_){
return clojure.set.difference.call(null,p1__27158_SHARP_,x);
});})(vec__27172,seq__27173,first__27174,seq__27173__$1,x,xs,get_deps__$1))
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
var seq__27196 = cljs.core.seq.call(null,provides);
var chunk__27197 = null;
var count__27198 = (0);
var i__27199 = (0);
while(true){
if((i__27199 < count__27198)){
var prov = cljs.core._nth.call(null,chunk__27197,i__27199);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27208_27216 = cljs.core.seq.call(null,requires);
var chunk__27209_27217 = null;
var count__27210_27218 = (0);
var i__27211_27219 = (0);
while(true){
if((i__27211_27219 < count__27210_27218)){
var req_27220 = cljs.core._nth.call(null,chunk__27209_27217,i__27211_27219);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27220,prov);


var G__27221 = seq__27208_27216;
var G__27222 = chunk__27209_27217;
var G__27223 = count__27210_27218;
var G__27224 = (i__27211_27219 + (1));
seq__27208_27216 = G__27221;
chunk__27209_27217 = G__27222;
count__27210_27218 = G__27223;
i__27211_27219 = G__27224;
continue;
} else {
var temp__5735__auto___27225 = cljs.core.seq.call(null,seq__27208_27216);
if(temp__5735__auto___27225){
var seq__27208_27226__$1 = temp__5735__auto___27225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27208_27226__$1)){
var c__4550__auto___27227 = cljs.core.chunk_first.call(null,seq__27208_27226__$1);
var G__27228 = cljs.core.chunk_rest.call(null,seq__27208_27226__$1);
var G__27229 = c__4550__auto___27227;
var G__27230 = cljs.core.count.call(null,c__4550__auto___27227);
var G__27231 = (0);
seq__27208_27216 = G__27228;
chunk__27209_27217 = G__27229;
count__27210_27218 = G__27230;
i__27211_27219 = G__27231;
continue;
} else {
var req_27232 = cljs.core.first.call(null,seq__27208_27226__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27232,prov);


var G__27233 = cljs.core.next.call(null,seq__27208_27226__$1);
var G__27234 = null;
var G__27235 = (0);
var G__27236 = (0);
seq__27208_27216 = G__27233;
chunk__27209_27217 = G__27234;
count__27210_27218 = G__27235;
i__27211_27219 = G__27236;
continue;
}
} else {
}
}
break;
}


var G__27237 = seq__27196;
var G__27238 = chunk__27197;
var G__27239 = count__27198;
var G__27240 = (i__27199 + (1));
seq__27196 = G__27237;
chunk__27197 = G__27238;
count__27198 = G__27239;
i__27199 = G__27240;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27196);
if(temp__5735__auto__){
var seq__27196__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27196__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27196__$1);
var G__27241 = cljs.core.chunk_rest.call(null,seq__27196__$1);
var G__27242 = c__4550__auto__;
var G__27243 = cljs.core.count.call(null,c__4550__auto__);
var G__27244 = (0);
seq__27196 = G__27241;
chunk__27197 = G__27242;
count__27198 = G__27243;
i__27199 = G__27244;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27196__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27212_27245 = cljs.core.seq.call(null,requires);
var chunk__27213_27246 = null;
var count__27214_27247 = (0);
var i__27215_27248 = (0);
while(true){
if((i__27215_27248 < count__27214_27247)){
var req_27249 = cljs.core._nth.call(null,chunk__27213_27246,i__27215_27248);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27249,prov);


var G__27250 = seq__27212_27245;
var G__27251 = chunk__27213_27246;
var G__27252 = count__27214_27247;
var G__27253 = (i__27215_27248 + (1));
seq__27212_27245 = G__27250;
chunk__27213_27246 = G__27251;
count__27214_27247 = G__27252;
i__27215_27248 = G__27253;
continue;
} else {
var temp__5735__auto___27254__$1 = cljs.core.seq.call(null,seq__27212_27245);
if(temp__5735__auto___27254__$1){
var seq__27212_27255__$1 = temp__5735__auto___27254__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27212_27255__$1)){
var c__4550__auto___27256 = cljs.core.chunk_first.call(null,seq__27212_27255__$1);
var G__27257 = cljs.core.chunk_rest.call(null,seq__27212_27255__$1);
var G__27258 = c__4550__auto___27256;
var G__27259 = cljs.core.count.call(null,c__4550__auto___27256);
var G__27260 = (0);
seq__27212_27245 = G__27257;
chunk__27213_27246 = G__27258;
count__27214_27247 = G__27259;
i__27215_27248 = G__27260;
continue;
} else {
var req_27261 = cljs.core.first.call(null,seq__27212_27255__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27261,prov);


var G__27262 = cljs.core.next.call(null,seq__27212_27255__$1);
var G__27263 = null;
var G__27264 = (0);
var G__27265 = (0);
seq__27212_27245 = G__27262;
chunk__27213_27246 = G__27263;
count__27214_27247 = G__27264;
i__27215_27248 = G__27265;
continue;
}
} else {
}
}
break;
}


var G__27266 = cljs.core.next.call(null,seq__27196__$1);
var G__27267 = null;
var G__27268 = (0);
var G__27269 = (0);
seq__27196 = G__27266;
chunk__27197 = G__27267;
count__27198 = G__27268;
i__27199 = G__27269;
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
var seq__27270_27274 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27271_27275 = null;
var count__27272_27276 = (0);
var i__27273_27277 = (0);
while(true){
if((i__27273_27277 < count__27272_27276)){
var ns_27278 = cljs.core._nth.call(null,chunk__27271_27275,i__27273_27277);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27278);


var G__27279 = seq__27270_27274;
var G__27280 = chunk__27271_27275;
var G__27281 = count__27272_27276;
var G__27282 = (i__27273_27277 + (1));
seq__27270_27274 = G__27279;
chunk__27271_27275 = G__27280;
count__27272_27276 = G__27281;
i__27273_27277 = G__27282;
continue;
} else {
var temp__5735__auto___27283 = cljs.core.seq.call(null,seq__27270_27274);
if(temp__5735__auto___27283){
var seq__27270_27284__$1 = temp__5735__auto___27283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27270_27284__$1)){
var c__4550__auto___27285 = cljs.core.chunk_first.call(null,seq__27270_27284__$1);
var G__27286 = cljs.core.chunk_rest.call(null,seq__27270_27284__$1);
var G__27287 = c__4550__auto___27285;
var G__27288 = cljs.core.count.call(null,c__4550__auto___27285);
var G__27289 = (0);
seq__27270_27274 = G__27286;
chunk__27271_27275 = G__27287;
count__27272_27276 = G__27288;
i__27273_27277 = G__27289;
continue;
} else {
var ns_27290 = cljs.core.first.call(null,seq__27270_27284__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27290);


var G__27291 = cljs.core.next.call(null,seq__27270_27284__$1);
var G__27292 = null;
var G__27293 = (0);
var G__27294 = (0);
seq__27270_27274 = G__27291;
chunk__27271_27275 = G__27292;
count__27272_27276 = G__27293;
i__27273_27277 = G__27294;
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
var G__27295__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27296__i = 0, G__27296__a = new Array(arguments.length -  0);
while (G__27296__i < G__27296__a.length) {G__27296__a[G__27296__i] = arguments[G__27296__i + 0]; ++G__27296__i;}
  args = new cljs.core.IndexedSeq(G__27296__a,0,null);
} 
return G__27295__delegate.call(this,args);};
G__27295.cljs$lang$maxFixedArity = 0;
G__27295.cljs$lang$applyTo = (function (arglist__27297){
var args = cljs.core.seq(arglist__27297);
return G__27295__delegate(args);
});
G__27295.cljs$core$IFn$_invoke$arity$variadic = G__27295__delegate;
return G__27295;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27298_SHARP_,p2__27299_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27298_SHARP_)),p2__27299_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27300_SHARP_,p2__27301_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27300_SHARP_),p2__27301_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27302 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27302.addCallback(((function (G__27302){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27302))
);

G__27302.addErrback(((function (G__27302){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27302))
);

return G__27302;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27303){if((e27303 instanceof Error)){
var e = e27303;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27303;

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
}catch (e27304){if((e27304 instanceof Error)){
var e = e27304;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27304;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27305 = cljs.core._EQ_;
var expr__27306 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27305.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27306))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27305.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27306))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27305.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27306))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27305,expr__27306){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27305,expr__27306))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27308,callback){
var map__27309 = p__27308;
var map__27309__$1 = (((((!((map__27309 == null))))?(((((map__27309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27309):map__27309);
var file_msg = map__27309__$1;
var request_url = cljs.core.get.call(null,map__27309__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27309,map__27309__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27309,map__27309__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__){
return (function (state_27347){
var state_val_27348 = (state_27347[(1)]);
if((state_val_27348 === (7))){
var inst_27343 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27349_27375 = state_27347__$1;
(statearr_27349_27375[(2)] = inst_27343);

(statearr_27349_27375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (1))){
var state_27347__$1 = state_27347;
var statearr_27350_27376 = state_27347__$1;
(statearr_27350_27376[(2)] = null);

(statearr_27350_27376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (4))){
var inst_27313 = (state_27347[(7)]);
var inst_27313__$1 = (state_27347[(2)]);
var state_27347__$1 = (function (){var statearr_27351 = state_27347;
(statearr_27351[(7)] = inst_27313__$1);

return statearr_27351;
})();
if(cljs.core.truth_(inst_27313__$1)){
var statearr_27352_27377 = state_27347__$1;
(statearr_27352_27377[(1)] = (5));

} else {
var statearr_27353_27378 = state_27347__$1;
(statearr_27353_27378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (15))){
var inst_27328 = (state_27347[(8)]);
var inst_27326 = (state_27347[(9)]);
var inst_27330 = inst_27328.call(null,inst_27326);
var state_27347__$1 = state_27347;
var statearr_27354_27379 = state_27347__$1;
(statearr_27354_27379[(2)] = inst_27330);

(statearr_27354_27379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (13))){
var inst_27337 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27355_27380 = state_27347__$1;
(statearr_27355_27380[(2)] = inst_27337);

(statearr_27355_27380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (6))){
var state_27347__$1 = state_27347;
var statearr_27356_27381 = state_27347__$1;
(statearr_27356_27381[(2)] = null);

(statearr_27356_27381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (17))){
var inst_27334 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
var statearr_27357_27382 = state_27347__$1;
(statearr_27357_27382[(2)] = inst_27334);

(statearr_27357_27382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (3))){
var inst_27345 = (state_27347[(2)]);
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27347__$1,inst_27345);
} else {
if((state_val_27348 === (12))){
var state_27347__$1 = state_27347;
var statearr_27358_27383 = state_27347__$1;
(statearr_27358_27383[(2)] = null);

(statearr_27358_27383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (2))){
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27347__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27348 === (11))){
var inst_27318 = (state_27347[(10)]);
var inst_27324 = figwheel.client.file_reloading.blocking_load.call(null,inst_27318);
var state_27347__$1 = state_27347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27347__$1,(14),inst_27324);
} else {
if((state_val_27348 === (9))){
var inst_27318 = (state_27347[(10)]);
var state_27347__$1 = state_27347;
if(cljs.core.truth_(inst_27318)){
var statearr_27359_27384 = state_27347__$1;
(statearr_27359_27384[(1)] = (11));

} else {
var statearr_27360_27385 = state_27347__$1;
(statearr_27360_27385[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (5))){
var inst_27319 = (state_27347[(11)]);
var inst_27313 = (state_27347[(7)]);
var inst_27318 = cljs.core.nth.call(null,inst_27313,(0),null);
var inst_27319__$1 = cljs.core.nth.call(null,inst_27313,(1),null);
var state_27347__$1 = (function (){var statearr_27361 = state_27347;
(statearr_27361[(10)] = inst_27318);

(statearr_27361[(11)] = inst_27319__$1);

return statearr_27361;
})();
if(cljs.core.truth_(inst_27319__$1)){
var statearr_27362_27386 = state_27347__$1;
(statearr_27362_27386[(1)] = (8));

} else {
var statearr_27363_27387 = state_27347__$1;
(statearr_27363_27387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (14))){
var inst_27328 = (state_27347[(8)]);
var inst_27318 = (state_27347[(10)]);
var inst_27326 = (state_27347[(2)]);
var inst_27327 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27328__$1 = cljs.core.get.call(null,inst_27327,inst_27318);
var state_27347__$1 = (function (){var statearr_27364 = state_27347;
(statearr_27364[(8)] = inst_27328__$1);

(statearr_27364[(9)] = inst_27326);

return statearr_27364;
})();
if(cljs.core.truth_(inst_27328__$1)){
var statearr_27365_27388 = state_27347__$1;
(statearr_27365_27388[(1)] = (15));

} else {
var statearr_27366_27389 = state_27347__$1;
(statearr_27366_27389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (16))){
var inst_27326 = (state_27347[(9)]);
var inst_27332 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27326);
var state_27347__$1 = state_27347;
var statearr_27367_27390 = state_27347__$1;
(statearr_27367_27390[(2)] = inst_27332);

(statearr_27367_27390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (10))){
var inst_27339 = (state_27347[(2)]);
var state_27347__$1 = (function (){var statearr_27368 = state_27347;
(statearr_27368[(12)] = inst_27339);

return statearr_27368;
})();
var statearr_27369_27391 = state_27347__$1;
(statearr_27369_27391[(2)] = null);

(statearr_27369_27391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27348 === (8))){
var inst_27319 = (state_27347[(11)]);
var inst_27321 = eval(inst_27319);
var state_27347__$1 = state_27347;
var statearr_27370_27392 = state_27347__$1;
(statearr_27370_27392[(2)] = inst_27321);

(statearr_27370_27392[(1)] = (10));


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
});})(c__23692__auto__))
;
return ((function (switch__23597__auto__,c__23692__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23598__auto__ = null;
var figwheel$client$file_reloading$state_machine__23598__auto____0 = (function (){
var statearr_27371 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27371[(0)] = figwheel$client$file_reloading$state_machine__23598__auto__);

(statearr_27371[(1)] = (1));

return statearr_27371;
});
var figwheel$client$file_reloading$state_machine__23598__auto____1 = (function (state_27347){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_27347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e27372){if((e27372 instanceof Object)){
var ex__23601__auto__ = e27372;
var statearr_27373_27393 = state_27347;
(statearr_27373_27393[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27394 = state_27347;
state_27347 = G__27394;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23598__auto__ = function(state_27347){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23598__auto____1.call(this,state_27347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23598__auto____0;
figwheel$client$file_reloading$state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23598__auto____1;
return figwheel$client$file_reloading$state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__))
})();
var state__23694__auto__ = (function (){var statearr_27374 = f__23693__auto__.call(null);
(statearr_27374[(6)] = c__23692__auto__);

return statearr_27374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__))
);

return c__23692__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27396 = arguments.length;
switch (G__27396) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27398,callback){
var map__27399 = p__27398;
var map__27399__$1 = (((((!((map__27399 == null))))?(((((map__27399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27399):map__27399);
var file_msg = map__27399__$1;
var namespace = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27399,map__27399__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27399,map__27399__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27401){
var map__27402 = p__27401;
var map__27402__$1 = (((((!((map__27402 == null))))?(((((map__27402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27402):map__27402);
var file_msg = map__27402__$1;
var namespace = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27404){
var map__27405 = p__27404;
var map__27405__$1 = (((((!((map__27405 == null))))?(((((map__27405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
var file_msg = map__27405__$1;
var namespace = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27407,callback){
var map__27408 = p__27407;
var map__27408__$1 = (((((!((map__27408 == null))))?(((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408):map__27408);
var file_msg = map__27408__$1;
var request_url = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23692__auto___27458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto___27458,out){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto___27458,out){
return (function (state_27443){
var state_val_27444 = (state_27443[(1)]);
if((state_val_27444 === (1))){
var inst_27417 = cljs.core.seq.call(null,files);
var inst_27418 = cljs.core.first.call(null,inst_27417);
var inst_27419 = cljs.core.next.call(null,inst_27417);
var inst_27420 = files;
var state_27443__$1 = (function (){var statearr_27445 = state_27443;
(statearr_27445[(7)] = inst_27420);

(statearr_27445[(8)] = inst_27418);

(statearr_27445[(9)] = inst_27419);

return statearr_27445;
})();
var statearr_27446_27459 = state_27443__$1;
(statearr_27446_27459[(2)] = null);

(statearr_27446_27459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (2))){
var inst_27420 = (state_27443[(7)]);
var inst_27426 = (state_27443[(10)]);
var inst_27425 = cljs.core.seq.call(null,inst_27420);
var inst_27426__$1 = cljs.core.first.call(null,inst_27425);
var inst_27427 = cljs.core.next.call(null,inst_27425);
var inst_27428 = (inst_27426__$1 == null);
var inst_27429 = cljs.core.not.call(null,inst_27428);
var state_27443__$1 = (function (){var statearr_27447 = state_27443;
(statearr_27447[(11)] = inst_27427);

(statearr_27447[(10)] = inst_27426__$1);

return statearr_27447;
})();
if(inst_27429){
var statearr_27448_27460 = state_27443__$1;
(statearr_27448_27460[(1)] = (4));

} else {
var statearr_27449_27461 = state_27443__$1;
(statearr_27449_27461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (3))){
var inst_27441 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27443__$1,inst_27441);
} else {
if((state_val_27444 === (4))){
var inst_27426 = (state_27443[(10)]);
var inst_27431 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27426);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27443__$1,(7),inst_27431);
} else {
if((state_val_27444 === (5))){
var inst_27437 = cljs.core.async.close_BANG_.call(null,out);
var state_27443__$1 = state_27443;
var statearr_27450_27462 = state_27443__$1;
(statearr_27450_27462[(2)] = inst_27437);

(statearr_27450_27462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (6))){
var inst_27439 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
var statearr_27451_27463 = state_27443__$1;
(statearr_27451_27463[(2)] = inst_27439);

(statearr_27451_27463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (7))){
var inst_27427 = (state_27443[(11)]);
var inst_27433 = (state_27443[(2)]);
var inst_27434 = cljs.core.async.put_BANG_.call(null,out,inst_27433);
var inst_27420 = inst_27427;
var state_27443__$1 = (function (){var statearr_27452 = state_27443;
(statearr_27452[(7)] = inst_27420);

(statearr_27452[(12)] = inst_27434);

return statearr_27452;
})();
var statearr_27453_27464 = state_27443__$1;
(statearr_27453_27464[(2)] = null);

(statearr_27453_27464[(1)] = (2));


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
});})(c__23692__auto___27458,out))
;
return ((function (switch__23597__auto__,c__23692__auto___27458,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto____0 = (function (){
var statearr_27454 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27454[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto__);

(statearr_27454[(1)] = (1));

return statearr_27454;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto____1 = (function (state_27443){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_27443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e27455){if((e27455 instanceof Object)){
var ex__23601__auto__ = e27455;
var statearr_27456_27465 = state_27443;
(statearr_27456_27465[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27466 = state_27443;
state_27443 = G__27466;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto__ = function(state_27443){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto____1.call(this,state_27443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto___27458,out))
})();
var state__23694__auto__ = (function (){var statearr_27457 = f__23693__auto__.call(null);
(statearr_27457[(6)] = c__23692__auto___27458);

return statearr_27457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto___27458,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27467,opts){
var map__27468 = p__27467;
var map__27468__$1 = (((((!((map__27468 == null))))?(((((map__27468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27468):map__27468);
var eval_body = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27470){var e = e27470;
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
return (function (p1__27471_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27471_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27472){
var vec__27473 = p__27472;
var k = cljs.core.nth.call(null,vec__27473,(0),null);
var v = cljs.core.nth.call(null,vec__27473,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27476){
var vec__27477 = p__27476;
var k = cljs.core.nth.call(null,vec__27477,(0),null);
var v = cljs.core.nth.call(null,vec__27477,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27483,p__27484){
var map__27485 = p__27483;
var map__27485__$1 = (((((!((map__27485 == null))))?(((((map__27485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27485):map__27485);
var opts = map__27485__$1;
var before_jsload = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27486 = p__27484;
var map__27486__$1 = (((((!((map__27486 == null))))?(((((map__27486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27486):map__27486);
var msg = map__27486__$1;
var files = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27486__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23693__auto__ = (function (){var switch__23597__auto__ = ((function (c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27640){
var state_val_27641 = (state_27640[(1)]);
if((state_val_27641 === (7))){
var inst_27503 = (state_27640[(7)]);
var inst_27501 = (state_27640[(8)]);
var inst_27500 = (state_27640[(9)]);
var inst_27502 = (state_27640[(10)]);
var inst_27508 = cljs.core._nth.call(null,inst_27501,inst_27503);
var inst_27509 = figwheel.client.file_reloading.eval_body.call(null,inst_27508,opts);
var inst_27510 = (inst_27503 + (1));
var tmp27642 = inst_27501;
var tmp27643 = inst_27500;
var tmp27644 = inst_27502;
var inst_27500__$1 = tmp27643;
var inst_27501__$1 = tmp27642;
var inst_27502__$1 = tmp27644;
var inst_27503__$1 = inst_27510;
var state_27640__$1 = (function (){var statearr_27645 = state_27640;
(statearr_27645[(7)] = inst_27503__$1);

(statearr_27645[(8)] = inst_27501__$1);

(statearr_27645[(9)] = inst_27500__$1);

(statearr_27645[(11)] = inst_27509);

(statearr_27645[(10)] = inst_27502__$1);

return statearr_27645;
})();
var statearr_27646_27729 = state_27640__$1;
(statearr_27646_27729[(2)] = null);

(statearr_27646_27729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (20))){
var inst_27543 = (state_27640[(12)]);
var inst_27551 = figwheel.client.file_reloading.sort_files.call(null,inst_27543);
var state_27640__$1 = state_27640;
var statearr_27647_27730 = state_27640__$1;
(statearr_27647_27730[(2)] = inst_27551);

(statearr_27647_27730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (27))){
var state_27640__$1 = state_27640;
var statearr_27648_27731 = state_27640__$1;
(statearr_27648_27731[(2)] = null);

(statearr_27648_27731[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (1))){
var inst_27492 = (state_27640[(13)]);
var inst_27489 = before_jsload.call(null,files);
var inst_27490 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27491 = (function (){return ((function (inst_27492,inst_27489,inst_27490,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27480_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27480_SHARP_);
});
;})(inst_27492,inst_27489,inst_27490,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27492__$1 = cljs.core.filter.call(null,inst_27491,files);
var inst_27493 = cljs.core.not_empty.call(null,inst_27492__$1);
var state_27640__$1 = (function (){var statearr_27649 = state_27640;
(statearr_27649[(13)] = inst_27492__$1);

(statearr_27649[(14)] = inst_27489);

(statearr_27649[(15)] = inst_27490);

return statearr_27649;
})();
if(cljs.core.truth_(inst_27493)){
var statearr_27650_27732 = state_27640__$1;
(statearr_27650_27732[(1)] = (2));

} else {
var statearr_27651_27733 = state_27640__$1;
(statearr_27651_27733[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (24))){
var state_27640__$1 = state_27640;
var statearr_27652_27734 = state_27640__$1;
(statearr_27652_27734[(2)] = null);

(statearr_27652_27734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (39))){
var inst_27593 = (state_27640[(16)]);
var state_27640__$1 = state_27640;
var statearr_27653_27735 = state_27640__$1;
(statearr_27653_27735[(2)] = inst_27593);

(statearr_27653_27735[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (46))){
var inst_27635 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27654_27736 = state_27640__$1;
(statearr_27654_27736[(2)] = inst_27635);

(statearr_27654_27736[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (4))){
var inst_27537 = (state_27640[(2)]);
var inst_27538 = cljs.core.List.EMPTY;
var inst_27539 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27538);
var inst_27540 = (function (){return ((function (inst_27537,inst_27538,inst_27539,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27481_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27481_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27481_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27481_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27537,inst_27538,inst_27539,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27541 = cljs.core.filter.call(null,inst_27540,files);
var inst_27542 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27543 = cljs.core.concat.call(null,inst_27541,inst_27542);
var state_27640__$1 = (function (){var statearr_27655 = state_27640;
(statearr_27655[(12)] = inst_27543);

(statearr_27655[(17)] = inst_27537);

(statearr_27655[(18)] = inst_27539);

return statearr_27655;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27656_27737 = state_27640__$1;
(statearr_27656_27737[(1)] = (16));

} else {
var statearr_27657_27738 = state_27640__$1;
(statearr_27657_27738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (15))){
var inst_27527 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27658_27739 = state_27640__$1;
(statearr_27658_27739[(2)] = inst_27527);

(statearr_27658_27739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (21))){
var inst_27553 = (state_27640[(19)]);
var inst_27553__$1 = (state_27640[(2)]);
var inst_27554 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27553__$1);
var state_27640__$1 = (function (){var statearr_27659 = state_27640;
(statearr_27659[(19)] = inst_27553__$1);

return statearr_27659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27640__$1,(22),inst_27554);
} else {
if((state_val_27641 === (31))){
var inst_27638 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27640__$1,inst_27638);
} else {
if((state_val_27641 === (32))){
var inst_27593 = (state_27640[(16)]);
var inst_27598 = inst_27593.cljs$lang$protocol_mask$partition0$;
var inst_27599 = (inst_27598 & (64));
var inst_27600 = inst_27593.cljs$core$ISeq$;
var inst_27601 = (cljs.core.PROTOCOL_SENTINEL === inst_27600);
var inst_27602 = ((inst_27599) || (inst_27601));
var state_27640__$1 = state_27640;
if(cljs.core.truth_(inst_27602)){
var statearr_27660_27740 = state_27640__$1;
(statearr_27660_27740[(1)] = (35));

} else {
var statearr_27661_27741 = state_27640__$1;
(statearr_27661_27741[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (40))){
var inst_27615 = (state_27640[(20)]);
var inst_27614 = (state_27640[(2)]);
var inst_27615__$1 = cljs.core.get.call(null,inst_27614,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27616 = cljs.core.get.call(null,inst_27614,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27617 = cljs.core.not_empty.call(null,inst_27615__$1);
var state_27640__$1 = (function (){var statearr_27662 = state_27640;
(statearr_27662[(21)] = inst_27616);

(statearr_27662[(20)] = inst_27615__$1);

return statearr_27662;
})();
if(cljs.core.truth_(inst_27617)){
var statearr_27663_27742 = state_27640__$1;
(statearr_27663_27742[(1)] = (41));

} else {
var statearr_27664_27743 = state_27640__$1;
(statearr_27664_27743[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (33))){
var state_27640__$1 = state_27640;
var statearr_27665_27744 = state_27640__$1;
(statearr_27665_27744[(2)] = false);

(statearr_27665_27744[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (13))){
var inst_27513 = (state_27640[(22)]);
var inst_27517 = cljs.core.chunk_first.call(null,inst_27513);
var inst_27518 = cljs.core.chunk_rest.call(null,inst_27513);
var inst_27519 = cljs.core.count.call(null,inst_27517);
var inst_27500 = inst_27518;
var inst_27501 = inst_27517;
var inst_27502 = inst_27519;
var inst_27503 = (0);
var state_27640__$1 = (function (){var statearr_27666 = state_27640;
(statearr_27666[(7)] = inst_27503);

(statearr_27666[(8)] = inst_27501);

(statearr_27666[(9)] = inst_27500);

(statearr_27666[(10)] = inst_27502);

return statearr_27666;
})();
var statearr_27667_27745 = state_27640__$1;
(statearr_27667_27745[(2)] = null);

(statearr_27667_27745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (22))){
var inst_27556 = (state_27640[(23)]);
var inst_27561 = (state_27640[(24)]);
var inst_27557 = (state_27640[(25)]);
var inst_27553 = (state_27640[(19)]);
var inst_27556__$1 = (state_27640[(2)]);
var inst_27557__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27556__$1);
var inst_27558 = (function (){var all_files = inst_27553;
var res_SINGLEQUOTE_ = inst_27556__$1;
var res = inst_27557__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27556,inst_27561,inst_27557,inst_27553,inst_27556__$1,inst_27557__$1,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27482_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27482_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27556,inst_27561,inst_27557,inst_27553,inst_27556__$1,inst_27557__$1,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27559 = cljs.core.filter.call(null,inst_27558,inst_27556__$1);
var inst_27560 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27561__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27560);
var inst_27562 = cljs.core.not_empty.call(null,inst_27561__$1);
var state_27640__$1 = (function (){var statearr_27668 = state_27640;
(statearr_27668[(23)] = inst_27556__$1);

(statearr_27668[(26)] = inst_27559);

(statearr_27668[(24)] = inst_27561__$1);

(statearr_27668[(25)] = inst_27557__$1);

return statearr_27668;
})();
if(cljs.core.truth_(inst_27562)){
var statearr_27669_27746 = state_27640__$1;
(statearr_27669_27746[(1)] = (23));

} else {
var statearr_27670_27747 = state_27640__$1;
(statearr_27670_27747[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (36))){
var state_27640__$1 = state_27640;
var statearr_27671_27748 = state_27640__$1;
(statearr_27671_27748[(2)] = false);

(statearr_27671_27748[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (41))){
var inst_27615 = (state_27640[(20)]);
var inst_27619 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27620 = cljs.core.map.call(null,inst_27619,inst_27615);
var inst_27621 = cljs.core.pr_str.call(null,inst_27620);
var inst_27622 = ["figwheel-no-load meta-data: ",inst_27621].join('');
var inst_27623 = figwheel.client.utils.log.call(null,inst_27622);
var state_27640__$1 = state_27640;
var statearr_27672_27749 = state_27640__$1;
(statearr_27672_27749[(2)] = inst_27623);

(statearr_27672_27749[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (43))){
var inst_27616 = (state_27640[(21)]);
var inst_27626 = (state_27640[(2)]);
var inst_27627 = cljs.core.not_empty.call(null,inst_27616);
var state_27640__$1 = (function (){var statearr_27673 = state_27640;
(statearr_27673[(27)] = inst_27626);

return statearr_27673;
})();
if(cljs.core.truth_(inst_27627)){
var statearr_27674_27750 = state_27640__$1;
(statearr_27674_27750[(1)] = (44));

} else {
var statearr_27675_27751 = state_27640__$1;
(statearr_27675_27751[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (29))){
var inst_27593 = (state_27640[(16)]);
var inst_27556 = (state_27640[(23)]);
var inst_27559 = (state_27640[(26)]);
var inst_27561 = (state_27640[(24)]);
var inst_27557 = (state_27640[(25)]);
var inst_27553 = (state_27640[(19)]);
var inst_27589 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27592 = (function (){var all_files = inst_27553;
var res_SINGLEQUOTE_ = inst_27556;
var res = inst_27557;
var files_not_loaded = inst_27559;
var dependencies_that_loaded = inst_27561;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27593,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27589,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27591){
var map__27676 = p__27591;
var map__27676__$1 = (((((!((map__27676 == null))))?(((((map__27676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27676):map__27676);
var namespace = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27593,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27589,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27593__$1 = cljs.core.group_by.call(null,inst_27592,inst_27559);
var inst_27595 = (inst_27593__$1 == null);
var inst_27596 = cljs.core.not.call(null,inst_27595);
var state_27640__$1 = (function (){var statearr_27678 = state_27640;
(statearr_27678[(28)] = inst_27589);

(statearr_27678[(16)] = inst_27593__$1);

return statearr_27678;
})();
if(inst_27596){
var statearr_27679_27752 = state_27640__$1;
(statearr_27679_27752[(1)] = (32));

} else {
var statearr_27680_27753 = state_27640__$1;
(statearr_27680_27753[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (44))){
var inst_27616 = (state_27640[(21)]);
var inst_27629 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27616);
var inst_27630 = cljs.core.pr_str.call(null,inst_27629);
var inst_27631 = ["not required: ",inst_27630].join('');
var inst_27632 = figwheel.client.utils.log.call(null,inst_27631);
var state_27640__$1 = state_27640;
var statearr_27681_27754 = state_27640__$1;
(statearr_27681_27754[(2)] = inst_27632);

(statearr_27681_27754[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (6))){
var inst_27534 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27682_27755 = state_27640__$1;
(statearr_27682_27755[(2)] = inst_27534);

(statearr_27682_27755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (28))){
var inst_27559 = (state_27640[(26)]);
var inst_27586 = (state_27640[(2)]);
var inst_27587 = cljs.core.not_empty.call(null,inst_27559);
var state_27640__$1 = (function (){var statearr_27683 = state_27640;
(statearr_27683[(29)] = inst_27586);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27587)){
var statearr_27684_27756 = state_27640__$1;
(statearr_27684_27756[(1)] = (29));

} else {
var statearr_27685_27757 = state_27640__$1;
(statearr_27685_27757[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (25))){
var inst_27557 = (state_27640[(25)]);
var inst_27573 = (state_27640[(2)]);
var inst_27574 = cljs.core.not_empty.call(null,inst_27557);
var state_27640__$1 = (function (){var statearr_27686 = state_27640;
(statearr_27686[(30)] = inst_27573);

return statearr_27686;
})();
if(cljs.core.truth_(inst_27574)){
var statearr_27687_27758 = state_27640__$1;
(statearr_27687_27758[(1)] = (26));

} else {
var statearr_27688_27759 = state_27640__$1;
(statearr_27688_27759[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (34))){
var inst_27609 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
if(cljs.core.truth_(inst_27609)){
var statearr_27689_27760 = state_27640__$1;
(statearr_27689_27760[(1)] = (38));

} else {
var statearr_27690_27761 = state_27640__$1;
(statearr_27690_27761[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (17))){
var state_27640__$1 = state_27640;
var statearr_27691_27762 = state_27640__$1;
(statearr_27691_27762[(2)] = recompile_dependents);

(statearr_27691_27762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (3))){
var state_27640__$1 = state_27640;
var statearr_27692_27763 = state_27640__$1;
(statearr_27692_27763[(2)] = null);

(statearr_27692_27763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (12))){
var inst_27530 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27693_27764 = state_27640__$1;
(statearr_27693_27764[(2)] = inst_27530);

(statearr_27693_27764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (2))){
var inst_27492 = (state_27640[(13)]);
var inst_27499 = cljs.core.seq.call(null,inst_27492);
var inst_27500 = inst_27499;
var inst_27501 = null;
var inst_27502 = (0);
var inst_27503 = (0);
var state_27640__$1 = (function (){var statearr_27694 = state_27640;
(statearr_27694[(7)] = inst_27503);

(statearr_27694[(8)] = inst_27501);

(statearr_27694[(9)] = inst_27500);

(statearr_27694[(10)] = inst_27502);

return statearr_27694;
})();
var statearr_27695_27765 = state_27640__$1;
(statearr_27695_27765[(2)] = null);

(statearr_27695_27765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (23))){
var inst_27556 = (state_27640[(23)]);
var inst_27559 = (state_27640[(26)]);
var inst_27561 = (state_27640[(24)]);
var inst_27557 = (state_27640[(25)]);
var inst_27553 = (state_27640[(19)]);
var inst_27564 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27566 = (function (){var all_files = inst_27553;
var res_SINGLEQUOTE_ = inst_27556;
var res = inst_27557;
var files_not_loaded = inst_27559;
var dependencies_that_loaded = inst_27561;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27564,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27565){
var map__27696 = p__27565;
var map__27696__$1 = (((((!((map__27696 == null))))?(((((map__27696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27696):map__27696);
var request_url = cljs.core.get.call(null,map__27696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27564,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27567 = cljs.core.reverse.call(null,inst_27561);
var inst_27568 = cljs.core.map.call(null,inst_27566,inst_27567);
var inst_27569 = cljs.core.pr_str.call(null,inst_27568);
var inst_27570 = figwheel.client.utils.log.call(null,inst_27569);
var state_27640__$1 = (function (){var statearr_27698 = state_27640;
(statearr_27698[(31)] = inst_27564);

return statearr_27698;
})();
var statearr_27699_27766 = state_27640__$1;
(statearr_27699_27766[(2)] = inst_27570);

(statearr_27699_27766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (35))){
var state_27640__$1 = state_27640;
var statearr_27700_27767 = state_27640__$1;
(statearr_27700_27767[(2)] = true);

(statearr_27700_27767[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (19))){
var inst_27543 = (state_27640[(12)]);
var inst_27549 = figwheel.client.file_reloading.expand_files.call(null,inst_27543);
var state_27640__$1 = state_27640;
var statearr_27701_27768 = state_27640__$1;
(statearr_27701_27768[(2)] = inst_27549);

(statearr_27701_27768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (11))){
var state_27640__$1 = state_27640;
var statearr_27702_27769 = state_27640__$1;
(statearr_27702_27769[(2)] = null);

(statearr_27702_27769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (9))){
var inst_27532 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27703_27770 = state_27640__$1;
(statearr_27703_27770[(2)] = inst_27532);

(statearr_27703_27770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (5))){
var inst_27503 = (state_27640[(7)]);
var inst_27502 = (state_27640[(10)]);
var inst_27505 = (inst_27503 < inst_27502);
var inst_27506 = inst_27505;
var state_27640__$1 = state_27640;
if(cljs.core.truth_(inst_27506)){
var statearr_27704_27771 = state_27640__$1;
(statearr_27704_27771[(1)] = (7));

} else {
var statearr_27705_27772 = state_27640__$1;
(statearr_27705_27772[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (14))){
var inst_27513 = (state_27640[(22)]);
var inst_27522 = cljs.core.first.call(null,inst_27513);
var inst_27523 = figwheel.client.file_reloading.eval_body.call(null,inst_27522,opts);
var inst_27524 = cljs.core.next.call(null,inst_27513);
var inst_27500 = inst_27524;
var inst_27501 = null;
var inst_27502 = (0);
var inst_27503 = (0);
var state_27640__$1 = (function (){var statearr_27706 = state_27640;
(statearr_27706[(7)] = inst_27503);

(statearr_27706[(8)] = inst_27501);

(statearr_27706[(32)] = inst_27523);

(statearr_27706[(9)] = inst_27500);

(statearr_27706[(10)] = inst_27502);

return statearr_27706;
})();
var statearr_27707_27773 = state_27640__$1;
(statearr_27707_27773[(2)] = null);

(statearr_27707_27773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (45))){
var state_27640__$1 = state_27640;
var statearr_27708_27774 = state_27640__$1;
(statearr_27708_27774[(2)] = null);

(statearr_27708_27774[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (26))){
var inst_27556 = (state_27640[(23)]);
var inst_27559 = (state_27640[(26)]);
var inst_27561 = (state_27640[(24)]);
var inst_27557 = (state_27640[(25)]);
var inst_27553 = (state_27640[(19)]);
var inst_27576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27578 = (function (){var all_files = inst_27553;
var res_SINGLEQUOTE_ = inst_27556;
var res = inst_27557;
var files_not_loaded = inst_27559;
var dependencies_that_loaded = inst_27561;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27576,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27577){
var map__27709 = p__27577;
var map__27709__$1 = (((((!((map__27709 == null))))?(((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var namespace = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27576,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27579 = cljs.core.map.call(null,inst_27578,inst_27557);
var inst_27580 = cljs.core.pr_str.call(null,inst_27579);
var inst_27581 = figwheel.client.utils.log.call(null,inst_27580);
var inst_27582 = (function (){var all_files = inst_27553;
var res_SINGLEQUOTE_ = inst_27556;
var res = inst_27557;
var files_not_loaded = inst_27559;
var dependencies_that_loaded = inst_27561;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27576,inst_27578,inst_27579,inst_27580,inst_27581,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27556,inst_27559,inst_27561,inst_27557,inst_27553,inst_27576,inst_27578,inst_27579,inst_27580,inst_27581,state_val_27641,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27583 = setTimeout(inst_27582,(10));
var state_27640__$1 = (function (){var statearr_27711 = state_27640;
(statearr_27711[(33)] = inst_27581);

(statearr_27711[(34)] = inst_27576);

return statearr_27711;
})();
var statearr_27712_27775 = state_27640__$1;
(statearr_27712_27775[(2)] = inst_27583);

(statearr_27712_27775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (16))){
var state_27640__$1 = state_27640;
var statearr_27713_27776 = state_27640__$1;
(statearr_27713_27776[(2)] = reload_dependents);

(statearr_27713_27776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (38))){
var inst_27593 = (state_27640[(16)]);
var inst_27611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27593);
var state_27640__$1 = state_27640;
var statearr_27714_27777 = state_27640__$1;
(statearr_27714_27777[(2)] = inst_27611);

(statearr_27714_27777[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (30))){
var state_27640__$1 = state_27640;
var statearr_27715_27778 = state_27640__$1;
(statearr_27715_27778[(2)] = null);

(statearr_27715_27778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (10))){
var inst_27513 = (state_27640[(22)]);
var inst_27515 = cljs.core.chunked_seq_QMARK_.call(null,inst_27513);
var state_27640__$1 = state_27640;
if(inst_27515){
var statearr_27716_27779 = state_27640__$1;
(statearr_27716_27779[(1)] = (13));

} else {
var statearr_27717_27780 = state_27640__$1;
(statearr_27717_27780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (18))){
var inst_27547 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
if(cljs.core.truth_(inst_27547)){
var statearr_27718_27781 = state_27640__$1;
(statearr_27718_27781[(1)] = (19));

} else {
var statearr_27719_27782 = state_27640__$1;
(statearr_27719_27782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (42))){
var state_27640__$1 = state_27640;
var statearr_27720_27783 = state_27640__$1;
(statearr_27720_27783[(2)] = null);

(statearr_27720_27783[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (37))){
var inst_27606 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27721_27784 = state_27640__$1;
(statearr_27721_27784[(2)] = inst_27606);

(statearr_27721_27784[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (8))){
var inst_27500 = (state_27640[(9)]);
var inst_27513 = (state_27640[(22)]);
var inst_27513__$1 = cljs.core.seq.call(null,inst_27500);
var state_27640__$1 = (function (){var statearr_27722 = state_27640;
(statearr_27722[(22)] = inst_27513__$1);

return statearr_27722;
})();
if(inst_27513__$1){
var statearr_27723_27785 = state_27640__$1;
(statearr_27723_27785[(1)] = (10));

} else {
var statearr_27724_27786 = state_27640__$1;
(statearr_27724_27786[(1)] = (11));

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
});})(c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23597__auto__,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto____0 = (function (){
var statearr_27725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27725[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto__);

(statearr_27725[(1)] = (1));

return statearr_27725;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto____1 = (function (state_27640){
while(true){
var ret_value__23599__auto__ = (function (){try{while(true){
var result__23600__auto__ = switch__23597__auto__.call(null,state_27640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23600__auto__;
}
break;
}
}catch (e27726){if((e27726 instanceof Object)){
var ex__23601__auto__ = e27726;
var statearr_27727_27787 = state_27640;
(statearr_27727_27787[(5)] = ex__23601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27788 = state_27640;
state_27640 = G__27788;
continue;
} else {
return ret_value__23599__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto__ = function(state_27640){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto____1.call(this,state_27640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23598__auto__;
})()
;})(switch__23597__auto__,c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23694__auto__ = (function (){var statearr_27728 = f__23693__auto__.call(null);
(statearr_27728[(6)] = c__23692__auto__);

return statearr_27728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23694__auto__);
});})(c__23692__auto__,map__27485,map__27485__$1,opts,before_jsload,on_jsload,reload_dependents,map__27486,map__27486__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23692__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27791,link){
var map__27792 = p__27791;
var map__27792__$1 = (((((!((map__27792 == null))))?(((((map__27792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27792):map__27792);
var file = cljs.core.get.call(null,map__27792__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27792,map__27792__$1,file){
return (function (p1__27789_SHARP_,p2__27790_SHARP_){
if(cljs.core._EQ_.call(null,p1__27789_SHARP_,p2__27790_SHARP_)){
return p1__27789_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27792,map__27792__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27795){
var map__27796 = p__27795;
var map__27796__$1 = (((((!((map__27796 == null))))?(((((map__27796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);
var match_length = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27794_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27794_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27798_SHARP_,p2__27799_SHARP_){
return cljs.core.assoc.call(null,p1__27798_SHARP_,cljs.core.get.call(null,p2__27799_SHARP_,key),p2__27799_SHARP_);
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
var loaded_f_datas_27800 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27800);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27800);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27801,p__27802){
var map__27803 = p__27801;
var map__27803__$1 = (((((!((map__27803 == null))))?(((((map__27803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27803):map__27803);
var on_cssload = cljs.core.get.call(null,map__27803__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27804 = p__27802;
var map__27804__$1 = (((((!((map__27804 == null))))?(((((map__27804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27804):map__27804);
var files_msg = map__27804__$1;
var files = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1571951938063
