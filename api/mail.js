import express from 'express';
const app = express();
app.use(express.json());

const nodemailer = require('nodemailer');

app.post('/', async (req, res) => {
  let mailTitle = '顧客在網站提交查詢郵件 (Rafter Capital)';
  let mailHtml = `
    <table style="width: 100%; max-width: 576px; margin: 80px auto" cellspacing="0">
      <tbody>
      <tr>
        <td colspan="2">
          <p style="margin-bottom: 20px">致 椽盛資本有限公司</p>
          <p style="margin-bottom: 20px">顧客於網站提交網上查詢服務，請參考以下顧客所填寫的查詢表格。</p>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: center; background-color: #528ed6; color: white; height: 40px; vertical-align: middle; ">查詢表格</td>
      </tr>   
      <tr>
        <td style="border-bottom: solid 1px #528ed6; width: 25%; white-space: nowrap; color: #528ed6; font-weight: bold; background-color: #eeeeee; padding-left: 15px; ; padding-right: 15px; line-height: 2">姓名</td>
        <td style="border-bottom: solid 1px #528ed6; background-color: #eeeeee; padding-left: 15px; padding-right: 15px; line-height: 2">`+req.body.name+`</td>
      </tr>     
      <tr>
        <td style="border-bottom: solid 1px #528ed6; width: 25%; white-space: nowrap; color: #528ed6; font-weight: bold; background-color: #eeeeee; padding-left: 15px; ; padding-right: 15px; line-height: 2">聯絡電話</td>
        <td style="border-bottom: solid 1px #528ed6; background-color: #eeeeee; padding-left: 15px; padding-right: 15px; line-height: 2">`+req.body.tel+`</td>
      </tr>   
      <tr>
        <td style="border-bottom: solid 1px #528ed6; width: 25%; white-space: nowrap; color: #528ed6; font-weight: bold; background-color: #eeeeee; padding-left: 15px; ; padding-right: 15px; line-height: 2">聯絡電郵</td>
        <td style="border-bottom: solid 1px #528ed6; background-color: #eeeeee; padding-left: 15px; padding-right: 15px; line-height: 2">`+req.body.email+`</td>
      </tr>
      <tr>
        <td style="border-bottom: solid 1px #528ed6; width: 25%; white-space: nowrap; color: #528ed6; font-weight: bold; background-color: #eeeeee; padding-left: 15px; ; padding-right: 15px; line-height: 2">留言</td>
        <td style="border-bottom: solid 1px #528ed6; background-color: #eeeeee; padding-left: 15px; padding-right: 15px; line-height: 2">`+req.body.message+`</td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: center; background-color: #528ed6; color: white; height: 40px; vertical-align: middle; "><small>Rafter Capital Limited</small></td>
      </tr>            
      </tbody>
    </table>  
  `;
  const mailer = {
    mailer_user : process.env.mailer_user,
    mailer_pwd : process.env.mailer_pwd,
    mailer_receiver : process.env.mailer_receiver
  };
  let mailOptions = {
    from: mailer.mailer_user,
    to: [mailer.mailer_receiver],
    subject: mailTitle,
    html: mailHtml
  };    
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailer.mailer_user, // set on vercel env
      pass: mailer.mailer_pwd
    }
  });
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) return res.status(501).send('fail');
    return res.status(200).send('success');
  });  
})

module.exports = app;