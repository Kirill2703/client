import React, { useEffect, useState } from "react";
import { Button, Form, Input, DatePicker, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMovies, updateMovies } from "../../../thunks/moviesThunk";
import UploadImg from "./create/upload-img";
import ItemsList from "./create/itemsList";
import UploadGallery from "./create/uploadGallery";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";

const MoviesCreate = ({ initialValuesUpdate, functionSave }) => {
  const countries = useSelector((state) => state.countries.countries);
  const genres = useSelector((state) => state.genres.genres);
  const actors = useSelector((state) => state.actors.actors);
  const types = useSelector((state) => state.types.types);
  const filmmakers = useSelector((state) => state.filmmakers.filmmakers);

  const [filmImage, setfilmImage] = useState(null);
  const [filmGallery, setfilmGallery] = useState(null);
  

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

 const onFinish = (values) => {
   if (values.trailer)
     values.trailer = values.trailer
       .replace("watch?v=", "embed/")
       .replace(/&t=.+/g, "");

   if (functionSave) {
     dispatch(
       updateMovies({
         ...values,
         _id: initialValuesUpdate._id,
         img: values.img[0].url ? values.img[0].url : values.img,
         gallery: values.gallery
           ? values.gallery.map((i) => (i.url ? i.url : i))
           : initialValuesUpdate.gallery.map((i) => (i.url ? i.url : i)),
         year: values.year.year(),
       })
     );
   } else {
     dispatch(createMovies(values));
   }

   form.resetFields();
   navigate("/admin/movies");
 };

  const initialValues = {
    countries: [{}],
    genres: [{}],
    actors: [{}],
    types: [{}],
    filmmakers: [{}],
    likes: 0,
    dislikes: 0,
    price: 0,
    rating: 0,
    agerating: "14+",
    runtimes: "112 min",
    year: dayjs("2020"),
    ratingIMDB: "IMDB rating"
  };

  useEffect(() => {
    form.setFieldsValue(initialValuesUpdate || initialValues);
    setfilmImage(form.getFieldValue("img"));
    setfilmGallery(form.getFieldValue("gallery"));
  }, [initialValuesUpdate]);

  const tab1 = (
    <>
      {" "}
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input title!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Image" name="img">
        <UploadImg form={form} img={filmImage} />
      </Form.Item>
      <Form.Item
        label="Year"
        name="year"
        rules={[
          {
            required: true,
            message: "Please input year!",
          },
        ]}
      >
        <DatePicker
          picker="year"
          format={{
            format: "YYYY",
            type: "mask",
          }}
        />
      </Form.Item>
      <Form.List name="countries">
        {(fields, { add, remove }, { errors }) => (
          <ItemsList
            items={countries}
            fields={fields}
            add={add}
            remove={remove}
            errors={errors}
            title="Country"
          />
        )}
      </Form.List>
      <Form.List name="genres">
        {(fields, { add, remove }, { errors }) => (
          <ItemsList
            items={genres}
            fields={fields}
            add={add}
            remove={remove}
            errors={errors}
            title="Genre"
          />
        )}
      </Form.List>
      <Form.List name="actors">
        {(fields, { add, remove }, { errors }) => (
          <ItemsList
            items={actors}
            fields={fields}
            add={add}
            remove={remove}
            errors={errors}
            title="Actor"
          />
        )}
      </Form.List>
      <Form.List name="types">
        {(fields, { add, remove }, { errors }) => (
          <ItemsList
            items={types}
            fields={fields}
            add={add}
            remove={remove}
            errors={errors}
            title="Types"
          />
        )}
      </Form.List>
      <Form.List name="filmmakers">
        {(fields, { add, remove }, { errors }) => (
          <ItemsList
            items={filmmakers}
            fields={fields}
            add={add}
            remove={remove}
            errors={errors}
            title="Filmmaker"
          />
        )}
      </Form.List>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add Movie
        </Button>
      </Form.Item>
    </>
  );

  const tab2 = (
    <>
      <Form.Item label="Gallery" name="gallery">
        <UploadGallery form={form} images={filmGallery} />
      </Form.Item>

      <Form.Item label="Trailer" name="trailer">
        <Input />
      </Form.Item>
    </>
  );

  const tab3 = (
    <>
      <Form.Item label="Likes" name="likes">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Dislikes" name="dislikes">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Rating" name="rating">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Agerating" name="agerating">
        <Input />
      </Form.Item>

      <Form.Item label="Runtimes" name="runtimes">
        <Input />
      </Form.Item>

      <Form.Item label="IMDB" name="ratingIMDB">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <TextArea />
      </Form.Item>
    </>
  );

  const tabBottom = (
    <>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add Movie
        </Button>
      </Form.Item>
    </>
  );

  const items = [
    {
      key: 1,
      label: "Main Tab",
      children: tab1,
    },
    {
      key: 2,
      label: "Secondar Tab",
      children: tab2,
    },
    {
      key: 3,
      label: "Info Tab",
      children: tab3,
    },
  ];

  return (
    <div>
      <h1>Create Movie</h1>
      <Form
        form={form}
        name="basic"
        initialValues={initialValues}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          tabBarExtraContent={tabBottom}
        />
      </Form>
    </div>
  );
};

export default MoviesCreate;
