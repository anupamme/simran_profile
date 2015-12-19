import cgi
import webapp2
        
class MainPage(webapp2.RequestHandler):

    def get(self):
        html = open('index.html', 'r').read()
        self.response.headers['Content-Type'] = 'text/html'
    	self.response.write(html)
        
    

application = webapp2.WSGIApplication([('/', MainPage)], debug=True)