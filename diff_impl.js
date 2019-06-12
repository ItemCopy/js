var tmpBuffer=[];
var isSnacks=false;
var hasIteration=false;
var isCopyTask=false;
var copyTaskClosed=false;
function setIterationData()
{
 if($("input#Iteration[type='hidden']").val()=="Yes")
 hasIteration=true;
 tmpBuffer['product_family']=$("input#ProductFamily[type='hidden']").val();
 tmpBuffer['variety']=$("input#Variety[type='hidden']").val();
 tmpBuffer['pack_description']=$("input#PackDescriptopm[type='hidden']").val();
 tmpBuffer['size_description']=$("input#SizeDescriptopm[type='hidden']").val();
 tmpBuffer['form_description']=$("input#Form[type='hidden']").val();
 tmpBuffer['brand_description']=$("input#Brand[type='hidden']").val();
 tmpBuffer['basic_product_name']=$("input#BasicProductName[type='hidden']").val();
 tmpBuffer['romance_copy']=$("input#RomanceCopy[type='hidden']").val();
 tmpBuffer['consumer_product_name']=$("input#ProductFamily[type='hidden']").val();
 tmpBuffer['short_description']=$("input#ShortDescription[type='hidden']").val();
 tmpBuffer['long_description']=$("input#LongDescription[type='hidden']").val();
 tmpBuffer['web_product_name']=$("input#WebsiteProductName[type='hidden']").val();
 tmpBuffer['web_product_grouping']=$("input#WebsiteProductGroup[type='hidden']").val();
tmpBuffer['web_prod_description']=$("input#WebsiteProductDescription[type='hidden']").val();
 if($("input#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_ce62ab73-a2e5-3bfb-b53a-934a36e3e24a_CheckBox").parent().parent().css("display")!="none" && copyTaskClosed==false){
 isCopyTask=true;
  tmpBuffer['product_family']=$("span[name='dblProductFamilyRO']").text();
 tmpBuffer['variety']=$("span[name='dblVarietyRO']").text();
 tmpBuffer['pack_description']=$("span[name='dblPackRO']").text();
 tmpBuffer['size_description']=$("span[name='dblsizeRO']").text();
 tmpBuffer['form_description']=$("span[name='dblformRO']").text();
 tmpBuffer['brand_description']=$("span[name='dblBrandDescriptionRO']").text();
 tmpBuffer['romance_copy']=$("span[name='dblRomanceCopyRO']").text();
 tmpBuffer['basic_product_name']=$("span[name='dblBasicProductNameRO']").text();
 tmpBuffer['consumer_product_name']=$("span[name='dblConsumerProductNameRO']").text();
 tmpBuffer['short_description']=$("span[name='dblShortDescriptionRO']").text();
 tmpBuffer['long_description']=$("span[name='dblLongDescriptionRO']").text();
 tmpBuffer['web_product_name']=$("span[name='dblWebsiteProductNameRO']").text();
 tmpBuffer['web_product_grouping']=$("span[name='dblWebsiteProductGroupingRO']").text();
tmpBuffer['web_prod_description']=$("span[name='dblWebsiteProductDescriptionRO']").text();
    }  
  else
   copyTaskClosed=false;
}
function renderCustomElements(){
setIterationData();
populateICFields();
 $("input[name='txtVariety']").on("change",function(){
  if($("input#Snacks[type='hidden']").val()=="Yes")
  {
   setConsumerProductName();
  }
  highlightICFields();
 });
 $("input[name='PackText Box']").on("change",function(){
  if($("input#Snacks[type='hidden']").val()=="Yes")
  {
   setConsumerProductName();
  }
  highlightICFields();
 });
  $("input[name='SizeText Box']").on("change",function(){
  if($("input#Snacks[type='hidden']").val()=="Yes")
  {
   setConsumerProductName();
  }
   highlightICFields();
 });
  $("input[name='FormText Box']").on("change",function(){
  if($("input#Snacks[type='hidden']").val()=="Yes")
  {
   setConsumerProductName();
  }
   highlightICFields();
 });
  $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_86d19290-25ba-4f9f-bf2e-5fa641a74832_TextArea").on("change",function(){highlightICFields();});
 $("input[name='txtRomanceCopy']").on("change",function(){highlightICFields();});
 $("input[name='txtBasicProductName']").on("change",function(){highlightICFields();});
 $("input[name='txtConsumerProductName']").on("change",function(){highlightICFields();});
 $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_66dd69d6-3df6-4e25-853e-a0767b1acc1e_TextArea").on("change",function(){highlightICFields();});
 $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_06294f88-fd4f-43b3-bfe4-7e076194bcee_TextArea").on("change",function(){highlightICFields();});
 $("input[name='txtWebsiteProductName']").on("change",function(){highlightICFields();});
 $("input[name='txtWebsiteProductGrouping']").on("change",function(){highlightICFields();});
 $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_1181308a-7435-4248-9c58-e7fd566d89be_TextArea").on("change",function(){highlightICFields();});
 $("body").on('DOMSubtreeModified', "a[class^='input-control']", function() {
    var wrapperID=$(this).parent().parent().parent().parent().parent().parent().attr("id");
  var domElText=$(this).text();
  if(wrapperID=="533d4106-897a-4ab9-7c1f-1dea7dcc8f85_a0f6d29e-05ed-55c3-2d0e-4d208e68e349" || wrapperID=="533d4106-897a-4ab9-7c1f-1dea7dcc8f85_67c03a0f-712b-ea46-f8e1-0c8bdd2d84d5" || wrapperID=="533d4106-897a-4ab9-7c1f-1dea7dcc8f85_a7c1c429-507f-a277-98ad-f23bc731fa44")
  {
   if(domElText!="Select an item")
   {
    setConsumerProductName();
   }
  }
});
 $("a[name='ButtonCloseCompare']").click(function(){
 isCopyTask=false;
  copyTaskClosed=true;
  setIterationData();
   highlightICFields();
 });
}
function setConsumerProductName()
{
 var brand=$("div#533d4106-897a-4ab9-7c1f-1dea7dcc8f85_67c03a0f-712b-ea46-f8e1-0c8bdd2d84d5").find("a[class^='input-control']").text();
 brand=brand.trim();  
 if(brand=="Select an item")
    brand="";
 else
  brand=brand+" ";
   var secBrand=$("div#533d4106-897a-4ab9-7c1f-1dea7dcc8f85_a7c1c429-507f-a277-98ad-f23bc731fa44").find("a[class^='input-control']").text();
 secBrand=secBrand.trim(); 
 if(secBrand=="Select an item")
    secBrand="";
 else
  secBrand=secBrand+" ";
   var formDesc=$("input[name='FormText Box']").val().trim();
 if(formDesc!="")
  formDesc=formDesc+" ";
   var variety=$("input[name='txtVariety']").val().trim();
 if(variety!="")
  variety=variety+" ";
   var brandCat=$("div#533d4106-897a-4ab9-7c1f-1dea7dcc8f85_a0f6d29e-05ed-55c3-2d0e-4d208e68e349").find("a[class^='input-control']").text();
 brandCat=brandCat.trim();  
 if(brandCat=="Select an item")
    brandCat="";
 else
  brandCat=brandCat+" ";
   var sizeDesc=$("input[name='SizeText Box']").val().trim();
 if(sizeDesc!="")
  sizeDesc=sizeDesc+" ";
   var packDesc=$("input[name='PackText Box']").val().trim();
 if(packDesc!="")
  packDesc=packDesc+" ";
      var consProd=brand+secBrand+formDesc+variety+brandCat+sizeDesc+packDesc;
   $("input[name='txtConsumerProductName']").val(consProd);
}
function compareIterations(id,source)
{
 setIterationData();
 if(!hasIteration && !isCopyTask)
 {
  alert("There is no previous iteration to compare.");
  return false;
 }
 var dmp = new diff_match_patch();
 dmp.Diff_Timeout=1;
 dmp.Diff_EditCost=4;
 var idSplit=[];
 idSplit=id.split(";");
 eleVal="";
 if(idSplit[2]=="id")
  eleVal=$(idSplit[0]+"#"+idSplit[1]).val();
 else if(idSplit[2]=="name")
  eleVal=$(idSplit[0]+"[name='"+idSplit[1]+"']").val();
  var diff = dmp.diff_main(tmpBuffer[source],eleVal);
      dmp.diff_cleanupSemantic(diff);
 document.getElementById("cstm_modal").style.display = "block";
       $("div#cstm_content").html(dmp.diff_prettyHtml(diff));
}
function compareAllIterations()
{
 setIterationData();
 if(!hasIteration && !isCopyTask)
 {
  alert("There is no previous iteration to compare.");
  return false;
 }
 document.getElementById("cstm_modal").style.display = "block";
 var dmp = new diff_match_patch();
 dmp.Diff_Timeout=1;
 dmp.Diff_EditCost=4;
  var diff = dmp.diff_main(tmpBuffer['product_family'],$("input[name='txtProductFamily']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").html("");
       $("div#cstm_content").append("<div><b>Product Family</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['variety'],$("input[name='txtVariety']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Variety</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['pack_description'],$("input[name='PackText Box']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Pack Description</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['size_description'],$("input[name='SizeText Box']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Size Description</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['form_description'],$("input[name='FormText Box']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Form Description</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['brand_description'],$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_86d19290-25ba-4f9f-bf2e-5fa641a74832_TextArea").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Brand Description</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['romance_copy'],$("input[name='txtRomanceCopy']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Romance Copy</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['basic_product_name'],$("input[name='txtBasicProductName']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Basic Product Name</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['consumer_product_name'],$("input[name='txtConsumerProductName']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Consumer Product Name</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
  var diff = dmp.diff_main(tmpBuffer['short_description'],$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_66dd69d6-3df6-4e25-853e-a0767b1acc1e_TextArea").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Short Description</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
 var diff = dmp.diff_main(tmpBuffer['long_description'],$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_06294f88-fd4f-43b3-bfe4-7e076194bcee_TextArea").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Long Description</b>:"+dmp.diff_prettyHtml(diff)+"</div>");
 var diff = dmp.diff_main(tmpBuffer['web_product_name'],$("input[name='txtWebsiteProductName']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Website Product Name</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
 var diff = dmp.diff_main(tmpBuffer['web_product_grouping'],$("input[name='txtWebsiteProductGrouping']").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Website Product Grouping</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
 var diff = dmp.diff_main(tmpBuffer['web_prod_description'],$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_1181308a-7435-4248-9c58-e7fd566d89be_TextArea").val());
      dmp.diff_cleanupSemantic(diff);
       $("div#cstm_content").append("<div><b>Website Product Description</b>:"+dmp.diff_prettyHtml(diff)+"</div>");
}
$(document).ready(function(){
  $("body").append('<div id="cstm_modal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"> <!-- Modal content --> <div style="background-color: #fefefe;margin: 15% auto;padding: 20px; border: 1px solid #888; width: 80%;"> <div><span style="color: #aaa; float: right; font-size: 14px; font-weight: bold;cursor:pointer" id="cstm_close">&times;</span></div> <div id="cstm_content"></div> </div> </div>');
  $("span#cstm_close").click(function(){document.getElementById("cstm_modal").style.display = "none";});
 setTimeout(function(){ renderCustomElements(); }, 3000);
});
function compareAllBullets()
{
  if(isCopyTask)
 {
  alert("Cannot compare Bullet Features while Copy.");
  return false;
 }
 if(!hasIteration)
 {
  alert("There is no previous iteration to compare.");
  return false;
 }
 var x=1;
 document.getElementById("cstm_modal").style.display = "block";
  var dmp = new diff_match_patch();
 dmp.Diff_Timeout=1;
 dmp.Diff_EditCost=4;
  $("div#cstm_content").html("");
 var bulletIter=$("input[name^='Bullet_']");
 $("div[name='Marketing.ItemCopy.ItemCopyAndKeywordForm Area Item14']").find("table[class^='grid-content-table']").find("tbody").find("tr").each(function(i,row){
 var jsonObj = jQuery.parseJSON($(row).find("td[class='first']").attr('data-options'));
  if(typeof $(row).find("td[class='first']").attr('data-options') === "undefined"){
/** do nothing**/}else {
 var preBullet="";
 if(bulletIter[x-1]!=null)
  var preBullet=$(bulletIter[x-1]).val();
    var diff = dmp.diff_main(preBullet,jsonObj.value);
     $("div#cstm_content").append("<div><b>Bullet Feature"+x+"</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
 }
  x++;
 });
 return false;
}
function compareAllKeywords()
{
 if(isCopyTask)
 {
  alert("Cannot compare Item Keyword while Copy.");
  return false;
 }
 if(!hasIteration)
 {
  alert("There is no previous iteration to compare.");
  return false;
 }
 var x=1;
 document.getElementById("cstm_modal").style.display = "block";
  var dmp = new diff_match_patch();
 dmp.Diff_Timeout=1;
 dmp.Diff_EditCost=4;
  $("div#cstm_content").html("");
 var keyIter=$("input[name^='Keyword_']");
 $("div[name='Marketing.ItemCopy.ItemCopyAndKeywordForm Area Item13']").find("table[class^='grid-content-table']").find("tbody").find("tr").each(function(i,row){
 var jsonObj = jQuery.parseJSON($(row).find("td[class='first']").attr('data-options'));
  if(typeof $(row).find("td[class='first']").attr('data-options') === "undefined"){
/** do nothing**/}else {
 var preBullet="";
 if(keyIter[x-1]!=null)
 var preBullet=$(keyIter[x-1]).val();
    var diff = dmp.diff_main(preBullet,jsonObj.value);
     $("div#cstm_content").append("<div><b>Item Keyword "+x+"</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
 }
  x++;
 });
 return false;
}
function compareAllCKeywords()
{
 if(isCopyTask)
 {
  alert("Cannot compare Item Competitor Keyword while Copy.");
  return false;
 }
 if(!hasIteration)
 {
  alert("There is no previous iteration to compare.");
  return false;
 }
 var x=1;
 document.getElementById("cstm_modal").style.display = "block";
  var dmp = new diff_match_patch();
 dmp.Diff_Timeout=1;
 dmp.Diff_EditCost=4;
  $("div#cstm_content").html("");
 var cKeyIter=$("input[name^='CKeyword_']");
 $("div[name='Marketing.ItemCopy.ItemCopyAndKeywordForm Area Item19']").find("table[class^='grid-content-table']").find("tbody").find("tr").each(function(i,row){
 var jsonObj = jQuery.parseJSON($(row).find("td[class='first']").attr('data-options'));
  if(typeof $(row).find("td[class='first']").attr('data-options') === "undefined"){
/** do nothing**/}else {
 var preBullet="";
 if(cKeyIter[x-1]!=null)
 var preBullet=$(cKeyIter[x-1]).val();
    var diff = dmp.diff_main(preBullet,jsonObj.value);
     $("div#cstm_content").append("<div><b>Item Competitor Keyword "+x+"</b>:"+dmp.diff_prettyHtml(diff)+"</div><br/>");
 }
  x++;
 });
 return false;
}
function highlightICFields()
{
 if(tmpBuffer['product_family']!=$("input[name='txtProductFamily']").val()){
$("input[name='txtProductFamily']").css('border', '1px solid red');}
 else
 $("input[name='txtProductFamily']").css('border', '1px solid #ccc'); 
 if(tmpBuffer['variety']!=$("input[name='txtVariety']").val()){
$("input[name='txtVariety']").css('border', '1px solid red');}
 else
  $("input[name='txtVariety']").css('border', '1px solid #ccc');
  if(tmpBuffer['pack_description']!=$("input[name='PackText Box']").val()){
$("input[name='PackText Box']").css('border', '1px solid red');}
else
 $("input[name='PackText Box']").css('border', '1px solid #ccc');
 if(tmpBuffer['size_description']!=$("input[name='SizeText Box']").val()){
$("input[name='SizeText Box']").css('border', '1px solid red');}
 else
  $("input[name='SizeText Box']").css('border', '1px solid #ccc');
 if(tmpBuffer['form_description']!=$("input[name='FormText Box']").val()){
$("input[name='FormText Box']").css('border', '1px solid red');}
 else
  $("input[name='FormText Box']").css('border', '1px solid #ccc');
 if(tmpBuffer['brand_description']!=$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_86d19290-25ba-4f9f-bf2e-5fa641a74832_TextArea").val()){
$("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_86d19290-25ba-4f9f-bf2e-5fa641a74832_TextArea").css('border', '1px solid red');}
 else
  $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_86d19290-25ba-4f9f-bf2e-5fa641a74832_TextArea").css('border', '1px solid #ccc');
 if(tmpBuffer['romance_copy']!=$("input[name='txtRomanceCopy']").val()){
$("input[name='txtRomanceCopy']").css('border', '1px solid red');}
 else
  $("input[name='txtRomanceCopy']").css('border', '1px solid #ccc');
 if(tmpBuffer['basic_product_name']!=$("input[name='txtBasicProductName']").val()){
$("input[name='txtBasicProductName']").css('border', '1px solid red');}
 else
  $("input[name='txtBasicProductName']").css('border', '1px solid #ccc');
 if(tmpBuffer['consumer_product_name']!=$("input[name='txtConsumerProductName']").val()){
$("input[name='txtConsumerProductName']").css('border', '1px solid red');}
 else
  $("input[name='txtConsumerProductName']").css('border', '1px solid #ccc');
 if(tmpBuffer['short_description']!=$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_66dd69d6-3df6-4e25-853e-a0767b1acc1e_TextArea").val()){
$("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_66dd69d6-3df6-4e25-853e-a0767b1acc1e_TextArea").css('border', '1px solid red');}
 else
  $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_66dd69d6-3df6-4e25-853e-a0767b1acc1e_TextArea").css('border', '1px solid #ccc');
 if(tmpBuffer['long_description']!=$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_06294f88-fd4f-43b3-bfe4-7e076194bcee_TextArea").val()){
$("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_06294f88-fd4f-43b3-bfe4-7e076194bcee_TextArea").css('border', '1px solid red');}
 else
  $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_06294f88-fd4f-43b3-bfe4-7e076194bcee_TextArea").css('border', '1px solid #ccc');
 if(tmpBuffer['web_product_name']!=$("input[name='txtWebsiteProductName']").val()){
$("input[name='txtWebsiteProductName']").css('border', '1px solid red');}
 else
  $("input[name='txtWebsiteProductName']").css('border', '1px solid #ccc');
 if(tmpBuffer['web_product_grouping']!=$("input[name='txtWebsiteProductGrouping']").val()){
$("input[name='txtWebsiteProductGrouping']").css('border', '1px solid red');}
 else
  $("input[name='txtWebsiteProductGrouping']").css('border', '1px solid #ccc');
 if(tmpBuffer['web_prod_description']!=$("#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_1181308a-7435-4248-9c58-e7fd566d89be_TextArea").val()){
$("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_1181308a-7435-4248-9c58-e7fd566d89be_TextArea").css('border', '1px solid red');}
 else
  $("textarea#536f0b4d-6f68-bb7e-ac73-ad030453c0d5_1181308a-7435-4248-9c58-e7fd566d89be_TextArea").css('border', '1px solid #ccc');
}
function populateICFields()
{
$("span[name='lblProductFamily']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;txtProductFamily;name" t_2="product_family">View Changes</a>');
$("span[name='lblVariety']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;txtVariety;name" t_2="variety">View Changes</a>');
$("span[name='PackLabel']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;PackText Box;name" t_2="pack_description">View Changes</a>');
$("span[name='SizeLabel']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;SizeText Box;name" t_2="size_description">View Changes</a>');
$("span[name='formLabel']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;FormText Box;name" t_2="form_description">View Changes</a>');
$("span[name='lblBrandDescription']").parent().append('<a href="#" class="cstm_cmp_link" t_1="textarea;536f0b4d-6f68-bb7e-ac73-ad030453c0d5_86d19290-25ba-4f9f-bf2e-5fa641a74832_TextArea;id" t_2="brand_description">View Changes</a>');
$("span[name='lblRomanceCopy']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;txtRomanceCopy;name" t_2="romance_copy">View Changes</a>');
$("span[name='lblBasicProductName']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;txtBasicProductName;name" t_2="basic_product_name">View Changes</a>');
$("span[name='dlbProductNameLabel']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;txtConsumerProductName;name" t_2="consumer_product_name">View Changes</a>');
$("span[name='dlbShortDescriptionLabel']").parent().append('<a href="#" class="cstm_cmp_link" t_1="textarea;536f0b4d-6f68-bb7e-ac73-ad030453c0d5_66dd69d6-3df6-4e25-853e-a0767b1acc1e_TextArea;id" t_2="short_description">View Changes</a>');
$("span[name='dlbLongDescriptionLabel']").parent().append('<a href="#" class="cstm_cmp_link" t_1="textarea;536f0b4d-6f68-bb7e-ac73-ad030453c0d5_06294f88-fd4f-43b3-bfe4-7e076194bcee_TextArea;id" t_2="long_description">View Changes</a>');
$("span[name='lblWebsiteProductName']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;txtWebsiteProductName;name" t_2="web_product_name">View Changes</a>');
$("span[name='lblWebsiteProductGrouping']").parent().append('<a href="#" class="cstm_cmp_link" t_1="input;txtWebsiteProductGrouping;name" t_2="web_product_grouping">View Changes</a>');
$("span[name='lblWebsiteProductDescription']").parent().append('<a href="#" class="cstm_cmp_link" t_1="textarea;536f0b4d-6f68-bb7e-ac73-ad030453c0d5_1181308a-7435-4248-9c58-e7fd566d89be_TextArea;id" t_2="web_prod_description">View Changes</a>');
 $("a.cstm_cmp_link").click(function(){
  compareIterations($(this).attr("t_1"),$(this).attr("t_2"));
  return false;
 });
 $("td#2c3ef5d0-749e-8458-ae06-6c65ca55109c").append('<a href="#" id="cstm_cmp_all_link">Compare Entire Item Copy/ Keywords</a>');
  $("span[data-sf-title='Bullet Features']").append('<a href="#" id="cstm_cmp_all_bullet" onclick="compareAllBullets();event.stopPropagation();">Compare Entire Bullet Features</a>');
 $("span[data-sf-title='Item Keyword']").append('<a href="#" id="cstm_cmp_all_key" onclick="compareAllKeywords();event.stopPropagation();">Compare Enitre Item Keywords</a>');
 $("span[data-sf-title='Item Competitor Keyword']").append('<a href="#" id="cstm_cmp_all_ckey" onclick="compareAllCKeywords();event.stopPropagation();">Compare Enitre Item Competitor Keyword</a>');
 highlightICFields();
 $("a#cstm_cmp_all_link").click(function(){
 compareAllIterations();
 return false;
 });
}