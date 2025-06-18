// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT||3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/track/:id', (req, res) => {
  const { id } = req.params;
  const status = ["Delivered", "Preparing", "In transit","Out for delivery", "Order Received"];
  const Locations = ["CDMX", "Miami", "Bogotá", "Quito", "Local office"];
  const days  = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
  const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];

  const random = Math.floor(Math.random() * status.length);
  const randomDay = Math.floor(Math.random() * days.length);
  const randomMonth = Math.floor(Math.random() * months.length);

  res.json({
    trackingId: id,
    status: status[random],
    location: Locations[random],
    estimatedDelivery: `2025-${months[randomMonth]}-${days[randomDay]}`
  });
});

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
