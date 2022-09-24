import { useEffect } from "react";
import { useState } from "react";
import "../styles/CommandLine.css";

export default function CommandLine() {
  const [load, setLoad] = useState(true);
  const [firstPara, setFirstPara] = useState(false);
  const [secondPara, setSecondPara] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      setFirstPara(true);
    }, 2000);
    setTimeout(() => {
      setLoad(false);
      setFirstPara(true);
      setSecondPara(true);
    }, 2500);
    setTimeout(() => {
      setLoad(true);
      setFirstPara(false);
      setSecondPara(false);
    }, 6000);
  }, []);

  return (
    <div className="command-line-wrapper">
      <div className="command-line-text">
        {load && <span className="command-line-underscore">_</span>}
        {firstPara && (
          <p>
            Award Modular BIOS v97.51PG, Juggernaut Studio Prod.
            <br />
            Copyright (C) 2002-22, Juggernaut Software, Inc. All rights
            reserved.
            <br />
            <br />
            REV FB
            <br />
            <br />
            Juggernaut Studio Prod. BIOS v97.51PG
            <br />
          </p>
        )}
        {secondPara && (
          <p>
            This is the fake BIOS of Juggernaut Studio Prod. <br />
            Current website is the Portfolio Website of Nomonjon Salokhiddinov.
            <br />
            Detecting HDD Primary Master ...SDCFS-016G
            <br />
            Found CDROM : CDR-8320B
            <br />
            <span className="command-line-underscore">_</span>
          </p>
        )}
      </div>
    </div>
  );
}
