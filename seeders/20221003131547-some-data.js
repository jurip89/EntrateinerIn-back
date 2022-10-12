"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "John Malcovic",
          email: "a@a.a",
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "I love cookies",
          isRecruiter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "a@a.b",
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "I love nutella",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Joe Doe",
          email: "a@a.as",
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "I love macadamia",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Jenny Doe",
          email: "a@a.aa",
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "I love radio",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "roles",
      [
        { id: 1, name: "Actor", createdAt: new Date(), updatedAt: new Date() },
        {
          id: 2,
          name: "Director",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { id: 3, name: "DOP", createdAt: new Date(), updatedAt: new Date() },
        {
          id: 4,
          name: "Voice Over",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "jobs",
      [
        {
          id: 1,
          title: "director",
          description:
            "fjna ond osnio danfg pidushd fdgid uidsa fbnd iusnf iosda iusdanufns vu iuiaf sdiv u uiaui iu aiu uicu sdiu viud v dav a vua v v dai",
          duration: "3 months",
          paid: true,
          amount: 400,
          location: "Amsterdam",
          userId: 1,
          lat: 52.083713,
          lng: 4.277039,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "director",
          description:
            "fjna ond osnio danfg pidushd fdgid uidsa fbnd iusnf iosda iusdanufns vu iuiaf sdiv u uiaui iu aiu uicu sdiu viud v dav a vua v v dai",
          duration: "3 months",
          paid: true,
          amount: 400,
          location: "Den Haag",
          userId: 1,
          lat: 52.083713,
          lng: 4.277039,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "director",
          description:
            "fjna ond osnio danfg pidushd fdgid uidsa fbnd iusnf iosda iusdanufns vu iuiaf sdiv u uiaui iu aiu uicu sdiu viud v dav a vua v v dai",
          duration: "3 months",
          paid: true,
          amount: 400,
          location: "Amsterdam",
          lat: 51,
          lng: 5,
          userId: 1,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "director",
          description:
            "fjna ond osnio danfg pidushd fdgid uidsa fbnd iusnf iosda iusdanufns vu iuiaf sdiv u uiaui iu aiu uicu sdiu viud v dav a vua v v dai",
          duration: "3 months",
          paid: true,
          amount: 400,
          location: "Amsterdam",
          userId: 1,
          categoryId: 2,
          lat: 52.3676,
          lng: 4.9041,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Actor",
          description:
            "fjna ond osnio danfg pidushd fdgid uidsa fbnd iusnf iosda iusdanufns vu iuiaf sdiv u uiaui iu aiu uicu sdiu viud v dav a vua v v dai",
          duration: "3 months",
          paid: true,
          amount: 400,
          location: "The Hague",
          userId: 1,
          categoryId: 2,
          lat: 52.083683,
          lng: 4.288116,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Camera-man",
          description:
            "fjna ond osnio danfg pidushd fdgid uidsa fbnd iusnf iosda iusdanufns vu iuiaf sdiv u uiaui iu aiu uicu sdiu viud v dav a vua v v dai",
          duration: "3 months",
          paid: true,
          amount: 400,
          location: "Amsterdam",
          userId: 1,
          categoryId: 2,
          lat: 49,
          lng: -4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "userRoles",
      [
        {
          id: 1,
          roleId: 1,
          userId: 2,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          roleId: 3,
          userId: 2,
          yearsOfExperience: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          roleId: 2,
          userId: 4,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          roleId: 4,
          userId: 3,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "images",
      [
        {
          id: 1,
          userId: 2,
          source:
            "https://images.unsplash.com/photo-1576724196706-3f23f51ea351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 2,
          source:
            "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          userId: 2,
          source:
            "https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          userId: 2,
          source:
            "https://images.unsplash.com/photo-1546872006-42c78c0ccb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          userId: 3,
          source:
            "https://images.unsplash.com/photo-1524330685423-3e1966445abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "applicants",
      [
        {
          id: 1,
          userId: 2,
          jobId: 3,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 3,
          jobId: 4,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          userId: 3,
          jobId: 3,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          userId: 4,
          jobId: 3,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          id: 1,
          title: "asshole",
          comment: "Impossible to work with this guy!",
          authorId: 1,
          receiverId: 2,
          rating: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "amazing",
          comment: "really good to work with this guy!",
          authorId: 2,
          receiverId: 4,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Bad person",
          comment: "Impossible to work with this guy!",
          authorId: 3,
          receiverId: 2,
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Nice",
          comment: "Amazing to work with this guy!",
          authorId: 3,
          receiverId: 4,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    ("lng");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userRoles", null, {});
    await queryInterface.bulkDelete("applicants", null, {});

    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("jobs", null, {});
    await queryInterface.bulkDelete("images", null, {});
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
