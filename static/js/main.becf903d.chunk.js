(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(10),i=a.n(s),o=(a(17),a(2)),l=a(3),c=a(4),d=a(6),m=a(5),u=a(1),h=a(7),p=a(8),f=(a(18),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).getData=function(e){var t=new Date(1e3*e.deadline),a=t.getHours()>=12?"PM":"AM",r=("0"+(t.getHours()%12||12)).substr(-2),n=("0"+t.getMinutes()).substr(-2),s=("0"+t.getSeconds()).substr(-2);return t.getMonth()+"/"+t.getDate()+"/"+t.getFullYear()+"\t"+r+":"+n+":"+s+" "+a},a.getWorkerName=function(){return Object(p.a)({},a.state.workerArray[a.props.workerId]).name},a.state={workerArray:[]},a.props=e,a.componentDidMount=a.componentDidMount.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;$(".orderContainer").each(function(){$(this).css("border-top-color","rgb("+(Math.floor(205*Math.random())+50)+","+(Math.floor(205*Math.random())+50)+","+(Math.floor(205*Math.random())+50)+")")}),fetch("https://www.hatchways.io/api/assessment/workers/"+this.props.workerId).then(function(e){return e.json()}).then(function(t){var a=e.state.workerArray.slice();a[e.props.workerId]=t.worker,e.props.addWorkerName(a[e.props.workerId].name,e.props),e.setState({workerArray:a})})}},{key:"render",value:function(){var e=Object(p.a)({},this.state.workerArray[this.props.workerId]);return!0===this.props.display?n.a.createElement("div",{className:"orderContainer col xl12",style:{borderTop:"5px solid"}},n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"col s12"},this.props.name)),n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"col m12"},n.a.createElement("span",null,"OrderId:"),this.props.id)),n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"col m12"},n.a.createElement("span",null,"Description:"),this.props.description)),n.a.createElement("div",{className:"worker row"},n.a.createElement("img",{className:"col s8",alt:"",src:e.image}),n.a.createElement("div",{className:"workerInfo"},n.a.createElement("h3",{className:"workerName"},e.name.replace(/^http:\/\//i,"https://")),n.a.createElement("p",null,e.companyName),n.a.createElement("p",null,e.email))),n.a.createElement("p",{className:"date"},n.a.createElement("i",null,this.getData(this.props)))):n.a.createElement("div",null)}}]),t}(n.a.Component)),v=(a(19),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).search=function(t){if(null!=e.state.orderData){var a=Object(o.a)(e.state.orderData),r=t.target.value;if(0!==r.length){var n=[];for(var s in Object.entries(e.state.names).forEach(function(e){var t=e[0],a=e[1];-1!==t.toLowerCase().indexOf(r.toLowerCase())&&n.push.apply(n,Object(o.a)(a))}),a){d=a[s];for(var i in d.display=!1,n){var l=n[i];if(d.id===l.id){d.display=!0;break}}}e.setState({filteredOrder:a})}else{for(var c in a){var d;(d=a[c]).display=!0}e.setState({filteredOrder:e.state.orderData})}}},e.state={loading:!1,filteredOrder:[],orderData:[],error:!1,names:{}},e.search=e.search.bind(Object(u.a)(e)),e.sortByDeadlineAsc=e.sortByDeadlineAsc.bind(Object(u.a)(e)),e.sortByDeadlineDesc=e.sortByDeadlineDesc.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"addNameToParent",value:function(e,t){var a=this.state.names;e in this.state.names?a[e].push(t):a[e]=[t],this.setState({names:a})}},{key:"sortByDeadlineAsc",value:function(){if(null!=this.state.orderData){var e=Object(o.a)(this.state.filteredOrder);e=e.sort(function(e,t){return e.deadline-t.deadline}),this.setState({filteredOrder:e})}}},{key:"sortByDeadlineDesc",value:function(){if(null!=this.state.orderData){var e=Object(o.a)(this.state.filteredOrder);e=e.sort(function(e,t){return t.deadline-e.deadline}),this.setState({filteredOrder:e})}}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://www.hatchways.io/api/assessment/work_orders").then(function(e){if(e.ok)return e.json();throw new Error(e.status)}).then(function(t){Array.from(t.orders).map(function(e){e.display=!0,e.worker_name=""}),e.setState({orderData:t.orders,loading:!1,filteredOrder:t.orders})}).catch(function(t){console.log("error: "+t),e.setState({error:!0})})}},{key:"render",value:function(e){if(this.state.loading)return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("h1",{id:"title"},"Order! Order!"),n.a.createElement("input",{type:"text",name:"search",onChange:this.search,placeholder:"Filter by order id..."})),n.a.createElement("div",{className:"buttonContainer"},n.a.createElement("input",{type:"button",onClick:this.sortByDeadlineAsc,value:"Sort Ascending"}),n.a.createElement("input",{type:"button",onClick:this.sortByDeadlineDesc,value:"Sort Descending"})),n.a.createElement("div",{className:"mainDiv row"},n.a.createElement("h2",null,"Loading...")));for(var t=[],a=[],r=[],s=0;s<this.state.filteredOrder.length;s+=1){var i=this.state.filteredOrder[s];i.display?(r.push(n.a.createElement(f,{display:i.display,addWorkerName:this.addNameToParent.bind(this),key:i.id,name:i.name,description:i.description,deadline:i.deadline,id:i.id,workerId:i.workerId})),2===r.length&&(t.push(n.a.createElement("div",{key:s,className:"mainDiv row"},r[0],r[1])),r=[])):a.push(n.a.createElement(f,{display:i.display,addWorkerName:this.addNameToParent.bind(this),key:i.id,name:i.name,description:i.description,deadline:i.deadline,id:i.id,workerId:i.workerId}))}return 1===r.length&&(t.push(n.a.createElement("div",{key:s,className:"mainDiv row"},r[0])),r=[]),n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("h1",{id:"title"},"Order! Order!"),n.a.createElement("input",{type:"text",name:"search",onChange:this.search,placeholder:"Filter by Name!"})),n.a.createElement("div",{className:"buttonContainer"},n.a.createElement("input",{type:"button",onClick:this.sortByDeadlineAsc,value:"Sort Ascending"}),n.a.createElement("input",{type:"button",onClick:this.sortByDeadlineDesc,value:"Sort Descending"})),t)}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.becf903d.chunk.js.map