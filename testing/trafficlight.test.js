const request = require("supertest")
const app = "http://localhost:3000";
// let app = require("./index.js");

/*
Passing custom arguments to jest
https://stackoverflow.com/questions/49798864/passing-custom-arguments-to-jest
 */

describe("GET /api/welcome", () => {
    it("welcome message -1", async () => {
        return request(app)
            .get("/api/welcome")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                if (!res.body.hasOwnProperty('status')) throw new Error("Expected 'status' key!");
                if (!res.body.hasOwnProperty('message')) throw new Error("Expected 'message' key!");
            })
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });

    it("out of order", async () => {
        return request(app)
            .get("/api/welcome")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            //.* -> match any characters (Do not forget the point!)
            .expect(/{"message":".*","status":"success"}/)
    });
});

describe("GET /api/trafficlight/:color", () => {
    it("red", async () => {
        return request(app)
            .get("/api/trafficlight/red")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                if (!res.body.hasOwnProperty('status')) throw new Error("Expected 'status' key!");
                if (!res.body.hasOwnProperty('message')) throw new Error("Expected 'message' key!");
            })
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body.message).toBe("DON'T WALK!");
            })
    })

    it("orange", async () => {
        return request(app)
            .get("/api/trafficlight/orange")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                if (!res.body.hasOwnProperty('status')) throw new Error("Expected 'status' key!");
                if (!res.body.hasOwnProperty('message')) throw new Error("Expected 'message' key!");
            })
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body.message).toBe("ATTENTION!");
            })
    })

    it("green", async () => {
        return request(app)
            .get("/api/trafficlight/green")
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(function(res) {
                if (!res.body.hasOwnProperty('status')) throw new Error("Expected 'status' key!");
                if (!res.body.hasOwnProperty('message')) throw new Error("Expected 'message' key!");
            })
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body.message).toBe("WALK!");
            })
    })
});