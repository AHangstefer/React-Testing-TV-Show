import React from "react"
import Episodes from "../components/Episodes";
import {render, queryAllByTestId, fireEvent} from "@testing-library/react"
import {fetchShow} from "../api/fetchShow.js";
import App from "../App.js";

jest.mock("../api/fetchShow")

test("props are getting episodes from API", ()=> {

    fetchShow.mockResolvedValueOnce(data);
    const {queryAllByTestId, getAllByTestId, rerender} = render(<Episodes episodes={[]}/>);

    const episode = queryAllByTestId(/episode/i);
    expect(episode).toHaveLength(1);
    const episodes = getAllByTestId(/episodes/i);
    expect(episodes).toHaveLength(4);
    
    

});
    
    






const data = { 
    data:  {
    "_embedded": {
        "episodes": [


            {
                "id": 909340,
                "url": "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
                "name": "Chapter One: MADMAX",
                "season": 2,
                "number": 1,
                "airdate": "2017-10-27",
                "airtime": "",
                "airstamp": "2017-10-27T12:00:00+00:00",
                "runtime": 60,
                "image": {
                  "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
                  "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg"
                },
                "summary": "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
                "_links": {
                  "self": "{href: \"http://api.tvmaze.com/episodes/909340\"}"
                }
              },


              {
                "id": 909342,
                "url": "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
                "name": "Chapter Two: Trick or Treat, Freak",
                "season": 2,
                "number": 2,
                "airdate": "2017-10-27",
                "airtime": "",
                "airstamp": "2017-10-27T12:00:00+00:00",
                "runtime": 60,
                "image": {
                  "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
                  "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg"
                },
                "summary": "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
                "_links": {
                  "self": "{href: \"http://api.tvmaze.com/episodes/909342\"}"
                }
              },


              {
                "id": 909343,
                "url": "http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
                "name": "Chapter Three: The Pollywog",
                "season": 2,
                "number": 3,
                "airdate": "2017-10-27",
                "airtime": "",
                "airstamp": "2017-10-27T12:00:00+00:00",
                "runtime": 60,
                "image": {
                  "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg",
                  "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg"
                },
                "summary": "<p>Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>",
                "_links": {
                  "self": "{href: \"http://api.tvmaze.com/episodes/909343\"}"
                }
              },
              {
                "id": 909344,
                "url": "http://www.tvmaze.com/episodes/909344/stranger-things-2x04-chapter-four-will-the-wise",
                "name": "Chapter Four: Will the Wise",
                "season": 2,
                "number": 4,
                "airdate": "2017-10-27",
                "airtime": "",
                "airstamp": "2017-10-27T12:00:00+00:00",
                "runtime": 60,
                "image": {
                  "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/332045.jpg",
                  "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/332045.jpg"
                },
                "summary": "<p>After his encounter with the shadow creature, Will's condition worsens. Meanwhile, Jim and El fight after Jim discovers that El disobeyed the rules, and Owens brings Nancy and Jonathan to Hawkins Labs for a chat.</p>",
                "_links": {
                  "self": "{href: \"http://api.tvmaze.com/episodes/909344\"}"
                }
              }





        ]
    }
  }
};