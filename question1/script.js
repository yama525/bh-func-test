// ①以下のオンクリックの中身（4〜7行目）
// を関数に分けて呼び出してみよう
$("#q1").on("click", function(){
  const yasai = "だいこん";
  const vegeArr = [...yasai];
  const cutVege = vegeArr.join("|");
  console.log(cutVege);
});
