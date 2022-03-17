const { userService } = require("../services");

const bcrypt = require("bcrypt");

class userController {
  //create
  static async createUser(req, res, next) {
    try {
      const { firstName, lastName, email, password, role } = req.body;
      bcrypt.hash(password, 10, async (error, hash) => {
        if (error) {
          res.status(500).json({ error: error });
        } else {
          const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
            role: role,
          };

          const _isEmailExist = await userService.getUserByEmail(req.body);
          if (!_isEmailExist) {
            const _response = await userService.createUser(userData);

            if (_response) {
              res.json({
                status: true,
                data: _response,
                message: "user created successfully.",
              });
            } else {
              res.json({ status: false, message: "user not created." });
            }
          } else {
            res.json({ status: false, message: "email already exist." });
          }
        }
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //update
  static async updateUser(req, res, next) {
    try {
      const { firstName, lastName, email, password, role } = req.body;
      bcrypt.hash(password, 10, async (error, hash) => {
        if (error) {
          res.status(500).json({ error: error });
        } else {
          const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash,
            role: role,
          };
         
          const _response = await userService.updateUser(userData);

          if (_response.modifiedCount === 0) {
            throw new Error("user not updated some error occurs.");
          } else if (_response) {
            res.json({
              status: true,
              data: _response,
              message: "user updated successfully.",
            });
          } else {
            res.json({ status: false, message: "user not updated." });
          }
        }
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //delete
  static async deleteUser(req, res, next) {
    try {
      const id = req.params.id;
      const _resposne = await userService.deleteUser(id);

      if (_resposne) {
        res.json({
          status: true,
          data: _resposne,
          message: "user deleted successfully.",
        });
      } else {
        res.json({ status: false, message: "user not deleted." });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //findAll
  static async getUsers(req, res, next) {
    try {
      const _response = await userService.getUsers();
      if (_response) {
        res.json({
          status: true,
          data: _response,
          message: "users data fetched successfully.",
        });
      } else {
        res.json({ status: false, message: "users data not fetched." });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //findOne
  static async getUserById(req, res, next) {
    try {
      const id = req.params.id;
      const _response = await userService.getUserById(id);
      if (_response) {
        res.json({
          status: true,
          data: _response,
          message: `user data for id = ${id} fetched successgully.`,
        });
      } else {
        res.json({
          status: false,
          message: `user data for id = ${id} not fetched.`,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

module.exports = userController;
