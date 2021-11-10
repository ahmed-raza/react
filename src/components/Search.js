import React, { Fragment, useState } from "react";
import { Card, Form, Button, Dimmer, Loader } from "semantic-ui-react";
import unsplash from "../api/unsplash";
import Results from "./Results";

const Search = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [term, setTerm] = useState("");

  const termChangeHandler = (event) => {
    setTerm(event.target.value);
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
    setLoader(false);
  };

  return (
    <Fragment>
      <Dimmer active={loader}>
        <Loader />
      </Dimmer>
      <Card centered>
        <Card.Content>
          <Card.Header>Search Images</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form onSubmit={searchHandler}>
            <Form.Field control="input" onChange={termChangeHandler} />
            <Button fluid primary>
              Search
            </Button>
          </Form>
        </Card.Content>
      </Card>
      {images && <Results images={images} />}
    </Fragment>
  );
};

export default Search;
