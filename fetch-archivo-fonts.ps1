# Run this once, from inside this folder (site-export), on your own machine.
# Right-click this file > Run with PowerShell, or open PowerShell here and run:
#   .\fetch-archivo-fonts.ps1
#
# Pulls the 6 real variable-width Archivo woff2 files (font-weight 400-900,
# font-stretch 62%-125% confirmed present via live Chrome fetch) into
# fonts\archivo\ next to this site's CSS.

New-Item -ItemType Directory -Force -Path "fonts\archivo" | Out-Null
$ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

$files = @{
  "fonts\archivo\archivo-italic-vietnamese.woff2"  = "https://fonts.gstatic.com/s/archivo/v25/k3kSo8UDI-1M0wlSfdzYI2HEEaM.woff2"
  "fonts\archivo\archivo-italic-latin-ext.woff2"   = "https://fonts.gstatic.com/s/archivo/v25/k3kSo8UDI-1M0wlSfdzYImHEEaM.woff2"
  "fonts\archivo\archivo-italic-latin.woff2"       = "https://fonts.gstatic.com/s/archivo/v25/k3kSo8UDI-1M0wlSfdzYLGHE.woff2"
  "fonts\archivo\archivo-normal-vietnamese.woff2"  = "https://fonts.gstatic.com/s/archivo/v25/k3kQo8UDI-1M0wlSfdboLnnA.woff2"
  "fonts\archivo\archivo-normal-latin-ext.woff2"   = "https://fonts.gstatic.com/s/archivo/v25/k3kQo8UDI-1M0wlSfdfoLnnA.woff2"
  "fonts\archivo\archivo-normal-latin.woff2"       = "https://fonts.gstatic.com/s/archivo/v25/k3kQo8UDI-1M0wlSfdnoLg.woff2"
}

foreach ($path in $files.Keys) {
  Invoke-WebRequest -Uri $files[$path] -Headers @{ "User-Agent" = $ua } -OutFile $path
}

Write-Host "Done. Expected sizes (bytes): 38440, 93144, 101676, 34464, 86240, 90104"
Get-ChildItem "fonts\archivo" | Format-Table Name, Length
