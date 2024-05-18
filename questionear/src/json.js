export const json = {
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "quality",
        "title": "Please indicate if you agree or disagree with the following statements",
        "columns": [
          {
            "name": "quality-rating",
            "title": "Rating",
            "cellType": "radiogroup",
            "choices": [
              {
                "value": 5,
                "text": "Strongly agree"
              },
              {
                "value": 4,
                "text": "Agree"
              },
              {
                "value": 3,
                "text": "Neutral"
              },
              {
                "value": 2,
                "text": "Disagree"
              },
              {
                "value": 1,
                "text": "Strongly disagree"
              }
            ],
            "showInMultipleColumns": true,
            "colCount": 1
          },
          {
            "name": "comments",
            "title": "Comments",
            "cellType": "comment",
            "maxLength": 250
          }
        ],
        "rows": [
          {
            "value": "affordable",
            "text": "Product is affordable"
          },
          {
            "value": "does what it claims",
            "text": "Product does what it claims"
          },
          {
            "value": "better than others",
            "text": "Product is better than other products on the market"
          },
          {
            "value": "easy to use",
            "text": "Product is easy to use"
          }
        ]
      }
    ],
    "showQuestionNumbers": false
  };