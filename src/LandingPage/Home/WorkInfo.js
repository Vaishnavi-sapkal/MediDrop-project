import React from "react";

function WorkInfo() {
  return (
    <div className="container my-5">
      <h3 className="mt-4 mb-4">Recent Donations</h3>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img
              src="/media/Images/KRITFEN-P-2-tablet.jpg"
              className="card-img-top"
              alt="Aceclofenac Tablets"
            />
            <div className="card-body">
              <h5 className="card-title">Aceclofenac & Paracetamol Tablets</h5>
              <p className="card-text">
                Effective in relieving pain and inflammation associated with
                arthritis, back pain, and dental pain.
              </p>
              <a href="#" className="btn btn-primary">
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img
              src="/media/Images/medi5.jpg"
              className="card-img-top"
              alt="Pinaverium Tablets"
            />
            <div className="card-body">
              <h5 className="card-title">Pinaverium Bromide Tablets</h5>
              <p className="card-text">
                Used to treat symptoms of irritable bowel syndrome (IBS) like
                abdominal pain, bloating, and cramps.it is an antispasmodic
              </p>
              <a href="#" className="btn btn-primary">
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img
              src="/media/Images/Geketor.jpg"
              className="card-img-top"
              alt="Ketorolac Tablets"
            />
            <div className="card-body">
              <h5 className="card-title">Ketorolac Tromethamine Tablets</h5>
              <p className="card-text">
                A non-steroidal anti-inflammatory drug (NSAID) for short-term
                treatment of moderate to severe pain.
              </p>
              <a href="#" className="btn btn-primary">
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img
              src="/media/Images/immune.png"
              className="card-img-top"
              alt="Immusante Tablets"
            />
            <div className="card-body">
              <h5 className="card-title">Immusante Tablets</h5>
              <p className="card-text">
                Herbal immunity booster that supports your body’s natural
                defense system against infections.Manufactured by: Himalaya
                Wellness Company
              </p>
              <a href="#" className="btn btn-primary">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkInfo;
