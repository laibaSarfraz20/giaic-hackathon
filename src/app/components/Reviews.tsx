import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
    return(
        <div>
              <section className="text-center py-12">
                        <h1 className="text-4xl font-bold mb-8">OUR HAPPY CUSTOMERS</h1>
                        <div className="flex justify-center space-x-4 overflow-x-auto px-4">
                            <div className="bg-white border rounded-lg p-6 shadow-md w-80">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-500">
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                    </div>
                                    <span className="ml-2 font-bold">Sarah M. <i className="fas fa-check-circle text-green-500"></i></span>
                                </div>
                                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</p>
                            </div>
                            <div className="bg-white border rounded-lg p-6 shadow-md w-80">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-500">
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                    </div>
                                    <span className="ml-2 font-bold">Alex K. <i className="fas fa-check-circle text-green-500"></i></span>
                                </div>
                                <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."</p>
                            </div>
                            <div className="bg-white border rounded-lg p-6 shadow-md w-80">
                                <div className="flex items-center mb-4">
                                    <div className="text-yellow-500">
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                         <FontAwesomeIcon icon={faStar}  />
                                    </div>
                                    <span className="ml-2 font-bold">James L. <i className="fas fa-check-circle text-green-500"></i></span>
                                </div>
                                <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."</p>
                            </div>
                        </div>
                    </section>
                 

        </div>
    )
}
export default Reviews;