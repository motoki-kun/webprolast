import { useEffect, useState, useSyncExternalStore } from "react";

async function fetchImages(character, seturls) {
  const response = await fetch(
    `https://www.amiiboapi.com/api/amiibo/?name=${character}`
  );
  const data = await response.json();
  seturls(data.amiibo[0].image)
}





function Main() {
  const [urls, setUrls] = useState("")
  const [name, setName] = useState(null)
  console.log(urls);

  function handleSubmit(event) {
    event.preventDefault();
    fetchImages(event.target.value, setUrls);
    setName(event.target.value)
  }
  const item = [{ name: "mario", explain: "陽気であかるいみんなの人気者．赤い帽子と青のオーバーオールと特徴的な口髭がトレードマーク．ピーチ姫のことが大好きでどんなときでも助けにいきます．クッパに意地悪をされるけど得意のジャンプとパワーアップで立ち向かう．" }]
  item.push({ name: "luigi", explain: "緑のぼうしがトレードマークでマリオよりちょっとだけ背が高いふたごの弟，おくびょうな性格をしており，おばけが苦手．でも，マリオとは息がぴったりで，ふたりがそろえば百人力．実はマリオとルイージはヒゲのかたちがちょっとだけ違う．" })
  item.push({ name: "kirby", explain: "はるかぜとともにプププランドへやってきたニューヒーロー．シンプルでキュートな見た目をしているけどなんでも吸い込んでしまうくいしんぼう．そして吸い込んだものは能力をコピーできる特別な力を持っている．" })
  item.push({ name: "pikachu", explain: "アニメ『ポケットモンスター』主人公・サトシの相棒がピカチュウです．ほっぺに赤い電気袋があるかわいいねずみポケモン．ケチャップが大好物で得意技は10まんボルト．実はオスとメスでは尻尾の形が異なり，メスの尻尾はハートっぽい形をしている"})
  item.push({ name: "link", explain: "『ゼルダの伝説　ブレスオブザワイルド』のリンクは回生の祠で100年間の眠りから覚めますが記憶喪失になっている．リンクはゼルダ直属の近衛騎士に最年少で選ばれる天才であり，厄災ガノンを封じるために戦う" })
  item.push({ name: "pikmin", explain: "地面に生えている植物のような小さい生き物．投げるとお仕事を手伝ってくれます．また，凶暴な生き物に襲われたときは身を守ってくれる大切な相棒でもあります．ピクミンにはさまざまな種類があり種類ごとに特別な個性を持っています．"})
  const selected_discription =
    item.filter((explain) => {
    if (name == null) {
      return false;
    }
    return explain.name == name  
    return explain.name == ""
  })
  return (
    
    <main>
      <div className="hero is-info">
        <div className="hero-body">
          <h1 className="title">日本大学文理学部情報科学科 Webプログラミング最終課題</h1>
          <h2 className="subtitle">任天堂人気キャラ紹介</h2>
        </div>
      </div>
      <div className="container has-background-warning-light">
        <section className="section">
          {/*<Form setSubscript={setSubscript} />*/}
        </section>
        <form>
          {/*{<section className="buttons">*/}
          <button className="button is-danger" value="mario" type="submit" onClick={handleSubmit}>マリオ</button>
          <button className="button is-success" value="luigi" type="submit" onClick={handleSubmit}>ルイージ</button>
          <button className="button is-info" value="kirby" type="submit" onClick={handleSubmit}>カービィ</button>
          <button className="button is-warning" value="pikachu" type="submit" onClick={handleSubmit}>ピカチュウ</button>
          <button className="button is-primary" value="link" type="submit" onClick={handleSubmit}>リンク</button>
          <button className="button is-link" value="pikmin" type="submit" onClick={handleSubmit}>ピクミン</button>
          {/*</section>*/}

        </form>
        {selected_discription.length == 0 ? <div> </div> : <div>{selected_discription[0].explain}</div>}
        <div className="has-text-centered">
          <figure className="image is-inline-block">
            <img src={urls} ></img>
          </figure>
        </div>
      </div>

      <footer className="footer has-background-primary">
        <div className="content has-text-centere">
          <p>学籍番号：5420073</p>
          <p>氏名：島倉幹</p>
          <a　href='https://www.amiiboapi.com/'>使用したAPI:https://www.amiiboapi.com/</a>
        </div>
      </footer>

    </main >
  );
}

export default Main;