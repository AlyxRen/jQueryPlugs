/*!
 * jQuery html plugin.
 * 
 * 
 */
(function($,hOP,undef){
  var handle = function(a){
    if (!a) return '';
    var out="",x;
    for(x in a){
    if (hOP.call(a,x)){
      out += " "+x+(a[x] === null?"":"='"+a[x]+"'");
    }
    }
    return out;
  },
  element = function(elem,defEnter){
    console.log(elem);
    return function(enter, Attributes, text){
      if (arguments.length === 0 || (typeof enter === 'object') ){
        text = Attributes;
        Attributes = enter;
        enter = defEnter;
      }
      var call = this.length?"append":"add",
          out,
          str = "<"+
                  elem+
                  (handle(Attributes))+
                ">"+
                text+
                "</"+elem+">";
                console.log(call);
      out = this[call](str);
      return enter&&call=="append"?
        out.children(':last'):
        out;
    }
  },
  Tags = "a abbr address area article aside audio b base bdo blockquote body br button canvas caption cite code col colgroup command datalist dd del details dfn div dl dt em embed eventsource fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link mark map menu meta meter nav noscript object ol optgroup option output p param pre progress q ruby rp rt samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr ul var video wbr".split(' '),
  shortTags = "area base basefont br embed hr input img link param meta";
  $.extend({
    html: function(pre){
      var temp, extend = {};
      while(temp = Tags.pop()){
        extend[typeof pre === 'function'?pre.call(temp,temp):pre+temp] = element(temp, (shortTags.indexOf(temp) === -1?true:false) );
      }
      $.extend($.fn, extend);
      $.extend({"html":undef});
    }
  });
  
}(jQuery,Object.prototype.hasOwnProperty));