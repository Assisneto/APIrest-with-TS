
import {Request, Response} from "express";
import { ContactController } from "../controllers/Controller";

export class Routes {  

    public contactController: ContactController = new ContactController();
    public routes(app): void {          
        app.route('/')
          .get((req: Request, res: Response) => {            
              res.status(200).send({
                  message: 'GET request successfulll!!!!'
              })
        })
        // Contact 
        app.route('/contact') 
          // GET endpoint 
          .get(this.contactController.getContacts)     
          // POST endpoint
          .post(this.contactController.addNewContact)

        // Contact detail
        app.route('/contact/:contactId')
       
          .get(this.contactController.getContactWithID)           

          .put(this.contactController.updateContact)
   
          .delete(this.contactController.deleteContact)
    }               
}
