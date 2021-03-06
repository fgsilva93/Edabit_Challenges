function detectWord(str) {
	return str.replace(/[^a-z]/g, '' )
};

// testing variables

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
console.log(detectWord("cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn"));
console.log(detectWord("cUEOYCSUXVOaUEOYCSUXVOt"));
console.log(detectWord("vJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXgJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXtJAQSZNYRQTFUHDHSDMBDPUNFQJXSXaJAQSZNYRQTFUHDHSDMBDPUNFQJXSXbJAQSZNYRQTFUHDHSDMBDPUNFQJXSXlJAQSZNYRQTFUHDHSDMBDPUNFQJXSXe"));
console.log(detectWord("dATIQTJLBZFHSRXWOZQMOKZPANOUGMeATIQTJLBZFHSRXWOZQMOKZPANOUGMlATIQTJLBZFHSRXWOZQMOKZPANOUGMiATIQTJLBZFHSRXWOZQMOKZPANOUGMgATIQTJLBZFHSRXWOZQMOKZPANOUGMhATIQTJLBZFHSRXWOZQMOKZPANOUGMt"));
console.log(detectWord("pUBOKJGODIJBSXPMTODCGHATrUBOKJGODIJBSXPMTODCGHATiUBOKJGODIJBSXPMTODCGHATcUBOKJGODIJBSXPMTODCGHATeUBOKJGODIJBSXPMTODCGHATy"));
console.log(detectWord("sWRRKMVJVHHZTKAQTJUQDPKHSHPOYCnWRRKMVJVHHZTKAQTJUQDPKHSHPOYCaWRRKMVJVHHZTKAQTJUQDPKHSHPOYCkWRRKMVJVHHZTKAQTJUQDPKHSHPOYCe"));
console.log(detectWord("aJULRJHMOVLEFVJZnJULRJHMOVLEFVJZgJULRJHMOVLEFVJZlJULRJHMOVLEFVJZe"));
console.log(detectWord("aJWCHXONGQCXGPXLZQBKEIHZWwJWCHXONGQCXGPXLZQBKEIHZWaJWCHXONGQCXGPXLZQBKEIHZWrJWCHXONGQCXGPXLZQBKEIHZWe"));
console.log(detectWord("nNUZKGKNEVZBPQZQQLHZZPaNUZKGKNEVZBPQZQQLHZZPmNUZKGKNEVZBPQZQQLHZZPe"));
console.log(detectWord("cLBFKXYQFLLElLBFKXYQFLLEeLBFKXYQFLLEvLBFKXYQFLLEeLBFKXYQFLLEr"));
console.log(detectWord("bDUNEPWILKUFNTRGMBRSVGAABBFCCXErDUNEPWILKUFNTRGMBRSVGAABBFCCXEaDUNEPWILKUFNTRGMBRSVGAABBFCCXEsDUNEPWILKUFNTRGMBRSVGAABBFCCXEh"));
console.log(detectWord("fXTTJVWFCHYZMaXTTJVWFCHYZMsXTTJVWFCHYZMt"));
console.log(detectWord("dJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNnJYPHZIRXYOLDGAQUPHIZTXJOKNtJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNn"));
console.log(detectWord("pKICNUFWFNFORlKICNUFWFNFORaKICNUFWFNFORnKICNUFWFNFORtKICNUFWFNFORs"));
console.log(detectWord("wLAXIBDWXVPRQOOQRRTOYRODLAQHiLAXIBDWXVPRQOOQRRTOYRODLAQHnLAXIBDWXVPRQOOQRRTOYRODLAQHdLAXIBDWXVPRQOOQRRTOYRODLAQHy"));
console.log(detectWord("sELJQETMYLTDKXYNSSOISZFPMAtELJQETMYLTDKXYNSSOISZFPMAaELJQETMYLTDKXYNSSOISZFPMArELJQETMYLTDKXYNSSOISZFPMAt"));
console.log(detectWord("wQYKDHGMNYMKUHKDeQYKDHGMNYMKUHKDt"));
console.log(detectWord("kVOJQJIFILEHVnVOJQJIFILEHViVOJQJIFILEHVfVOJQJIFILEHVe"));
console.log(detectWord("nBKCXNIJYJSVDoBKCXNIJYJSVDtBKCXNIJYJSVDe"));
console.log(detectWord("bOEYZAJVFYUGXQWZXrOEYZAJVFYUGXQWZXuOEYZAJVFYUGXQWZXsOEYZAJVFYUGXQWZXh"));
console.log(detectWord("tEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHtEMVSYRPYHSZRLJNOMTYRPREIHhEMVSYRPYHSZRLJNOMTYRPREIHbEMVSYRPYHSZRLJNOMTYRPREIHrEMVSYRPYHSZRLJNOMTYRPREIHuEMVSYRPYHSZRLJNOMTYRPREIHsEMVSYRPYHSZRLJNOMTYRPREIHh"));
console.log(detectWord("sWRIQGRPNHQQPSIPRoWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRy"));
console.log(detectWord("fRBODZACXIIXHZRGKJQMDLOONTlRBODZACXIIXHZRGKJQMDLOONToRBODZACXIIXHZRGKJQMDLOONTwRBODZACXIIXHZRGKJQMDLOONTeRBODZACXIIXHZRGKJQMDLOONTrRBODZACXIIXHZRGKJQMDLOONTs"));
console.log(detectWord("dPWUSQZDQIHANDHEQUZBLAULSoPWUSQZDQIHANDHEQUZBLAULSlPWUSQZDQIHANDHEQUZBLAULSl"));
console.log(detectWord("aOGSREBZUHUEJYSSBUlOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUoOGSREBZUHUEJYSSBUf"));
console.log(detectWord("aGQEAESDQIBWRUTuGQEAESDQIBWRUTsGQEAESDQIBWRUTpGQEAESDQIBWRUTiGQEAESDQIBWRUTcGQEAESDQIBWRUTiGQEAESDQIBWRUToGQEAESDQIBWRUTuGQEAESDQIBWRUTs"));
console.log(detectWord("mPVIWSNGHMXHaPVIWSNGHMXHrPVIWSNGHMXHkPVIWSNGHMXHePVIWSNGHMXHt"));
console.log(detectWord("dUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHlUMIHKRZLPJFAGUKPGXHiUMIHKRZLPJFAGUKPGXHgUMIHKRZLPJFAGUKPGXHeUMIHKRZLPJFAGUKPGXHnUMIHKRZLPJFAGUKPGXHt"));
console.log(detectWord("sPRTRRRETBCDTtPRTRRRETBCDTrPRTRRRETBCDTiPRTRRRETBCDTpPRTRRRETBCDTePRTRRRETBCDTd"));
console.log(detectWord("mDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZoDKXCLZDVPRNMGGFGEOZn"));
console.log(detectWord("aQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYcQQWPQYQEEDILHYDSGQAINQZWCABYoQQWPQYQEEDILHYDSGQAINQZWCABYuQQWPQYQEEDILHYDSGQAINQZWCABYnQQWPQYQEEDILHYDSGQAINQZWCABYt"));
console.log(detectWord("sJPUQNBZOQYREGGQSYPmJPUQNBZOQYREGGQSYPeJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPlJPUQNBZOQYREGGQSYPy"));
console.log(detectWord("iWHDAZIAOYUDTHYYCUNBXQnWHDAZIAOYUDTHYYCUNBXQk"));
console.log(detectWord("mOMTJYOJTLFBKGMYISFQHiOMTJYOJTLFBKGMYISFQHsOMTJYOJTLFBKGMYISFQHcOMTJYOJTLFBKGMYISFQHrOMTJYOJTLFBKGMYISFQHeOMTJYOJTLFBKGMYISFQHaOMTJYOJTLFBKGMYISFQHnOMTJYOJTLFBKGMYISFQHt"));
console.log(detectWord("qFEUYWIKGXCZVXOPZKOBCKHEBuFEUYWIKGXCZVXOPZKOBCKHEBiFEUYWIKGXCZVXOPZKOBCKHEBxFEUYWIKGXCZVXOPZKOBCKHEBoFEUYWIKGXCZVXOPZKOBCKHEBtFEUYWIKGXCZVXOPZKOBCKHEBiFEUYWIKGXCZVXOPZKOBCKHEBc"));
console.log(detectWord("dXKIIKPMULMUIDCSOFTJrXKIIKPMULMUIDCSOFTJaXKIIKPMULMUIDCSOFTJcXKIIKPMULMUIDCSOFTJoXKIIKPMULMUIDCSOFTJnXKIIKPMULMUIDCSOFTJiXKIIKPMULMUIDCSOFTJaXKIIKPMULMUIDCSOFTJn"));
console.log(detectWord("cVBMNIAWBKZCBuVBMNIAWBKZCBrVBMNIAWBKZCBiVBMNIAWBKZCBoVBMNIAWBKZCBuVBMNIAWBKZCBs"));
console.log(detectWord("dWMZKRYZEXCEVEiWMZKRYZEXCEVEsWMZKRYZEXCEVEtWMZKRYZEXCEVEuWMZKRYZEXCEVErWMZKRYZEXCEVEbWMZKRYZEXCEVEeWMZKRYZEXCEVEd"));
console.log(detectWord("lJMDJPLYPPJTAPOSeJMDJPLYPPJTAPOSaJMDJPLYPPJTAPOSn"));
console.log(detectWord("gDTWSJJAFFHHMNMPXTAWKQOVrDTWSJJAFFHHMNMPXTAWKQOVoDTWSJJAFFHHMNMPXTAWKQOVuDTWSJJAFFHHMNMPXTAWKQOVcDTWSJJAFFHHMNMPXTAWKQOVhDTWSJJAFFHHMNMPXTAWKQOVy"));
console.log(detectWord("aNHHJIPROAMxNHHJIPROAMiNHHJIPROAMoNHHJIPROAMmNHHJIPROAMaNHHJIPROAMtNHHJIPROAMiNHHJIPROAMc"));
console.log(detectWord("tXBGCUQSBNTSGZMAVNNIYOVVVAZOQKeXBGCUQSBNTSGZMAVNNIYOVVVAZOQKnXBGCUQSBNTSGZMAVNNIYOVVVAZOQKuXBGCUQSBNTSGZMAVNNIYOVVVAZOQKoXBGCUQSBNTSGZMAVNNIYOVVVAZOQKuXBGCUQSBNTSGZMAVNNIYOVVVAZOQKs"));
console.log(detectWord("yVBNHOPAMPHUKGZJFATSHCZAeVBNHOPAMPHUKGZJFATSHCZAaVBNHOPAMPHUKGZJFATSHCZAr"));
console.log(detectWord("gNWUOMXIDOFQLKrNWUOMXIDOFQLKaNWUOMXIDOFQLKb"));
console.log(detectWord("bTVORYGRQELJJOQKZWIENrTVORYGRQELJJOQKZWIENoTVORYGRQELJJOQKZWIENtTVORYGRQELJJOQKZWIENhTVORYGRQELJJOQKZWIENeTVORYGRQELJJOQKZWIENr"));
console.log(detectWord("sYZYERJOTTELSPOSAMmYZYERJOTTELSPOSAMeYZYERJOTTELSPOSAMlYZYERJOTTELSPOSAMl"));
console.log(detectWord("cCPHANPWHKQWLRFDBJOCKTBNUCFXeCPHANPWHKQWLRFDBJOCKTBNUCFXnCPHANPWHKQWLRFDBJOCKTBNUCFXt"));
console.log(detectWord("rBZFHMFKHMKXEDMSuBZFHMFKHMKXEDMStBZFHMFKHMKXEDMShBZFHMFKHMKXEDMSlBZFHMFKHMKXEDMSeBZFHMFKHMKXEDMSsBZFHMFKHMKXEDMSs"));
console.log(detectWord("pFGEMWBMWIHLPLVJFaFGEMWBMWIHLPLVJFnFGEMWBMWIHLPLVJFiFGEMWBMWIHLPLVJFcFGEMWBMWIHLPLVJFkFGEMWBMWIHLPLVJFy"));
console.log(detectWord("tIBIEPZZNNVJWMJNTUKRADYXWXZAeIBIEPZZNNVJWMJNTUKRADYXWXZAdIBIEPZZNNVJWMJNTUKRADYXWXZAiIBIEPZZNNVJWMJNTUKRADYXWXZAoIBIEPZZNNVJWMJNTUKRADYXWXZAuIBIEPZZNNVJWMJNTUKRADYXWXZAs"));