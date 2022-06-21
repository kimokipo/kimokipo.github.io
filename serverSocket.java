import java.net.*;
import java.io.*;


public class serverSocket implements Runnable {
	private Socket s;
	public serverSocket (Socket s) { this.s = s; }
	
	public static void main (String[] args) throws IOException {
		ServerSocket s = new ServerSocket(Integer.parseInt(args[0]));
		while (true) { new Thread(new serverSocket(s.accept())).start(); }
	}

	public void run () {
		try {
			DataOutputStream dout=new DataOutputStream(s.getOutputStream());  
		        DataInputStream in = new DataInputStream(s.getInputStream());
			
			System.out.println("lecture du requette");
			String rq =(String)in.readUTF();
			
			//String rq = new LineNumberReader(in).readLine();
			System.out.println(rq);
			if (rq.startsWith("GET ")) {
					System.out.println(rq.substring(5, rq.indexOf(' ', 4)));
				File f = new File(rq.substring(5, rq.indexOf(' ', 4)));
				
				if (f.exists() && !f.isDirectory()) {
					InputStream is = new FileInputStream(f);
					byte[] data = new byte[is.available()];
					is.read(data);
					is.close();
					String s = new String(data);
					
					dout.writeUTF("HTTP/1.0 200 OK exist");//+s);
				} else {
					dout.writeUTF("HTTP/1.0 404 Not Found");//\n\n Document not found");
				}
			}
			dout.close();
			s.close();
			in.close();
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}
}
