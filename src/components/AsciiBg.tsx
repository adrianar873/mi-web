import { Ascii } from 'ascii.rest/react';
import * as auroraFjord from 'ascii.rest/pieces/aurora-fjord';

export default function AsciiBg() {
  return (
    <div className="ascii-bg" aria-hidden="true">
      <Ascii piece={auroraFjord} options={{ fps: 13 }} />
      <div className="ascii-veil" />
    </div>
  );
}
