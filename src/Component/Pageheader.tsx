

export default function Pageheader(porps:{Title:string}) {
  return (
    <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="text-left">{porps?.Title}</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">{porps?.Title}</li>
          </ol>
        </div>
      </div>
    </div>
    {/* <!-- /.container-fluid --> */}
  </section>
  )
}
