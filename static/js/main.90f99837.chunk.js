(this["webpackJsonpmovie-finder"]=this["webpackJsonpmovie-finder"]||[]).push([[0],{136:function(e,t,a){e.exports=a.p+"static/media/movie.af39d232.png"},140:function(e,t,a){e.exports=a(236)},145:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=(a(145),a(20)),l=a(21),m=a(24),s=a(23),u=a(36),v=a(59),d=a.n(v),p=a(240),h=a(238),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{style:{marginLeft:"5%",marginRight:"5%"},dataSource:this.props.data,renderItem:function(e){return r.a.createElement(p.a.Item,{key:e.title,extra:r.a.createElement("a",{href:"/Movie-Finder/#/".concat(e.imdbID)},r.a.createElement("img",{width:100,alt:"Poster",src:e.Poster}))},r.a.createElement(p.a.Item.Meta,{avatar:r.a.createElement("a",{href:"/Movie-Finder/#/".concat(e.imdbID)},r.a.createElement(h.a,{src:e.Poster})),title:r.a.createElement("a",{href:"/Movie-Finder/#/".concat(e.imdbID)},e.Title),description:e.Year}))}}))}}]),a}(n.Component),f=a(243),b=a(10),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={movies:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("".concat("https://www.omdbapi.com/","?apikey=").concat("70df9497")).then((function(t){t.data.Error?e.setState({movies:[]}):e.setState({movies:[t.data]})}))}},{key:"onChange",value:function(e){var t=this;d.a.get("".concat("https://www.omdbapi.com/","?apikey=").concat("70df9497","&t=").concat(e.target.value)).then((function(e){e.data.Error?t.setState({movies:[]}):t.setState({movies:[e.data]})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(f.a,{name:"input",placeholder:"Favor ingrese nombre de pelicula",className:"certain-category-icon",style:{width:"50%"},suffix:r.a.createElement(b.a,{type:"search"}),onChange:this.onChange.bind(this)})),r.a.createElement(E,{data:this.state.movies}))}}]),a}(n.Component),y=a(99),O=a(241),j=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{title:this.props.movie.Title},r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"A\xf1o: ")," ",this.props.movie.Year),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Publicacion: ")," ",this.props.movie.Released),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Clasificacion: ")," ",this.props.movie.Rated),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Tipo: ")," ",this.props.movie.Type),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Director: ")," ",this.props.movie.Director),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Pais: ")," ",this.props.movie.Country),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Calificacion imdb: ")," ",this.props.movie.imdbRating),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Puntuacion: ")," ",this.props.movie.Metascore),r.a.createElement(O.a.Grid,null,r.a.createElement("b",null,"Premios: ")," ",this.props.movie.Awards)),r.a.createElement(O.a,null,r.a.createElement("b",null,"Trama: ")," ",this.props.movie.Plot),r.a.createElement(O.a,null,r.a.createElement("b",null,"Actores: ")," ",this.props.movie.Actors),r.a.createElement(O.a,null,r.a.createElement("b",null,"Produccion: ")," ",this.props.movie.Production))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeAddFavorite=function(e){var t=JSON.stringify(n.state.movie);localStorage.setItem(n.state.movie.imdbID,t),alert("Pel\xedcula agregada a favoritos")},n.onChangeRemoveFavorite=function(e){localStorage.removeItem(n.state.movie.imdbID),alert("Pel\xedcula eliminada a favoritos")},n.state={movie:[],favorite:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieID;d.a.get("".concat("https://www.omdbapi.com/","?apikey=").concat("70df9497","&i=").concat(t)).then((function(t){e.setState({movie:t.data}),null===localStorage.getItem(e.state.movie.imdbID)?e.setState({favorite:!1}):e.setState({favorite:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{disabled:this.state.favorite,href:"/Movie-Finder/#/favorite-movies",type:"primary",onClick:this.onChangeAddFavorite},"A\xf1adir a favoritas"),r.a.createElement(y.a,{disabled:!this.state.favorite,href:"/Movie-Finder/#/favorite-movies",type:"danger",onClick:this.onChangeRemoveFavorite},"Quitar de favoritas"),r.a.createElement(j,{movie:this.state.movie}))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={movies:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){for(var e=[],t=Object.keys(localStorage),a=t.length;a--;)e.push(JSON.parse(localStorage.getItem(t[a])));e&&this.setState({movies:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{data:this.state.movies}))}}]),a}(n.Component),C=a(41),I=a(239),S=a(242),D=a(136),M=a.n(D),P=(a(234),I.a.Header),F=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,{className:"layout"},r.a.createElement(P,null,r.a.createElement(S.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},r.a.createElement(S.a.Item,null,r.a.createElement(C.b,{to:"/"},r.a.createElement("img",{alt:"Movie",src:M.a,height:"40px"}))),r.a.createElement(S.a.Item,{key:"1"},r.a.createElement(C.b,{to:"/"},"Buscador de Pel\xedculas")),r.a.createElement(S.a.Item,{key:"2"},r.a.createElement(C.b,{to:"/favorite-movies"},"Favoritas")))))}}]),a}(n.Component),x=function(){return r.a.createElement("div",null,r.a.createElement(C.a,{basename:"/MovieFinder"},r.a.createElement(F,null),r.a.createElement("br",null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:g}),r.a.createElement(u.a,{exact:!0,path:"/#/favorite-movies",component:w}),r.a.createElement(u.a,{exact:!0,path:"/#/:movieID",component:k}))))},G=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.90f99837.chunk.js.map