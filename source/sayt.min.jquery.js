/*
 *******************************************************************************
 *
 * sayt - Save As You Type
 *
 *******************************************************************************
 *
 * This plugin autosaves form input as it is being entered by the
 * user. It is saved to a cookie during each keyup and change.
 *
 * When a page is reloaded for any reason, the form data is automatically
 * re-entered for the user by reading the cookie. The cookie can be deleted
 * on the fly by the plugin if required.
 *
 *******************************************************************************
 *
 * Intructions: 
 * By: Ben Griffiths, ben@ben-griffiths.com
 * Version: 1.4.3
 *
 * Dependencies:
 *
 * jquery-cookie 1.0.0 (Relies on the jQuery Cookie plugin https://github.com/carhartl/jquery-cookie)
 * - Included.
 *
 *******************************************************************************
 *
 * Licensed under The MIT License (MIT)
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2011 Ben Griffiths (mail@thecodefoundryltd.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 *******************************************************************************
 */
!function(e){e.fn.sayt=function(t){function a(t){var a=""
jQuery.each(t,function(e,t){a=a+t.name+":::--FIELDANDVARSPLITTER--:::"+t.value+":::--FORMSPLITTERFORVARS--:::"}),"undefined"!=typeof Storage?localStorage.setItem(u,a):e.cookie(u,a,{expires:o.days})}function r(e,t,a){var r=(e+"").indexOf(t,a||0)
return-1===r?!1:r}function n(t,a){var r=e.extend({},t),n=r.find("[data-sayt-exclude]")
n.remove()
for(i in a)n=r.find(a[i]),n.remove()
var o=r.serializeArray()
return o}var o=e.extend({prefix:"autosaveFormCookie-",erase:!1,days:3,autosave:!0,savenow:!1,recover:!1,autorecover:!0,checksaveexists:!1,exclude:[]},t),c=this,u=o.prefix+c.attr("id")
if(1==o.erase)return e.cookie(u,null),"undefined"!=typeof Storage&&localStorage.removeItem(u),!0
var f
if(f="undefined"!=typeof Storage?localStorage.getItem(u):e.cookie(u),1==o.checksaveexists)return f?!0:!1
if(1==o.savenow){var s=n(c,o.exclude)
return a(s),!0}if(1==o.autorecover||1==o.recover){if(f){var v=f.split(":::--FORMSPLITTERFORVARS--:::"),l={}
e.each(v,function(t,a){var r=a.split(":::--FIELDANDVARSPLITTER--:::")
""!=e.trim(r[0])&&(e.trim(r[0])in l?l[e.trim(r[0])]=l[e.trim(r[0])]+":::--MULTISELECTSPLITTER--:::"+r[1]:l[e.trim(r[0])]=r[1])}),e.each(l,function(t,a){if(r(a,":::--MULTISELECTSPLITTER--:::")>0){var n=a.split(":::--MULTISELECTSPLITTER--:::")
e.each(n,function(a,r){e('input[name="'+t+'"], select[name="'+t+'"], textarea[name="'+t+'"]',e(c)).find('[value="'+r+'"]').prop("selected",!0),e('input[name="'+t+'"][value="'+r+'"], select[name="'+t+'"][value="'+r+'"], textarea[name="'+t+'"][value="'+r+'"]',e(c)).prop("checked",!0)})}else e('input[name="'+t+'"], select[name="'+t+'"], textarea[name="'+t+'"]',e(c)).val([a])})}if(1==o.recover)return!0}1==o.autosave&&this.find("input, select, textarea").each(function(){e(this).change(function(){var e=n(c,o.exclude)
a(e)}),e(this).keyup(function(){var e=n(c,o.exclude)
a(e)})})}}(jQuery)

