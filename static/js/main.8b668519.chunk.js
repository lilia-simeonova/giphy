(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(49)},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(14),l=a.n(i),o=a(11),c=a.n(o),r=(a(34),a(4)),u=a(5),h=a(8),d=a(6),m=a(7),p=a(52),f=a(51),g=a(53),b=a(2),v=(a(36),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={loaded:!1,clicked:!1,modalIsOpen:!1,toSlackRes:""},a.openModal=a.openModal.bind(Object(b.a)(Object(b.a)(a))),a.closeModal=a.closeModal.bind(Object(b.a)(Object(b.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(b.a)(Object(b.a)(a))),a.handleImageLoaded=a.handleImageLoaded.bind(Object(b.a)(Object(b.a)(a))),a.handleClick=a.handleClick.bind(Object(b.a)(Object(b.a)(a))),a.shareToSlack=a.shareToSlack.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.img.removeEventListener("load",this.handleImageLoaded)}},{key:"componentDidMount",value:function(){this.img&&this.img.addEventListener("load",this.handleImageLoaded)}},{key:"handleImageLoaded",value:function(){this.setState({imageStatus:!0})}},{key:"handleClick",value:function(){this.setState({clicked:!0})}},{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.openModal()}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1,toSlackRes:""})}},{key:"mapRating",value:function(e){switch(e){case"g":return"General Audiences";case"pg":return"Parental Guidance Suggested";case"pg-13":return"Parents Strongly Cautioned";case"r":return"Restricted";case"nc-17":return"Adults only";default:return"General Audiences"}}},{key:"shareToSlack",value:function(){var e=this;fetch("https://hooks.slack.com/services/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",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:"Hey! Check this out",attachments:[{fallback:"Gif",color:"#2eb886",title:this.props.gif.title,image_url:this.props.gif.images.downsized_medium.url}]})}).then(function(t){e.setState({toSlackRes:"ok"})}).catch(function(t){e.setState({toSlackRes:"err"})})}},{key:"render",value:function(){var e=this,t=this.props.gif,a=this.props.mosaic,n=t.id,i=t.images.downsized_medium.url,l=this.mapRating(t.rating),o=t.title,r="gifsMosaic"===a?"gifMosaic":"gif",u="unknown";t.user&&(u=t.user.username);var h=this.state.imageStatus?"showImg":"hideImg";return s.a.createElement("div",{className:r},s.a.createElement(c.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,className:"modal",contentLabel:"Example Modal"},s.a.createElement("img",{"aria-label":o,key:n,alt:o,src:i,className:"modalImg"}),s.a.createElement("div",{className:"info"},s.a.createElement("h2",{style:{textAlign:"center"}},o),s.a.createElement("div",null,"Rating: ",s.a.createElement("b",null,l))," ",s.a.createElement("div",{className:"slack"},s.a.createElement("button",{className:"slackBtn",onClick:this.shareToSlack}),"ok"===this.state.toSlackRes?s.a.createElement("div",{className:"slackResponse"},s.a.createElement("span",{role:"img","aria-label":"smile-emoji"},"\ud83d\ude0a")," ","Successfully sent to Slack"):s.a.createElement("div",null),"err"===this.state.toSlackRes?s.a.createElement("div",{className:"slackResponse"}," ",s.a.createElement("span",{role:"img","aria-label":"sad-emoji"},"\ud83d\ude14")," ","Something went wrong"," "):s.a.createElement("div",null)),s.a.createElement("div",null,s.a.createElement("i",null,"Uploaded by: ",u)))),s.a.createElement("div",{className:"placeholder"},s.a.createElement("img",{tabIndex:0,className:h,"aria-label":o,key:n,src:i,alt:o,ref:function(t){e.img=t},onClick:this.openModal,onKeyPress:this.handleKeyPress})))}}]),t}(n.Component)),S=(a(38),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={urls:[],gifsClass:"gifs",sort:"",height:window.innerHeight,bottom:!1,changedSearch:!1},a.unmounted=!1,a.getGifs=a.getGifs.bind(Object(b.a)(Object(b.a)(a))),a.useMosaicLayout=a.useMosaicLayout.bind(Object(b.a)(Object(b.a)(a))),a.sort=a.sort.bind(Object(b.a)(Object(b.a)(a))),a.handleScroll=a.handleScroll.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"componentDidMount",value:function(){this.getGifs(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(e){e.urls||e.search===this.props.search||(this.setState({urls:[],sort:""}),this.getGifs())}},{key:"getGifs",value:function(){var e=this,t="37QfhlkZazowhlelLtUya3WI0tPNvDOr",a="https://api.giphy.com/v1/gifs/",n=this.props.search,s="";s=""===n?a+"trending?api_key="+t:a+"search?api_key="+t+"&q="+n,s+="&offset="+this.state.urls.length,fetch(s,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=t.data;if(!e.unmounted)if(0===e.state.urls.length)e.setState({urls:a});else{var n=e.state.urls.concat(a);e.setState({urls:n})}}).catch(function(e){return console.log(e)})}},{key:"handleScroll",value:function(e){var t="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,a=document.body,n=document.documentElement,s=Math.max(a.scrollHeight,a.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight);t+window.pageYOffset>=s?(this.setState({bottom:!0}),this.getGifs()):this.setState({bottom:!1})}},{key:"useMosaicLayout",value:function(){"gifs"===this.state.gifsClass?this.setState({gifsClass:"gifsMosaic"}):this.setState({gifsClass:"gifs"})}},{key:"sort",value:function(){var e=[],t="";"ASC"===this.state.sort?(e=this.state.urls.sort(function(e,t){return new Date(t.import_datetime)-new Date(e.import_datetime)}),t="DESC"):(e=this.state.urls.sort(function(e,t){return new Date(e.import_datetime)-new Date(t.import_datetime)}),t="ASC"),this.setState({urls:e,sort:t})}},{key:"render",value:function(){var e=this,t=this.state.urls;if(t){var a=t.map(function(t,a){return s.a.createElement(v,{key:"gif-"+a,gif:t,mosaic:e.state.gifsClass})});return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("button",{onClick:this.useMosaicLayout,className:"options layout"},"Change Layout"),s.a.createElement("button",{onClick:this.sort,className:"options"},"Sort ","ASC"===this.state.sort?"\u2b06":"","DESC"===this.state.sort?"\u2b07":""),s.a.createElement("p",null," ",""!==this.state.sort?"Sorted by: uploaded time "+this.state.sort:"")),s.a.createElement("div",{className:this.state.gifsClass},a))}}}]),t}(n.Component)),k=(a(40),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={input:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.updateSearch(this.state.input)}},{key:"render",value:function(){return s.a.createElement("div",{className:"search"},s.a.createElement("h1",null,"Search for: ",this.props.search||"Trending"),s.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},s.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,className:"inputSearch","aria-label":"search-input"}),s.a.createElement("input",{type:"submit",value:"Search",className:"searchButton"})))}}]),t}(n.Component)),O=(a(42),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={search:"",slackList:[]},e.updateSearchState=e.updateSearchState.bind(Object(b.a)(Object(b.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"updateSearchState",value:function(e){this.setState({search:e})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Home"},s.a.createElement("header",null,s.a.createElement(k,{updateSearch:this.updateSearchState,search:this.state.search})),s.a.createElement(S,{search:this.state.search}))}}]),t}(n.Component)),y=(a(44),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={imageURL:"",uploading:!1},e.handleUploadImage=e.handleUploadImage.bind(Object(b.a)(Object(b.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleUploadImage",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("file",this.uploadInput.files[0]),a.append("api_key","37QfhlkZazowhlelLtUya3WI0tPNvDOr"),this.uploadInput.files[0]?(this.setState({uploading:!0}),console.log(a),fetch("https://upload.giphy.com/v1/gifs",{method:"POST",body:a}).then(function(e){return e.json()}).then(function(e){console.log("succc",e),200===e.meta.status?(t.setState({imageURL:"https://giphy.com/gifs/"+e.data.id,message:"ok"}),t.uploadInput.value=""):t.setState({message:e.meta.msg})}).catch(function(e){console.error(e),t.setState({message:"Something went wrong."})}).then(function(){t.setState({uploading:!1})})):this.setState({message:"No file selected"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"upload"},s.a.createElement("div",{className:"result"},this.state.uploading?"Uploading...":"ok"===this.state.message?s.a.createElement(s.a.Fragment,null,"Your image was uploaded here:"," ",s.a.createElement("a",{href:this.state.imageURL},this.state.imageURL)):this.state.message),s.a.createElement("form",{className:"uploadForm",onSubmit:this.handleUploadImage},s.a.createElement("h3",null,"Upload file"),s.a.createElement("div",null,s.a.createElement("input",{onChange:function(){e.setState({message:""})},ref:function(t){e.uploadInput=t},type:"file"})),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("button",{className:"uploadButton",disabled:this.state.uploading},"Upload"))))}}]),t}(n.Component)),j=(a(46),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={search:""},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("nav",{className:"nav"},s.a.createElement("div",{className:"title"},"Giphy"),s.a.createElement(f.a,{to:"/"},"Home"),s.a.createElement(f.a,{to:"/upload"},"Upload Gif")),s.a.createElement(g.a,{exact:!0,path:"/",component:O}),s.a.createElement(g.a,{exact:!0,path:"/upload",component:y})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=document.getElementById("root");c.a.setAppElement(E),l.a.render(s.a.createElement(j,null),E),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.8b668519.chunk.js.map