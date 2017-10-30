const express = require('express');
const uuid = require('uuid');
const Model = require('../models/System');
const router = express.Router();

router.get('/:id?', function(req, res, next) {
  if (req.params.id) {
    Model.get(req.params.id, function(err, rows) {
      if (err) {
        console.error(err);
        res.status(422).send(err);
      } else {
        console.log(rows);
        let row;
        if (rows.length > 0) {
          res.json({data: JSON.parse(rows[0].data)});
        } else {
          res.json({data: {}});
        }
      }
    });
  } else {
    Model.all(function(err, rows) {
      if (err) {
        console.error(err);
        res.status(422).send(err);
      } else {
        res.json({ data: rows.map(elem => JSON.parse(elem.data)) });
      }
    });
  }
});

router.post('/', function(req, res, next) {
  let postObj = req.body;
  postObj.id = uuid();
  Model.add(postObj, function(err, results, fields) {
    if (err) {
      console.error(err);
      res.status(422).send(err);
    } else {
      res.json({ data: postObj });
    }
  });
});

router.delete('/:id', function(req, res, next) {
  Model.get(req.params.id, function(err, rows) {
    if (err) {
      console.error(err);
      res.status(422).send(err);
    } else {
      if (rows.length > 0) {
        Model.delete(req.params.id, function(err, count) {
          if (err) {
            res.json(err);
          } else {
            res.json({ data: req.params.id });
          }
        });
      }
    }
  });
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  if(id != req.body.id) {
    res.status(422).send(err);
  } else {
    Model.get(id, function(err, rows) {
      if (err) {
        console.error(err);
        res.status(422).send(err);
      } else {
        if (rows.length > 0) {
          Model.update(req.params.id, req.body, function(err, results) {
            if (err) {
              console.error(err);
              res.status(422).send(err);
            } else {
              console.log(results);
              res.json({ data: results });
            }
          });
        } else {
          res.status(422).send({
            error: "no record"
          });
        }
      }
    });
  }
});

module.exports = router;
