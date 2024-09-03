
import "./Css/flotinglink.css"
export default function FloatingLink() {
  return (
   
  <div className="float-sm text-left">
    <div className="fl-fl float-fb">
      <i className="fa fa-facebook"></i>
      <a href="https://www.facebook.com/Ogive-Technology-485725495104947/" target="_blank"> Like us!</a>
    </div>
    <div className="fl-fl float-tw">
      <i className="fa fa-twitter"></i>
      <a href="https://twitter.com/OgiveTechnology" target="_blank">Follow us!</a>
    </div>
    <div className="fl-fl float-gp">
     <i className="fa fa-instagram"></i>
      <a href="https://www.instagram.com/ogivetech/" target="_blank">Follow us!</a>
    </div>
    {/* <div className="fl-fl float-rs">
      <i className="fa fa-rss"></i>
      <a href="" target="_blank">Follow via RSS</a>
    </div> */}
    {/* <div className="fl-fl float-ig">
    <i className="fa fa-google-plus"></i>
    <a href="" target="_blank">Recommend us!</a>
    </div> */}
    {/* <div className="fl-fl float-pn">
      <i className="fa fa-pinterest"></i>
      <a href="" target="_blank">Follow us!</a>
    </div> */}
  </div>

  )
}
