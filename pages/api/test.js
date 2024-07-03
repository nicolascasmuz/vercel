import { prueba } from "./index";

export default function test(req, res) {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    test: prueba(),
  });
}
