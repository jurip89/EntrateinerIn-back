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
          profilePic:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
          isRecruiter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "a@a.b",
          profilePic:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Joe Doe",
          email: "a@a.as",
          profilePic:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Jenny Doe",
          email: "a@a.aa",
          profilePic:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Gianna Giordano",
          email: "x@x.x",
          profilePic:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "Manuel Marro",
          email: "x@x.y",
          profilePic:'https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Mario Giordani",
          email: "a@x.x",
          profilePic:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Pat Doy",
          email: "e@x.x",
          profilePic:'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          password: bcrypt.hashSync("1qazxsw2", 10),
          intro: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
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
        { id: 5, name: 'Crew Member', createdAt: new Date(), updatedAt: new Date() },
        { id: 6, name: 'Comparison', createdAt: new Date(), updatedAt: new Date() },
        { id: 7, name: 'Video Editor', createdAt: new Date(), updatedAt: new Date() },
        { id: 8, name: 'Color Grader', createdAt: new Date(), updatedAt: new Date() },
        { id: 9, name: 'VFX Specialist', createdAt: new Date(), updatedAt: new Date() },
        { id: 10, name: 'Audio Specialist', createdAt: new Date(), updatedAt: new Date() },
        { id: 11, name: 'Sound Recorder', createdAt: new Date(), updatedAt: new Date() },
        { id: 12, name: 'Make Up Artist', createdAt: new Date(), updatedAt: new Date() },
        { id: 13, name: 'Costumist', createdAt: new Date(), updatedAt: new Date() },
        { id: 14, name: 'Crew Member', createdAt: new Date(), updatedAt: new Date() },
        { id: 15, name: 'Producer', createdAt: new Date(), updatedAt: new Date() },
        { id: 16, name: 'Writer', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "jobs",
      [
        {
          id: 1,
          title: "Producer",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
          title: "Director of Photography",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
          title: "Voice Over",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
          title: "Director",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
        {
          id: 5,
          roleId: 6,
          userId: 7,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          roleId: 11,
          userId: 8,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          roleId: 4,
          userId: 5,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          roleId: 10,
          userId: 5,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          roleId: 9,
          userId: 4,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          roleId: 7,
          userId: 7,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          roleId: 11,
          userId: 5,
          yearsOfExperience: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          roleId: 9,
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
        {
          id: 6,
          userId: 7,
          source:
            "https://images.unsplash.com/photo-1576724196706-3f23f51ea351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          userId: 5,
          source:
            "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          userId: 3,
          source:
            "https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          userId: 3,
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
          applicantId: 2,
          jobId: 3,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          applicantId: 3,
          jobId: 4,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          applicantId: 3,
          jobId: 3,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          applicantId: 4,
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
