// React
import React from "react";

// UI KIT
import { UilFacebook } from '@iconscout/react-unicons'
import { UilGoogle } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-white"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Rester connecter avec nous grace au reseaux sociaux.</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <UilFacebook/>
          </a>

          <a href="" className="me-4 text-reset">
            <UilGoogle/>
          </a>

          <a href="" className="me-4 text-reset">
            <UilLinkedin/>
          </a>
          <a href="" className="me-4 text-reset">
            <UilGithub/>
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                MI CAMPAGNY
              </h6>
              <p>
                Tout de la vente et des achats chez mi-shop
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">NOS SERVICES</h6>
              <p>
                <a href="#!" className="text-reset">
                  Develloppement web.
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Maintenances reseaux.
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Deploiements.
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">LIEN UTILE</h6>
              <p>
                <a href="" className="text-reset">
                  Prix
                </a>
              </p>
              
              <p>
                <a href="#!" className="text-reset">
                  Commande
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Madagascar,Antananarivo
              </p>
              
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        &copy; {new Date().getFullYear()} Copyright .{" "}
      </div>
    </MDBFooter>
  );
}
