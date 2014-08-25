using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Net.Sockets;
using System.Net;
using System.Threading;

namespace hytc_chatonline
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSend_Click(object sender, EventArgs e)
        {
         string ip=this.txtIp.Text;
         UdpClient uc = new UdpClient();
         string msg = "PUBLIC|"+this.txtMessage.Text+"|钟汉良";
         byte[] bmsg = Encoding.Default.GetBytes(msg);//字符串参数转化
         IPEndPoint ipep = new IPEndPoint(IPAddress.Parse(ip),9527);
         uc.Send(bmsg,bmsg.Length,ipep);
        }

        private void listen()
        {
            UdpClient uc = new UdpClient(9527);
            while (true)
            {
                IPEndPoint ipep = new IPEndPoint(IPAddress.Any,0);
                byte[]bmsg=uc.Receive(ref ipep);
                string msg = Encoding.Default.GetString(bmsg);
                string[] sp = msg.Split('|');
                if (sp[0] == "INROOM")
                {
                    this.txtHistory.Text += sp[1] + "上线啦!"+ "\r\n";
                }
                if (sp[0] == "PUBLIC")
                {
                    this.txtHistory.Text += sp[2] +"说：" +sp[1] + "\r\n";
                }
                if (sp[0] == "OUTROOM")
                {
                    this.txtHistory.Text += sp[1] + "离线啦!" + "\r\n";
                }
            }

        }
        private void Form1_Load(object sender, EventArgs e)
        {
            string ip = this.txtIp.Text;
            UdpClient uc = new UdpClient();
            string msg = "INROOM|" + "钟汉良";
            byte[] bmsg = Encoding.Default.GetBytes(msg);//字符串参数转化
            IPEndPoint ipep = new IPEndPoint(IPAddress.Parse(ip), 9527);
            uc.Send(bmsg, bmsg.Length, ipep);
            Form1.CheckForIllegalCrossThreadCalls = false;
            Thread th = new Thread(new ThreadStart(listen));
            th.IsBackground = true;
            th.Start();
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {

            string ip = this.txtIp.Text;
            UdpClient uc = new UdpClient();
            string msg = "OUTROOM|" + "钟汉良";
            byte[] bmsg = Encoding.Default.GetBytes(msg);//字符串参数转化
            IPEndPoint ipep = new IPEndPoint(IPAddress.Parse(ip), 9527);
            uc.Send(bmsg, bmsg.Length, ipep);
        }
    }
}
