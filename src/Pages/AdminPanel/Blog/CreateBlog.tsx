import { useState, useEffect } from "react";
import Pageheader from "../../../Component/Pageheader";
import { ICategoryResponse } from "../../../interfaces/i-category";
import CategoryService from "../../../Services/CategoryService";
import { FieldValues, useForm } from "react-hook-form";
import BlogService from "../../../Services/BlogService";

export default function CreateBlog() {
  const [categoryDropdownList, setCategoryDropdownList] = useState<ICategoryResponse[]>([])
  const { register, handleSubmit, reset } = useForm();

  const getCategory = async () => {
    try {
      await CategoryService.getCategory().then((res) => {
        setCategoryDropdownList(res.data.details.categories)
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };


  const createBlog= async (data:FieldValues)=>{
    try {
      const blogPayload={
        title:data?.title,
        desc:data?.description,
        category:data.category,
        image:data?.image
      }
      await BlogService.createBlog(blogPayload).then((res)=>{
        console.log(res);
        reset();
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategory()
  
 
  }, [])
  

  return (
    <div>
      {/* <!-- Content Header (Page header) --> */}

      <Pageheader Title="Create Blog" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-secondary">
                {/* <div className="card-header">
                  <h3 className="card-title">Create Blog</h3>
                </div> */}

                <form  onSubmit={handleSubmit(createBlog)} >
                  <div className="card-body text-left">
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Category
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register('category')}
                          >
                            <option selected>Select Category</option>
                            {categoryDropdownList && categoryDropdownList?.map((category,index)=>{
                              return (
                                <option key={index} value={category?._id}>{category?.title}</option>

                              )
                            })}
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputFile">Image</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register('image')}
                          >
                            <option selected>Select Category</option>
                            <option value="649285ecc4a35ff00f1c1479">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="Title"
                          {...register('title')}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="content" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="content"
                          rows={5}
                          {...register('description')}
                        ></textarea>
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer text-center">
                      <button type="submit" className="btn btn-primary">
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
