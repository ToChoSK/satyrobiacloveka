import { ImageResponse } from 'next/og'

export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          display: 'flex',
          overflow: 'hidden',
          background: 'white',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.zlatiq.eu/images/personal/monogram.png"
          style={{
            width: '48px',
            height: '48px',
            objectFit: 'cover',
            objectPosition: 'center 42%',
          }}
          alt="monogram"
        />
      </div>
    ),
    { ...size },
  )
}
