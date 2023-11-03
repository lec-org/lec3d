/// <reference types="webxr" />
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button
declare enum MOUSE {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    ROTATE = 0,
    DOLLY = 1,
    PAN = 2,
}

declare enum TOUCH {
    ROTATE = 0,
    PAN = 1,
    DOLLY_PAN = 2,
    DOLLY_ROTATE = 3,
}

// GL STATE CONSTANTS
declare const CullFaceNone: 0;
declare const CullFaceBack: 1;
declare const CullFaceFront: 2;
declare const CullFaceFrontBack: 3;
type CullFace = typeof CullFaceNone | typeof CullFaceBack | typeof CullFaceFront | typeof CullFaceFrontBack;

// Shadowing Type
declare const BasicShadowMap: 0;
declare const PCFShadowMap: 1;
declare const PCFSoftShadowMap: 2;
declare const VSMShadowMap: 3;
type ShadowMapType = typeof BasicShadowMap | typeof PCFShadowMap | typeof PCFSoftShadowMap | typeof VSMShadowMap;

// MATERIAL CONSTANTS

// side
declare const FrontSide: 0;
declare const BackSide: 1;
declare const DoubleSide: 2;
declare const TwoPassDoubleSide: 2;
/**
 * Defines which side of faces will be rendered - front, back or both.
 * Default is {@link FrontSide}.
 */
type Side = typeof FrontSide | typeof BackSide | typeof DoubleSide | typeof TwoPassDoubleSide;

// blending modes
declare const NoBlending: 0;
declare const NormalBlending: 1;
declare const AdditiveBlending: 2;
declare const SubtractiveBlending: 3;
declare const MultiplyBlending: 4;
declare const CustomBlending: 5;
type Blending =
    | typeof NoBlending
    | typeof NormalBlending
    | typeof AdditiveBlending
    | typeof SubtractiveBlending
    | typeof MultiplyBlending
    | typeof CustomBlending;

// custom blending equations
// (numbers start from 100 not to clash with other
// mappings to OpenGL constants defined in Texture.js)
declare const AddEquation: 100;
declare const SubtractEquation: 101;
declare const ReverseSubtractEquation: 102;
declare const MinEquation: 103;
declare const MaxEquation: 104;
type BlendingEquation =
    | typeof AddEquation
    | typeof SubtractEquation
    | typeof ReverseSubtractEquation
    | typeof MinEquation
    | typeof MaxEquation;

// custom blending destination factors
declare const ZeroFactor: 200;
declare const OneFactor: 201;
declare const SrcColorFactor: 202;
declare const OneMinusSrcColorFactor: 203;
declare const SrcAlphaFactor: 204;
declare const OneMinusSrcAlphaFactor: 205;
declare const DstAlphaFactor: 206;
declare const OneMinusDstAlphaFactor: 207;
declare const DstColorFactor: 208;
declare const OneMinusDstColorFactor: 209;
type BlendingDstFactor =
    | typeof ZeroFactor
    | typeof OneFactor
    | typeof SrcColorFactor
    | typeof OneMinusSrcColorFactor
    | typeof SrcAlphaFactor
    | typeof OneMinusSrcAlphaFactor
    | typeof DstAlphaFactor
    | typeof OneMinusDstAlphaFactor
    | typeof DstColorFactor
    | typeof OneMinusDstColorFactor;

// custom blending src factors
declare const SrcAlphaSaturateFactor: 210;
type BlendingSrcFactor = typeof SrcAlphaSaturateFactor;

// depth modes
declare const NeverDepth: 0;
declare const AlwaysDepth: 1;
declare const LessDepth: 2;
declare const LessEqualDepth: 3;
declare const EqualDepth: 4;
declare const GreaterEqualDepth: 5;
declare const GreaterDepth: 6;
declare const NotEqualDepth: 7;
type DepthModes =
    | typeof NeverDepth
    | typeof AlwaysDepth
    | typeof LessDepth
    | typeof LessEqualDepth
    | typeof EqualDepth
    | typeof GreaterEqualDepth
    | typeof GreaterDepth
    | typeof NotEqualDepth;

// TEXTURE CONSTANTS
// Operations
declare const MultiplyOperation: 0;
declare const MixOperation: 1;
declare const AddOperation: 2;
type Combine = typeof MultiplyOperation | typeof MixOperation | typeof AddOperation;

// Tone Mapping modes
declare const NoToneMapping: 0;
declare const LinearToneMapping: 1;
declare const ReinhardToneMapping: 2;
declare const CineonToneMapping: 3;
declare const ACESFilmicToneMapping: 4;
declare const CustomToneMapping: 5;
type ToneMapping =
    | typeof NoToneMapping
    | typeof LinearToneMapping
    | typeof ReinhardToneMapping
    | typeof CineonToneMapping
    | typeof ACESFilmicToneMapping
    | typeof CustomToneMapping;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Mapping modes

/**
 * Maps the texture using the mesh's UV coordinates.
 * @remarks This is the _default_ value and behaver for Texture Mapping.
 */
declare const UVMapping: 300;

/**
 * @remarks This is the _default_ value and behaver for Cube Texture Mapping.
 */
declare const CubeReflectionMapping: 301;
declare const CubeRefractionMapping: 302;
declare const CubeUVReflectionMapping: 306;

declare const EquirectangularReflectionMapping: 303;
declare const EquirectangularRefractionMapping: 304;

/**
 * Texture Mapping Modes for non-cube Textures
 * @remarks {@link UVMapping} is the _default_ value and behaver for Texture Mapping.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type Mapping =
    | typeof UVMapping
    | typeof EquirectangularReflectionMapping
    | typeof EquirectangularRefractionMapping;

/**
 * Texture Mapping Modes for cube Textures
 * @remarks {@link CubeReflectionMapping} is the _default_ value and behaver for Cube Texture Mapping.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type CubeTextureMapping =
    | typeof CubeReflectionMapping
    | typeof CubeRefractionMapping
    | typeof CubeUVReflectionMapping;

/**
 * Texture Mapping Modes for any type of Textures
 * @see {@link Mapping} and {@link CubeTextureMapping}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type AnyMapping = Mapping | CubeTextureMapping;

///////////////////////////////////////////////////////////////////////////////
// Wrapping modes

/** With {@link RepeatWrapping} the texture will simply repeat to infinity. */
declare const RepeatWrapping: 1000;
/**
 * With {@link ClampToEdgeWrapping} the last pixel of the texture stretches to the edge of the mesh.
 * @remarks This is the _default_ value and behaver for Wrapping Mapping.
 */
declare const ClampToEdgeWrapping: 1001;
/** With {@link MirroredRepeatWrapping} the texture will repeats to infinity, mirroring on each repeat. */
declare const MirroredRepeatWrapping: 1002;

/**
 * Texture Wrapping Modes
 * @remarks {@link ClampToEdgeWrapping} is the _default_ value and behaver for Wrapping Mapping.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type Wrapping = typeof RepeatWrapping | typeof ClampToEdgeWrapping | typeof MirroredRepeatWrapping;

///////////////////////////////////////////////////////////////////////////////
// Filters

/** {@link NearestFilter} returns the value of the texture element that is nearest (in Manhattan distance) to the specified texture coordinates. */
declare const NearestFilter: 1003;

/**
 * {@link NearestMipmapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion (the texel nearest to the center of the pixel) to produce a texture value.
 */
declare const NearestMipmapNearestFilter: 1004;
/**
 * {@link NearestMipmapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion (the texel nearest to the center of the pixel) to produce a texture value.
 */
declare const NearestMipMapNearestFilter: 1004;

/**
 * {@link NearestMipmapLinearFilter} chooses the two mipmaps that most closely match the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
declare const NearestMipmapLinearFilter: 1005;
/**
 * {@link NearestMipMapLinearFilter} chooses the two mipmaps that most closely match the size of the pixel being textured
 * and uses the {@link NearestFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
declare const NearestMipMapLinearFilter: 1005;

/**
 * {@link LinearFilter} returns the weighted average of the four texture elements that are closest to the specified texture coordinates,
 * and can include items wrapped or repeated from other parts of a texture,
 * depending on the values of {@link THREE.Texture.wrapS | wrapS} and {@link THREE.Texture.wrapT | wrapT}, and on the exact mapping.
 */
declare const LinearFilter: 1006;

/**
 * {@link LinearMipmapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion (a weighted average of the four texels that are closest to the center of the pixel) to produce a texture value.
 */
declare const LinearMipmapNearestFilter: 1007;
/**
 * {@link LinearMipMapNearestFilter} chooses the mipmap that most closely matches the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion (a weighted average of the four texels that are closest to the center of the pixel) to produce a texture value.
 */
declare const LinearMipMapNearestFilter: 1007;

/**
 * {@link LinearMipmapLinearFilter} is the default and chooses the two mipmaps that most closely match the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
declare const LinearMipmapLinearFilter: 1008;

/**
 * {@link LinearMipMapLinearFilter} is the default and chooses the two mipmaps that most closely match the size of the pixel being textured and
 * uses the {@link LinearFilter} criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 */
declare const LinearMipMapLinearFilter: 1008;

/**
 * Texture Magnification Filter Modes.
 * For use with a texture's {@link THREE.Texture.magFilter | magFilter} property,
 * these define the texture magnification function to be used when the pixel being textured maps to an area less than or equal to one texture element (texel).
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://sbcode.net/threejs/mipmaps/ | Texture Mipmaps (non-official)}
 */
type MagnificationTextureFilter = typeof NearestFilter | typeof LinearFilter;

/**
 * Texture Minification Filter Modes.
 * For use with a texture's {@link THREE.Texture.minFilter | minFilter} property,
 * these define the texture minifying function that is used whenever the pixel being textured maps to an area greater than one texture element (texel).
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://sbcode.net/threejs/mipmaps/ | Texture Mipmaps (non-official)}
 */
type MinificationTextureFilter =
    | typeof NearestFilter
    | typeof NearestMipmapNearestFilter
    | typeof NearestMipMapNearestFilter
    | typeof NearestMipmapLinearFilter
    | typeof NearestMipMapLinearFilter
    | typeof LinearFilter
    | typeof LinearMipmapNearestFilter
    | typeof LinearMipMapNearestFilter
    | typeof LinearMipmapLinearFilter
    | typeof LinearMipMapLinearFilter;

///////////////////////////////////////////////////////////////////////////////
// Data types

declare const UnsignedByteType: 1009;
declare const ByteType: 1010;
declare const ShortType: 1011;
declare const UnsignedShortType: 1012;
declare const IntType: 1013;
declare const UnsignedIntType: 1014;
declare const FloatType: 1015;
declare const HalfFloatType: 1016;
declare const UnsignedShort4444Type: 1017;
declare const UnsignedShort5551Type: 1018;
declare const UnsignedInt248Type: 1020;

type AttributeGPUType = typeof FloatType | typeof IntType;

/**
 * Texture Types.
 * @remarks Must correspond to the correct {@link PixelFormat | format}.
 * @see {@link THREE.Texture.type}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type TextureDataType =
    | typeof UnsignedByteType
    | typeof ByteType
    | typeof ShortType
    | typeof UnsignedShortType
    | typeof IntType
    | typeof UnsignedIntType
    | typeof FloatType
    | typeof HalfFloatType
    | typeof UnsignedShort4444Type
    | typeof UnsignedShort5551Type
    | typeof UnsignedInt248Type;

///////////////////////////////////////////////////////////////////////////////
// Pixel formats

/** {@link AlphaFormat} discards the red, green and blue components and reads just the alpha component. */
declare const AlphaFormat: 1021;

/** {@link RGBAFormat} discards the green and blue components and reads just the red component. (Can only be used with a WebGL 2 rendering context). */
declare const RGBAFormat: 1023;

/**
 * {@link LuminanceFormat} reads each element as a single luminance component.
 * This is then converted to a floating point, clamped to the range `[0,1]`, and then assembled into an RGBA element by
 * placing the luminance value in the red, green and blue channels, and attaching `1.0` to the alpha channel.
 */
declare const LuminanceFormat: 1024;

/**
 * {@link LuminanceAlphaFormat} reads each element as a luminance/alpha double.
 * The same process occurs as for the {@link LuminanceFormat}, except that the alpha channel may have values other than `1.0`.
 */
declare const LuminanceAlphaFormat: 1025;

/**
 * {@link DepthFormat} reads each element as a single depth value, converts it to floating point, and clamps to the range `[0,1]`.
 * @remarks This is the default for {@link THREE.DepthTexture}.
 */
declare const DepthFormat: 1026;

/**
 * {@link DepthStencilFormat} reads each element is a pair of depth and stencil values.
 * The depth component of the pair is interpreted as in {@link DepthFormat}.
 * The stencil component is interpreted based on the depth + stencil internal format.
 */
declare const DepthStencilFormat: 1027;

/**
 * {@link RedFormat} discards the green and blue components and reads just the red component.
 * @remarks Can only be used with a WebGL 2 rendering context.
 */
declare const RedFormat: 1028;

/**
 * {@link RedIntegerFormat} discards the green and blue components and reads just the red component.
 * The texels are read as integers instead of floating point.
 * @remarks Can only be used with a WebGL 2 rendering context.
 */
declare const RedIntegerFormat: 1029;

/**
 * {@link RGFormat} discards the alpha, and blue components and reads the red, and green components.
 * @remarks Can only be used with a WebGL 2 rendering context.
 */
declare const RGFormat: 1030;

/**
 * {@link RGIntegerFormat} discards the alpha, and blue components and reads the red, and green components.
 * The texels are read as integers instead of floating point.
 * @remarks Can only be used with a WebGL 2 rendering context.
 */
declare const RGIntegerFormat: 1031;

/**
 * {@link RGBAIntegerFormat} reads the red, green, blue and alpha component
 * @remarks This is the default for {@link THREE.Texture}.
 */
declare const RGBAIntegerFormat: 1033;

declare const _SRGBAFormat: 1035; // fallback for WebGL 1

/**
 * Texture Pixel Formats Modes. Compatible only with {@link WebGLRenderingContext | WebGL 1 Rendering Context}.
 * @remarks Note that the texture must have the correct {@link THREE.Texture.type} set, as described in  {@link TextureDataType}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link WebGL2PixelFormat} and {@link PixelFormat}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type WebGL1PixelFormat =
    | typeof AlphaFormat
    | typeof LuminanceFormat
    | typeof LuminanceAlphaFormat
    | typeof DepthFormat
    | typeof DepthStencilFormat
    | typeof RedFormat
    | typeof RedIntegerFormat
    | typeof RGFormat
    | typeof _SRGBAFormat;

/**
 * Texture Pixel Formats Modes. Compatible only with {@link WebGL2RenderingContext | WebGL 2 Rendering Context}.
 * @remarks Note that the texture must have the correct {@link THREE.Texture.type} set, as described in  {@link TextureDataType}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link WebGL2PixelFormat} and {@link PixelFormat}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type WebGL2PixelFormat =
    | typeof AlphaFormat
    | typeof RGBAFormat
    | typeof LuminanceFormat
    | typeof LuminanceAlphaFormat
    | typeof DepthFormat
    | typeof DepthStencilFormat
    | typeof RedFormat
    | typeof RedIntegerFormat
    | typeof RGFormat
    | typeof RGIntegerFormat
    | typeof RGBAIntegerFormat
    | typeof _SRGBAFormat;

/**
 * All Texture Pixel Formats Modes.
 * @remarks Note that the texture must have the correct {@link THREE.Texture.type} set, as described in  {@link TextureDataType}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link WebGL1PixelFormat} and {@link WebGL2PixelFormat}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type PixelFormat = WebGL1PixelFormat | WebGL2PixelFormat;

/**
 * All Texture Pixel Formats Modes for {@link THREE.DeepTexture}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type DeepTexturePixelFormat = typeof DepthFormat | typeof DepthStencilFormat;

///////////////////////////////////////////////////////////////////////////////
// Compressed texture formats
// DDS / ST3C Compressed texture formats

/**
 * A DXT1-compressed image in an RGB image format.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
declare const RGB_S3TC_DXT1_Format: 33776;
/**
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
declare const RGBA_S3TC_DXT1_Format: 33777;
/**
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
declare const RGBA_S3TC_DXT3_Format: 33778;
/**
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.
 * @remarks Require support for the _WEBGL_compressed_texture_s3tc_ WebGL extension.
 */
declare const RGBA_S3TC_DXT5_Format: 33779;

// PVRTC compressed './texture formats

/**
 * RGB compression in 4-bit mode. One block for each 4×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
declare const RGB_PVRTC_4BPPV1_Format: 35840;
/**
 * RGB compression in 2-bit mode. One block for each 8×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
declare const RGB_PVRTC_2BPPV1_Format: 35841;
/**
 * RGBA compression in 4-bit mode. One block for each 4×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
declare const RGBA_PVRTC_4BPPV1_Format: 35842;
/**
 * RGBA compression in 2-bit mode. One block for each 8×4 pixels.
 * @remarks Require support for the _WEBGL_compressed_texture_pvrtc_ WebGL extension.
 */
declare const RGBA_PVRTC_2BPPV1_Format: 35843;

// ETC compressed texture formats

/**
 * @remarks Require support for the _WEBGL_compressed_texture_etc1_ (ETC1) or _WEBGL_compressed_texture_etc_ (ETC2) WebGL extension.
 */
declare const RGB_ETC1_Format: 36196;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_etc1_ (ETC1) or _WEBGL_compressed_texture_etc_ (ETC2) WebGL extension.
 */
declare const RGB_ETC2_Format: 37492;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_etc1_ (ETC1) or _WEBGL_compressed_texture_etc_ (ETC2) WebGL extension.
 */
declare const RGBA_ETC2_EAC_Format: 37496;

// ASTC compressed texture formats

/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_4x4_Format: 37808;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_5x4_Format: 37809;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_5x5_Format: 37810;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_6x5_Format: 37811;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_6x6_Format: 37812;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_8x5_Format: 37813;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_8x6_Format: 37814;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_8x8_Format: 37815;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_10x5_Format: 37816;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_10x6_Format: 37817;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_10x8_Format: 37818;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_10x10_Format: 37819;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_12x10_Format: 37820;
/**
 * @remarks Require support for the _WEBGL_compressed_texture_astc_ WebGL extension.
 */
declare const RGBA_ASTC_12x12_Format: 37821;

// BPTC compressed texture formats

/**
 * @remarks Require support for the _EXT_texture_compression_bptc_ WebGL extension.
 */
declare const RGBA_BPTC_Format: 36492;
declare const RGB_BPTC_SIGNED_Format = 36494;
declare const RGB_BPTC_UNSIGNED_Format = 36495;

// RGTC compressed texture formats
declare const RED_RGTC1_Format: 36283;
declare const SIGNED_RED_RGTC1_Format: 36284;
declare const RED_GREEN_RGTC2_Format: 36285;
declare const SIGNED_RED_GREEN_RGTC2_Format: 36286;

/**
 * For use with a {@link THREE.CompressedTexture}'s {@link THREE.CompressedTexture.format | .format} property.
 * @remarks Compressed Require support for correct WebGL extension.
 */
type CompressedPixelFormat =
    | typeof RGB_S3TC_DXT1_Format
    | typeof RGBA_S3TC_DXT1_Format
    | typeof RGBA_S3TC_DXT3_Format
    | typeof RGBA_S3TC_DXT5_Format
    | typeof RGB_PVRTC_4BPPV1_Format
    | typeof RGB_PVRTC_2BPPV1_Format
    | typeof RGBA_PVRTC_4BPPV1_Format
    | typeof RGBA_PVRTC_2BPPV1_Format
    | typeof RGB_ETC1_Format
    | typeof RGB_ETC2_Format
    | typeof RGBA_ETC2_EAC_Format
    | typeof RGBA_ASTC_4x4_Format
    | typeof RGBA_ASTC_5x4_Format
    | typeof RGBA_ASTC_5x5_Format
    | typeof RGBA_ASTC_6x5_Format
    | typeof RGBA_ASTC_6x6_Format
    | typeof RGBA_ASTC_8x5_Format
    | typeof RGBA_ASTC_8x6_Format
    | typeof RGBA_ASTC_8x8_Format
    | typeof RGBA_ASTC_10x5_Format
    | typeof RGBA_ASTC_10x6_Format
    | typeof RGBA_ASTC_10x8_Format
    | typeof RGBA_ASTC_10x10_Format
    | typeof RGBA_ASTC_12x10_Format
    | typeof RGBA_ASTC_12x12_Format
    | typeof RGBA_BPTC_Format
    | typeof RGB_BPTC_SIGNED_Format
    | typeof RGB_BPTC_UNSIGNED_Format
    | typeof RED_RGTC1_Format
    | typeof SIGNED_RED_RGTC1_Format
    | typeof RED_GREEN_RGTC2_Format
    | typeof SIGNED_RED_GREEN_RGTC2_Format;

///////////////////////////////////////////////////////////////////////////////

/**
 * All Possible Texture Pixel Formats Modes. For any Type or SubType of Textures.
 * @remarks Note that the texture must have the correct {@link THREE.Texture.type} set, as described in {@link TextureDataType}.
 * @see {@link WebGLRenderingContext.texImage2D} for details.
 * @see {@link PixelFormat} and {@link DeepTexturePixelFormat} and {@link CompressedPixelFormat}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 */
type AnyPixelFormat = PixelFormat | DeepTexturePixelFormat | CompressedPixelFormat;

// Interpolation
declare const InterpolateDiscrete: 2300;
declare const InterpolateLinear: 2301;
declare const InterpolateSmooth: 2302;
type InterpolationModes = typeof InterpolateDiscrete | typeof InterpolateLinear | typeof InterpolateSmooth;

// Animation blending modes
declare const NormalAnimationBlendMode: 2500;
declare const AdditiveAnimationBlendMode: 2501;
type AnimationBlendMode = typeof NormalAnimationBlendMode | typeof AdditiveAnimationBlendMode;

///////////////////////////////////////////////////////////////////////////////
// Texture Encodings

/** @deprecated Use {@link LinearSRGBColorSpace} or {@link NoColorSpace} in three.js r152+. */
declare const LinearEncoding: 3000;
/** @deprecated Use {@link SRGBColorSpace} in three.js r152+. */
declare const sRGBEncoding: 3001;
/**
 * Texture Encodings.
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @deprecated Use {@link ColorSpace} in three.js r152+.
 */
type TextureEncoding = typeof LinearEncoding | typeof sRGBEncoding;

///////////////////////////////////////////////////////////////////////////////
// Normal Map types

declare const TangentSpaceNormalMap: 0;
declare const ObjectSpaceNormalMap: 1;
type NormalMapTypes = typeof TangentSpaceNormalMap | typeof ObjectSpaceNormalMap;

declare const NoColorSpace: '';
declare const SRGBColorSpace: 'srgb';
declare const LinearSRGBColorSpace: 'srgb-linear';
declare const DisplayP3ColorSpace: 'display-p3';
declare const LinearDisplayP3ColorSpace = 'display-p3-linear';
type ColorSpace =
    | typeof NoColorSpace
    | typeof SRGBColorSpace
    | typeof LinearSRGBColorSpace
    | typeof DisplayP3ColorSpace
    | typeof LinearDisplayP3ColorSpace;

// Stencil Op types
declare const ZeroStencilOp: 0;
declare const KeepStencilOp: 7680;
declare const ReplaceStencilOp: 7681;
declare const IncrementStencilOp: 7682;
declare const DecrementStencilOp: 7283;
declare const IncrementWrapStencilOp: 34055;
declare const DecrementWrapStencilOp: 34056;
declare const InvertStencilOp: 5386;
type StencilOp =
    | typeof ZeroStencilOp
    | typeof KeepStencilOp
    | typeof ReplaceStencilOp
    | typeof IncrementStencilOp
    | typeof DecrementStencilOp
    | typeof IncrementWrapStencilOp
    | typeof DecrementWrapStencilOp
    | typeof InvertStencilOp;

// Stencil Func types
declare const NeverStencilFunc: 512;
declare const LessStencilFunc: 513;
declare const EqualStencilFunc: 514;
declare const LessEqualStencilFunc: 515;
declare const GreaterStencilFunc: 516;
declare const NotEqualStencilFunc: 517;
declare const GreaterEqualStencilFunc: 518;
declare const AlwaysStencilFunc: 519;
type StencilFunc =
    | typeof NeverStencilFunc
    | typeof LessStencilFunc
    | typeof EqualStencilFunc
    | typeof LessEqualStencilFunc
    | typeof GreaterStencilFunc
    | typeof NotEqualStencilFunc
    | typeof GreaterEqualStencilFunc
    | typeof AlwaysStencilFunc;

declare const NeverCompare: 512;
declare const LessCompare: 513;
declare const EqualCompare: 514;
declare const LessEqualCompare: 515;
declare const GreaterCompare: 516;
declare const NotEqualCompare: 517;
declare const GreaterEqualCompare: 518;
declare const AlwaysCompare: 519;
type TextureComparisonFunction =
    | typeof NeverCompare
    | typeof LessCompare
    | typeof EqualCompare
    | typeof LessEqualCompare
    | typeof GreaterCompare
    | typeof NotEqualCompare
    | typeof GreaterEqualCompare
    | typeof AlwaysCompare;

// usage types
declare const StaticDrawUsage: 35044;
declare const DynamicDrawUsage: 35048;
declare const StreamDrawUsage: 35040;
declare const StaticReadUsage: 35045;
declare const DynamicReadUsage: 35049;
declare const StreamReadUsage: 35041;
declare const StaticCopyUsage: 35046;
declare const DynamicCopyUsage: 35050;
declare const StreamCopyUsage: 35042;
type Usage =
    | typeof StaticDrawUsage
    | typeof DynamicDrawUsage
    | typeof StreamDrawUsage
    | typeof StaticReadUsage
    | typeof DynamicReadUsage
    | typeof StreamReadUsage
    | typeof StaticCopyUsage
    | typeof DynamicCopyUsage
    | typeof StreamCopyUsage;

declare const WebGLCoordinateSystem: 2000;
declare const WebGPUCoordinateSystem: 2001;
type CoordinateSystem = typeof WebGLCoordinateSystem | typeof WebGPUCoordinateSystem;

///////////////////////////////////////////////////////////////////////////////
// Texture - Internal Pixel Formats

/**
 * For use with a texture's {@link THREE.Texture.internalFormat} property, these define how elements of a {@link THREE.Texture}, or texels, are stored on the GPU.
 * - `R8` stores the red component on 8 bits.
 * - `R8_SNORM` stores the red component on 8 bits. The component is stored as normalized.
 * - `R8I` stores the red component on 8 bits. The component is stored as an integer.
 * - `R8UI` stores the red component on 8 bits. The component is stored as an unsigned integer.
 * - `R16I` stores the red component on 16 bits. The component is stored as an integer.
 * - `R16UI` stores the red component on 16 bits. The component is stored as an unsigned integer.
 * - `R16F` stores the red component on 16 bits. The component is stored as floating point.
 * - `R32I` stores the red component on 32 bits. The component is stored as an integer.
 * - `R32UI` stores the red component on 32 bits. The component is stored as an unsigned integer.
 * - `R32F` stores the red component on 32 bits. The component is stored as floating point.
 * - `RG8` stores the red and green components on 8 bits each.
 * - `RG8_SNORM` stores the red and green components on 8 bits each. Every component is stored as normalized.
 * - `RG8I` stores the red and green components on 8 bits each. Every component is stored as an integer.
 * - `RG8UI` stores the red and green components on 8 bits each. Every component is stored as an unsigned integer.
 * - `RG16I` stores the red and green components on 16 bits each. Every component is stored as an integer.
 * - `RG16UI` stores the red and green components on 16 bits each. Every component is stored as an unsigned integer.
 * - `RG16F` stores the red and green components on 16 bits each. Every component is stored as floating point.
 * - `RG32I` stores the red and green components on 32 bits each. Every component is stored as an integer.
 * - `RG32UI` stores the red and green components on 32 bits. Every component is stored as an unsigned integer.
 * - `RG32F` stores the red and green components on 32 bits. Every component is stored as floating point.
 * - `RGB8` stores the red, green, and blue components on 8 bits each. RGB8_SNORM` stores the red, green, and blue components on 8 bits each. Every component is stored as normalized.
 * - `RGB8I` stores the red, green, and blue components on 8 bits each. Every component is stored as an integer.
 * - `RGB8UI` stores the red, green, and blue components on 8 bits each. Every component is stored as an unsigned integer.
 * - `RGB16I` stores the red, green, and blue components on 16 bits each. Every component is stored as an integer.
 * - `RGB16UI` stores the red, green, and blue components on 16 bits each. Every component is stored as an unsigned integer.
 * - `RGB16F` stores the red, green, and blue components on 16 bits each. Every component is stored as floating point
 * - `RGB32I` stores the red, green, and blue components on 32 bits each. Every component is stored as an integer.
 * - `RGB32UI` stores the red, green, and blue components on 32 bits each. Every component is stored as an unsigned integer.
 * - `RGB32F` stores the red, green, and blue components on 32 bits each. Every component is stored as floating point
 * - `R11F_G11F_B10F` stores the red, green, and blue components respectively on 11 bits, 11 bits, and 10bits. Every component is stored as floating point.
 * - `RGB565` stores the red, green, and blue components respectively on 5 bits, 6 bits, and 5 bits.
 * - `RGB9_E5` stores the red, green, and blue components on 9 bits each.
 * - `RGBA8` stores the red, green, blue, and alpha components on 8 bits each.
 * - `RGBA8_SNORM` stores the red, green, blue, and alpha components on 8 bits. Every component is stored as normalized.
 * - `RGBA8I` stores the red, green, blue, and alpha components on 8 bits each. Every component is stored as an integer.
 * - `RGBA8UI` stores the red, green, blue, and alpha components on 8 bits. Every component is stored as an unsigned integer.
 * - `RGBA16I` stores the red, green, blue, and alpha components on 16 bits. Every component is stored as an integer.
 * - `RGBA16UI` stores the red, green, blue, and alpha components on 16 bits. Every component is stored as an unsigned integer.
 * - `RGBA16F` stores the red, green, blue, and alpha components on 16 bits. Every component is stored as floating point.
 * - `RGBA32I` stores the red, green, blue, and alpha components on 32 bits. Every component is stored as an integer.
 * - `RGBA32UI` stores the red, green, blue, and alpha components on 32 bits. Every component is stored as an unsigned integer.
 * - `RGBA32F` stores the red, green, blue, and alpha components on 32 bits. Every component is stored as floating point.
 * - `RGB5_A1` stores the red, green, blue, and alpha components respectively on 5 bits, 5 bits, 5 bits, and 1 bit.
 * - `RGB10_A2` stores the red, green, blue, and alpha components respectively on 10 bits, 10 bits, 10 bits and 2 bits.
 * - `RGB10_A2UI` stores the red, green, blue, and alpha components respectively on 10 bits, 10 bits, 10 bits and 2 bits. Every component is stored as an unsigned integer.
 * - `SRGB8` stores the red, green, and blue components on 8 bits each.
 * - `SRGB8_ALPHA8` stores the red, green, blue, and alpha components on 8 bits each.
 * - `DEPTH_COMPONENT16` stores the depth component on 16bits.
 * - `DEPTH_COMPONENT24` stores the depth component on 24bits.
 * - `DEPTH_COMPONENT32F` stores the depth component on 32bits. The component is stored as floating point.
 * - `DEPTH24_STENCIL8` stores the depth, and stencil components respectively on 24 bits and 8 bits. The stencil component is stored as an unsigned integer.
 * - `DEPTH32F_STENCIL8` stores the depth, and stencil components respectively on 32 bits and 8 bits. The depth component is stored as floating point, and the stencil component as an unsigned integer.
 * @remark Note that the texture must have the correct {@link THREE.Texture.type} set, as well as the correct {@link THREE.Texture.format}.
 * @see {@link WebGLRenderingContext.texImage2D} and {@link WebGLRenderingContext.texImage3D} for more details regarding the possible combination
 * of {@link THREE.Texture.format}, {@link THREE.Texture.internalFormat}, and {@link THREE.Texture.type}.
 * @see {@link https://registry.khronos.org/webgl/specs/latest/2.0/ | WebGL2 Specification} and
 * {@link https://registry.khronos.org/OpenGL/specs/es/3.0/es_spec_3.0.pdf | OpenGL ES 3.0 Specification} For more in-depth information regarding internal formats.
 */
type PixelFormatGPU =
    | 'ALPHA'
    | 'RGB'
    | 'RGBA'
    | 'LUMINANCE'
    | 'LUMINANCE_ALPHA'
    | 'RED_INTEGER'
    | 'R8'
    | 'R8_SNORM'
    | 'R8I'
    | 'R8UI'
    | 'R16I'
    | 'R16UI'
    | 'R16F'
    | 'R32I'
    | 'R32UI'
    | 'R32F'
    | 'RG8'
    | 'RG8_SNORM'
    | 'RG8I'
    | 'RG8UI'
    | 'RG16I'
    | 'RG16UI'
    | 'RG16F'
    | 'RG32I'
    | 'RG32UI'
    | 'RG32F'
    | 'RGB565'
    | 'RGB8'
    | 'RGB8_SNORM'
    | 'RGB8I'
    | 'RGB8UI'
    | 'RGB16I'
    | 'RGB16UI'
    | 'RGB16F'
    | 'RGB32I'
    | 'RGB32UI'
    | 'RGB32F'
    | 'RGB9_E5'
    | 'SRGB8'
    | 'R11F_G11F_B10F'
    | 'RGBA4'
    | 'RGBA8'
    | 'RGBA8_SNORM'
    | 'RGBA8I'
    | 'RGBA8UI'
    | 'RGBA16I'
    | 'RGBA16UI'
    | 'RGBA16F'
    | 'RGBA32I'
    | 'RGBA32UI'
    | 'RGBA32F'
    | 'RGB5_A1'
    | 'RGB10_A2'
    | 'RGB10_A2UI'
    | 'SRGB8_ALPHA8'
    | 'SRGB8'
    | 'DEPTH_COMPONENT16'
    | 'DEPTH_COMPONENT24'
    | 'DEPTH_COMPONENT32F'
    | 'DEPTH24_STENCIL8'
    | 'DEPTH32F_STENCIL8';

declare abstract class Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: number, resultBuffer?: any);

    parameterPositions: any;
    sampleValues: any;
    valueSize: number;
    resultBuffer: any;

    evaluate(time: number): any;
}

declare class DiscreteInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

declare class LinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

declare class CubicInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

declare class KeyframeTrack {
    /**
     * @param name
     * @param times
     * @param values
     * @param [interpolation=THREE.InterpolateLinear]
     */
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    name: string;
    times: Float32Array;
    values: Float32Array;

    ValueTypeName: string;
    TimeBufferType: Float32Array;
    ValueBufferType: Float32Array;

    /**
     * @default THREE.InterpolateLinear
     */
    DefaultInterpolation: InterpolationModes;

    InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
    InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
    InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;

    setInterpolation(interpolation: InterpolationModes): KeyframeTrack;
    getInterpolation(): InterpolationModes;
    createInterpolant(): Interpolant;

    getValueSize(): number;

    shift(timeOffset: number): KeyframeTrack;
    scale(timeScale: number): KeyframeTrack;
    trim(startTime: number, endTime: number): KeyframeTrack;
    validate(): boolean;
    optimize(): KeyframeTrack;
    clone(): this;

    static toJSON(track: KeyframeTrack): any;
}

type Vector2Tuple = [number, number];

/**
 * ( interface Vector<T> )
 *
 * Abstract interface of {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js|Vector2},
 * {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js|Vector3}
 * and {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector4.js|Vector4}.
 *
 * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
 *
 * Those definitions will be changed when TypeScript innovates Generics to be type safe.
 *
 * @example
 * const v:THREE.Vector = new THREE.Vector3();
 * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3)); // invalid but compiled successfully
 */
interface Vector {
    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    set(...args: number[]): this;

    setScalar(scalar: number): this;

    /**
     * copy(v:T):T;
     */
    copy(v: Vector): this;

    /**
     * NOTE: The second argument is deprecated.
     *
     * add(v:T):T;
     */
    add(v: Vector): this;

    /**
     * addVectors(a:T, b:T):T;
     */
    addVectors(a: Vector, b: Vector): this;

    addScaledVector(vector: Vector, scale: number): this;

    /**
     * Adds the scalar value s to this vector's values.
     */
    addScalar(scalar: number): this;

    /**
     * sub(v:T):T;
     */
    sub(v: Vector): this;

    /**
     * subVectors(a:T, b:T):T;
     */
    subVectors(a: Vector, b: Vector): this;

    /**
     * multiplyScalar(s:number):T;
     */
    multiplyScalar(s: number): this;

    /**
     * divideScalar(s:number):T;
     */
    divideScalar(s: number): this;

    /**
     * negate():T;
     */
    negate(): this;

    /**
     * dot(v:T):T;
     */
    dot(v: Vector): number;

    /**
     * lengthSq():number;
     */
    lengthSq(): number;

    /**
     * length():number;
     */
    length(): number;

    /**
     * normalize():T;
     */
    normalize(): this;

    /**
     * NOTE: Vector4 doesn't have the property.
     *
     * distanceTo(v:T):number;
     */
    distanceTo?(v: Vector): number;

    /**
     * NOTE: Vector4 doesn't have the property.
     *
     * distanceToSquared(v:T):number;
     */
    distanceToSquared?(v: Vector): number;

    /**
     * setLength(l:number):T;
     */
    setLength(l: number): this;

    /**
     * lerp(v:T, alpha:number):T;
     */
    lerp(v: Vector, alpha: number): this;

    /**
     * equals(v:T):boolean;
     */
    equals(v: Vector): boolean;

    /**
     * clone():T;
     */
    clone(): Vector;
}

/**
 * 2D vector.
 *
 * ( class Vector2 implements Vector<Vector2> )
 */
declare class Vector2 implements Vector {
    constructor(x?: number, y?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;
    width: number;
    height: number;
    readonly isVector2: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number): this;

    /**
     * Sets the x and y values of this vector both equal to scalar.
     */
    setScalar(scalar: number): this;

    /**
     * Sets X component of this vector.
     */
    setX(x: number): this;

    /**
     * Sets Y component of this vector.
     */
    setY(y: number): this;

    /**
     * Sets a component of this vector.
     */
    setComponent(index: number, value: number): this;

    /**
     * Gets a component of this vector.
     */
    getComponent(index: number): number;

    /**
     * Returns a new Vector2 instance with the same `x` and `y` values.
     */
    clone(): this;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector2): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector2, w?: Vector2): this;

    /**
     * Adds the scalar value s to this vector's x and y values.
     */
    addScalar(s: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector2, b: Vector2): this;

    /**
     * Adds the multiple of v and s to this vector.
     */
    addScaledVector(v: Vector2, s: number): this;

    /**
     * Subtracts v from this vector.
     */
    sub(v: Vector2): this;

    /**
     * Subtracts s from this vector's x and y components.
     */
    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector2, b: Vector2): this;

    /**
     * Multiplies this vector by v.
     */
    multiply(v: Vector2): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(scalar: number): this;

    /**
     * Divides this vector by v.
     */
    divide(v: Vector2): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    /**
     * Multiplies this vector (with an implicit 1 as the 3rd component) by m.
     */
    applyMatrix3(m: Matrix3): this;

    /**
     * If this vector's x or y value is greater than v's x or y value, replace that value with the corresponding min value.
     */
    min(v: Vector2): this;

    /**
     * If this vector's x or y value is less than v's x or y value, replace that value with the corresponding max value.
     */
    max(v: Vector2): this;

    /**
     * If this vector's x or y value is greater than the max vector's x or y value, it is replaced by the corresponding value.
     * If this vector's x or y value is less than the min vector's x or y value, it is replaced by the corresponding value.
     * @param min the minimum x and y values.
     * @param max the maximum x and y values in the desired range.
     */
    clamp(min: Vector2, max: Vector2): this;

    /**
     * If this vector's x or y values are greater than the max value, they are replaced by the max value.
     * If this vector's x or y values are less than the min value, they are replaced by the min value.
     * @param min the minimum value the components will be clamped to.
     * @param max the maximum value the components will be clamped to.
     */
    clampScalar(min: number, max: number): this;

    /**
     * If this vector's length is greater than the max value, it is replaced by the max value.
     * If this vector's length is less than the min value, it is replaced by the min value.
     * @param min the minimum value the length will be clamped to.
     * @param max the maximum value the length will be clamped to.
     */
    clampLength(min: number, max: number): this;

    /**
     * The components of the vector are rounded down to the nearest integer value.
     */
    floor(): this;

    /**
     * The x and y components of the vector are rounded up to the nearest integer value.
     */
    ceil(): this;

    /**
     * The components of the vector are rounded to the nearest integer value.
     */
    round(): this;

    /**
     * The components of the vector are rounded towards zero (up if negative, down if positive) to an integer value.
     */
    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector2): number;

    /**
     * Computes cross product of this vector and v.
     */
    cross(v: Vector2): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * @deprecated Use {@link Vector2#manhattanLength .manhattanLength()} instead.
     */
    lengthManhattan(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;

    /**
     * computes the angle in radians with respect to the positive x-axis
     */
    angle(): number;

    /**
     * Returns the angle between this vector and vector {@link Vector2 | v} in radians.
     */
    angleTo(v: Vector2): number;

    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v: Vector2): number;

    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v: Vector2): number;

    /**
     * @deprecated Use {@link Vector2#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    distanceToManhattan(v: Vector2): number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v: Vector2): number;

    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(length: number): this;

    /**
     * Linearly interpolates between this vector and v, where alpha is the distance along the line - alpha = 0 will be this vector, and alpha = 1 will be v.
     * @param v vector to interpolate towards.
     * @param alpha interpolation factor in the closed interval [0, 1].
     */
    lerp(v: Vector2, alpha: number): this;

    /**
     * Sets this vector to be the vector linearly interpolated between v1 and v2 where alpha is the distance along the line connecting the two vectors - alpha = 0 will be v1, and alpha = 1 will be v2.
     * @param v1 the starting vector.
     * @param v2 vector to interpolate towards.
     * @param alpha interpolation factor in the closed interval [0, 1].
     */
    lerpVectors(v1: Vector2, v2: Vector2, alpha: number): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector2): boolean;

    /**
     * Sets this vector's x and y value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y], or copies x and y into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector2Tuple, offset?: 0): Vector2Tuple;

    /**
     * Copies x and y into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Sets this vector's x and y values from the attribute.
     * @param attribute the source attribute.
     * @param index index in the attribute.
     */
    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * Rotates the vector around center by angle radians.
     * @param center the point around which to rotate.
     * @param angle the angle to rotate, in radians.
     */
    rotateAround(center: Vector2, angle: number): this;

    /**
     * Sets this vector's x and y from Math.random
     */
    random(): this;

    /**
     * Iterating through a Vector2 instance will yield its components (x, y) in the corresponding order.
     */
    [Symbol.iterator](): Iterator<number>;
}

// https://threejs.org/docs/#api/en/math/Matrix3



type Matrix3Tuple = [number, number, number, number, number, number, number, number, number];

/**
 * ( interface Matrix<T> )
 */
interface Matrix {
    /**
     * Array with matrix values.
     */
    elements: number[];

    /**
     * identity():T;
     */
    identity(): Matrix;

    /**
     * copy(m:T):T;
     */
    copy(m: this): this;

    /**
     * multiplyScalar(s:number):T;
     */
    multiplyScalar(s: number): Matrix;

    determinant(): number;

    /**
     * transpose():T;
     */
    transpose(): Matrix;

    /**
     * invert():T;
     */
    invert(): Matrix;

    /**
     * clone():T;
     */
    clone(): Matrix;
}

/**
 * ( class Matrix3 implements Matrix<Matrix3> )
 */
declare class Matrix3 implements Matrix {
    /**
     * Creates an identity matrix.
     */
    constructor();
    /**
     * Creates a 3x3 matrix with the given arguments in row-major order.
     */
    constructor(
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number,
    );

    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    elements: number[];

    set(
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number,
    ): Matrix3;
    identity(): Matrix3;
    clone(): this;
    copy(m: Matrix3): this;
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix3;
    setFromMatrix4(m: Matrix4): Matrix3;
    multiplyScalar(s: number): Matrix3;
    determinant(): number;

    /**
     * Inverts this matrix in place.
     */
    invert(): Matrix3;

    /**
     * Transposes this matrix in place.
     */
    transpose(): Matrix3;
    getNormalMatrix(matrix4: Matrix4): Matrix3;

    /**
     * Transposes this matrix into the supplied array r, and returns itself.
     */
    transposeIntoArray(r: number[]): Matrix3;

    setUvTransform(tx: number, ty: number, sx: number, sy: number, rotation: number, cx: number, cy: number): Matrix3;

    scale(sx: number, sy: number): Matrix3;

    /**
     * Sets this matrix as a 2D translation transform:
     *
     * ```
     * 1, 0, x,
     * 0, 1, y,
     * 0, 0, 1
     * ```
     *
     * @param x the amount to translate in the X axis.
     * @param y the amount to translate in the Y axis.
     */
    makeTranslation(v: Vector2): this;
    makeTranslation(x: number, y: number): this;

    /**
     * Sets this matrix as a 2D rotational transformation by theta radians. The resulting matrix will be:
     *
     * ```
     * cos(θ) -sin(θ) 0
     * sin(θ) cos(θ)  0
     * 0      0       1
     * ```
     *
     * @param theta Rotation angle in radians. Positive values rotate counterclockwise.
     */
    makeRotation(theta: number): this;
    makeRotation(theta: number): Matrix3;

    /**
     * Sets this matrix as a 2D scale transform:
     *
     * ```
     * x, 0, 0,
     * 0, y, 0,
     * 0, 0, 1
     * ```
     *
     * @param x the amount to scale in the X axis.
     * @param y the amount to scale in the Y axis.
     */
    makeScale(x: number, y: number): this;
    makeScale(x: number, y: number): Matrix3;

    rotate(theta: number): Matrix3;

    translate(tx: number, ty: number): Matrix3;

    equals(matrix: Matrix3): boolean;

    /**
     * Sets the values of this matrix from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): Matrix3;

    /**
     * Returns an array with the values of this matrix, or copies them into the provided array.
     * @param array (optional) array to store the matrix to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Matrix3Tuple, offset?: 0): Matrix3Tuple;

    /**
     * Copies he values of this matrix into the provided array-like.
     * @param array array-like to store the matrix to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array?: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Multiplies this matrix by m.
     */
    multiply(m: Matrix3): Matrix3;

    premultiply(m: Matrix3): Matrix3;

    /**
     * Sets this matrix to a x b.
     */
    multiplyMatrices(a: Matrix3, b: Matrix3): Matrix3;

    /**
     * @deprecated Use {@link Vector3.applyMatrix3 vector.applyMatrix3( matrix )} instead.
     */
    multiplyVector3(vector: Vector3): any;

    /**
     * @deprecated This method has been removed completely.
     */
    multiplyVector3Array(a: any): any;

    /**
     * @deprecated Use {@link Matrix3#invert .invert()} instead.
     */
    getInverse(matrix: Matrix4, throwOnDegenerate?: boolean): Matrix3;
    getInverse(matrix: Matrix): Matrix;

    /**
     * @deprecated Use {@link Matrix3#toArray .toArray()} instead.
     */
    flattenToArrayOffset(array: number[], offset: number): number[];
}

type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;

/**
 * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes )
 * associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU
 * @remarks
 * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
 * {@link THREE.Vector2.fromBufferAttribute | Vector2},
 * {@link THREE.Vector3.fromBufferAttribute | Vector3},
 * {@link THREE.Vector4.fromBufferAttribute | Vector4}, and
 * {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.
 * @see {@link THREE.BufferGeometry | BufferGeometry} for details and a usage examples.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGL / BufferGeometry - Clean up Memory}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class BufferAttribute {
    /**
     * This creates a new {@link THREE.GLBufferAttribute | GLBufferAttribute} object.
     * @param array Must be a `TypedArray`. Used to instantiate the buffer.
     * This array should have `itemSize * numVertices` elements, where numVertices is the number of vertices in the associated {@link THREE.BufferGeometry | BufferGeometry}.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @throws `TypeError` When the {@link array} is not a `TypedArray`;
     */
    constructor(array: TypedArray, itemSize: number, normalized?: boolean);

    /**
     * Optional name for this attribute instance.
     * @defaultValue ''
     */
    name: string;

    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} holding data stored in the buffer.
     * @returns `TypedArray`
     */
    array: TypedArray;

    /**
     * The length of vectors that are being stored in the {@link BufferAttribute.array | array}.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

    /**
     * Defines the intended usage pattern of the data store for optimization purposes.
     * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.setUsage | setUsage}
     * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
     */
    usage: Usage;

    /**
     * Configures the bound GPU type for use in shaders. Either {@link FloatType} or {@link IntType}, default is {@link FloatType}.
     *
     * Note: this only has an effect for integer arrays and is not configurable for float arrays. For lower precision
     * float types, see https://threejs.org/docs/#api/en/core/bufferAttributeTypes/BufferAttributeTypes.
     */
    gpuType: AttributeGPUType;

    /**
     * This can be used to only update some components of stored vectors (for example, just the component related to color).
     * @defaultValue `{ offset: number = 0; count: number = -1 }`
     */
    updateRange: {
        /**
         * Position at which to start update.
         * @defaultValue `0`
         */
        offset: number;
        /** @defaultValue `-1`, which means don't use update ranges. */
        count: number;
    };

    /**
     * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Indicates how the underlying data in the buffer maps to the values in the GLSL shader code.
     * @see `constructor` above for details.
     * @defaultValue `false`
     */
    normalized: boolean;

    /**
     * Represents the number of items this buffer attribute stores. It is internally computed by dividing the
     * {@link BufferAttribute.array | array}'s length by the {@link BufferAttribute.itemSize | itemSize}. Read-only
     * property.
     */
    readonly count: number;

    /**
     * Flag to indicate that this attribute has changed and should be re-sent to the GPU.
     * Set this to true when you modify the value of the array.
     * @remarks Setting this to true also increments the {@link BufferAttribute.version | version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link BufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isBufferAttribute: true;

    /**
     * A callback function that is executed after the Renderer has transferred the attribute array data to the GPU.
     */
    onUploadCallback: () => void;

    /**
     * Sets the value of the {@link onUploadCallback} property.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGL / BufferGeometry} this is used to free memory after the buffer has been transferred to the GPU.
     * @see {@link onUploadCallback}
     * @param callback function that is executed after the Renderer has transferred the attribute array data to the GPU.
     */
    onUpload(callback: () => void): this;

    /**
     * Set {@link BufferAttribute.usage | usage}
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.usage | usage}
     * @param value Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     */
    setUsage(usage: Usage): this;

    /**
     * @returns a copy of this {@link BufferAttribute}.
     */
    clone(): BufferAttribute;

    /**
     * Copies another {@link BufferAttribute} to this {@link BufferAttribute}.
     * @param bufferAttribute
     */
    copy(source: BufferAttribute): this;

    /**
     * Copy a vector from bufferAttribute[index2] to {@link BufferAttribute.array | array}[index1].
     * @param index1
     * @param bufferAttribute
     * @param index2
     */
    copyAt(index1: number, attribute: BufferAttribute, index2: number): this;

    /**
     * Copy the array given here (which can be a normal array or `TypedArray`) into {@link BufferAttribute.array | array}.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set} for notes on requirements if copying a `TypedArray`.
     */
    copyArray(array: ArrayLike<number>): this;

    /**
     * Applies matrix {@link Matrix3 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyMatrix3(m: Matrix3): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Applies normal matrix {@link Matrix3 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyNormalMatrix(m: Matrix3): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this {@link BufferAttribute}, interpreting the elements as a direction vectors.
     * @param m
     */
    transformDirection(m: Matrix4): this;

    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set}( {@link value}, {@link offset} )
     * on the {@link BufferAttribute.array | array}.
     * @param value {@link Array | Array} or `TypedArray` from which to copy values.
     * @param offset index of the {@link BufferAttribute.array | array} at which to start copying. Expects a `Integer`. Default `0`.
     * @throws `RangeError` When {@link offset} is negative or is too large.
     */
    set(value: ArrayLike<number> | ArrayBufferView, offset?: number): this;

    /**
     * Returns the given component of the vector at the given index.
     */
    getComponent(index: number, component: number): number;

    /**
     * Sets the given component of the vector at the given index.
     */
    setComponent(index: number, component: number, value: number): void;

    /**
     * Returns the x component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getX(index: number): number;

    /**
     * Sets the x component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     */
    setX(index: number, x: number): this;

    /**
     * Returns the y component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getY(index: number): number;

    /**
     * Sets the y component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param y
     */
    setY(index: number, y: number): this;

    /**
     * Returns the z component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getZ(index: number): number;

    /**
     * Sets the z component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param z
     */
    setZ(index: number, z: number): this;

    /**
     * Returns the w component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getW(index: number): number;

    /**
     * Sets the w component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param w
     */
    setW(index: number, z: number): this;

    /**
     * Sets the x and y components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     */
    setXY(index: number, x: number, y: number): this;

    /**
     * Sets the x, y and z components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     * @param z
     */
    setXYZ(index: number, x: number, y: number, z: number): this;

    /**
     * Sets the x, y, z and w components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     * @param z
     * @param w
     */
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;

    /**
     * Convert this object to three.js to the `data.attributes` part of {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     */
    toJSON(): {
        itemSize: number;
        type: string;
        array: number[];
        normalized: boolean;
    };
}

/**
 * **"Interleaved"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer.
 * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved | webgl / buffergeometry / points / interleaved}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js | Source}
 */
declare class InterleavedBuffer {
    /**
     * Create a new instance of {@link InterleavedBuffer}
     * @param array A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
     * @param stride The number of typed-array elements per vertex. Expects a `Integer`
     */
    constructor(array: TypedArray, stride: number);

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
     */
    array: TypedArray;

    /**
     * The number of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} elements per vertex.
     * @remarks Expects a `Integer`
     */
    stride: number;

    /**
     * Defines the intended usage pattern of the data store for optimization purposes.
     * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.setUsage | setUsage}
     * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
     */
    usage: Usage;

    /**
     * Object containing offset and count.
     * @defaultValue `{ offset: number = 0; count: number = -1 }`
     */
    updateRange: {
        /** @defaultValue `0` */
        offset: number;
        /** @defaultValue `-1` */
        count: number;
    };

    /**
     * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Gives the total number of elements in the array.
     * @remarks Expects a `Integer`
     * @defaultValue 0
     */
    count: number;

    /**
     * Flag to indicate that this attribute has changed and should be re-sent to the GPU.
     * Set this to true when you modify the value of the array.
     * @remarks Setting this to true also increments the {@link BufferAttribute.version | version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set}( {@link value}, {@link offset} )
     * on the {@link BufferAttribute.array | array}.
     * @param value The source `TypedArray`.
     * @param offset index of the {@link BufferAttribute.array | array} at which to start copying. Expects a `Integer`. Default `0`.
     * @throws `RangeError` When {@link offset} is negative or is too large.
     */
    set(value: ArrayLike<number>, offset: number): this;

    /**
     * Set {@link BufferAttribute.usage | usage}
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.usage | usage}
     * @param value Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     */
    setUsage(value: Usage): this;

    /**
     * Copies another {@link InterleavedBuffer} to this {@link InterleavedBuffer} instance.
     * @param source
     */
    copy(source: InterleavedBuffer): this;

    /**
     * Copies data from {@link attribute}[{@link index2}] to {@link InterleavedBuffer.array | array}[{@link index1}].
     * @param index1 Expects a `Integer`
     * @param attribute
     * @param index2 Expects a `Integer`
     */
    copyAt(index1: number, attribute: InterleavedBufferAttribute, index2: number): this;

    /**
     * Creates a clone of this {@link InterleavedBuffer}.
     * @param data This object holds shared array buffers required for properly cloning geometries with interleaved attributes.
     */
    clone(data: {}): InterleavedBuffer;

    /**
     * Serializes this {@link InterleavedBuffer}.
     * Converting to {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     * @param data This object holds shared array buffers required for properly serializing geometries with interleaved attributes.
     */
    toJSON(data: {}): {
        uuid: string;
        buffer: string;
        type: string;
        stride: number;
    };
}

/**
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js | Source}
 */
declare class InterleavedBufferAttribute {
    /**
     * Create a new instance of {@link THREE.InterleavedBufferAttribute | InterleavedBufferAttribute}.
     * @param interleavedBuffer
     * @param itemSize
     * @param offset
     * @param normalized Default `false`.
     */
    constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized?: boolean);

    /**
     * Optional name for this attribute instance.
     * @defaultValue `''`
     */
    name: string;

    /**
     * The {@link InterleavedBuffer | InterleavedBuffer} instance passed in the constructor.
     */
    data: InterleavedBuffer;

    /**
     * How many values make up each item.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

    /**
     * The offset in the underlying array buffer where an item starts.
     * @remarks Expects a `Integer`
     */
    offset: number;

    /**
     * @defaultValue `false`
     */
    normalized: boolean;

    /**
     * The value of {@link data | .data}.{@link InterleavedBuffer.count | count}.
     * If the buffer is storing a 3-component item (such as a _position, normal, or color_), then this will count the number of such items stored.
     * @remarks _get-only property_.
     * @remarks Expects a `Integer`
     */
    get count(): number;

    /**
     * The value of {@link InterleavedBufferAttribute.data | data}.{@link InterleavedBuffer.array | array}.
     * @remarks _get-only property_.
     */
    get array(): TypedArray;

    /**
     * Flag to indicate that the {@link data | .data} ({@link InterleavedBuffer}) attribute has changed and should be re-sent to the GPU.
     * @remarks Setting this to have the same result of setting true also increments the {@link InterleavedBuffer.needsUpdate | InterleavedBuffer.needsUpdate} of {@link data | .data}.
     * @remarks Setting this to true also increments the {@link InterleavedBuffer.version | InterleavedBuffer.version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link InterleavedBufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInterleavedBufferAttribute: true;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this InterleavedBufferAttribute.
     * @param m
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Applies normal matrix {@link Matrix3 | m} to every Vector3 element of this InterleavedBufferAttribute.
     * @param m
     */
    applyNormalMatrix(matrix: Matrix): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this InterleavedBufferAttribute, interpreting the elements as a direction vectors.
     * @param m
     */
    transformDirection(matrix: Matrix): this;

    /**
     * Returns the x component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getX(index: number): number;

    /**
     * Sets the x component of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     */
    setX(index: number, x: number): this;

    /**
     * Returns the y component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getY(index: number): number;

    /**
     * Sets the y component of the item at the given index.
     * @param index Expects a `Integer`
     * @param y Expects a `Float`
     */
    setY(index: number, y: number): this;

    /**
     * Returns the z component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getZ(index: number): number;

    /**
     * Sets the z component of the item at the given index.
     * @param index Expects a `Integer`
     * @param z Expects a `Float`
     */
    setZ(index: number, z: number): this;

    /**
     * Returns the w component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getW(index: number): number;

    /**
     * Sets the w component of the item at the given index.
     * @param index Expects a `Integer`
     * @param w Expects a `Float`
     */
    setW(index: number, z: number): this;

    /**
     * Sets the x and y components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    setXY(index: number, x: number, y: number): this;
    /**
     * Sets the x, y and z components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    setXYZ(index: number, x: number, y: number, z: number): this;

    /**
     * Sets the x, y, z and w components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     * @param w Expects a `Float`
     */
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;

    /**
     * Creates a clone of this {@link InterleavedBufferAttribute}.
     * @param data This object holds shared array buffers required for properly cloning geometries with interleaved attributes.
     */
    clone(data?: {}): BufferAttribute;

    /**
     * Serializes this {@link InterleavedBufferAttribute}.
     * Converting to {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     * @param data This object holds shared array buffers required for properly serializing geometries with interleaved attributes.
     */
    toJSON(data?: {}): {
        isInterleavedBufferAttribute: true;
        itemSize: number;
        data: string;
        offset: number;
        normalized: boolean;
    };
}

/**
 * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
 *
 * @example
 * const quaternion = new THREE.Quaternion();
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
 * const vector = new THREE.Vector3( 1, 0, 0 );
 * vector.applyQuaternion( quaternion );
 */
declare class Quaternion {
    /**
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate
     * @param w w coordinate
     */
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default 1
     */
    w: number;
    readonly isQuaternion: true;

    /**
     * Sets values of this quaternion.
     */
    set(x: number, y: number, z: number, w: number): Quaternion;

    /**
     * Clones this quaternion.
     */
    clone(): this;

    /**
     * Copies values of q to this quaternion.
     */
    copy(q: Quaternion): this;

    /**
     * Sets this quaternion from rotation specified by Euler angles.
     */
    setFromEuler(euler: Euler, update?: boolean): Quaternion;

    /**
     * Sets this quaternion from rotation specified by axis and angle.
     * Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm.
     * Axis have to be normalized, angle is in radians.
     */
    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;

    /**
     * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
     */
    setFromRotationMatrix(m: Matrix4): Quaternion;
    setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
    angleTo(q: Quaternion): number;
    rotateTowards(q: Quaternion, step: number): Quaternion;

    identity(): Quaternion;

    /**
     * Inverts this quaternion.
     */
    invert(): Quaternion;

    conjugate(): Quaternion;
    dot(v: Quaternion): number;
    lengthSq(): number;

    /**
     * Computes length of this quaternion.
     */
    length(): number;

    /**
     * Normalizes this quaternion.
     */
    normalize(): Quaternion;

    /**
     * Multiplies this quaternion by b.
     */
    multiply(q: Quaternion): Quaternion;
    premultiply(q: Quaternion): Quaternion;

    /**
     * Sets this quaternion to a x b
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
     */
    multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;

    slerp(qb: Quaternion, t: number): Quaternion;
    slerpQuaternions(qa: Quaternion, qb: Quaternion, t: number): Quaternion;
    equals(v: Quaternion): boolean;

    /**
     * Sets this quaternion's x, y, z and w value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z, w], or copies x, y, z and w into the provided array.
     * @param array (optional) array to store the quaternion to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Copies x, y, z and w into the provided array-like.
     * @param array array-like to store the quaternion to.
     * @param offset (optional) optional offset into the array.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * This method defines the serialization result of Quaternion.
     * @return The numerical elements of this quaternion in an array of format [x, y, z, w].
     */
    toJSON(): [number, number, number, number];

    /**
     * Sets x, y, z, w properties of this quaternion from the attribute.
     * @param attribute the source attribute.
     * @param index index in the attribute.
     */
    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): Quaternion;

    _onChange(callback: () => void): Quaternion;
    _onChangeCallback: () => void;

    static slerpFlat(
        dst: number[],
        dstOffset: number,
        src0: number[],
        srcOffset: number,
        src1: number[],
        stcOffset1: number,
        t: number,
    ): void;

    static multiplyQuaternionsFlat(
        dst: number[],
        dstOffset: number,
        src0: number[],
        srcOffset: number,
        src1: number[],
        stcOffset1: number,
    ): number[];

    /**
     * @deprecated Use qm.slerpQuaternions( qa, qb, t ) instead..
     */
    static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): number;

    /**
     * @deprecated Use {@link Vector#applyQuaternion vector.applyQuaternion( quaternion )} instead.
     */
    multiplyVector3(v: any): any;

    random(): Quaternion;

    [Symbol.iterator](): Generator<number, void>;
}

type Matrix4Tuple = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
];

/**
 * A 4x4 Matrix.
 *
 * @example
 * // Simple rig for rotating around 3 axes
 * const m = new THREE.Matrix4();
 * const m1 = new THREE.Matrix4();
 * const m2 = new THREE.Matrix4();
 * const m3 = new THREE.Matrix4();
 * const alpha = 0;
 * const beta = Math.PI;
 * const gamma = Math.PI/2;
 * m1.makeRotationX( alpha );
 * m2.makeRotationY( beta );
 * m3.makeRotationZ( gamma );
 * m.multiplyMatrices( m1, m2 );
 * m.multiply( m3 );
 */
declare class Matrix4 implements Matrix {
    /**
     * Creates an identity matrix.
     */
    constructor();
    /**
     * Creates a 4x4 matrix with the given arguments in row-major order.
     */
    constructor(
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
    );

    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
     */
    elements: number[];

    /**
     * Sets all fields of this matrix.
     */
    set(
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
    ): Matrix4;

    /**
     * Resets this matrix to identity.
     */
    identity(): Matrix4;
    clone(): Matrix4;
    copy(m: Matrix4): this;
    copyPosition(m: Matrix4): Matrix4;
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
    makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;

    /**
     * Copies the rotation component of the supplied matrix m into this matrix rotation component.
     */
    extractRotation(m: Matrix4): Matrix4;
    makeRotationFromEuler(euler: Euler): Matrix4;
    makeRotationFromQuaternion(q: Quaternion): Matrix4;
    /**
     * Constructs a rotation matrix, looking from eye towards center with defined up vector.
     */
    lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;

    /**
     * Multiplies this matrix by m.
     */
    multiply(m: Matrix4): Matrix4;

    premultiply(m: Matrix4): Matrix4;

    /**
     * Sets this matrix to a x b.
     */
    multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;

    /**
     * Sets this matrix to a x b and stores the result into the flat array r.
     * r can be either a regular Array or a TypedArray.
     *
     * @deprecated This method has been removed completely.
     */
    multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;

    /**
     * Multiplies this matrix by s.
     */
    multiplyScalar(s: number): Matrix4;

    /**
     * Computes determinant of this matrix.
     * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
     */
    determinant(): number;

    /**
     * Transposes this matrix.
     */
    transpose(): Matrix4;

    /**
     * Sets the position component for this matrix from vector v.
     */
    setPosition(v: Vector3 | number, y?: number, z?: number): Matrix4;

    /**
     * Inverts this matrix.
     */
    invert(): Matrix4;

    /**
     * Multiplies the columns of this matrix by vector v.
     */
    scale(v: Vector3): Matrix4;

    getMaxScaleOnAxis(): number;
    /**
     * Sets this matrix as translation transform.
     */
    makeTranslation(v: Vector3): this;
    makeTranslation(x: number, y: number, z: number): this;

    /**
     * Sets this matrix as rotation transform around x axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationX(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around y axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationY(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around z axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationZ(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around axis by angle radians.
     * Based on http://www.gamedev.net/reference/articles/article1199.asp.
     *
     * @param axis Rotation axis.
     * @param theta Rotation angle in radians.
     */
    makeRotationAxis(axis: Vector3, angle: number): Matrix4;

    /**
     * Sets this matrix as scale transform.
     */
    makeScale(x: number, y: number, z: number): Matrix4;

    /**
     * Sets this matrix as shear transform.
     */
    makeShear(xy: number, xz: number, yx: number, yz: number, zx: number, zy: number): Matrix4;

    /**
     * Sets this matrix to the transformation composed of translation, rotation and scale.
     */
    compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

    /**
     * Decomposes this matrix into it's position, quaternion and scale components.
     */
    decompose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

    /**
     * Creates a perspective projection matrix.
     */
    makePerspective(
        left: number,
        right: number,
        top: number,
        bottom: number,
        near: number,
        far: number,
        coordinateSystem?: CoordinateSystem,
    ): Matrix4;

    /**
     * Creates an orthographic projection matrix.
     */
    makeOrthographic(
        left: number,
        right: number,
        top: number,
        bottom: number,
        near: number,
        far: number,
        coordinateSystem?: CoordinateSystem,
    ): Matrix4;
    equals(matrix: Matrix4): boolean;

    /**
     * Sets the values of this matrix from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): Matrix4;

    /**
     * Returns an array with the values of this matrix, or copies them into the provided array.
     * @param array (optional) array to store the matrix to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Matrix4Tuple, offset?: 0): Matrix4Tuple;

    /**
     * Copies he values of this matrix into the provided array-like.
     * @param array array-like to store the matrix to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array?: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Set the upper 3x3 elements of this matrix to the values of the Matrix3 m.
     */
    setFromMatrix3(m: Matrix3): Matrix4;

    /**
     * @deprecated Use {@link Matrix4#copyPosition .copyPosition()} instead.
     */
    extractPosition(m: Matrix4): Matrix4;

    /**
     * @deprecated Use {@link Matrix4#makeRotationFromQuaternion .makeRotationFromQuaternion()} instead.
     */
    setRotationFromQuaternion(q: Quaternion): Matrix4;

    /**
     * @deprecated Use {@link Vector3#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    multiplyVector3(v: any): any;

    /**
     * @deprecated Use {@link Vector4#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    multiplyVector4(v: any): any;

    /**
     * @deprecated This method has been removed completely.
     */
    multiplyVector3Array(array: number[]): number[];

    /**
     * @deprecated Use {@link Vector3#transformDirection Vector3.transformDirection( matrix )} instead.
     */
    rotateAxis(v: any): void;

    /**
     * @deprecated Use {@link Vector3#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    crossVector(v: any): void;

    /**
     * @deprecated Use {@link Matrix4#toArray .toArray()} instead.
     */
    flattenToArrayOffset(array: number[], offset: number): number[];

    /**
     * @deprecated Use {@link Matrix4#invert .invert()} instead.
     */
    getInverse(matrix: Matrix): Matrix;
}

type EulerOrder = 'XYZ' | 'YXZ' | 'ZXY' | 'ZYX' | 'YZX' | 'XZY';

declare class Euler {
    constructor(x?: number, y?: number, z?: number, order?: EulerOrder);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default THREE.Euler.DEFAULT_ORDER
     */
    order: EulerOrder;
    readonly isEuler: true;

    _onChangeCallback: () => void;

    set(x: number, y: number, z: number, order?: EulerOrder): Euler;
    clone(): this;
    copy(euler: Euler): this;
    setFromRotationMatrix(m: Matrix4, order?: EulerOrder, update?: boolean): Euler;
    setFromQuaternion(q: Quaternion, order?: EulerOrder, update?: boolean): Euler;
    setFromVector3(v: Vector3, order?: EulerOrder): Euler;
    reorder(newOrder: EulerOrder): Euler;
    equals(euler: Euler): boolean;
    fromArray(xyzo: [number, number, number, EulerOrder?, ...any[]]): Euler;
    toArray(array?: Array<number | string | undefined>, offset?: number): Array<number | string | undefined>;
    _onChange(callback: () => void): this;

    static DEFAULT_ORDER: 'XYZ';

    [Symbol.iterator](): Generator<string | number, void>;
}

/**
 * A {@link THREE.Layers | Layers} object assigns an {@link THREE.Object3D | Object3D} to 1 or more of 32 layers numbered `0` to `31` - internally the
 * layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) | bit mask}, and
 * by default all Object3Ds are a member of layer `0`.
 * @remarks
 * This can be used to control visibility - an object must share a layer with a {@link Camera | camera} to be visible when that camera's view is rendered.
 * @remarks
 * All classes that inherit from {@link THREE.Object3D | Object3D} have an {@link THREE.Object3D.layers | Object3D.layers} property which is an instance of this class.
 * @see Example: {@link https://threejs.org/examples/#webgl_layers | WebGL / layers}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_layers | Webxr / vr / layers}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Layers | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Layers.js | Source}
 */
declare class Layers {
    /**
     * Create a new Layers object, with membership initially set to layer 0.
     */
    constructor();

    /**
     * A bit mask storing which of the 32 layers this layers object is currently a member of.
     * @defaultValue `1 | 0`
     * @remarks Expects a `Integer`
     */
    mask: number;

    /**
     * Set membership to `layer`, and remove membership all other layers.
     * @param layer An integer from 0 to 31.
     */
    set(layer: number): void;

    /**
     * Add membership of this `layer`.
     * @param layer An integer from 0 to 31.
     */
    enable(layer: number): void;

    /**
     * Add membership to all layers.
     */
    enableAll(): void;

    /**
     * Toggle membership of `layer`.
     * @param layer An integer from 0 to 31.
     */
    toggle(layer: number): void;

    /**
     * Remove membership of this `layer`.
     * @param layer An integer from 0 to 31.
     */
    disable(layer: number): void;

    /**
     * Remove membership from all layers.
     */
    disableAll(): void;

    /**
     * Returns true if this and the passed `layers` object have at least one layer in common.
     * @param layers A Layers object
     */
    test(layers: Layers): boolean;

    /**
     * Returns true if the given layer is enabled.
     * @param layer An integer from 0 to 31.
     */
    isEnabled(layer: number): boolean;
}

declare const _colorKeywords: {
    aliceblue: 0xf0f8ff;
    antiquewhite: 0xfaebd7;
    aqua: 0x00ffff;
    aquamarine: 0x7fffd4;
    azure: 0xf0ffff;
    beige: 0xf5f5dc;
    bisque: 0xffe4c4;
    black: 0x000000;
    blanchedalmond: 0xffebcd;
    blue: 0x0000ff;
    blueviolet: 0x8a2be2;
    brown: 0xa52a2a;
    burlywood: 0xdeb887;
    cadetblue: 0x5f9ea0;
    chartreuse: 0x7fff00;
    chocolate: 0xd2691e;
    coral: 0xff7f50;
    cornflowerblue: 0x6495ed;
    cornsilk: 0xfff8dc;
    crimson: 0xdc143c;
    cyan: 0x00ffff;
    darkblue: 0x00008b;
    darkcyan: 0x008b8b;
    darkgoldenrod: 0xb8860b;
    darkgray: 0xa9a9a9;
    darkgreen: 0x006400;
    darkgrey: 0xa9a9a9;
    darkkhaki: 0xbdb76b;
    darkmagenta: 0x8b008b;
    darkolivegreen: 0x556b2f;
    darkorange: 0xff8c00;
    darkorchid: 0x9932cc;
    darkred: 0x8b0000;
    darksalmon: 0xe9967a;
    darkseagreen: 0x8fbc8f;
    darkslateblue: 0x483d8b;
    darkslategray: 0x2f4f4f;
    darkslategrey: 0x2f4f4f;
    darkturquoise: 0x00ced1;
    darkviolet: 0x9400d3;
    deeppink: 0xff1493;
    deepskyblue: 0x00bfff;
    dimgray: 0x696969;
    dimgrey: 0x696969;
    dodgerblue: 0x1e90ff;
    firebrick: 0xb22222;
    floralwhite: 0xfffaf0;
    forestgreen: 0x228b22;
    fuchsia: 0xff00ff;
    gainsboro: 0xdcdcdc;
    ghostwhite: 0xf8f8ff;
    gold: 0xffd700;
    goldenrod: 0xdaa520;
    gray: 0x808080;
    green: 0x008000;
    greenyellow: 0xadff2f;
    grey: 0x808080;
    honeydew: 0xf0fff0;
    hotpink: 0xff69b4;
    indianred: 0xcd5c5c;
    indigo: 0x4b0082;
    ivory: 0xfffff0;
    khaki: 0xf0e68c;
    lavender: 0xe6e6fa;
    lavenderblush: 0xfff0f5;
    lawngreen: 0x7cfc00;
    lemonchiffon: 0xfffacd;
    lightblue: 0xadd8e6;
    lightcoral: 0xf08080;
    lightcyan: 0xe0ffff;
    lightgoldenrodyellow: 0xfafad2;
    lightgray: 0xd3d3d3;
    lightgreen: 0x90ee90;
    lightgrey: 0xd3d3d3;
    lightpink: 0xffb6c1;
    lightsalmon: 0xffa07a;
    lightseagreen: 0x20b2aa;
    lightskyblue: 0x87cefa;
    lightslategray: 0x778899;
    lightslategrey: 0x778899;
    lightsteelblue: 0xb0c4de;
    lightyellow: 0xffffe0;
    lime: 0x00ff00;
    limegreen: 0x32cd32;
    linen: 0xfaf0e6;
    magenta: 0xff00ff;
    maroon: 0x800000;
    mediumaquamarine: 0x66cdaa;
    mediumblue: 0x0000cd;
    mediumorchid: 0xba55d3;
    mediumpurple: 0x9370db;
    mediumseagreen: 0x3cb371;
    mediumslateblue: 0x7b68ee;
    mediumspringgreen: 0x00fa9a;
    mediumturquoise: 0x48d1cc;
    mediumvioletred: 0xc71585;
    midnightblue: 0x191970;
    mintcream: 0xf5fffa;
    mistyrose: 0xffe4e1;
    moccasin: 0xffe4b5;
    navajowhite: 0xffdead;
    navy: 0x000080;
    oldlace: 0xfdf5e6;
    olive: 0x808000;
    olivedrab: 0x6b8e23;
    orange: 0xffa500;
    orangered: 0xff4500;
    orchid: 0xda70d6;
    palegoldenrod: 0xeee8aa;
    palegreen: 0x98fb98;
    paleturquoise: 0xafeeee;
    palevioletred: 0xdb7093;
    papayawhip: 0xffefd5;
    peachpuff: 0xffdab9;
    peru: 0xcd853f;
    pink: 0xffc0cb;
    plum: 0xdda0dd;
    powderblue: 0xb0e0e6;
    purple: 0x800080;
    rebeccapurple: 0x663399;
    red: 0xff0000;
    rosybrown: 0xbc8f8f;
    royalblue: 0x4169e1;
    saddlebrown: 0x8b4513;
    salmon: 0xfa8072;
    sandybrown: 0xf4a460;
    seagreen: 0x2e8b57;
    seashell: 0xfff5ee;
    sienna: 0xa0522d;
    silver: 0xc0c0c0;
    skyblue: 0x87ceeb;
    slateblue: 0x6a5acd;
    slategray: 0x708090;
    slategrey: 0x708090;
    snow: 0xfffafa;
    springgreen: 0x00ff7f;
    steelblue: 0x4682b4;
    tan: 0xd2b48c;
    teal: 0x008080;
    thistle: 0xd8bfd8;
    tomato: 0xff6347;
    turquoise: 0x40e0d0;
    violet: 0xee82ee;
    wheat: 0xf5deb3;
    white: 0xffffff;
    whitesmoke: 0xf5f5f5;
    yellow: 0xffff00;
    yellowgreen: 0x9acd32;
};

type ColorRepresentation = Color | string | number;

interface HSL {
    h: number;
    s: number;
    l: number;
}

interface RGB {
    r: number;
    g: number;
    b: number;
}

/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 );
 */
declare class Color {
    constructor(color?: ColorRepresentation);
    constructor(r: number, g: number, b: number);

    readonly isColor: true;

    /**
     * Red channel value between 0 and 1. Default is 1.
     * @default 1
     */
    r: number;

    /**
     * Green channel value between 0 and 1. Default is 1.
     * @default 1
     */
    g: number;

    /**
     * Blue channel value between 0 and 1. Default is 1.
     * @default 1
     */
    b: number;

    set(color: ColorRepresentation): this;
    set(r: number, g: number, b: number): this;

    /**
     * Sets this color's {@link r}, {@link g} and {@link b} components from the x, y, and z components of the specified
     * {@link Vector3 | vector}.
     */
    setFromVector3(vector: Vector3): this;

    setScalar(scalar: number): Color;
    setHex(hex: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from RGB values.
     * @param r Red channel value between 0 and 1.
     * @param g Green channel value between 0 and 1.
     * @param b Blue channel value between 0 and 1.
     */
    setRGB(r: number, g: number, b: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from HSL values.
     * Based on MochiKit implementation by Bob Ippolito.
     *
     * @param h Hue channel value between 0 and 1.
     * @param s Saturation value channel between 0 and 1.
     * @param l Value channel value between 0 and 1.
     */
    setHSL(h: number, s: number, l: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from a CSS context style string.
     * @param contextStyle Color in CSS context style format.
     */
    setStyle(style: string, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from a color name.
     * Faster than {@link Color#setStyle .setStyle()} method if you don't need the other CSS-style formats.
     * @param style Color name in X11 format.
     */
    setColorName(style: string, colorSpace?: ColorSpace): Color;

    /**
     * Clones this color.
     */
    clone(): this;

    /**
     * Copies given color.
     * @param color Color to copy.
     */
    copy(color: Color): this;

    /**
     * Copies given color making conversion from sRGB to linear space.
     * @param color Color to copy.
     */
    copySRGBToLinear(color: Color): Color;

    /**
     * Copies given color making conversion from linear to sRGB space.
     * @param color Color to copy.
     */
    copyLinearToSRGB(color: Color): Color;

    /**
     * Converts this color from sRGB to linear space.
     */
    convertSRGBToLinear(): Color;

    /**
     * Converts this color from linear to sRGB space.
     */
    convertLinearToSRGB(): Color;

    /**
     * Returns the hexadecimal value of this color.
     */
    getHex(colorSpace?: ColorSpace): number;

    /**
     * Returns the string formated hexadecimal value of this color.
     */
    getHexString(colorSpace?: ColorSpace): string;

    getHSL(target: HSL, colorSpace?: ColorSpace): HSL;

    getRGB(target: RGB, colorSpace?: ColorSpace): RGB;

    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     */
    getStyle(colorSpace?: ColorSpace): string;

    offsetHSL(h: number, s: number, l: number): this;

    add(color: Color): this;
    addColors(color1: Color, color2: Color): this;
    addScalar(s: number): this;

    /**
     * Applies the transform {@link Matrix3 | m} to this color's RGB components.
     */
    applyMatrix3(m: Matrix3): this;

    sub(color: Color): this;
    multiply(color: Color): this;
    multiplyScalar(s: number): this;
    lerp(color: Color, alpha: number): this;
    lerpColors(color1: Color, color2: Color, alpha: number): this;
    lerpHSL(color: Color, alpha: number): this;
    equals(color: Color): boolean;

    /**
     * Sets this color's red, green and blue value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [red, green, blue], or copies red, green and blue into the provided array.
     * @param array (optional) array to store the color to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Copies red, green and blue into the provided array-like.
     * @param array array-like to store the color to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(xyz: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * This method defines the serialization result of Color.
     * @return The color as a hexadecimal value.
     */
    toJSON(): number;

    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): this;

    [Symbol.iterator](): Generator<number, void>;

    /**
     * List of X11 color names.
     */
    static NAMES: typeof _colorKeywords;
}

interface FogBase {
    /**
     * Optional name of the `Fog` object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    name: string;

    /**
     * Fog color.
     * @remarks If set to black, far away objects will be rendered black.
     */
    color: Color;

    /**
     * Returns a new Fog instance with the same parameters as this one.
     */
    clone(): FogBase;

    /**
     * Return Fog data in JSON format.
     */
    toJSON(): any;
}

type Vector4Tuple = [number, number, number, number];

/**
 * 4D vector.
 *
 * ( class Vector4 implements Vector<Vector4> )
 */
declare class Vector4 implements Vector {
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default 0
     */
    w: number;

    width: number;
    height: number;
    readonly isVector4: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number, z: number, w: number): this;

    /**
     * Sets all values of this vector.
     */
    setScalar(scalar: number): this;

    /**
     * Sets X component of this vector.
     */
    setX(x: number): this;

    /**
     * Sets Y component of this vector.
     */
    setY(y: number): this;

    /**
     * Sets Z component of this vector.
     */
    setZ(z: number): this;

    /**
     * Sets w component of this vector.
     */
    setW(w: number): this;

    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    /**
     * Clones this vector.
     */
    clone(): this;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector4): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector4): this;

    addScalar(scalar: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector4, b: Vector4): this;

    addScaledVector(v: Vector4, s: number): this;
    /**
     * Subtracts v from this vector.
     */
    sub(v: Vector4): this;

    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector4, b: Vector4): this;

    multiply(v: Vector4): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(s: number): this;

    applyMatrix4(m: Matrix4): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
     * @param q is assumed to be normalized
     */
    setAxisAngleFromQuaternion(q: Quaternion): this;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
     * @param m assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
     */
    setAxisAngleFromRotationMatrix(m: Matrix4): this;

    min(v: Vector4): this;
    max(v: Vector4): this;
    clamp(min: Vector4, max: Vector4): this;
    clampScalar(min: number, max: number): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector4): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;
    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(length: number): this;

    /**
     * Linearly interpolate between this vector and v with alpha factor.
     */
    lerp(v: Vector4, alpha: number): this;

    lerpVectors(v1: Vector4, v2: Vector4, alpha: number): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector4): boolean;

    /**
     * Sets this vector's x, y, z and w value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z, w], or copies x, y, z and w into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector4Tuple, offset?: 0): Vector4Tuple;

    /**
     * Copies x, y, z and w into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * Sets this vector's x, y, z and w from Math.random
     */
    random(): this;

    /**
     * Iterating through a Vector4 instance will yield its components (x, y, z, w) in the corresponding order.
     */
    [Symbol.iterator](): Iterator<number>;
}

declare class Triangle {
    constructor(a?: Vector3, b?: Vector3, c?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    a: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    b: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    c: Vector3;

    set(a: Vector3, b: Vector3, c: Vector3): Triangle;
    setFromPointsAndIndices(points: Vector3[], i0: number, i1: number, i2: number): this;
    setFromAttributeAndIndices(
        attribute: BufferAttribute | InterleavedBufferAttribute,
        i0: number,
        i1: number,
        i2: number,
    ): this;
    clone(): this;
    copy(triangle: Triangle): this;
    getArea(): number;
    getMidpoint(target: Vector3): Vector3;
    getNormal(target: Vector3): Vector3;
    getPlane(target: Plane): Plane;
    getBarycoord(point: Vector3, target: Vector3): Vector3;
    /**
     * @deprecated Triangle.getUV() has been renamed to Triangle.getInterpolation().
     */
    getUV(point: Vector3, uv1: Vector2, uv2: Vector2, uv3: Vector2, target: Vector2): Vector2;
    getInterpolation(point: Vector3, v1: Vector2, v2: Vector2, v3: Vector2, target: Vector2): Vector2;
    getInterpolation(point: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, target: Vector3): Vector3;
    getInterpolation(point: Vector3, v1: Vector4, v2: Vector4, v3: Vector4, target: Vector4): Vector4;
    containsPoint(point: Vector3): boolean;
    intersectsBox(box: Box3): boolean;
    isFrontFacing(direction: Vector3): boolean;
    closestPointToPoint(point: Vector3, target: Vector3): Vector3;
    equals(triangle: Triangle): boolean;

    static getNormal(a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
    static getBarycoord(point: Vector3, a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
    static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
    /**
     * @deprecated THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().
     */
    static getUV(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        uv1: Vector2,
        uv2: Vector2,
        uv3: Vector2,
        target: Vector2,
    ): Vector2;
    static getInterpolation(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        v1: Vector2,
        v2: Vector2,
        v3: Vector2,
        target: Vector2,
    ): Vector2;
    static getInterpolation(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        v1: Vector3,
        v2: Vector3,
        v3: Vector3,
        target: Vector3,
    ): Vector3;
    static getInterpolation(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        v1: Vector4,
        v2: Vector4,
        v3: Vector4,
        target: Vector4,
    ): Vector4;
    static isFrontFacing(a: Vector3, b: Vector3, c: Vector3, direction: Vector3): boolean;
}

declare class Box3 {
    constructor(min?: Vector3, max?: Vector3);

    /**
     * @default new THREE.Vector3( + Infinity, + Infinity, + Infinity )
     */
    min: Vector3;

    /**
     * @default new THREE.Vector3( - Infinity, - Infinity, - Infinity )
     */
    max: Vector3;
    readonly isBox3: true;

    set(min: Vector3, max: Vector3): this;
    setFromArray(array: ArrayLike<number>): this;
    setFromBufferAttribute(bufferAttribute: BufferAttribute): this;
    setFromPoints(points: Vector3[]): this;
    setFromCenterAndSize(center: Vector3, size: Vector3): this;
    setFromObject(object: Object3D, precise?: boolean): this;
    clone(): this;
    copy(box: Box3): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    getCenter(target: Vector3): Vector3;
    getSize(target: Vector3): Vector3;
    expandByPoint(point: Vector3): this;
    expandByVector(vector: Vector3): this;
    expandByScalar(scalar: number): this;
    expandByObject(object: Object3D, precise?: boolean): this;
    containsPoint(point: Vector3): boolean;
    containsBox(box: Box3): boolean;
    getParameter(point: Vector3, target: Vector3): Vector3;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsPlane(plane: Plane): boolean;
    intersectsTriangle(triangle: Triangle): boolean;
    clampPoint(point: Vector3, target: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    getBoundingSphere(target: Sphere): Sphere;
    intersect(box: Box3): this;
    union(box: Box3): this;
    applyMatrix4(matrix: Matrix4): this;
    translate(offset: Vector3): this;
    equals(box: Box3): boolean;
    /**
     * @deprecated Use {@link Box3#isEmpty .isEmpty()} instead.
     */
    empty(): any;
    /**
     * @deprecated Use {@link Box3#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;
    /**
     * @deprecated Use {@link Box3#intersectsSphere .intersectsSphere()} instead.
     */
    isIntersectionSphere(s: any): any;
}

declare class Sphere {
    constructor(center?: Vector3, radius?: number);

    /**
     * @default new Vector3()
     */
    center: Vector3;

    /**
     * @default 1
     */
    radius: number;

    set(center: Vector3, radius: number): Sphere;
    setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
    clone(): this;
    copy(sphere: Sphere): this;
    expandByPoint(point: Vector3): this;
    isEmpty(): boolean;
    makeEmpty(): this;
    containsPoint(point: Vector3): boolean;
    distanceToPoint(point: Vector3): number;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsPlane(plane: Plane): boolean;
    clampPoint(point: Vector3, target: Vector3): Vector3;
    getBoundingBox(target: Box3): Box3;
    applyMatrix4(matrix: Matrix4): Sphere;
    translate(offset: Vector3): Sphere;
    equals(sphere: Sphere): boolean;
    union(sphere: Sphere): this;

    /**
     * @deprecated Use {@link Sphere#isEmpty .isEmpty()} instead.
     */
    empty(): any;
}

declare class Line3 {
    constructor(start?: Vector3, end?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    start: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    end: Vector3;

    set(start?: Vector3, end?: Vector3): Line3;
    clone(): this;
    copy(line: Line3): this;
    getCenter(target: Vector3): Vector3;
    delta(target: Vector3): Vector3;
    distanceSq(): number;
    distance(): number;
    at(t: number, target: Vector3): Vector3;
    closestPointToPointParameter(point: Vector3, clampToLine?: boolean): number;
    closestPointToPoint(point: Vector3, clampToLine: boolean, target: Vector3): Vector3;
    applyMatrix4(matrix: Matrix4): Line3;
    equals(line: Line3): boolean;
}

declare class Plane {
    constructor(normal?: Vector3, constant?: number);

    /**
     * @default new THREE.Vector3( 1, 0, 0 )
     */
    normal: Vector3;

    /**
     * @default 0
     */
    constant: number;

    readonly isPlane: true;

    set(normal: Vector3, constant: number): Plane;
    setComponents(x: number, y: number, z: number, w: number): Plane;
    setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
    setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
    clone(): this;
    copy(plane: Plane): this;
    normalize(): Plane;
    negate(): Plane;
    distanceToPoint(point: Vector3): number;
    distanceToSphere(sphere: Sphere): number;
    projectPoint(point: Vector3, target: Vector3): Vector3;
    intersectLine(line: Line3, target: Vector3): Vector3 | null;
    intersectsLine(line: Line3): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    coplanarPoint(target: Vector3): Vector3;
    applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
    translate(offset: Vector3): Plane;
    equals(plane: Plane): boolean;

    /**
     * @deprecated Use {@link Plane#intersectsLine .intersectsLine()} instead.
     */
    isIntersectionLine(l: any): any;
}

/**
 * The minimal basic Event that can be dispatched by a {@link EventDispatcher<>}.
 */
interface BaseEvent<TEventType extends string = string> {
    readonly type: TEventType;
}

/**
 * The minimal expected contract of a fired Event that was dispatched by a {@link EventDispatcher<>}.
 */
interface Event<TEventType extends string = string, TTarget = unknown> {
    readonly type: TEventType;
    readonly target: TTarget;
}

type EventListener<TEventData, TEventType extends string, TTarget> = (
    event: TEventData & Event<TEventType, TTarget>,
) => void;

/**
 * JavaScript events for custom objects
 * @example
 * ```typescript
 * // Adding events to a custom object
 * class Car extends EventDispatcher {
 *   start() {
 *     this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
 *   }
 * };
 * // Using events with the custom object
 * const car = new Car();
 * car.addEventListener( 'start', ( event ) => {
 *   alert( event.message );
 * } );
 * car.start();
 * ```
 * @see {@link https://github.com/mrdoob/eventdispatcher.js | mrdoob EventDispatcher on GitHub}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/EventDispatcher | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js | Source}
 */
declare class EventDispatcher<TEventMap extends {} = {}> {
    /**
     * Creates {@link THREE.EventDispatcher | EventDispatcher} object.
     */
    constructor();

    /**
     * Adds a listener to an event type.
     * @param type The type of event to listen to.
     * @param listener The function that gets called when the event is fired.
     */
    addEventListener<T extends Extract<keyof TEventMap, string>>(
        type: T,
        listener: EventListener<TEventMap[T], T, this>,
    ): void;
    addEventListener<T extends string>(type: T, listener: EventListener<{}, T, this>): void;

    /**
     * Checks if listener is added to an event type.
     * @param type The type of event to listen to.
     * @param listener The function that gets called when the event is fired.
     */
    hasEventListener<T extends Extract<keyof TEventMap, string>>(
        type: T,
        listener: EventListener<TEventMap[T], T, this>,
    ): boolean;
    hasEventListener<T extends string>(type: T, listener: EventListener<{}, T, this>): boolean;

    /**
     * Removes a listener from an event type.
     * @param type The type of the listener that gets removed.
     * @param listener The listener function that gets removed.
     */
    removeEventListener<T extends Extract<keyof TEventMap, string>>(
        type: T,
        listener: EventListener<TEventMap[T], T, this>,
    ): void;
    removeEventListener<T extends string>(type: T, listener: EventListener<{}, T, this>): void;

    /**
     * Fire an event type.
     * @param event The event that gets fired.
     */
    dispatchEvent<T extends Extract<keyof TEventMap, string>>(event: BaseEvent<T> & TEventMap[T]): void;
}

// tslint:disable-next-line:interface-name
interface IUniform<TValue = any> {
    value: TValue;
}

interface Shader {
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;
}

interface MaterialParameters {
    alphaHash?: boolean | undefined;
    alphaTest?: number | undefined;
    alphaToCoverage?: boolean | undefined;
    blendDst?: BlendingDstFactor | undefined;
    blendDstAlpha?: number | undefined;
    blendEquation?: BlendingEquation | undefined;
    blendEquationAlpha?: number | undefined;
    blending?: Blending | undefined;
    blendSrc?: BlendingSrcFactor | BlendingDstFactor | undefined;
    blendSrcAlpha?: number | undefined;
    clipIntersection?: boolean | undefined;
    clippingPlanes?: Plane[] | undefined;
    clipShadows?: boolean | undefined;
    colorWrite?: boolean | undefined;
    defines?: any;
    depthFunc?: DepthModes | undefined;
    depthTest?: boolean | undefined;
    depthWrite?: boolean | undefined;
    name?: string | undefined;
    opacity?: number | undefined;
    polygonOffset?: boolean | undefined;
    polygonOffsetFactor?: number | undefined;
    polygonOffsetUnits?: number | undefined;
    precision?: 'highp' | 'mediump' | 'lowp' | null | undefined;
    premultipliedAlpha?: boolean | undefined;
    forceSinglePass?: boolean | undefined;
    dithering?: boolean | undefined;
    side?: Side | undefined;
    shadowSide?: Side | undefined;
    toneMapped?: boolean | undefined;
    transparent?: boolean | undefined;
    vertexColors?: boolean | undefined;
    visible?: boolean | undefined;
    format?: PixelFormat | undefined;
    stencilWrite?: boolean | undefined;
    stencilFunc?: StencilFunc | undefined;
    stencilRef?: number | undefined;
    stencilWriteMask?: number | undefined;
    stencilFuncMask?: number | undefined;
    stencilFail?: StencilOp | undefined;
    stencilZFail?: StencilOp | undefined;
    stencilZPass?: StencilOp | undefined;
    userData?: any;
}

/**
 * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
 */
declare class Material extends EventDispatcher<{ dispose: {} }> {
    constructor();

    alphaHash: boolean;

    /**
     * Sets the alpha value to be used when running an alpha test. Default is 0.
     * @default 0
     */
    alphaTest: number;

    /**
     * Enables alpha to coverage. Can only be used with MSAA-enabled rendering contexts.
     * @default false
     */
    alphaToCoverage: boolean;

    /**
     * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
     * @default THREE.OneMinusSrcAlphaFactor
     */
    blendDst: BlendingDstFactor;

    /**
     * The tranparency of the .blendDst. Default is null.
     * @default null
     */
    blendDstAlpha: number | null;

    /**
     * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
     * @default THREE.AddEquation
     */
    blendEquation: BlendingEquation;

    /**
     * The tranparency of the .blendEquation. Default is null.
     * @default null
     */
    blendEquationAlpha: number | null;

    /**
     * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
     * @default THREE.NormalBlending
     */
    blending: Blending;

    /**
     * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
     * @default THREE.SrcAlphaFactor
     */
    blendSrc: BlendingSrcFactor | BlendingDstFactor;

    /**
     * The tranparency of the .blendSrc. Default is null.
     * @default null
     */
    blendSrcAlpha: number | null;

    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
     * @default false
     */
    clipIntersection: boolean;

    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space.
     * These planes apply to the objects this material is attached to.
     * Points in space whose signed distance to the plane is negative are clipped (not rendered).
     * See the WebGL / clipping /intersection example. Default is null.
     * @default null
     */
    clippingPlanes: Plane[];

    /**
     * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
     * @default false
     */
    clipShadows: boolean;

    /**
     * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
     * @default true
     */
    colorWrite: boolean;

    /**
     * Custom defines to be injected into the shader. These are passed in form of an object literal, with key/value pairs. { MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }.
     * The pairs are defined in both vertex and fragment shaders. Default is undefined.
     * @default undefined
     */
    defines: undefined | { [key: string]: any };

    /**
     * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
     * @default THREE.LessEqualDepth
     */
    depthFunc: DepthModes;

    /**
     * Whether to have depth test enabled when rendering this material. Default is true.
     * @default true
     */
    depthTest: boolean;

    /**
     * Whether rendering this material has any effect on the depth buffer. Default is true.
     * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
     * @default true
     */
    depthWrite: boolean;

    /**
     * Unique number of this material instance.
     */
    id: number;

    /**
     * Whether rendering this material has any effect on the stencil buffer. Default is *false*.
     * @default false
     */
    stencilWrite: boolean;

    /**
     * The stencil comparison function to use. Default is {@link AlwaysStencilFunc}. See stencil operation constants for all possible values.
     * @default THREE.AlwaysStencilFunc
     */
    stencilFunc: StencilFunc;

    /**
     * The value to use when performing stencil comparisons or stencil operations. Default is *0*.
     * @default 0
     */
    stencilRef: number;

    /**
     * The bit mask to use when writing to the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilWriteMask: number;

    /**
     * The bit mask to use when comparing against the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilFuncMask: number;

    /**
     * Which stencil operation to perform when the comparison function returns false. Default is {@link KeepStencilOp}. See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true but the depth test fails.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true and the depth test passes.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZPass: StencilOp;

    /**
     * Used to check whether this or derived classes are materials. Default is true.
     * You should not change this, as it used internally for optimisation.
     */
    readonly isMaterial: true;

    /**
     * Material name. Default is an empty string.
     * @default ''
     */
    name: string;

    /**
     * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
     * This property is automatically set to true when instancing a new material.
     * @default false
     */
    needsUpdate: boolean;

    /**
     * Opacity. Default is 1.
     * @default 1
     */
    opacity: number;

    /**
     * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
     * @default false
     */
    polygonOffset: boolean;

    /**
     * Sets the polygon offset factor. Default is 0.
     * @default 0
     */
    polygonOffsetFactor: number;

    /**
     * Sets the polygon offset units. Default is 0.
     * @default 0
     */
    polygonOffsetUnits: number;

    /**
     * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
     * @default null
     */
    precision: 'highp' | 'mediump' | 'lowp' | null;

    /**
     * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
     * @default false
     */
    premultipliedAlpha: boolean;

    /**
     * @default false
     */
    forceSinglePass: boolean;

    /**
     * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
     * @default false
     */
    dithering: boolean;

    /**
     * Defines which of the face sides will be rendered - front, back or both.
     * Default is {@link THREE.FrontSide}. Other options are {@link THREE.BackSide} and {@link THREE.DoubleSide}.
     *
     * @default {@link THREE.FrontSide}
     */
    side: Side;

    /**
     * Defines which of the face sides will cast shadows. Default is *null*.
     * If *null*, the value is opposite that of side, above.
     * @default null
     */
    shadowSide: Side | null;

    /**
     * Defines whether this material is tone mapped according to the renderer's toneMapping setting.
     * Default is true.
     * @default true
     */
    toneMapped: boolean;

    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
     * Default is false.
     * @default false
     */
    transparent: boolean;

    /**
     * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
     * @default 'Material'
     */
    type: string;

    /**
     * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
     */
    uuid: string;

    /**
     * Defines whether vertex coloring is used. Default is false.
     * @default false
     */
    vertexColors: boolean;

    /**
     * Defines whether this material is visible. Default is true.
     * @default true
     */
    visible: boolean;

    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    userData: any;

    /**
     * This starts at 0 and counts how many times .needsUpdate is set to true.
     * @default 0
     */
    version: number;

    /**
     * Return a new material with the same parameters as this material.
     */
    clone(): this;

    /**
     * Copy the parameters from the passed material into this material.
     * @param material
     */
    copy(material: Material): this;

    /**
     * This disposes the material. Textures of a material don't get disposed. These needs to be disposed by {@link Texture}.
     */
    dispose(): void;

    /**
     * An optional callback that is executed immediately before the shader program is compiled.
     * This function is called with the shader source code as a parameter.
     * Useful for the modification of built-in materials.
     * @param shader Source code of the shader
     * @param renderer WebGLRenderer Context that is initializing the material
     */
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;

    /**
     * In case onBeforeCompile is used, this callback can be used to identify values of settings used in onBeforeCompile, so three.js can reuse a cached shader or recompile the shader as needed.
     */
    customProgramCacheKey(): string;

    /**
     * Sets the properties based on the values.
     * @param values A container with parameters.
     */
    setValues(values: MaterialParameters): void;

    /**
     * Convert the material to three.js JSON format.
     * @param meta Object containing metadata such as textures or images for the material.
     */
    toJSON(meta?: any): any;
}

/**
 * Represents the data {@link Source} of a texture.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Source | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Source.js | Source}
 */
declare class Source {
    /**
     * Create a new instance of {@link Source}
     * @param data The data definition of a texture. Default `null`
     */
    constructor(data: any);

    /**
     * Flag to check if a given object is of type {@link Source}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSource: true;

    readonly id: number;

    /**
     * The actual data of a texture.
     * @remarks The type of this property depends on the texture that uses this instance.
     */
    data: any;

    /**
     * Set this to `true` to trigger a data upload to the GPU next time the {@link Source} is used.
     */
    set needsUpdate(value: boolean);

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * This starts at `0` and counts how many times {@link needsUpdate | .needsUpdate} is set to `true`.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Convert the data {@link Source} to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Optional object containing metadata.
     */
    toJSON(meta?: string | {}): {};
}

/** Shim for OffscreenCanvas. */
// tslint:disable-next-line:no-empty-interface
interface OffscreenCanvas extends EventTarget {}

/**
 * Create a {@link Texture} to apply to a surface or as a reflection or refraction map.
 * @remarks
 * After the initial use of a texture, its **dimensions**, {@link format}, and {@link type} cannot be changed
 * Instead, call {@link dispose | .dispose()} on the {@link Texture} and instantiate a new {@link Texture}.
 * @example
 * ```typescript
 * // load a texture, set wrap mode to repeat
 * const texture = new THREE.TextureLoader().load("textures/water.jpg");
 * texture.wrapS = THREE.RepeatWrapping;
 * texture.wrapT = THREE.RepeatWrapping;
 * texture.repeat.set(4, 4);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_texture_filters | webgl materials texture filters}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Texture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/Textures/Texture.js | Source}
 */
declare class Texture extends EventDispatcher<{ dispose: {} }> {
    /**
     * This creates a new {@link THREE.Texture | Texture} object.
     * @param image See {@link Texture.image | .image}. Default {@link THREE.Texture.DEFAULT_IMAGE}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link THREE.NoColorSpace}
     */
    constructor(
        image?: TexImageSource | OffscreenCanvas,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        colorSpace?: ColorSpace,
    );

    /**
     * @deprecated
     */
    constructor(
        image: TexImageSource | OffscreenCanvas,
        mapping: Mapping,
        wrapS: Wrapping,
        wrapT: Wrapping,
        magFilter: MagnificationTextureFilter,
        minFilter: MinificationTextureFilter,
        format: PixelFormat,
        type: TextureDataType,
        anisotropy: number,
        encoding: TextureEncoding,
    );

    /**
     * Read-only flag to check if a given object is of type {@link Texture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isTexture: true;

    /**
     * Unique number for this {@link Texture} instance.
     * @remarks Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
     * @remarks Expects a `Integer`
     */
    readonly id: number;

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    name: string;

    /**
     * The data definition of a texture. A reference to the data source can be shared across textures.
     * This is often useful in context of spritesheets where multiple textures render the same data
     * but with different {@link Texture} transformations.
     */
    source: Source;

    /**
     * An image object, typically created using the {@link THREE.TextureLoader.load | TextureLoader.load()} method.
     * @remarks This can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.
     * @remarks To use video as a {@link Texture} you need to have a playing HTML5 video element as a source
     * for your {@link Texture} image and continuously update this {@link Texture}
     * as long as video is playing - the {@link THREE.VideoTexture | VideoTexture} class handles this automatically.
     */
    get image(): any;
    set image(data: any);

    /**
     * Array of user-specified mipmaps
     * @defaultValue `[]`
     */
    mipmaps: any[]; // ImageData[] for 2D textures and CubeTexture[] for cube textures;

    /**
     * How the image is applied to the object.
     * @remarks All {@link Texture} types except {@link THREE.CubeTexture} expect the _values_ be {@link THREE.Mapping}
     * @remarks {@link CubeTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @defaultValue _value of_ {@link THREE.Texture.DEFAULT_MAPPING}
     */
    mapping: AnyMapping;

    /**
     * Lets you select the uv attribute to map the texture to. `0` for `uv`, `1` for `uv1`, `2` for `uv2` and `3` for
     * `uv3`.
     */
    channel: number;

    /**
     * This defines how the {@link Texture} is wrapped *horizontally* and corresponds to **U** in UV mapping.
     * @remarks for **WEBGL1** - tiling of images in textures only functions if image dimensions are powers of two
     * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...) in terms of pixels.
     * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGL1, not three.js.
     * **WEBGL2** does not have this limitation.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link wrapT}
     * @see {@link repeat}
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    wrapS: Wrapping;

    /**
     * This defines how the {@link Texture} is wrapped *vertically* and corresponds to **V** in UV mapping.
     * @remarks for **WEBGL1** - tiling of images in textures only functions if image dimensions are powers of two
     * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...) in terms of pixels.
     * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGL1, not three.js.
     * **WEBGL2** does not have this limitation.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link wrapS}
     * @see {@link repeat}
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    wrapT: Wrapping;

    /**
     * How the {@link Texture} is sampled when a texel covers more than one pixel.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link minFilter}
     * @see {@link THREE.MagnificationTextureFilter}
     * @defaultValue {@link THREE.LinearFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * How the {@link Texture} is sampled when a texel covers less than one pixel.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link magFilter}
     * @see {@link THREE.MinificationTextureFilter}
     * @defaultValue {@link THREE.LinearMipmapLinearFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * The number of samples taken along the axis through the pixel that has the highest density of texels.
     * @remarks A higher value gives a less blurry result than a basic mipmap, at the cost of more {@link Texture} samples being used.
     * @remarks Use {@link THREE.WebGLCapabilities.getMaxAnisotropy() | renderer.capabilities.getMaxAnisotropy()} to find the maximum valid anisotropy value for the GPU;
     * @remarks This value is usually a power of 2.
     * @default _value of_ {@link THREE.Texture.DEFAULT_ANISOTROPY}. That is normally `1`.
     */
    anisotropy: number;

    /**
     * These define how elements of a 2D texture, or texels, are read by shaders.
     * @remarks All {@link Texture} types except {@link THREE.DeepTexture} and {@link THREE.CompressedPixelFormat} expect the _values_ be {@link THREE.PixelFormat}
     * @remarks {@link DeepTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
     * @remarks {@link CompressedPixelFormat} expect the _values_ be {@link THREE.CubeTextureMapping}
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.PixelFormat}
     * @defaultValue {@link THREE.RGBAFormat}.
     */
    format: AnyPixelFormat;

    /**
     * This must correspond to the {@link Texture.format | .format}.
     * @remarks {@link THREE.UnsignedByteType}, is the type most used by Texture formats.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.TextureDataType}
     * @defaultValue {@link THREE.UnsignedByteType}
     */
    type: TextureDataType;

    /**
     * The GPU Pixel Format allows the developer to specify how the data is going to be stored on the GPU.
     * @remarks Compatible only with {@link WebGL2RenderingContext | WebGL 2 Rendering Context}.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @defaultValue The default value is obtained using a combination of {@link Texture.format | .format} and {@link Texture.type | .type}.
     */
    internalFormat: PixelFormatGPU | null;

    /**
     * The uv-transform matrix for the texture.
     * @remarks
     * When {@link Texture.matrixAutoUpdate | .matrixAutoUpdate} property is `true`.
     * Will be updated by the renderer from the properties:
     *  - {@link Texture.offset | .offset}
     *  - {@link Texture.repeat | .repeat}
     *  - {@link Texture.rotation | .rotation}
     *  - {@link Texture.center | .center}
     * @remarks
     * When {@link Texture.matrixAutoUpdate | .matrixAutoUpdate} property is `false`.
     * This matrix may be set manually.
     * @see {@link matrixAutoUpdate | .matrixAutoUpdate}
     * @defaultValue `new THREE.Matrix3()`
     */
    matrix: Matrix3;

    /**
     * Whether is to update the texture's uv-transform {@link matrix | .matrix}.
     * @remarks Set this to `false` if you are specifying the uv-transform {@link matrix} directly.
     * @see {@link matrix | .matrix}
     * @defaultValue `true`
     */
    matrixAutoUpdate: boolean;

    /**
     * How much a single repetition of the texture is offset from the beginning, in each direction **U** and **V**.
     * @remarks Typical range is `0.0` to `1.0`.
     * @defaultValue `new THREE.Vector2(0, 0)`
     */
    offset: Vector2;

    /**
     * How many times the texture is repeated across the surface, in each direction **U** and **V**.
     * @remarks
     * If repeat is set greater than `1` in either direction, the corresponding *Wrap* parameter should
     * also be set to {@link THREE.RepeatWrapping} or {@link THREE.MirroredRepeatWrapping} to achieve the desired tiling effect.
     * @see {@link wrapS}
     * @see {@link wrapT}
     * @defaultValue `new THREE.Vector2( 1, 1 )`
     */
    repeat: Vector2;

    /**
     * The point around which rotation occurs.
     * @remarks A value of `(0.5, 0.5)` corresponds to the center of the texture.
     * @defaultValue `new THREE.Vector2( 0, 0 )`, _lower left._
     */
    center: Vector2;

    /**
     * How much the texture is rotated around the center point, in radians.
     * @remarks Positive values are counter-clockwise.
     * @defaultValue `0`
     */
    rotation: number;

    /**
     * Whether to generate mipmaps, _(if possible)_ for a texture.
     * @remarks Set this to false if you are creating mipmaps manually.
     * @defaultValue true
     */
    generateMipmaps: boolean;

    /**
     * If set to `true`, the alpha channel, if present, is multiplied into the color channels when the texture is uploaded to the GPU.
     * @remarks
     * Note that this property has no effect for {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap | ImageBitmap}.
     * You need to configure on bitmap creation instead. See {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @see {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @defaultValue `false`
     */
    premultiplyAlpha: boolean;

    /**
     * If set to `true`, the texture is flipped along the vertical axis when uploaded to the GPU.
     * @remarks
     * Note that this property has no effect for {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap | ImageBitmap}.
     * You need to configure on bitmap creation instead. See {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @see {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @defaultValue `true`
     */
    flipY: boolean;

    /**
     * Specifies the alignment requirements for the start of each pixel row in memory.
     * @remarks
     * The allowable values are:
     *  - `1` (byte-alignment)
     *  - `2` (rows aligned to even-numbered bytes)
     *  - `4` (word-alignment)
     *  - `8` (rows start on double-word boundaries).
     * @see {@link http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml | glPixelStorei} for more information.
     * @defaultValue `4`
     */
    unpackAlignment: number; // TODO Fix typing to only allow the expected values.

    /**
     * The {@link Textures | {@link Texture} constants} page for details of other formats.
     * @remarks
     * Values of {@link encoding} !== {@link THREE.LinearEncoding} are only supported on _map_, _envMap_ and _emissiveMap_.
     * @remarks
     * Note that if this value is changed on a texture after the material has been used, it is necessary to trigger a {@link THREE.Material.needsUpdate} for this value to be realized in the shader.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.TextureDataType}
     * @defaultValue {@link THREE.LinearEncoding}
     * @deprecated Use {@link Texture.colorSpace .colorSpace} in three.js r152+.
     */
    encoding: TextureEncoding;

    /**
     * The {@link Textures | {@link Texture} constants} page for details of other color spaces.
     * @remarks
     * Textures containing color data should be annotated with {@link SRGBColorSpace THREE.SRGBColorSpace} or
     * {@link LinearSRGBColorSpace THREE.LinearSRGBColorSpace}.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.TextureDataType}
     * @defaultValue {@link THREE.NoColorSpace}
     */
    colorSpace: ColorSpace;

    /**
     * Indicates whether a texture belongs to a render target or not
     * @defaultValue `false`
     */
    isRenderTargetTexture: boolean;

    /**
     * Indicates whether this texture should be processed by {@link THREE.PMREMGenerator} or not.
     * @remarks Only relevant for render target textures.
     * @defaultValue `false`
     */
    needsPMREMUpdate: boolean;

    /**
     * An object that can be used to store custom data about the texture.
     * @remarks It should not hold references to functions as these will not be cloned.
     * @defaultValue `{}`
     */
    userData: any;

    /**
     * This starts at `0` and counts how many times {@link needsUpdate | .needsUpdate} is set to `true`.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Set this to `true` to trigger an update next time the texture is used. Particularly important for setting the wrap mode.
     */
    set needsUpdate(value: boolean);

    /**
     * The Global default value for {@link anisotropy | .anisotropy}.
     * @defaultValue `1`.
     */
    static DEFAULT_ANISOTROPY: number;

    /**
     * The Global default value for {@link Texture.image | .image}.
     * @defaultValue `null`.
     */
    static DEFAULT_IMAGE: any;

    /**
     * The Global default value for {@link mapping | .mapping}.
     * @defaultValue {@link THREE.UVMapping}
     */
    static DEFAULT_MAPPING: Mapping;

    /**
     * A callback function, called when the texture is updated _(e.g., when needsUpdate has been set to true and then the texture is used)_.
     */
    onUpdate: () => void;

    /**
     * Transform the **UV** based on the value of this texture's
     * {@link offset | .offset},
     * {@link repeat | .repeat},
     * {@link wrapS | .wrapS},
     * {@link wrapT | .wrapT} and
     * {@link flipY | .flipY} properties.
     * @param uv
     */
    transformUv(uv: Vector2): Vector2;

    /**
     * Update the texture's **UV-transform** {@link matrix | .matrix} from the texture properties
     * {@link offset | .offset},
     * {@link repeat | .repeat},
     * {@link rotation | .rotation} and
     * {@link center | .center}.
     */
    updateMatrix(): void;

    /**
     * Make copy of the texture
     * @remarks Note this is not a **"deep copy"**, the image is shared
     * @remarks
     * Besides, cloning a texture does not automatically mark it for a texture upload
     * You have to set {@link needsUpdate | .needsUpdate} to `true` as soon as it's image property (the data source) is fully loaded or ready.
     */
    clone(): this;

    copy(source: Texture): this;

    /**
     * Convert the texture to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Optional object containing metadata.
     */
    toJSON(meta?: string | {}): {};

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * Scenes allow you to set up what and where is to be rendered by three.js
 * @remarks
 * This is where you place objects, lights and cameras.
 * @see Example: {@link https://threejs.org/examples/#webgl_multiple_scenes_comparison | webgl multiple scenes comparison}
 * @see {@link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene | Manual: Creating a scene}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Scene | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js | Source}
 */
declare class Scene extends Object3D {
    /**
     * Create a new {@link Scene} object.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Scene}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isScene: true;

    /**
     * @defaultValue `Scene`
     */
    type: 'Scene';

    /**
     * A {@link Fog | fog} instance defining the type of fog that affects everything rendered in the scene.
     * @defaultValue `null`
     */
    fog: FogBase | null;

    /**
     * Sets the blurriness of the background. Only influences environment maps assigned to {@link THREE.Scene.background | Scene.background}.
     * @defaultValue `0`
     * @remarks Expects a `Float` between `0` and `1`.
     */
    backgroundBlurriness: number;

    /**
     * Attenuates the color of the background. Only applies to background textures.
     * @defaultValue `1`
     * @remarks Expects a `Float`
     */
    backgroundIntensity: number;

    /**
     * Forces everything in the {@link Scene} to be rendered with the defined material.
     * @defaultValue `null`
     */
    overrideMaterial: Material | null;

    /**
     * Defines the background of the scene.
     * @remarks Valid inputs are:
     *  - A {@link THREE.Color | Color} for defining a uniform colored background.
     *  - A {@link THREE.Texture | Texture} for defining a (flat) textured background.
     *  - Texture cubes ({@link THREE.CubeTexture | CubeTexture}) or equirectangular textures for defining a skybox.</li>
     * @defaultValue `null`
     */
    background: Color | Texture | CubeTexture | null;

    /**
     * Sets the environment map for all physical materials in the scene.
     * However, it's not possible to overwrite an existing texture assigned to {@link THREE.MeshStandardMaterial.envMap | MeshStandardMaterial.envMap}.
     * @defaultValue `null`
     */
    environment: Texture | null;

    /**
     * Convert the {@link Scene} to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Object containing metadata such as textures or images for the scene.
     */
    toJSON(meta?: any): any;
}

interface WebGLCapabilitiesParameters {
    precision?: string | undefined;
    logarithmicDepthBuffer?: boolean | undefined;
}

declare class WebGLCapabilities {
    constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters);

    readonly isWebGL2: boolean;
    readonly drawBuffers: boolean;
    precision: string;
    logarithmicDepthBuffer: boolean;
    maxTextures: number;
    maxVertexTextures: number;
    maxTextureSize: number;
    maxCubemapSize: number;
    maxAttributes: number;
    maxVertexUniforms: number;
    maxVaryings: number;
    maxFragmentUniforms: number;
    vertexTextures: boolean;
    floatFragmentTextures: boolean;
    floatVertexTextures: boolean;
    maxSamples: number;

    getMaxAnisotropy(): number;
    getMaxPrecision(precision: string): string;
}

declare class WebGLExtensions {
    constructor(gl: WebGLRenderingContext);

    has(name: string): boolean;
    init(capabilities: WebGLCapabilities): void;
    get(name: string): any;
}

declare function WebGLShader$1(gl: WebGLRenderingContext, type: string, string: string): WebGLShader$1;

/**
 * This class can be used to automatically save the depth information of a rendering into a texture
 * @remarks
 * When using a **WebGL1** rendering context, {@link DepthTexture} requires support for the
 * {@link https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/ | WEBGL_depth_texture} extension.
 * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture | depth / texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js | Source}
 */
declare class DepthTexture extends Texture {
    /**
     * Create a new instance of {@link DepthTexture}
     * @param width Width of the texture.
     * @param height Height of the texture.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType} or {@link THREE.UnsignedInt248Type}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param format See {@link DepthTexture.format | .format}. Default {@link THREE.DepthFormat}
     */
    constructor(
        width: number,
        height: number,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        anisotropy?: number,
        format?: DeepTexturePixelFormat,
    );

    /**
     * Read-only flag to check if a given object is of type {@link DepthTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isDepthTexture: true;

    /**
     * Overridden with a record type holding width and height.
     * @override
     */
    get image(): { width: number; height: number };
    set image(value: { width: number; height: number });

    /**
     * @override
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override Depth textures do not use mipmaps.
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * @see {@link Texture.format | Texture.format}
     * @defaultValue {@link THREE.DepthFormat}.
     */
    format: DeepTexturePixelFormat;

    /**
     * @override
     * @defaultValue {@link THREE.UnsignedByteType} when {@link format | .format} === {@link THREE.DepthFormat}
     * @defaultValue {@link THREE.UnsignedInt248Type} when {@link format | .format} === {@link THREE.DepthStencilFormat}
     */
    type: TextureDataType;

    /**
     * This is used to define the comparison function used when comparing texels in the depth texture to the value in
     * the depth buffer. Default is `null` which means comparison is disabled.
     *
     * See {@link THREE.TextureComparisonFunction} for functions.
     */
    compareFunction: TextureComparisonFunction | null;
}

interface RenderTargetOptions {
    wrapS?: Wrapping | undefined;
    wrapT?: Wrapping | undefined;
    magFilter?: MagnificationTextureFilter | undefined;
    minFilter?: MinificationTextureFilter | undefined;
    generateMipmaps?: boolean | undefined; // true;
    format?: number | undefined; // RGBAFormat;
    type?: TextureDataType | undefined; // UnsignedByteType;
    anisotropy?: number | undefined; // 1;
    colorSpace?: ColorSpace | undefined;
    depthBuffer?: boolean | undefined; // true;
    stencilBuffer?: boolean | undefined; // false;
    depthTexture?: DepthTexture | undefined;
    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples?: number;
    /** @deprecated Use 'colorSpace' in three.js r152+. */
    encoding?: TextureEncoding | undefined;
}

declare class RenderTarget<TTexture extends Texture | Texture[] = Texture> extends EventDispatcher<{ dispose: {} }> {
    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    readonly isRenderTarget: true;

    width: number;
    height: number;
    depth: number;

    scissor: Vector4;
    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
    texture: TTexture;

    /**
     * @default true
     */
    depthBuffer: boolean;

    /**
     * @default true
     */
    stencilBuffer: boolean;

    /**
     * @default null
     */
    depthTexture: DepthTexture;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: RenderTarget): this;
    dispose(): void;
}

// tslint:disable-next-line:no-empty-interface
interface WebGLRenderTargetOptions extends RenderTargetOptions {}

declare class WebGLRenderTarget<TTexture extends Texture | Texture[] = Texture> extends RenderTarget<TTexture> {
    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    readonly isWebGLRenderTarget: true;
}

declare class WebGLColorBuffer {
    constructor();

    setMask(colorMask: boolean): void;
    setLocked(lock: boolean): void;
    setClear(r: number, g: number, b: number, a: number, premultipliedAlpha: boolean): void;
    reset(): void;
}

declare class WebGLDepthBuffer {
    constructor();

    setTest(depthTest: boolean): void;
    setMask(depthMask: boolean): void;
    setFunc(depthFunc: DepthModes): void;
    setLocked(lock: boolean): void;
    setClear(depth: number): void;
    reset(): void;
}

declare class WebGLStencilBuffer {
    constructor();

    setTest(stencilTest: boolean): void;
    setMask(stencilMask: number): void;
    setFunc(stencilFunc: number, stencilRef: number, stencilMask: number): void;
    setOp(stencilFail: number, stencilZFail: number, stencilZPass: number): void;
    setLocked(lock: boolean): void;
    setClear(stencil: number): void;
    reset(): void;
}

declare class WebGLState {
    constructor(gl: WebGLRenderingContext, extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    buffers: {
        color: WebGLColorBuffer;
        depth: WebGLDepthBuffer;
        stencil: WebGLStencilBuffer;
    };

    enable(id: number): void;
    disable(id: number): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null): void;
    drawBuffers(renderTarget: WebGLRenderTarget | null, framebuffer: WebGLFramebuffer | null): void;
    useProgram(program: any): boolean;
    setBlending(
        blending: Blending,
        blendEquation?: BlendingEquation,
        blendSrc?: BlendingSrcFactor,
        blendDst?: BlendingDstFactor,
        blendEquationAlpha?: BlendingEquation,
        blendSrcAlpha?: BlendingSrcFactor,
        blendDstAlpha?: BlendingDstFactor,
        premultiplyAlpha?: boolean,
    ): void;
    setMaterial(material: Material, frontFaceCW: boolean): void;
    setFlipSided(flipSided: boolean): void;
    setCullFace(cullFace: CullFace): void;
    setLineWidth(width: number): void;
    setPolygonOffset(polygonoffset: boolean, factor?: number, units?: number): void;
    setScissorTest(scissorTest: boolean): void;
    activeTexture(webglSlot: number): void;
    bindTexture(webglType: number, webglTexture: any): void;
    unbindTexture(): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D
    compressedTexImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        data: ArrayBufferView,
    ): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        pixels: ArrayBufferView | null,
    ): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, source: any): void;
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        pixels: any,
    ): void;
    scissor(scissor: Vector4): void;
    viewport(viewport: Vector4): void;
    reset(): void;
}

declare class WebGLProperties {
    constructor();

    get(object: any): any;
    remove(object: any): void;
    update(object: any, key: any, value: any): any;
    dispose(): void;
}

declare class WebGLUtils {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, extensions: any, capabilities: any);

    convert(p: PixelFormat | CompressedPixelFormat | TextureDataType, encoding?: TextureEncoding | null): number | null;
}

declare class WebGLTextures {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        state: WebGLState,
        properties: WebGLProperties,
        capabilities: WebGLCapabilities,
        utils: WebGLUtils,
        info: WebGLInfo,
    );

    allocateTextureUnit(): void;
    resetTextureUnits(): void;
    setTexture2D(texture: any, slot: number): void;
    setTexture2DArray(texture: any, slot: number): void;
    setTexture3D(texture: any, slot: number): void;
    setTextureCube(texture: any, slot: number): void;
    setupRenderTarget(renderTarget: any): void;
    updateRenderTargetMipmap(renderTarget: any): void;
    updateMultisampleRenderTarget(renderTarget: any): void;
    safeSetTexture2D(texture: any, slot: number): void;
    safeSetTextureCube(texture: any, slot: number): void;
}

declare class WebGLUniforms {
    constructor(gl: WebGLRenderingContext, program: WebGLProgram);

    setValue(gl: WebGLRenderingContext, name: string, value: any, textures: WebGLTextures): void;
    setOptional(gl: WebGLRenderingContext, object: any, name: string): void;

    static upload(gl: WebGLRenderingContext, seq: any, values: any[], textures: WebGLTextures): void;
    static seqWithValue(seq: any, values: any[]): any[];
}

declare class WebGLProgram {
    constructor(renderer: WebGLRenderer, cacheKey: string, parameters: object);

    name: string;
    id: number;
    cacheKey: string; // unique identifier for this program, used for looking up compiled programs from cache.

    /**
     * @default 1
     */
    usedTimes: number;
    program: any;
    vertexShader: WebGLShader$1;
    fragmentShader: WebGLShader$1;
    /**
     * @deprecated Use {@link WebGLProgram#getUniforms getUniforms()} instead.
     */
    uniforms: any;
    /**
     * @deprecated Use {@link WebGLProgram#getAttributes getAttributes()} instead.
     */
    attributes: any;

    getUniforms(): WebGLUniforms;
    getAttributes(): any;
    destroy(): void;
}

/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */
declare class WebGLInfo {
    constructor(gl: WebGLRenderingContext);

    /**
     * @default true
     */
    autoReset: boolean;

    /**
     * @default { geometries: 0, textures: 0 }
     */
    memory: {
        geometries: number;
        textures: number;
    };

    /**
     * @default null
     */
    programs: WebGLProgram[] | null;

    /**
     * @default { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }
     */
    render: {
        calls: number;
        frame: number;
        lines: number;
        points: number;
        triangles: number;
    };
    update(count: number, mode: number, instanceCount: number): void;
    reset(): void;
}

declare class WebGLObjects {
    constructor(gl: WebGLRenderingContext, geometries: any, attributes: any, info: any);

    update(object: any): any;
    dispose(): void;
}

/**
 * Serves as a base class for the other shadow classes.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js | Source}
 */
declare class LightShadow<TCamera extends Camera$1 = Camera$1> {
    /**
     * Create a new instance of {@link LightShadow}
     * @param camera The light's view of the world.
     */
    constructor(camera: TCamera);

    /**
     * The light's view of the world.
     * @remark This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
     */
    camera: TCamera;

    /**
     * Shadow map bias, how much to add or subtract from the normalized depth when deciding whether a surface is in shadow.
     * @remark The Very tiny adjustments here (in the order of 0.0001) may help reduce artifacts in shadows.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    bias: number;

    /**
     * Defines how much the position used to query the shadow map is offset along the object normal.
     * @remark The Increasing this value can be used to reduce shadow acne especially in large scenes where light shines onto geometry at a shallow angle.
     * @remark The cost is that shadows may appear distorted.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    normalBias: number;

    /**
     * Setting this to values greater than 1 will blur the edges of the shadow.toi
     * @remark High values will cause unwanted banding effects in the shadows - a greater {@link LightShadow.mapSize | mapSize
     *  will allow for a higher value to be used here before these effects become visible.
     * @remark If {@link THREE.WebGLRenderer.shadowMap.type | WebGLRenderer.shadowMap.type} is set to {@link Renderer | PCFSoftShadowMap},
     * radius has no effect and it is recommended to increase softness by decreasing {@link LightShadow.mapSize | mapSize} instead.
     * @remark Note that this has no effect if the {@link THREE.WebGLRenderer.shadowMap | WebGLRenderer.shadowMap}.{@link THREE.WebGLShadowMap.type | type}
     * is set to {@link THREE.BasicShadowMap | BasicShadowMap}.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    radius: number;

    /**
     * The amount of samples to use when blurring a VSM shadow map.
     * @remarks Expects a `Integer`
     * @defaultValue `8`
     */
    blurSamples: number;

    /**
     * A {@link THREE.Vector2 | Vector2} defining the width and height of the shadow map.
     * @remarks Higher values give better quality shadows at the cost of computation time.
     * @remarks Values must be powers of 2, up to the {@link THREE.WebGLRenderer.capabilities | WebGLRenderer.capabilities}.maxTextureSize for a given device,
     * although the width and height don't have to be the same (so, for example, (512, 1024) is valid).
     * @defaultValue `new THREE.Vector2(512, 512)`
     */
    mapSize: Vector2;

    /**
     * The depth map generated using the internal camera; a location beyond a pixel's depth is in shadow. Computed internally during rendering.
     * @defaultValue null
     */
    map: WebGLRenderTarget | null;

    /**
     * The distribution map generated using the internal camera; an occlusion is calculated based on the distribution of depths. Computed internally during rendering.
     * @defaultValue null
     */
    mapPass: WebGLRenderTarget | null;

    /**
     * Model to shadow camera space, to compute location and depth in shadow map.
     * Stored in a {@link Matrix4 | Matrix4}.
     * @remarks This is computed internally during rendering.
     * @defaultValue new THREE.Matrix4()
     */
    matrix: Matrix4;

    /**
     * Enables automatic updates of the light's shadow. If you do not require dynamic lighting / shadows, you may set this to `false`.
     * @defaultValue `true`
     */
    autoUpdate: boolean;

    /**
     * When set to `true`, shadow maps will be updated in the next `render` call.
     * If you have set {@link autoUpdate} to `false`, you will need to set this property to `true` and then make a render call to update the light's shadow.
     * @defaultValue `false`
     */
    needsUpdate: boolean;

    /**
     * Used internally by the renderer to get the number of viewports that need to be rendered for this shadow.
     */
    getViewportCount(): number;

    /**
     * Copies value of all the properties from the {@link {@link LightShadow} | source} to this Light.
     * @param source
     */
    copy(source: LightShadow): this;

    /**
     * Creates a new {@link LightShadow} with the same properties as this one.
     */
    clone(recursive?: boolean): this;

    /**
     * Serialize this LightShadow.
     */
    toJSON(): {};

    /**
     * Gets the shadow cameras frustum
     * @remarks
     * Used internally by the renderer to cull objects.
     */
    getFrustum(): Frustum;

    /**
     * Update the matrices for the camera and shadow, used internally by the renderer.
     * @param light The light for which the shadow is being rendered.
     */
    updateMatrices(light: Light): void;

    getViewport(viewportIndex: number): Vector4;

    /**
     * Used internally by the renderer to extend the shadow map to contain all viewports
     */
    getFrameExtents(): Vector2;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * Abstract base class for lights.
 * @remarks All other light types inherit the properties and methods described here.
 */
declare abstract class Light<TShadowSupport extends LightShadow | undefined = LightShadow | undefined> extends Object3D {
    /**
     * Creates a new {@link Light}
     * @remarks
     * **Note** that this is not intended to be called directly (use one of derived classes instead).
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link HemisphereLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Light`
     */
    override readonly type: string | 'Light';

    /**
     * Color of the light. \
     * @defaultValue `new THREE.Color(0xffffff)` _(white)_.
     */
    color: Color;

    /**
     * The light's intensity, or strength.
     * When {@link THREE.WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled, the units of intensity depend on the type of light.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    intensity: number;

    /**
     * A {@link THREE.LightShadow | LightShadow} used to calculate shadows for this light.
     * @remarks Available only on Light's that support shadows.
     */
    shadow: TShadowSupport;

    /**
     * Copies value of all the properties from the {@link Light | source} to this instance.
     * @param source
     * @param recursive
     */
    copy(source: this, recursive?: boolean): this;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

declare class WebGLShadowMap {
    constructor(_renderer: WebGLRenderer, _objects: WebGLObjects, _capabilities: WebGLCapabilities);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    /**
     * @default THREE.PCFShadowMap
     */
    type: ShadowMapType;

    render(shadowsArray: Light[], scene: Scene, camera: Camera$1): void;

    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    cullFace: any;
}

/**
 * Its purpose is to make working with groups of objects syntactically clearer.
 * @remarks This is almost identical to an {@link Object3D | Object3D}
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const cubeA = new THREE.Mesh(geometry, material);
 * cubeA.position.set(100, 100, 0);
 * const cubeB = new THREE.Mesh(geometry, material);
 * cubeB.position.set(-100, -100, 0);
 * //create a {@link Group} and add the two cubes
 * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group();
 * group.add(cubeA);
 * group.add(cubeB);
 * scene.add(group);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js | Source}
 */
declare class Group<TEventMap extends Object3DEventMap = Object3DEventMap> extends Object3D<TEventMap> {
    /**
     * Creates a new {@link Group}.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Group}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isGroup: true;

    /**
     * @override
     * @defaultValue `Group`
     */
    override readonly type: string | 'Group';
}

/**
 * This buffer attribute class does not construct a VBO.
 * Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property.
 * @remarks
 * It is required to pass additional params alongside the VBO
 * Those are: the GL context, the GL data type, the number of components per vertex, the number of bytes per component, and the number of vertices.
 * @remarks
 * The most common use case for this class is when some kind of GPGPU calculation interferes or even produces the VBOs in question.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_glbufferattribute | WebGL / buffergeometry / glbufferattribute}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/GLBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GLBufferAttribute.js | Source}
 */
declare class GLBufferAttribute {
    /**
     * This creates a new GLBufferAttribute object.
     * @param buffer Must be a {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer | WebGLBuffer}. See {@link GLBufferAttribute.buffer | .buffer}
     * @param type One of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types | WebGL Data Types}. See {@link GLBufferAttribute.type | .type}
     * @param itemSize How many values make up each item (vertex). See {@link GLBufferAttribute.itemSize | .itemSize}
     * @param elementSize `1`, `2` or `4`. The corresponding size (in bytes) for the given {@link type} param. See {@link GLBufferAttribute.elementSize | .elementSize}
     * @param count The expected number of vertices in VBO. See {@link GLBufferAttribute.count | .count}
     */
    constructor(buffer: WebGLBuffer, type: GLenum, itemSize: number, elementSize: 1 | 2 | 4, count: number);

    /**
     * Read-only flag to check if a given object is of type {@link GLBufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isGLBufferAttribute: true;

    /**
     * Optional name for this attribute instance.
     * @defaultValue `""`
     */
    name: string;

    /**
     * The current {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLBuffer | WebGLBuffer} instance.
     */
    buffer: WebGLBuffer;

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Data_types | WebGL Data Type} describing the underlying VBO contents.
     *
     * #### WebGL Data Type (`GLenum`)
     * - gl.BYTE: 0x1400
     * - gl.UNSIGNED_BYTE: 0x1401
     * - gl.SHORT: 0x1402
     * - gl.UNSIGNED_SHORT: 0x1403
     * - gl.INT: 0x1404
     * - gl.UNSIGNED_INT: 0x1405
     * - gl.FLOAT: 0x1406
     * @remarks Set this property together with {@link elementSize | .elementSize}. The recommended way is using the {@link setType | .setType()} method.
     * @remarks Expects a `DataType` `GLenum` _possible values:_ `0x1400` `0x1401` `0x1402` `0x1403` `0x1404` `0x1405` `0x1406`
     */
    type: GLenum;

    /**
     * How many values make up each item (vertex).
     * @remarks The number of values of the array that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a position, normal, or color), then itemSize should be 3.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

    /**
     * Stores the corresponding size in bytes for the current {@link type | .type} property value.
     *
     * The corresponding size (_in bytes_) for the given "type" param.
     * #### WebGL Data Type (`GLenum`)
     * - gl.BYTE: 1
     * - gl.UNSIGNED_BYTE: 1
     * - gl.SHORT: 2
     * - gl.UNSIGNED_SHORT: 2
     * - gl.INT: 4
     * - gl.UNSIGNED_INT: 4
     * - gl.FLOAT: 4
     * @remarks Set this property together with {@link type | .type}. The recommended way is using the {@link setType | .setType} method.
     * @see `constructor`` for a list of known type sizes.
     * @remarks Expects a `1`, `2` or `4`
     */
    elementSize: 1 | 2 | 4;

    /**
     * The expected number of vertices in VBO.
     * @remarks Expects a `Integer`
     */
    count: number;

    /**
     * A version number, incremented every time the needsUpdate property is set to true.
     * @remarks Expects a `Integer`
     */
    version: number;

    /**
     * Setting this to true increments {@link version | .version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Sets the {@link buffer | .buffer} property.
     */
    setBuffer(buffer: WebGLBuffer): this;

    /**
     * Sets the both {@link GLBufferAttribute.type | type} and {@link GLBufferAttribute.elementSize | elementSize} properties.
     */
    setType(type: GLenum, elementSize: 1 | 2 | 4): this;

    /**
     * Sets the {@link GLBufferAttribute.itemSize | itemSize} property.
     */
    setItemSize(itemSize: number): this;

    /**
     * Sets the {@link GLBufferAttribute.count | count} property.
     */
    setCount(count: number): this;
}

type NormalBufferAttributes = Record<string, BufferAttribute | InterleavedBufferAttribute>;
type NormalOrGLBufferAttributes = Record<
    string,
    BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute
>;

/**
 * A representation of mesh, line, or point geometry
 * Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this data to the GPU.
 * @remarks
 * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute | BufferAttribute} documentation.
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry();
 *
 * // create a simple square shape. We duplicate the top left and bottom right
 * // vertices because each vertex needs to appear once per triangle.
 * const vertices = new Float32Array( [
 *   -1.0, -1.0,  1.0, // v0
 *    1.0, -1.0,  1.0, // v1
 *    1.0,  1.0,  1.0, // v2
 *
 *    1.0,  1.0,  1.0, // v3
 *   -1.0,  1.0,  1.0, // v4
 *   -1.0, -1.0,  1.0  // v5
 * ] );
 *
 * // itemSize = 3 because there are 3 values (components) per vertex
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
 * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
 * const mesh = new THREE.Mesh( geometry, material );
 * ```
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry();
 *
 * const vertices = new Float32Array( [
 *   -1.0, -1.0,  1.0, // v0
 *    1.0, -1.0,  1.0, // v1
 *    1.0,  1.0,  1.0, // v2
 *   -1.0,  1.0,  1.0, // v3
 * ] );
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
 *
 * const indices = [
 *   0, 1, 2,
 *   2, 3, 0,
 * ];
 *
 * geometry.setIndex( indices );
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
 *
 * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
 * const mesh = new THREE.Mesh( geometry, material );
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | Mesh with non-indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_indexed | Mesh with indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines | Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines_indexed | Indexed Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_custom_attributes_particles | Particles}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_rawshader | Raw Shaders}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js | Source}
 */
declare class BufferGeometry<
    Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
> extends EventDispatcher<{ dispose: {} }> {
    /**
     * This creates a new {@link THREE.BufferGeometry | BufferGeometry} object.
     */
    constructor();

    /**
     * Unique number for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @remarks Expects a `Integer`
     */
    id: number;

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Optional name for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @defaultValue `''`
     */
    name: string;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `BufferGeometry`
     */
    readonly type: string | 'BufferGeometry';

    /**
     * Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
     * Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
     * If this attribute is not set, the {@link THREE.WebGLRenderer | renderer}  assumes that each three contiguous positions represent a single triangle.
     * @defaultValue `null`
     */
    index: BufferAttribute | null;

    /**
     * This hashmap has as id the name of the attribute to be set and as value the {@link THREE.BufferAttribute | buffer} to set it to. Rather than accessing this property directly,
     * use {@link setAttribute | .setAttribute} and {@link getAttribute | .getAttribute} to access attributes of this geometry.
     * @defaultValue `{}`
     */
    attributes: Attributes;

    /**
     * Hashmap of {@link THREE.BufferAttribute | BufferAttributes} holding details of the geometry's morph targets.
     * @remarks
     * Once the geometry has been rendered, the morph attribute data cannot be changed.
     * You will have to call {@link dispose | .dispose}(), and create a new instance of {@link THREE.BufferGeometry | BufferGeometry}.
     * @defaultValue `{}`
     */
    morphAttributes: {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>; // TODO Replace for 'Record<>'
    };

    /**
     * Used to control the morph target behavior; when set to true, the morph target data is treated as relative offsets, rather than as absolute positions/normals.
     * @defaultValue `false`
     */
    morphTargetsRelative: boolean;

    /**
     * Split the geometry into groups, each of which will be rendered in a separate WebGL draw call. This allows an array of materials to be used with the geometry.
     * @remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
     * @remarks Use {@link addGroup | .addGroup} to add groups, rather than modifying this array directly.
     * @defaultValue `[]`
     */
    groups: Array<{
        /**
         * Specifies the first element in this draw call – the first vertex for non-indexed geometry, otherwise the first triangle index.
         * @remarks Expects a `Integer`
         */
        start: number;
        /**
         * Specifies how many vertices (or indices) are included.
         * @remarks Expects a `Integer`
         */
        count: number;
        /**
         * Specifies the material array index to use.
         * @remarks Expects a `Integer`
         */
        materialIndex?: number | undefined;
    }>;

    /**
     * Bounding box for the {@link THREE.BufferGeometry | BufferGeometry}, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingBox: Box3 | null;

    /**
     * Bounding sphere for the {@link THREE.BufferGeometry | BufferGeometry}, which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingSphere: Sphere | null;

    /**
     * Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange | .setDrawRange(...)}.
     * @remarks For non-indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of vertices to render.
     * @remarks For indexed {@link THREE.BufferGeometry | BufferGeometry}, count is the number of indices to render.
     * @defaultValue `{ start: 0, count: Infinity }`
     */
    drawRange: { start: number; count: number };

    /**
     * An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.
     * @defaultValue `{}`
     */
    userData: { [key: string]: any };

    /**
     * Read-only flag to check if a given object is of type {@link BufferGeometry}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isBufferGeometry: true;

    /**
     * Return the {@link index | .index} buffer.
     */
    getIndex(): BufferAttribute | null;

    /**
     * Set the {@link THREE.BufferGeometry.index | .index} buffer.
     * @param index
     */
    setIndex(index: BufferAttribute | number[] | null): this;

    /**
     * Sets an {@link attributes | attribute} to this geometry with the specified name.
     * @remarks
     * Use this rather than the attributes property, because an internal hashmap of {@link attributes | .attributes} is maintained to speed up iterating over attributes.
     * @param name
     * @param attribute
     */
    setAttribute<K extends keyof Attributes>(name: K, attribute: Attributes[K]): this;

    /**
     * Returns the {@link attributes | attribute} with the specified name.
     * @param name
     */
    getAttribute<K extends keyof Attributes>(name: K): Attributes[K];

    /**
     * Deletes the  {@link attributes | attribute} with the specified name.
     * @param name
     */
    deleteAttribute(name: keyof Attributes): this;

    /**
     * Returns true if the {@link attributes | attribute} with the specified name exists.
     * @param name
     */
    hasAttribute(name: keyof Attributes): boolean;

    /**
     * Adds a group to this geometry
     * @see the {@link BufferGeometry.groups | groups} property for details.
     * @param start
     * @param count
     * @param materialIndex
     */
    addGroup(start: number, count: number, materialIndex?: number): void;

    /**
     * Clears all groups.
     */
    clearGroups(): void;

    /**
     * Set the {@link drawRange | .drawRange} property
     * @remarks For non-indexed BufferGeometry, count is the number of vertices to render
     * @remarks For indexed BufferGeometry, count is the number of indices to render.
     * @param start
     * @param count is the number of vertices or indices to render. Expects a `Integer`
     */
    setDrawRange(start: number, count: number): void;

    /**
     * Applies the matrix transform to the geometry.
     * @param matrix
     */
    applyMatrix4(matrix: Matrix4): this;

    /**
     * Applies the rotation represented by the quaternion to the geometry.
     * @param quaternion
     */
    applyQuaternion(quaternion: Quaternion): this;

    /**
     * Rotate the geometry about the X axis. This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateX(angle: number): this;

    /**
     * Rotate the geometry about the Y axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateY(angle: number): this;

    /**
     * Rotate the geometry about the Z axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    rotateZ(angle: number): this;

    /**
     * Translate the geometry.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.position | Object3D.position} for typical real-time mesh rotation.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    translate(x: number, y: number, z: number): this;

    /**
     * Scale the geometry data.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.scale | Object3D.scale} for typical real-time mesh scaling.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    scale(x: number, y: number, z: number): this;

    /**
     * Rotates the geometry to face a point in space.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.lookAt | Object3D.lookAt} for typical real-time mesh usage.
     * @param vector A world vector to look at.
     */
    lookAt(vector: Vector3): this;

    /**
     * Center the geometry based on the bounding box.
     */
    center(): this;

    /**
     * Sets the attributes for this BufferGeometry from an array of points.
     * @param points
     */
    setFromPoints(points: Vector3[] | Vector2[]): this;

    /**
     * Computes bounding box of the geometry, updating {@link boundingBox | .boundingBox} attribute.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingBox(): void;

    /**
     * Computes bounding sphere of the geometry, updating {@link boundingSphere | .boundingSphere} attribute.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingSphere(): void;

    /**
     * Calculates and adds a tangent attribute to this geometry.
     * The computation is only supported for indexed geometries and if position, normal, and uv attributes are defined
     * @remarks
     * When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
     * {@link BufferGeometryUtils.computeMikkTSpaceTangents} instead.
     */
    computeTangents(): void;

    /**
     * Computes vertex normals for the given vertex data. For indexed geometries, the method sets each vertex normal to
     * be the average of the face normals of the faces that share that vertex. For non-indexed geometries, vertices are
     * not shared, and the method sets each vertex normal to be the same as the face normal.
     */
    computeVertexNormals(): void;

    /**
     * Every normal vector in a geometry will have a magnitude of 1
     * @remarks This will correct lighting on the geometry surfaces.
     */
    normalizeNormals(): void;

    /**
     * Return a non-index version of an indexed BufferGeometry.
     */
    toNonIndexed(): BufferGeometry;

    /**
     * Convert the buffer geometry to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     */
    toJSON(): {};

    /**
     * Creates a clone of this BufferGeometry
     */
    clone(): this;

    /**
     * Copies another BufferGeometry to this BufferGeometry.
     * @param source
     */
    copy(source: BufferGeometry): this;

    /**
     * Frees the GPU-related resources allocated by this instance.
     * @remarks Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

interface RenderItem {
    id: number;
    object: Object3D;
    geometry: BufferGeometry | null;
    material: Material;
    program: WebGLProgram;
    groupOrder: number;
    renderOrder: number;
    z: number;
    group: Group | null;
}

declare class WebGLRenderList {
    constructor(properties: WebGLProperties);

    /**
     * @default []
     */
    opaque: RenderItem[];

    /**
     * @default []
     */
    transparent: RenderItem[];

    /**
     * @default []
     */
    transmissive: RenderItem[];

    init(): void;
    push(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    unshift(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    sort(opaqueSort: (a: any, b: any) => number, transparentSort: (a: any, b: any) => number): void;
    finish(): void;
}

declare class WebGLRenderLists {
    constructor(properties: WebGLProperties);

    dispose(): void;
    get(scene: Scene, renderCallDepth: number): WebGLRenderList;
}

declare class WebGLMultipleRenderTargets extends WebGLRenderTarget<Texture[]> {
    /**
     * @param width The width of the render target.
     * @param height The height of the render target.
     * @param count The number of render targets.
     * @param options object that holds texture parameters for an auto-generated target texture and depthBuffer/stencilBuffer booleans.
     * For an explanation of the texture parameters see {@link Texture}.
     */
    constructor(width?: number, height?: number, count?: number, options?: WebGLRenderTargetOptions);

    readonly isWebGLMultipleRenderTargets: true;
}

/**
 * Camera that uses {@link https://en.wikipedia.org/wiki/Perspective_(graphical) | perspective projection}.
 * This projection mode is designed to mimic the way the human eye sees
 * @remarks
 * It is the most common projection mode used for rendering a 3D scene.
 * @example
 * ```typescript
 * const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
 * scene.add(camera);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | animation / skinning / morph }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | interactive / cubes }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_skinning | loader / collada / skinning }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js | Source}
 */
declare class PerspectiveCamera extends Camera$1 {
    /**
     * Creates a new {@link PerspectiveCamera}.
     * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum | viewing frustum}.
     * @param fov Camera frustum vertical field of view. Default `50`.
     * @param aspect Camera frustum aspect ratio. Default `1`.
     * @param near Camera frustum near plane. Default `0.1`.
     * @param far Camera frustum far plane. Default `2000`.
     */
    constructor(fov?: number, aspect?: number, near?: number, far?: number);

    /**
     * Read-only flag to check if a given object is of type {@link Camera}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isPerspectiveCamera: true;

    /**
     * @override
     * @defaultValue `PerspectiveCamera`
     */
    override readonly type: string | 'PerspectiveCamera';

    /**
     * Gets or sets the zoom factor of the camera.
     * @defaultValue `1`
     */
    zoom: number;

    /**
     * Camera frustum vertical field of view, from bottom to top of view, in degrees.
     * @remarks Expects a `Float`
     * @defaultValue `50`
     */
    fov: number;

    /**
     * Camera frustum aspect ratio, usually the canvas width / canvas height.
     * @remarks Expects a `Float`
     * @defaultValue `1`, _(square canvas)_.
     */
    aspect: number;

    /**
     * Camera frustum near plane.
     * @remarks The valid range is greater than `0` and less than the current value of the {@link far | .far} plane.
     * @remarks Note that, unlike for the {@link THREE.OrthographicCamera | OrthographicCamera}, `0` is **not** a valid value for a {@link PerspectiveCamera |PerspectiveCamera's}. near plane.
     * @defaultValue `0.1`
     * @remarks Expects a `Float`
     */
    near: number;

    /**
     * Camera frustum far plane.
     * @remarks Must be greater than the current value of {@link near | .near} plane.
     * @remarks Expects a `Float`
     * @defaultValue `2000`
     */
    far: number;

    /**
     * Object distance used for stereoscopy and depth-of-field effects.
     * @remarks This parameter does not influence the projection matrix unless a {@link THREE.StereoCamera | StereoCamera} is being used.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    focus: number;

    /**
     * Frustum window specification or null.
     * This is set using the {@link setViewOffset | .setViewOffset} method and cleared using {@link clearViewOffset | .clearViewOffset}.
     * @defaultValue `null`
     */
    view: null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };

    /**
     * Film size used for the larger axis.
     * This parameter does not influence the projection matrix unless {@link filmOffset | .filmOffset} is set to a nonzero value.
     * @remarks Expects a `Float`
     * @defaultValue `35`, _millimeters_.
     */
    filmGauge: number;

    /**
     * Horizontal off-center offset in the same unit as {@link filmGauge | .filmGauge}.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    filmOffset: number;

    /**
     * Returns the focal length of the current {@link .fov | fov} in respect to {@link filmGauge | .filmGauge}.
     */
    getFocalLength(): number;

    /**
     * Sets the FOV by focal length in respect to the current {@link filmGauge | .filmGauge}.
     * @remarks By default, the focal length is specified for a `35mm` (full frame) camera.
     * @param focalLength Expects a `Float`
     */
    setFocalLength(focalLength: number): void;

    /**
     * Returns the current vertical field of view angle in degrees considering {@link zoom | .zoom}.
     */
    getEffectiveFOV(): number;

    /**
     * Returns the width of the image on the film
     * @remarks
     * If {@link aspect | .aspect}. is greater than or equal to one (landscape format), the result equals {@link filmGauge | .filmGauge}.
     */
    getFilmWidth(): number;

    /**
     * Returns the height of the image on the film
     * @remarks
     * If {@link aspect | .aspect}. is less than or equal to one (portrait format), the result equals {@link filmGauge | .filmGauge}.
     */
    getFilmHeight(): number;

    /**
     * Sets an offset in a larger frustum.
     * @remarks
     * This is useful for multi-window or multi-monitor/multi-machine setups.
     *
     * For example, if you have 3x2 monitors and each monitor is _1920x1080_ and
     * the monitors are in grid like this
     * ```
     * ┌───┬───┬───┐
     * │ A │ B │ C │
     * ├───┼───┼───┤
     * │ D │ E │ F │
     * └───┴───┴───┘
     * ```
     * then for each monitor you would call it like this
     * ```typescript
     *   const w = 1920;
     *   const h = 1080;
     *   const fullWidth = w * 3;
     *   const fullHeight = h * 2;
     *
     *   // Monitor - A
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     *   // Monitor - B
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     *   // Monitor - C
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     *   // Monitor - D
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     *   // Monitor - E
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     *   // Monitor - F
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
     * ```
     * Note there is no reason monitors have to be the same size or in a grid.
     * @param fullWidth Full width of multiview setup Expects a `Float`.
     * @param fullHeight Full height of multiview setup Expects a `Float`.
     * @param x Horizontal offset of subcamera Expects a `Float`.
     * @param y Vertical offset of subcamera Expects a `Float`.
     * @param width Width of subcamera Expects a `Float`.
     * @param height Height of subcamera Expects a `Float`.
     */
    setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;

    /**
     * Removes any offset set by the {@link setViewOffset | .setViewOffset} method.
     */
    clearViewOffset(): void;

    /**
     * Updates the camera projection matrix
     * @remarks Must be called after any change of parameters.
     */
    updateProjectionMatrix(): void;

    /**
     * @deprecated Use {@link PerspectiveCamera.setFocalLength | .setFocalLength()} and {@link PerspectiveCamera.filmGauge | .filmGauge} instead.
     */
    setLens(focalLength: number, frameHeight?: number): void;
}

/**
 * {@link ArrayCamera} can be used in order to efficiently render a scene with a predefined set of cameras
 * @remarks
 * This is an important performance aspect for rendering VR scenes.
 * An instance of {@link ArrayCamera} always has an array of sub cameras
 * It's mandatory to define for each sub camera the `viewport` property which determines the part of the viewport that is rendered with this camera.
 * @see Example: {@link https://threejs.org/examples/#webgl_camera_array | camera / array }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/ArrayCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js | Source}
 */
declare class ArrayCamera extends PerspectiveCamera {
    /**
     * An array of cameras.
     * @param array. Default `[]`.
     */
    constructor(cameras?: PerspectiveCamera[]);

    /**
     * Read-only flag to check if a given object is of type {@link ArrayCamera}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isArrayCamera: true;

    /**
     * An array of cameras.
     * @defaultValue `[]`
     */
    cameras: PerspectiveCamera[];
}

type XRControllerEventType = XRSessionEventType | XRInputSourceEventType | 'disconnected' | 'connected';

declare class XRJointSpace extends Group {
    readonly jointRadius: number | undefined;
}

type XRHandJoints = Record<XRHandJoint, XRJointSpace>;

interface XRHandInputState {
    pinching: boolean;
}

interface WebXRSpaceEventMap extends Object3DEventMap {
    select: { data: XRInputSource };
    selectstart: { data: XRInputSource };
    selectend: { data: XRInputSource };
    squeeze: { data: XRInputSource };
    squeezestart: { data: XRInputSource };
    squeezeend: { data: XRInputSource };

    connected: { data: XRInputSource };
    disconnected: { data: XRInputSource };

    pinchend: { handedness: XRHandedness; target: WebXRController }; // This Event break the THREE.EventDispatcher contract, replacing the target to the wrong instance.
    pinchstart: { handedness: XRHandedness; target: WebXRController }; // This Event break the THREE.EventDispatcher contract, replacing the target to the wrong instance.

    move: {};
}

declare class XRHandSpace extends Group<WebXRSpaceEventMap> {
    readonly joints: Partial<XRHandJoints>;
    readonly inputState: XRHandInputState;
}

declare class XRTargetRaySpace extends Group<WebXRSpaceEventMap> {
    hasLinearVelocity: boolean;
    readonly linearVelocity: Vector3;
    hasAngularVelocity: boolean;
    readonly angularVelocity: Vector3;
}

declare class XRGripSpace extends Group<WebXRSpaceEventMap> {
    hasLinearVelocity: boolean;
    readonly linearVelocity: Vector3;
    hasAngularVelocity: boolean;
    readonly angularVelocity: Vector3;
}

declare class WebXRController {
    constructor();

    getHandSpace(): XRHandSpace;
    getTargetRaySpace(): XRTargetRaySpace;
    getGripSpace(): XRGripSpace;
    dispatchEvent(event: { type: XRControllerEventType; data?: XRInputSource }): this;
    connect(inputSource: XRInputSource): this;
    disconnect(inputSource: XRInputSource): this;
    update(inputSource: XRInputSource, frame: XRFrame, referenceSpace: XRReferenceSpace): this;
}

// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager



type WebXRCamera = PerspectiveCamera & { viewport: Vector4 };
type WebXRArrayCamera = Omit<ArrayCamera, 'cameras'> & { cameras: [WebXRCamera, WebXRCamera] };

interface WebXRManagerEventMap {
    sessionstart: {};
    sessionend: {};
    planeadded: { data: XRPlane };
    planeremoved: { data: XRPlane };
    planechanged: { data: XRPlane };
    planesdetected: { data: XRPlaneSet };
}

declare class WebXRManager extends EventDispatcher<WebXRManagerEventMap> {
    constructor(renderer: any, gl: WebGLRenderingContext);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default false
     */
    isPresenting: boolean;

    /**
     * @default true
     */
    cameraAutoUpdate: boolean;

    getController(index: number): XRTargetRaySpace;

    getControllerGrip(index: number): XRGripSpace;

    getHand(index: number): XRHandSpace;

    setFramebufferScaleFactor(value: number): void;

    setReferenceSpaceType(value: XRReferenceSpaceType): void;

    getReferenceSpace(): XRReferenceSpace | null;

    setReferenceSpace(value: XRReferenceSpace): void;

    getBaseLayer(): XRWebGLLayer | XRProjectionLayer;

    getBinding(): XRWebGLBinding;

    getFrame(): XRFrame;

    getSession(): XRSession | null;

    setSession(value: XRSession | null): Promise<void>;

    getCamera(): WebXRArrayCamera;

    updateCamera(camera: PerspectiveCamera): void;

    setAnimationLoop(callback: XRFrameRequestCallback | null): void;

    getFoveation(): number | undefined;

    setFoveation(value: number): void;

    dispose(): void;
}

interface TextureImageData {
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
}

interface Texture3DImageData extends TextureImageData {
    readonly depth: number;
}

/**
 * Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth
 * @remarks Compatible only with {@link WebGL2RenderingContext | WebGL 2 Rendering Context}.
 * @example
 * ```typescript
 * This creates a[name] with repeating data, 0 to 255
 * // create a buffer with some data
 * const sizeX = 64;
 * const sizeY = 64;
 * const sizeZ = 64;
 * const data = new Uint8Array(sizeX * sizeY * sizeZ);
 * let i = 0;
 * for (let z = 0; z & lt; sizeZ; z++) {
 *     for (let y = 0; y & lt; sizeY; y++) {
 *         for (let x = 0; x & lt; sizeX; x++) {
 *             data[i] = i % 256;
 *             i++;
 *         }
 *     }
 * }
 * // use the buffer to create the texture
 * const texture = new THREE.Data3DTexture(data, sizeX, sizeY, sizeZ);
 * texture.needsUpdate = true;
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d | WebGL2 / materials / texture3d}
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d_partialupdate | WebGL2 / materials / texture3d / partialupdate}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_cloud | WebGL2 / volume / cloud}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_perlin | WebGL2 / volume / perlin}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Data3DTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Data3DTexture.js | Source}
 */
declare class Data3DTexture extends Texture {
    /**
     * Create a new instance of {@link Data3DTexture}
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param depth Depth of the texture. Default `1`.
     */
    constructor(data?: BufferSource | null, width?: number, height?: number, depth?: number);

    /**
     * Read-only flag to check if a given object is of type {@link Data3DTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isData3DTexture: true;

    /**
     * Overridden with a record type holding data, width and height and depth.
     * @override
     */
    get image(): Texture3DImageData;
    set image(data: Texture3DImageData);

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    wrapR: Wrapping;

    /**
     * @override
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * @defaultValue `1`
     */
    unpackAlignment: number;
}

/**
 * Creates an array of textures directly from raw data, width and height and depth
 * @remarks Compatible only with {@link WebGL2RenderingContext | WebGL 2 Rendering Context}.
 * @example
 * ```typescript
 * This creates a[name] where each texture has a different color.
 * // create a buffer with color data
 * const width = 512;
 * const height = 512;
 * const depth = 100;
 * const size = width * height;
 * const data = new Uint8Array(4 * size * depth);
 * for (let i = 0; i & lt; depth; i++) {
 *     const color = new THREE.Color(Math.random(), Math.random(), Math.random());
 *     const r = Math.floor(color.r * 255);
 *     const g = Math.floor(color.g * 255);
 *     const b = Math.floor(color.b * 255);
 *     for (let j = 0; j & lt; size; j++) {
 *         const stride = (i * size + j) * 4;
 *         data[stride] = r;
 *         data[stride + 1] = g;
 *         data[stride + 2] = b;
 *         data[stride + 3] = 255;
 *     }
 * }
 * // used the buffer to create a [name]
 * const texture = new THREE.DataArrayTexture(data, width, height, depth);
 * texture.needsUpdate = true;
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture2darray | WebGL2 / materials / texture2darray}
 * @see Example: {@link https://threejs.org/examples/#webgl2_rendertarget_texture2darray | WebGL2 / rendertarget / texture2darray}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataArrayTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataArrayTexture.js | Source}
 */
declare class DataArrayTexture extends Texture {
    /**
     * This creates a new {@link THREE.DataArrayTexture | DataArrayTexture} object.
     * @remarks The interpretation of the data depends on {@link format} and {@link type}.
     * @remarks If the {@link type} is {@link THREE.UnsignedByteType}, a {@link Uint8Array} will be useful for addressing the texel data
     * @remarks If the {@link format} is {@link THREE.RGBAFormat}, data needs four values for one texel; Red, Green, Blue and Alpha (typically the opacity).
     * @remarks For the packed {@link type | types}, {@link THREE.UnsignedShort4444Type} and {@link THREE.UnsignedShort5551Type}
     * all color components of one texel can be addressed as bitfields within an integer element of a {@link Uint16Array}.
     * @remarks In order to use the {@link type | types} {@link THREE.FloatType} and {@link THREE.HalfFloatType},
     * the WebGL implementation must support the respective extensions _OES_texture_float_ and _OES_texture_half_float_
     * @remarks In order to use {@link THREE.LinearFilter} for component-wise, bilinear interpolation of the texels based on these types,
     * the WebGL extensions _OES_texture_float_linear_ or _OES_texture_half_float_linear_ must also be present.
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param depth Depth of the texture. Default `1`.
     */
    constructor(data?: BufferSource, width?: number, height?: number, depth?: number);

    /**
     * Read-only flag to check if a given object is of type {@link DataArrayTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isDataArrayTexture: true;

    /**
     * Overridden with a record type holding data, width and height and depth.
     * @override
     */
    get image(): Texture3DImageData;
    set image(data: Texture3DImageData);

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override
     * @defaultValue  {@link THREE.ClampToEdgeWrapping}
     */
    wrapR: boolean;

    /**
     * @override
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * @defaultValue `1`
     */
    unpackAlignment: number;
}

interface Renderer {
    domElement: HTMLCanvasElement;

    render(scene: Object3D, camera: Camera$1): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
}

interface WebGLRendererParameters {
    /**
     * A Canvas where the renderer draws its output.
     */
    canvas?: HTMLCanvasElement | OffscreenCanvas | undefined;

    /**
     * A WebGL Rendering Context.
     * (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
     * Default is null
     */
    context?: WebGLRenderingContext | undefined;

    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    precision?: string | undefined;

    /**
     * default is false.
     */
    alpha?: boolean | undefined;

    /**
     * default is true.
     */
    premultipliedAlpha?: boolean | undefined;

    /**
     * default is false.
     */
    antialias?: boolean | undefined;

    /**
     * default is true.
     */
    stencil?: boolean | undefined;

    /**
     * default is false.
     */
    preserveDrawingBuffer?: boolean | undefined;

    /**
     * Can be "high-performance", "low-power" or "default"
     */
    powerPreference?: string | undefined;

    /**
     * default is true.
     */
    depth?: boolean | undefined;

    /**
     * default is false.
     */
    logarithmicDepthBuffer?: boolean | undefined;

    /**
     * default is false.
     */
    failIfMajorPerformanceCaveat?: boolean | undefined;
}

interface WebGLDebug {
    /**
     * Enables error checking and reporting when shader programs are being compiled.
     */
    checkShaderErrors: boolean;

    /**
     * A callback function that can be used for custom error reporting. The callback receives the WebGL context, an
     * instance of WebGLProgram as well two instances of WebGLShader representing the vertex and fragment shader.
     * Assigning a custom function disables the default error reporting.
     * @default `null`
     */
    onShaderError:
        | ((
              gl: WebGLRenderingContext,
              program: WebGLProgram,
              glVertexShader: WebGLShader,
              glFragmentShader: WebGLShader,
          ) => void)
        | null;
}

/**
 * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js|src/renderers/WebGLRenderer.js}
 */
declare class WebGLRenderer implements Renderer {
    /**
     * parameters is an optional object with properties defining the renderer's behaviour.
     * The constructor also accepts no parameters at all.
     * In all cases, it will assume sane defaults when parameters are missing.
     */
    constructor(parameters?: WebGLRendererParameters);

    /**
     * A Canvas where the renderer draws its output.
     * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
     * @default document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' )
     */
    domElement: HTMLCanvasElement;

    /**
     * Defines whether the renderer should automatically clear its output before rendering.
     * @default true
     */
    autoClear: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
     * @default true
     */
    autoClearColor: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
     * @default true
     */
    autoClearDepth: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
     * @default true
     */
    autoClearStencil: boolean;

    /**
     * Debug configurations.
     * @default { checkShaderErrors: true }
     */
    debug: WebGLDebug;

    /**
     * Defines whether the renderer should sort objects. Default is true.
     * @default true
     */
    sortObjects: boolean;

    /**
     * @default []
     */
    clippingPlanes: readonly Plane[];

    /**
     * @default false
     */
    localClippingEnabled: boolean;

    extensions: WebGLExtensions;

    /**
     * Default is LinearEncoding.
     * @default THREE.LinearEncoding
     * @deprecated Use {@link WebGLRenderer.outputColorSpace .outputColorSpace} in three.js r152+.
     */
    outputEncoding: TextureEncoding;

    /**
     * Color space used for output to HTMLCanvasElement. Supported values are
     * {@link SRGBColorSpace} and {@link LinearSRGBColorSpace}.
     * @default THREE.SRGBColorSpace.
     */
    outputColorSpace: ColorSpace;

    get coordinateSystem(): typeof WebGLCoordinateSystem;

    /**
     * @deprecated Migrate your lighting according to the following guide:
     * https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.
     * @default true
     */
    useLegacyLights: boolean;

    /**
     * @default THREE.NoToneMapping
     */
    toneMapping: ToneMapping;

    /**
     * @default 1
     */
    toneMappingExposure: number;

    info: WebGLInfo;

    shadowMap: WebGLShadowMap;

    pixelRatio: number;

    capabilities: WebGLCapabilities;
    properties: WebGLProperties;
    renderLists: WebGLRenderLists;
    state: WebGLState;

    xr: WebXRManager;

    /**
     * Return the WebGL context.
     */
    getContext(): WebGLRenderingContext | WebGL2RenderingContext;
    getContextAttributes(): any;
    forceContextLoss(): void;
    forceContextRestore(): void;

    /**
     * @deprecated Use {@link WebGLCapabilities#getMaxAnisotropy .capabilities.getMaxAnisotropy()} instead.
     */
    getMaxAnisotropy(): number;

    /**
     * @deprecated Use {@link WebGLCapabilities#precision .capabilities.precision} instead.
     */
    getPrecision(): string;

    getPixelRatio(): number;
    setPixelRatio(value: number): void;

    getDrawingBufferSize(target: Vector2): Vector2;
    setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;

    getSize(target: Vector2): Vector2;

    /**
     * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
     */
    setSize(width: number, height: number, updateStyle?: boolean): void;

    getCurrentViewport(target: Vector4): Vector4;

    /**
     * Copies the viewport into target.
     */
    getViewport(target: Vector4): Vector4;

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * (x, y) is the lower-left corner of the region.
     */
    setViewport(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Copies the scissor area into target.
     */
    getScissor(target: Vector4): Vector4;

    /**
     * Sets the scissor area from (x, y) to (x + width, y + height).
     */
    setScissor(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Returns true if scissor test is enabled; returns false otherwise.
     */
    getScissorTest(): boolean;

    /**
     * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
     */
    setScissorTest(enable: boolean): void;

    /**
     * Sets the custom opaque sort function for the WebGLRenderLists. Pass null to use the default painterSortStable function.
     */
    setOpaqueSort(method: (a: any, b: any) => number): void;

    /**
     * Sets the custom transparent sort function for the WebGLRenderLists. Pass null to use the default reversePainterSortStable function.
     */
    setTransparentSort(method: (a: any, b: any) => number): void;

    /**
     * Returns a THREE.Color instance with the current clear color.
     */
    getClearColor(target: Color): Color;

    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     */
    setClearColor(color: ColorRepresentation, alpha?: number): void;

    /**
     * Returns a float with the current clear alpha. Ranges from 0 to 1.
     */
    getClearAlpha(): number;

    setClearAlpha(alpha: number): void;

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

    clearColor(): void;
    clearDepth(): void;
    clearStencil(): void;
    clearTarget(renderTarget: WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;

    /**
     * @deprecated Use {@link WebGLState#reset .state.reset()} instead.
     */
    resetGLState(): void;
    dispose(): void;

    renderBufferDirect(
        camera: Camera$1,
        scene: Scene,
        geometry: BufferGeometry,
        material: Material,
        object: Object3D,
        geometryGroup: any,
    ): void;

    /**
     * A build in function that can be used instead of requestAnimationFrame. For WebXR projects this function must be used.
     * @param callback The function will be called every available frame. If `null` is passed it will stop any already ongoing animation.
     */
    setAnimationLoop(callback: XRFrameRequestCallback | null): void;

    /**
     * @deprecated Use {@link WebGLRenderer#setAnimationLoop .setAnimationLoop()} instead.
     */
    animate(callback: () => void): void;

    /**
     * Compiles all materials in the scene with the camera. This is useful to precompile shaders before the first rendering.
     */
    compile(scene: Object3D, camera: Camera$1): void;

    /**
     * Render a scene or an object using a camera.
     * The render is done to a previously specified {@link WebGLRenderTarget#renderTarget .renderTarget} set by calling
     * {@link WebGLRenderer#setRenderTarget .setRenderTarget} or to the canvas as usual.
     *
     * By default render buffers are cleared before rendering but you can prevent this by setting the property
     * {@link WebGLRenderer#autoClear autoClear} to false. If you want to prevent only certain buffers being cleared
     * you can set either the {@link WebGLRenderer#autoClearColor autoClearColor},
     * {@link WebGLRenderer#autoClearStencil autoClearStencil} or {@link WebGLRenderer#autoClearDepth autoClearDepth}
     * properties to false. To forcibly clear one ore more buffers call {@link WebGLRenderer#clear .clear}.
     */
    render(scene: Object3D, camera: Camera$1): void;

    /**
     * Returns the current active cube face.
     */
    getActiveCubeFace(): number;

    /**
     * Returns the current active mipmap level.
     */
    getActiveMipmapLevel(): number;

    /**
     * Returns the current render target. If no render target is set, null is returned.
     */
    getRenderTarget(): WebGLRenderTarget | null;

    /**
     * @deprecated Use {@link WebGLRenderer#getRenderTarget .getRenderTarget()} instead.
     */
    getCurrentRenderTarget(): WebGLRenderTarget | null;

    /**
     * Sets the active render target.
     *
     * @param renderTarget The {@link WebGLRenderTarget renderTarget} that needs to be activated. When `null` is given, the canvas is set as the active render target instead.
     * @param activeCubeFace Specifies the active cube side (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) of {@link WebGLCubeRenderTarget}.
     * @param activeMipmapLevel Specifies the active mipmap level.
     */
    setRenderTarget(
        renderTarget: WebGLRenderTarget | WebGLMultipleRenderTargets | null,
        activeCubeFace?: number,
        activeMipmapLevel?: number,
    ): void;

    readRenderTargetPixels(
        renderTarget: WebGLRenderTarget | WebGLMultipleRenderTargets,
        x: number,
        y: number,
        width: number,
        height: number,
        buffer: any,
        activeCubeFaceIndex?: number,
    ): void;

    /**
     * Copies a region of the currently bound framebuffer into the selected mipmap level of the selected texture.
     * This region is defined by the size of the destination texture's mip level, offset by the input position.
     *
     * @param position Specifies the pixel offset from which to copy out of the framebuffer.
     * @param texture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyFramebufferToTexture(position: Vector2, texture: Texture, level?: number): void;

    /**
     * Copies srcTexture to the specified level of dstTexture, offset by the input position.
     *
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture(position: Vector2, srcTexture: Texture, dstTexture: Texture, level?: number): void;

    /**
     * Copies the pixels of a texture in the bounds sourceBox in the desination texture starting from the given position.
     * @param sourceBox Specifies the bounds
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture3D(
        sourceBox: Box3,
        position: Vector3,
        srcTexture: Texture,
        dstTexture: Data3DTexture | DataArrayTexture,
        level?: number,
    ): void;

    /**
     * Initializes the given texture. Can be used to preload a texture rather than waiting until first render (which can cause noticeable lags due to decode and GPU upload overhead).
     *
     * @param texture The texture to Initialize.
     */
    initTexture(texture: Texture): void;

    /**
     * Can be used to reset the internal WebGL state.
     */
    resetState(): void;

    /**
     * @deprecated Use {@link WebGLRenderer#xr .xr} instead.
     */
    vr: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#enabled .shadowMap.enabled} instead.
     */
    shadowMapEnabled: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#type .shadowMap.type} instead.
     */
    shadowMapType: ShadowMapType;

    /**
     * @deprecated Use {@link WebGLShadowMap#cullFace .shadowMap.cullFace} instead.
     */
    shadowMapCullFace: CullFace;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_float' )} instead.
     */
    supportsFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_half_float' )} instead.
     */
    supportsHalfFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_standard_derivatives' )} instead.
     */
    supportsStandardDerivatives(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_s3tc' )} instead.
     */
    supportsCompressedTextureS3TC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_pvrtc' )} instead.
     */
    supportsCompressedTexturePVRTC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'EXT_blend_minmax' )} instead.
     */
    supportsBlendMinMax(): any;

    /**
     * @deprecated Use {@link WebGLCapabilities#vertexTextures .capabilities.vertexTextures} instead.
     */
    supportsVertexTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'ANGLE_instanced_arrays' )} instead.
     */
    supportsInstancedArrays(): any;

    /**
     * @deprecated Use {@link WebGLRenderer#setScissorTest .setScissorTest()} instead.
     */
    enableScissorTest(boolean: any): any;
}

declare class Ray {
    constructor(origin?: Vector3, direction?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    origin: Vector3;

    /**
     * @default new THREE.Vector3( 0, 0, - 1 )
     */
    direction: Vector3;

    set(origin: Vector3, direction: Vector3): Ray;
    clone(): this;
    copy(ray: Ray): this;
    at(t: number, target: Vector3): Vector3;
    lookAt(v: Vector3): Ray;
    recast(t: number): Ray;
    closestPointToPoint(point: Vector3, target: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    distanceSqToPoint(point: Vector3): number;
    distanceSqToSegment(
        v0: Vector3,
        v1: Vector3,
        optionalPointOnRay?: Vector3,
        optionalPointOnSegment?: Vector3,
    ): number;
    intersectSphere(sphere: Sphere, target: Vector3): Vector3 | null;
    intersectsSphere(sphere: Sphere): boolean;
    distanceToPlane(plane: Plane): number;
    intersectPlane(plane: Plane, target: Vector3): Vector3 | null;
    intersectsPlane(plane: Plane): boolean;
    intersectBox(box: Box3, target: Vector3): Vector3 | null;
    intersectsBox(box: Box3): boolean;
    intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, target: Vector3): Vector3 | null;
    applyMatrix4(matrix4: Matrix4): Ray;
    equals(ray: Ray): boolean;

    /**
     * @deprecated Use {@link Ray#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;

    /**
     * @deprecated Use {@link Ray#intersectsPlane .intersectsPlane()} instead.
     */
    isIntersectionPlane(p: any): any;

    /**
     * @deprecated Use {@link Ray#intersectsSphere .intersectsSphere()} instead.
     */
    isIntersectionSphere(s: any): any;
}

interface Face {
    a: number;
    b: number;
    c: number;
    normal: Vector3;
    materialIndex: number;
}

interface Intersection<TIntersected extends Object3D = Object3D> {
    /** Distance between the origin of the ray and the intersection */
    distance: number;
    distanceToRay?: number | undefined;
    /** Point of intersection, in world coordinates */
    point: Vector3;
    index?: number | undefined;
    /** Intersected face */
    face?: Face | null | undefined;
    /** Index of the intersected face */
    faceIndex?: number | undefined;
    /** The intersected object */
    object: TIntersected;
    uv?: Vector2 | undefined;
    uv1?: Vector2 | undefined;
    normal?: Vector3;
    /** The index number of the instance where the ray intersects the {@link THREE.InstancedMesh | InstancedMesh } */
    instanceId?: number | undefined;
}

interface RaycasterParameters {
    Mesh?: any;
    Line?: { threshold: number } | undefined;
    Line2?: { threshold: number } | undefined;
    LOD?: any;
    Points?: { threshold: number } | undefined;
    Sprite?: any;
}

/**
 * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting | raycasting}
 * @remarks
 * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
 * @example
 * ```typescript
 * const raycaster = new THREE.Raycaster();
 * const pointer = new THREE.Vector2();
 *
 * function onPointerMove(event) {
 *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
 *     pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
 *     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
 * }
 *
 * function render() {
 *     // update the picking ray with the camera and pointer position
 *     raycaster.setFromCamera(pointer, camera);
 *     // calculate objects intersecting the picking ray
 *     const intersects = raycaster.intersectObjects(scene.children);
 *     for (let i = 0; i & lt; intersects.length; i++) {
 *         intersects[i].object.material.color.set(0xff0000);
 *     }
 *     renderer.render(scene, camera);
 * }
 * window.addEventListener('pointermove', onPointerMove);
 * window.requestAnimationFrame(render);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | Raycasting to a Mesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | Raycasting to a Mesh in using an OrthographicCamera}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_buffergeometry | Raycasting to a Mesh with BufferGeometry}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | Raycasting to a InstancedMesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_lines | Raycasting to a Line}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_raycasting_points | Raycasting to Points}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain_raycast | Terrain raycasting}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_voxelpainter | Raycasting to paint voxels}
 * @see Example: {@link https://threejs.org/examples/#webgl_raycaster_texture | Raycast to a Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Raycaster | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js | Source}
 */
declare class Raycaster {
    /**
     * This creates a new {@link Raycaster} object.
     * @param origin The origin vector where the ray casts from. Default `new Vector3()`
     * @param direction The direction vector that gives direction to the ray. Should be normalized. Default `new Vector3(0, 0, -1)`
     * @param near All results returned are further away than near. Near can't be negative. Expects a `Float`. Default `0`
     * @param far All results returned are closer than far. Far can't be lower than near. Expects a `Float`. Default `Infinity`
     */
    constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);

    /**
     * The {@link THREE.RaycasterRay | Ray} used for the raycasting.
     */
    ray: Ray;

    /**
     * The near factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be smaller than the far property.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    near: number;

    /**
     * The far factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be larger than the near property.
     * @remarks Expects a `Float`
     * @defaultValue `Infinity`
     */
    far: number;

    /**
     * The camera to use when raycasting against view-dependent objects such as billboarded objects like {@link THREE.Sprites | Sprites}.
     * This field can be set manually or is set when calling  {@link setFromCamera}.
     * @defaultValue `null`
     */
    camera: Camera$1;

    /**
     * Used by {@link Raycaster} to selectively ignore 3D objects when performing intersection tests.
     * The following code example ensures that only 3D objects on layer `1` will be honored by the instance of Raycaster.
     * ```
     * raycaster.layers.set( 1 );
     * object.layers.enable( 1 );
     * ```
     * @defaultValue `new THREE.Layers()` - See {@link THREE.Layers | Layers}.
     */
    layers: Layers;

    /**
     * An data object where threshold is the precision of the {@link Raycaster} when intersecting objects, in world units.
     * @defaultValue `{ Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }`
     */
    params: RaycasterParameters;

    /**
     * Updates the ray with a new origin and direction
     * @remarks
     * Please note that this method only copies the values from the arguments.
     * @param origin The origin vector where the ray casts from.
     * @param direction The normalized direction vector that gives direction to the ray.
     */
    set(origin: Vector3, direction: Vector3): void;

    /**
     * Updates the ray with a new origin and direction.
     * @param coords 2D coordinates of the mouse, in normalized device coordinates (NDC)---X and Y components should be between -1 and 1.
     * @param camera camera from which the ray should originate
     */
    setFromCamera(coords: Vector2, camera: Camera$1): void;

    /**
     * Checks all intersection between the ray and the object with or without the descendants
     * @remarks Intersections are returned sorted by distance, closest first
     * @remarks {@link Raycaster} delegates to the {@link Object3D.raycast | raycast} method of the passed object, when evaluating whether the ray intersects the object or not
     * This allows {@link THREE.Mesh | meshes} to respond differently to ray casting than {@link THREE.Line | lines} and {@link THREE.Points | pointclouds}.
     * **Note** that for meshes, faces must be pointed towards the origin of the {@link Raycaster.ray | ray} in order to be detected;
     * intersections of the ray passing through the back of a face will not be detected
     * To raycast against both faces of an object, you'll want to set the {@link Mesh.material | material}'s {@link Material.side | side} property to `THREE.DoubleSide`.
     * @see {@link intersectObjects | .intersectObjects()}.
     * @param object The object to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants. Otherwise it only checks intersection with the object. Default `true`
     * @param optionalTarget Target to set the result. Otherwise a new {@link Array | Array} is instantiated.
     * If set, you must clear this array prior to each call (i.e., array.length = 0;). Default `[]`
     * @returns An array of intersections is returned.
     */
    intersectObject<TIntersected extends Object3D>(
        object: Object3D,
        recursive?: boolean,
        optionalTarget?: Array<Intersection<TIntersected>>,
    ): Array<Intersection<TIntersected>>;

    /**
     * Checks all intersection between the ray and the objects with or without the descendants
     * @remarks Intersections are returned sorted by distance, closest first
     * @remarks Intersections are of the same form as those returned by {@link intersectObject | .intersectObject()}.
     * @remarks {@link Raycaster} delegates to the {@link Object3D.raycast | raycast} method of the passed object, when evaluating whether the ray intersects the object or not
     * This allows {@link THREE.Mesh | meshes} to respond differently to ray casting than {@link THREE.Line | lines} and {@link THREE.Points | pointclouds}.
     * **Note** that for meshes, faces must be pointed towards the origin of the {@link Raycaster.ray | ray} in order to be detected;
     * intersections of the ray passing through the back of a face will not be detected
     * To raycast against both faces of an object, you'll want to set the {@link Mesh.material | material}'s {@link Material.side | side} property to `THREE.DoubleSide`.
     * @see {@link intersectObject | .intersectObject()}.
     * @param objects The objects to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants of the objects. Otherwise it only checks intersection with the objects. Default `true`
     * @param optionalTarget Target to set the result. Otherwise a new {@link Array | Array} is instantiated.
     * If set, you must clear this array prior to each call (i.e., array.length = 0;). Default `[]`
     * @returns An array of intersections is returned.
     */
    intersectObjects<TIntersected extends Object3D>(
        objects: Object3D[],
        recursive?: boolean,
        optionalTarget?: Array<Intersection<TIntersected>>,
    ): Array<Intersection<TIntersected>>;
}

interface Object3DEventMap {
    added: {};
    removed: {};
}

/**
 * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3D space.
 * @remarks Note that this can be used for grouping objects via the {@link THREE.Object3D.add | .add()} method which adds the object as a child,
 * however it is better to use {@link THREE.Group | Group} for this.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3D | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js | Source}
 */
declare class Object3D<TEventMap extends Object3DEventMap = Object3DEventMap> extends EventDispatcher<TEventMap> {
    /**
     * This creates a new {@link Object3D} object.
     */
    constructor();

    /**
     * Flag to check if a given object is of type {@link Object3D}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isObject3D: true;

    /**
     * Unique number for this {@link Object3D} instance.
     * @remarks Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
     * @remarks Expects a `Integer`
     */
    readonly id: number;

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    name: string;

    /**
     * A Read-only _string_ to check `this` object type.
     * @remarks This can be used to find a specific type of Object3D in a scene.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Object3D`
     */
    readonly type: string | 'Object3D';

    /**
     * Object's parent in the {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}.
     * @remarks An object can have at most one parent.
     * @defaultValue `null`
     */
    parent: Object3D | null;

    /**
     * Array with object's children.
     * @see {@link THREE.Object3DGroup | Group} for info on manually grouping objects.
     * @defaultValue `[]`
     */

    children: Object3D[];

    /**
     * This is used by the {@link lookAt | lookAt} method, for example, to determine the orientation of the result.
     * @defaultValue {@link DEFAULT_UP | Object3D.DEFAULT_UP} - that is `(0, 1, 0)`.
     */
    up: Vector3;

    /**
     * Object's local position.
     * @defaultValue `new THREE.Vector3()` - that is `(0, 0, 0)`.
     */
    readonly position: Vector3;

    /**
     * Object's local rotation ({@link https://en.wikipedia.org/wiki/Euler_angles | Euler angles}), in radians.
     * @defaultValue `new THREE.Euler()` - that is `(0, 0, 0, Euler.DEFAULT_ORDER)`.
     */
    readonly rotation: Euler;

    /**
     * Object's local rotation as a {@link THREE.Quaternion | Quaternion}.
     * @defaultValue `new THREE.Quaternion()` - that is `(0,  0, 0, 1)`.
     */
    readonly quaternion: Quaternion;

    /**
     * The object's local scale.
     * @defaultValue `new THREE.Vector3( 1, 1, 1 )`
     */
    readonly scale: Vector3;

    /**
     * @defaultValue `new THREE.Matrix4()`
     */
    readonly modelViewMatrix: Matrix4;

    /**
     * @defaultValue `new THREE.Matrix3()`
     */
    readonly normalMatrix: Matrix3;

    /**
     * The local transform matrix.
     * @defaultValue `new THREE.Matrix4()`
     */
    matrix: Matrix4;

    /**
     * The global transform of the object.
     * @remarks If the {@link Object3D} has no parent, then it's identical to the local transform {@link THREE.Object3D.matrix | .matrix}.
     * @defaultValue `new THREE.Matrix4()`
     */
    matrixWorld: Matrix4;

    /**
     * When this is set, it calculates the matrix of position, (rotation or quaternion) and
     * scale every frame and also recalculates the matrixWorld property.
     * @defaultValue {@link DEFAULT_MATRIX_AUTO_UPDATE} - that is `(true)`.
     */
    matrixAutoUpdate: boolean;

    /**
     * If set, then the renderer checks every frame if the object and its children need matrix updates.
     * When it isn't, then you have to maintain all matrices in the object and its children yourself.
     * @defaultValue {@link DEFAULT_MATRIX_WORLD_AUTO_UPDATE} - that is `(true)`.
     */
    matrixWorldAutoUpdate: boolean;

    /**
     * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
     * @defaultValue `false`
     */
    matrixWorldNeedsUpdate: boolean;

    /**
     * The layer membership of the object.
     * @remarks The object is only visible if it has at least one layer in common with the {@link THREE.Object3DCamera | Camera} in use.
     * @remarks This property can also be used to filter out unwanted objects in ray-intersection tests when using {@link THREE.Raycaster | Raycaster}.
     * @defaultValue `new THREE.Layers()`
     */
    layers: Layers;

    /**
     * Object gets rendered if `true`.
     * @defaultValue `true`
     */
    visible: boolean;

    /**
     * Whether the object gets rendered into shadow map.
     * @defaultValue `false`
     */
    castShadow: boolean;

    /**
     * Whether the material receives shadows.
     * @defaultValue `false`
     */
    receiveShadow: boolean;

    /**
     * When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
     * If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.
     * @defaultValue `true`
     */
    frustumCulled: boolean;

    /**
     * This value allows the default rendering order of {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}
     * objects to be overridden although opaque and transparent objects remain sorted independently.
     * @remarks When this property is set for an instance of {@link Group | Group}, all descendants objects will be sorted and rendered together.
     * @remarks Sorting is from lowest to highest renderOrder.
     * @defaultValue `0`
     */
    renderOrder: number;

    /**
     * Array with object's animation clips.
     * @defaultValue `[]`
     */
    animations: AnimationClip[];

    /**
     * An object that can be used to store custom data about the {@link Object3D}.
     * @remarks It should not hold references to _functions_ as these **will not** be cloned.
     * @default `{}`
     */
    userData: { [key: string]: any }; // TODO Replace this to a Record?

    /**
     * Custom depth material to be used when rendering to the depth map.
     * @remarks Can only be used in context of meshes.
     * @remarks When shadow-casting with a {@link THREE.DirectionalLight | DirectionalLight} or {@link THREE.SpotLight | SpotLight},
     * if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.
     * @defaultValue `undefined`
     */
    customDepthMaterial?: Material | undefined;

    /**
     * Same as {@link customDepthMaterial}, but used with {@link THREE.Object3DPointLight | PointLight}.
     * @defaultValue `undefined`
     */
    customDistanceMaterial?: Material | undefined;

    /**
     * An optional callback that is executed immediately before a 3D object is rendered.
     * @remarks This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
     * @remarks Please notice that this callback is only executed for `renderable` 3D objects.
     * Meaning 3D objects which define their visual appearance with geometries and materials like
     * instances of {@link THREE.Object3DMesh | Mesh}, {@link THREE.Object3DLine | Line}, {@link THREE.Object3DPoints | Points} or {@link THREE.Object3DSprite | Sprite}.
     * Instances of {@link THREE.Object3DObject3D | Object3D}, {@link THREE.Object3DGroup | Group} or {@link THREE.Object3DBone | Bone}
     * are not renderable and thus this callback is not executed for such objects.
     * @defaultValue `() => {}`
     */
    onBeforeRender: (
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera$1,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ) => void;

    /**
     * An optional callback that is executed immediately after a 3D object is rendered.
     * @remarks This function is called with the following parameters: renderer, scene, camera, geometry, material, group.
     * @remarks Please notice that this callback is only executed for `renderable` 3D objects.
     * Meaning 3D objects which define their visual appearance with geometries and materials like
     * instances of {@link THREE.Object3DMesh | Mesh}, {@link THREE.Object3DLine | Line}, {@link THREE.Object3DPoints | Points} or {@link THREE.Object3DSprite | Sprite}.
     * Instances of {@link THREE.Object3DObject3D | Object3D}, {@link THREE.Object3DGroup | Group} or {@link THREE.Object3DBone | Bone}
     * are not renderable and thus this callback is not executed for such objects.
     * @defaultValue `() => {}`
     */
    onAfterRender: (
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera$1,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ) => void;

    /**
     * The default {@link up} direction for objects, also used as the default position for {@link THREE.DirectionalLight | DirectionalLight},
     * {@link THREE.HemisphereLight | HemisphereLight} and {@link THREE.Spotlight | Spotlight} (which creates lights shining from the top down).
     * @defaultValue `new THREE.Vector3( 0, 1, 0)`
     */
    static DEFAULT_UP: Vector3;

    /**
     * The default setting for {@link matrixAutoUpdate} for newly created Object3Ds.
     * @defaultValue `true`
     */
    static DEFAULT_MATRIX_AUTO_UPDATE: boolean;

    /**
     * The default setting for {@link matrixWorldAutoUpdate} for newly created Object3Ds.
     * @defaultValue `true`
     */
    static DEFAULT_MATRIX_WORLD_AUTO_UPDATE: boolean;

    /**
     * Applies the matrix transform to the object and updates the object's position, rotation and scale.
     * @param matrix
     */
    applyMatrix4(matrix: Matrix4): void;

    /**
     * Applies the rotation represented by the quaternion to the object.
     * @param quaternion
     */
    applyQuaternion(quaternion: Quaternion): this;

    /**
     * Calls {@link THREE.Quaternion.setFromAxisAngle | setFromAxisAngle}({@link axis}, {@link angle}) on the {@link quaternion | .quaternion}.
     * @param axis A normalized vector in object space.
     * @param angle Angle in radians. Expects a `Float`
     */
    setRotationFromAxisAngle(axis: Vector3, angle: number): void;

    /**
     * Calls {@link THREE.Quaternion.setFromEuler | setFromEuler}({@link euler}) on the {@link quaternion | .quaternion}.
     * @param euler Euler angle specifying rotation amount.
     */
    setRotationFromEuler(euler: Euler): void;

    /**
     * Calls {@link THREE.Quaternion.setFromRotationMatrix | setFromRotationMatrix}({@link m}) on the {@link quaternion | .quaternion}.
     * @remarks Note that this assumes that the upper 3x3 of m is a pure rotation matrix (i.e, unscaled).
     * @param m Rotate the quaternion by the rotation component of the matrix.
     */
    setRotationFromMatrix(m: Matrix4): void;

    /**
     * Copy the given {@link THREE.Quaternion | Quaternion} into {@link quaternion | .quaternion}.
     * @param q Normalized Quaternion.
     */
    setRotationFromQuaternion(q: Quaternion): void;

    /**
     * Rotate an object along an axis in object space.
     * @remarks The axis is assumed to be normalized.
     * @param axis A normalized vector in object space.
     * @param angle The angle in radians. Expects a `Float`
     */
    rotateOnAxis(axis: Vector3, angle: number): this;

    /**
     * Rotate an object along an axis in world space.
     * @remarks The axis is assumed to be normalized
     * @remarks Method Assumes no rotated parent.
     * @param axis A normalized vector in world space.
     * @param angle The angle in radians. Expects a `Float`
     */
    rotateOnWorldAxis(axis: Vector3, angle: number): this;

    /**
     * Rotates the object around _x_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateX(angle: number): this;

    /**
     * Rotates the object around _y_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateY(angle: number): this;

    /**
     * Rotates the object around _z_ axis in local space.
     * @param rad The angle to rotate in radians. Expects a `Float`
     */
    rotateZ(angle: number): this;

    /**
     * Translate an object by distance along an axis in object space
     * @remarks The axis is assumed to be normalized.
     * @param axis A normalized vector in object space.
     * @param distance The distance to translate. Expects a `Float`
     */
    translateOnAxis(axis: Vector3, distance: number): this;

    /**
     * Translates object along x axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateX(distance: number): this;

    /**
     * Translates object along _y_ axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateY(distance: number): this;

    /**
     * Translates object along _z_ axis in object space by {@link distance} units.
     * @param distance Expects a `Float`
     */
    translateZ(distance: number): this;

    /**
     * Converts the vector from this object's local space to world space.
     * @param vector A vector representing a position in this object's local space.
     */
    localToWorld(vector: Vector3): Vector3;

    /**
     * Converts the vector from world space to this object's local space.
     * @param vector A vector representing a position in world space.
     */
    worldToLocal(vector: Vector3): Vector3;

    /**
     * Rotates the object to face a point in world space.
     * @remarks This method does not support objects having non-uniformly-scaled parent(s).
     * @param vector A vector representing a position in world space to look at.
     */
    lookAt(vector: Vector3): void;
    /**
     * Rotates the object to face a point in world space.
     * @remarks This method does not support objects having non-uniformly-scaled parent(s).
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    lookAt(x: number, y: number, z: number): void;

    /**
     * Adds another {@link Object3D} as child of this {@link Object3D}.
     * @remarks An arbitrary number of objects may be added
     * @remarks Any current parent on an {@link object} passed in here will be removed, since an {@link Object3D} can have at most one parent.
     * @see {@link attach}
     * @see {@link THREE.Group | Group} for info on manually grouping objects.
     * @param object
     */
    add(...object: Object3D[]): this;

    /**
     * Removes a {@link Object3D} as child of this {@link Object3D}.
     * @remarks An arbitrary number of objects may be removed.
     * @see {@link THREE.Group | Group} for info on manually grouping objects.
     * @param object
     */
    remove(...object: Object3D[]): this;

    /**
     * Removes this object from its current parent.
     */
    removeFromParent(): this;

    /**
     * Removes all child objects.
     */
    clear(): this;

    /**
     * Adds a {@link Object3D} as a child of this, while maintaining the object's world transform.
     * @remarks Note: This method does not support scene graphs having non-uniformly-scaled nodes(s).
     * @see {@link add}
     * @param object
     */
    attach(object: Object3D): this;

    /**
     * Searches through an object and its children, starting with the object itself, and returns the first with a matching id.
     * @remarks Note that ids are assigned in chronological order: 1, 2, 3, ..., incrementing by one for each new object.
     * @see {@link id}
     * @param id Unique number of the object instance. Expects a `Integer`
     */
    getObjectById(id: number): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself, and returns the first with a matching name.
     * @remarks Note that for most objects the name is an empty string by default
     * @remarks You will have to set it manually to make use of this method.
     * @param name String to match to the children's Object3D.name property.
     */
    getObjectByName(name: string): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself,
     * and returns the first with a property that matches the value given.
     *
     * @param name - the property name to search for.
     * @param value - value of the given property.
     */
    getObjectByProperty(name: string, value: any): Object3D | undefined;

    /**
     * Searches through an object and its children, starting with the object itself,
     * and returns the first with a property that matches the value given.
     * @param name The property name to search for.
     * @param value Value of the given property.
     */
    getObjectsByProperty(name: string, value: any): Object3D[];

    /**
     * Returns a vector representing the position of the object in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldPosition(target: Vector3): Vector3;

    /**
     * Returns a quaternion representing the rotation of the object in world space.
     * @param target The result will be copied into this Quaternion.
     */
    getWorldQuaternion(target: Quaternion): Quaternion;

    /**
     * Returns a vector of the scaling factors applied to the object for each axis in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldScale(target: Vector3): Vector3;

    /**
     * Returns a vector representing the direction of object's positive z-axis in world space.
     * @param target The result will be copied into this Vector3.
     */
    getWorldDirection(target: Vector3): Vector3;

    /**
     * Abstract (empty) method to get intersections between a casted ray and this object
     * @remarks Subclasses such as {@link THREE.Mesh | Mesh}, {@link THREE.Line | Line}, and {@link THREE.Points | Points} implement this method in order to use raycasting.
     * @see {@link THREE.Raycaster | Raycaster}
     * @param raycaster
     * @param intersects
     * @defaultValue `() => {}`
     */
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;

    /**
     * Executes the callback on this object and all descendants.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverse(callback: (object: Object3D) => any): void;

    /**
     * Like traverse, but the callback will only be executed for visible objects
     * @remarks Descendants of invisible objects are not traversed.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverseVisible(callback: (object: Object3D) => any): void;

    /**
     * Executes the callback on all ancestors.
     * @remarks Note: Modifying the scene graph inside the callback is discouraged.
     * @param callback A function with as first argument an {@link Object3D} object.
     */
    traverseAncestors(callback: (object: Object3D) => any): void;

    /**
     * Updates local transform.
     */
    updateMatrix(): void;

    /**
     * Updates the global transform of the object.
     * And will update the object descendants if {@link matrixWorldNeedsUpdate | .matrixWorldNeedsUpdate} is set to true or if the {@link force} parameter is set to `true`.
     * @param force A boolean that can be used to bypass {@link matrixWorldAutoUpdate | .matrixWorldAutoUpdate}, to recalculate the world matrix of the object and descendants on the current frame.
     * Useful if you cannot wait for the renderer to update it on the next frame, assuming {@link matrixWorldAutoUpdate | .matrixWorldAutoUpdate} set to `true`.
     */
    updateMatrixWorld(force?: boolean): void;

    /**
     * Updates the global transform of the object.
     * @param updateParents Recursively updates global transform of ancestors.
     * @param updateChildren Recursively updates global transform of descendants.
     */
    updateWorldMatrix(updateParents: boolean, updateChildren: boolean): void;

    /**
     * Convert the object to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 | JSON Object/Scene format}.
     * @param meta Object containing metadata such as materials, textures or images for the object.
     */
    toJSON(meta?: { geometries: any; materials: any; textures: any; images: any }): any;

    /**
     * Returns a clone of `this` object and optionally all descendants.
     * @param recursive If true, descendants of the object are also cloned. Default `true`
     */
    clone(recursive?: boolean): this;

    /**
     * Copy the given object into this object
     * @remarks Note: event listeners and user-defined callbacks ({@link onAfterRender | .onAfterRender} and {@link onBeforeRender | .onBeforeRender}) are not copied.
     * @param source
     * @param recursive If true, descendants of the object are also copied. Default `true`
     */
    copy(source: this, recursive?: boolean): this;
}

/**
 * Abstract base class for cameras
 * @remarks
 * This class should always be inherited when you build a new camera.
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
 */
declare class Camera$1 extends Object3D {
    /**
     * @remarks
     * Note that this class is not intended to be called directly; you probably want a
     * {@link THREE.PerspectiveCamera | PerspectiveCamera} or
     * {@link THREE.OrthographicCamera | OrthographicCamera} instead.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Camera}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCamera: true;

    /**
     * @override
     * @defaultValue `Camera`
     */
    override readonly type: string | 'Camera';

    /**
     * @override
     * The {@link THREE.Layers | layers} that the {@link Camera} is a member of.
     * @remarks Objects must share at least one layer with the {@link Camera} to be n when the camera's viewpoint is rendered.
     * @defaultValue `new THREE.Layers()`
     */
    override layers: Layers;

    /**
     * This is the inverse of matrixWorld.
     * @remarks MatrixWorld contains the Matrix which has the world transform of the {@link Camera} .
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    matrixWorldInverse: Matrix4;

    /**
     * This is the matrix which contains the projection.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    projectionMatrix: Matrix4;

    /**
     * This is the inverse of projectionMatrix.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    projectionMatrixInverse: Matrix4;

    coordinateSystem: CoordinateSystem;

    /**
     * Returns a {@link THREE.Vector3 | Vector3} representing the world space direction in which the {@link Camera} is looking.
     * @remarks Note: A {@link Camera} looks down its local, negative z-axis.
     * @param target The result will be copied into this Vector3.
     */
    getWorldDirection(target: Vector3): Vector3;
}

declare class Spherical {
    constructor(radius?: number, phi?: number, theta?: number);

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 0
     */
    phi: number;

    /**
     * @default 0
     */
    theta: number;

    set(radius: number, phi: number, theta: number): this;
    clone(): this;
    copy(other: Spherical): this;
    makeSafe(): this;
    setFromVector3(v: Vector3): this;
    setFromCartesianCoords(x: number, y: number, z: number): this;
}

declare class Cylindrical {
    constructor(radius?: number, theta?: number, y?: number);

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 0
     */
    theta: number;

    /**
     * @default 0
     */
    y: number;

    clone(): this;
    copy(other: Cylindrical): this;
    set(radius: number, theta: number, y: number): this;
    setFromVector3(vec3: Vector3): this;
    setFromCartesianCoords(x: number, y: number, z: number): this;
}

type Vector3Tuple = [number, number, number];

/**
 * 3D vector. ( class Vector3 implements Vector<Vector3> )
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 );
 * const b = new THREE.Vector3( 0, 1, 0 );
 * const c = new THREE.Vector3();
 * c.crossVectors( a, b );
 */
declare class Vector3 implements Vector {
    constructor(x?: number, y?: number, z?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;
    readonly isVector3: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number, z: number): this;

    /**
     * Sets all values of this vector.
     */
    setScalar(scalar: number): this;

    /**
     * Sets x value of this vector.
     */
    setX(x: number): Vector3;

    /**
     * Sets y value of this vector.
     */
    setY(y: number): Vector3;

    /**
     * Sets z value of this vector.
     */
    setZ(z: number): Vector3;

    setComponent(index: number, value: number): this;

    /**
     * Sets this vector's {@link x}, {@link y} and {@link z} components from the r, g, and b components of the specified
     * {@link Color | color}.
     */
    setFromColor(color: Color): this;

    getComponent(index: number): number;

    /**
     * Clones this vector.
     */
    clone(): this;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector3): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector3): this;

    addScalar(s: number): this;

    addScaledVector(v: Vector3, s: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector3, b: Vector3): this;

    /**
     * Subtracts v from this vector.
     */
    sub(a: Vector3): this;

    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector3, b: Vector3): this;

    multiply(v: Vector3): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(s: number): this;

    multiplyVectors(a: Vector3, b: Vector3): this;

    applyEuler(euler: Euler): this;

    applyAxisAngle(axis: Vector3, angle: number): this;

    applyMatrix3(m: Matrix3): this;

    applyNormalMatrix(m: Matrix3): this;

    applyMatrix4(m: Matrix4): this;

    applyQuaternion(q: Quaternion): this;

    project(camera: Camera$1): this;

    unproject(camera: Camera$1): this;

    transformDirection(m: Matrix4): this;

    divide(v: Vector3): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    min(v: Vector3): this;

    max(v: Vector3): this;

    clamp(min: Vector3, max: Vector3): this;

    clampScalar(min: number, max: number): this;

    clampLength(min: number, max: number): this;

    floor(): this;

    ceil(): this;

    round(): this;

    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector3): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * Computes Manhattan length of this vector.
     * http://en.wikipedia.org/wiki/Taxicab_geometry
     *
     * @deprecated Use {@link Vector3#manhattanLength .manhattanLength()} instead.
     */
    lengthManhattan(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v: Vector3): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;

    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(l: number): this;
    lerp(v: Vector3, alpha: number): this;

    lerpVectors(v1: Vector3, v2: Vector3, alpha: number): this;

    /**
     * Sets this vector to cross product of itself and v.
     */
    cross(a: Vector3): this;

    /**
     * Sets this vector to cross product of a and b.
     */
    crossVectors(a: Vector3, b: Vector3): this;
    projectOnVector(v: Vector3): this;
    projectOnPlane(planeNormal: Vector3): this;
    reflect(vector: Vector3): this;
    angleTo(v: Vector3): number;

    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v: Vector3): number;

    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v: Vector3): number;

    /**
     * @deprecated Use {@link Vector3#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    distanceToManhattan(v: Vector3): number;

    setFromSpherical(s: Spherical): this;
    setFromSphericalCoords(r: number, phi: number, theta: number): this;
    setFromCylindrical(s: Cylindrical): this;
    setFromCylindricalCoords(radius: number, theta: number, y: number): this;
    setFromMatrixPosition(m: Matrix4): this;
    setFromMatrixScale(m: Matrix4): this;
    setFromMatrixColumn(matrix: Matrix4, index: number): this;
    setFromMatrix3Column(matrix: Matrix3, index: number): this;

    /**
     * Sets this vector's {@link x}, {@link y} and {@link z} components from the x, y, and z components of the specified {@link Euler Euler Angle}.
     */
    setFromEuler(e: Euler): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector3): boolean;

    /**
     * Sets this vector's x, y and z value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z], or copies x, y and z into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector3Tuple, offset?: 0): Vector3Tuple;

    /**
     * Copies x, y and z into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): this;

    /**
     * Sets this vector's x, y and z from Math.random
     */
    random(): this;

    randomDirection(): this;

    /**
     * Iterating through a Vector3 instance will yield its components (x, y, z) in the corresponding order.
     */
    [Symbol.iterator](): Iterator<number>;
}

/**
 * A {@link Bone} which is part of a {@link THREE.Skeleton | Skeleton}
 * @remarks
 * The skeleton in turn is used by the {@link THREE.SkinnedMesh | SkinnedMesh}
 * Bones are almost identical to a blank {@link THREE.Object3D | Object3D}.
 * @example
 * ```typescript
 * const root = new THREE.Bone();
 * const child = new THREE.Bone();
 * root.add(child);
 * child.position.y = 5;
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Bone | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js | Source}
 */
declare class Bone extends Object3D {
    /**
     * Creates a new {@link Bone}.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Bone}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isBone: true;

    /**
     * @override
     * @defaultValue `Bone`
     */
    override readonly type: string | 'Bone';
}

interface MorphTarget {
    name: string;
    vertices: Vector3[];
}

declare class AnimationClip {
    constructor(name?: string, duration?: number, tracks?: KeyframeTrack[], blendMode?: AnimationBlendMode);

    name: string;
    tracks: KeyframeTrack[];

    /**
     * @default THREE.NormalAnimationBlendMode
     */
    blendMode: AnimationBlendMode;

    /**
     * @default -1
     */
    duration: number;
    uuid: string;
    results: any[];

    resetDuration(): AnimationClip;
    trim(): AnimationClip;
    validate(): boolean;
    optimize(): AnimationClip;
    clone(): this;
    toJSON(clip: AnimationClip): any;

    static CreateFromMorphTargetSequence(
        name: string,
        morphTargetSequence: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip;
    static findByName(clipArray: AnimationClip[], name: string): AnimationClip;
    static CreateClipsFromMorphTargetSequences(
        morphTargets: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip[];
    static parse(json: any): AnimationClip;
    static parseAnimation(animation: any, bones: Bone[]): AnimationClip;
    static toJSON(clip: AnimationClip): any;
}

/**
 * Creates a cube texture made up of six images.
 * @remarks
 * {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}.
 * The only differences are that the images are an array of _6_ images as opposed to a single image,
 * and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping}
 * @example
 * ```typescript
 * const loader = new THREE.CubeTextureLoader();
 * loader.setPath('textures/cube/pisa/');
 * const textureCube = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffffff,
 *     envMap: textureCube
 * });
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CubeTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CubeTexture.js | Source}
 */
declare class CubeTexture extends Texture {
    /**
     * This creates a new {@link THREE.CubeTexture | CubeTexture} object.
     * @param images
     * @param mapping See {@link CubeTexture.mapping | .mapping}. Default {@link THREE.CubeReflectionMapping}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
     */
    constructor(
        images?: any[], // HTMLImageElement or HTMLCanvasElement
        mapping?: CubeTextureMapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        colorSpace?: ColorSpace,
    );

    /**
     * Read-only flag to check if a given object is of type {@link CubeTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCubeTexture: true;

    /**
     * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
     * @see {@link Texture.image}
     */
    get image(): any;
    set image(data: any);

    /**
     * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
     * @see {@link Texture.image}
     */
    get images(): any;
    set images(data: any);

    /**
     * @inheritDoc
     * @defaultValue {@link THREE.CubeReflectionMapping}
     */
    mapping: CubeTextureMapping;

    /**
     * @inheritDoc
     * @defaultValue `false`
     */
    flipY: boolean;
}

/**
 * An abstract base class for creating a {@link Curve} object that contains methods for interpolation
 * @remarks
 * For an array of Curves see {@link THREE.CurvePath | CurvePath}.
 * @remarks
 * This following curves inherit from THREE.Curve:
 *
 * **2D curves**
 *  - {@link THREE.ArcCurve}
 *  - {@link THREE.CubicBezierCurve}
 *  - {@link THREE.EllipseCurve}
 *  - {@link THREE.LineCurve}
 *  - {@link THREE.QuadraticBezierCurve}
 *  - {@link THREE.SplineCurve}
 *
 * **3D curves**
 *  - {@link THREE.CatmullRomCurve3}
 *  - {@link THREE.CubicBezierCurve3}
 *  - {@link THREE.LineCurve3}
 *  - {@link THREE.QuadraticBezierCurve3}
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Curve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Curve.js | Source}
 */
declare abstract class Curve<T extends Vector> {
    protected constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Curve`
     */
    readonly type: string | 'Curve';

    /**
     * This value determines the amount of divisions when calculating the cumulative segment lengths of a {@link Curve}
     * via {@link .getLengths}.
     * To ensure precision when using methods like {@link .getSpacedPoints}, it is recommended to increase {@link .arcLengthDivisions} if the {@link Curve} is very large.
     * @defaultValue `200`
     * @remarks Expects a `Integer`
     */
    arcLengthDivisions: number;

    /**
     * Returns a vector for a given position on the curve.
     * @param t A position on the curve. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created. Default `new T`.
     */
    getPoint(t: number, optionalTarget?: T): T;

    /**
     * Returns a vector for a given position on the {@link Curve} according to the arc length.
     * @param u A position on the {@link Curve} according to the arc length. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created. Default `new T`.
     */
    getPointAt(u: number, optionalTarget?: T): T;

    /**
     * Returns a set of divisions `+1` points using {@link .getPoint | getPoint(t)}.
     * @param divisions Number of pieces to divide the {@link Curve} into. Expects a `Integer`. Default `5`
     */
    getPoints(divisions?: number): T[];

    /**
     * Returns a set of divisions `+1` equi-spaced points using {@link .getPointAt | getPointAt(u)}.
     * @param divisions Number of pieces to divide the {@link Curve} into. Expects a `Integer`. Default `5`
     */
    getSpacedPoints(divisions?: number): T[];

    /**
     * Get total {@link Curve} arc length.
     */
    getLength(): number;

    /**
     * Get list of cumulative segment lengths.
     * @param divisions Expects a `Integer`
     */
    getLengths(divisions?: number): number[];

    /**
     * Update the cumlative segment distance cache
     * @remarks
     * The method must be called every time {@link Curve} parameters are changed
     * If an updated {@link Curve} is part of a composed {@link Curve} like {@link THREE.CurvePath | CurvePath},
     * {@link .updateArcLengths}() must be called on the composed curve, too.
     */
    updateArcLengths(): void;

    /**
     * Given u in the range `[ 0, 1 ]`,
     * @remarks
     * `u` and `t` can then be used to give you points which are equidistant from the ends of the curve, using {@link .getPoint}.
     * @param u Expects a `Float`
     * @param distance Expects a `Float`
     * @returns `t` also in the range `[ 0, 1 ]`. Expects a `Float`.
     */
    getUtoTmapping(u: number, distance: number): number;

    /**
     * Returns a unit vector tangent at t
     * @remarks
     * If the derived {@link Curve} does not implement its tangent derivation, two points a small delta apart will be used to find its gradient which seems to give a reasonable approximation.
     * @param t A position on the curve. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created.
     */
    getTangent(t: number, optionalTarget?: T): T;

    /**
     * Returns tangent at a point which is equidistant to the ends of the {@link Curve} from the point given in {@link .getTangent}.
     * @param u A position on the {@link Curve} according to the arc length. Must be in the range `[ 0, 1 ]`. Expects a `Float`
     * @param optionalTarget If specified, the result will be copied into this Vector, otherwise a new Vector will be created.
     */
    getTangentAt(u: number, optionalTarget?: T): T;

    /**
     * Generates the Frenet Frames
     * @remarks
     * Requires a {@link Curve} definition in 3D space
     * Used in geometries like {@link THREE.TubeGeometry | TubeGeometry} or {@link THREE.ExtrudeGeometry | ExtrudeGeometry}.
     * @param segments Expects a `Integer`
     * @param closed
     */
    computeFrenetFrames(
        segments: number,
        closed?: boolean,
    ): {
        tangents: Vector3[];
        normals: Vector3[];
        binormals: Vector3[];
    };

    /**
     * Creates a clone of this instance.
     */
    clone(): this;
    /**
     * Copies another {@link Curve} object to this instance.
     * @param source
     */
    copy(source: Curve<T>): this;

    /**
     * Returns a JSON object representation of this instance.
     */
    toJSON(): {};

    /**
     * Copies the data from the given JSON object to this instance.
     * @param json
     */
    fromJSON(json: {}): this;
}

/**
 * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
 * @remarks
 * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js | Source}
 */
declare class CurvePath<T extends Vector> extends Curve<T> {
    /**
     * The constructor take no parameters.
     */
    constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CurvePath`
     */
    override readonly type: string | 'CurvePath';

    /**
     * The array of {@link Curve | Curves}.
     * @defaultValue `[]`
     */
    curves: Array<Curve<T>>;

    /**
     * Whether or not to automatically close the path.
     * @defaultValue false
     */
    autoClose: boolean;

    /**
     * Add a curve to the {@link .curves} array.
     * @param curve
     */
    add(curve: Curve<T>): void;
    /**
     * Adds a {@link LineCurve | lineCurve} to close the path.
     */
    closePath(): void;

    getPoint(t: number, optionalTarget?: T): T;

    /**
     * Get list of cumulative curve lengths of the curves in the {@link .curves} array.
     */
    getCurveLengths(): number[];

    /**
     * Returns an array of points representing a sequence of curves
     * @remarks
     * The `division` parameter defines the number of pieces each curve is divided into
     * However, for optimization and quality purposes, the actual sampling resolution for each curve depends on its type
     * For example, for a {@link THREE.LineCurve | LineCurve}, the returned number of points is always just 2.
     * @param divisions Number of pieces to divide the curve into. Expects a `Integer`. Default `12`
     */
    override getPoints(divisions?: number): T[];

    /**
     * Returns a set of divisions `+1` equi-spaced points using {@link .getPointAt | getPointAt(u)}.
     * @param divisions Number of pieces to divide the curve into. Expects a `Integer`. Default `40`
     */
    override getSpacedPoints(divisions?: number): T[];
}

/**
 * A 2D {@link Path} representation.
 * @remarks
 * The class provides methods for creating paths and contours of 2D shapes similar to the 2D Canvas API.
 * @example
 * ```typescript
 * const {@link Path} = new THREE.Path();
 * path.lineTo(0, 0.8);
 * path.quadraticCurveTo(0, 1, 0.2, 1);
 * path.lineTo(1, 1);
 * const points = path.getPoints();
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xffffff
 * });
 * const line = new THREE.Line(geometry, material);
 * scene.add(line);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Path | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Path.js | Source}
 */
declare class Path extends CurvePath<Vector2> {
    /**
     * Creates a {@link Path} from the points
     * @remarks
     * The first point defines the offset, then successive points are added to the {@link CurvePath.curves | curves} array as {@link LineCurve | LineCurves}.
     * If no points are specified, an empty {@link Path} is created and the {@link .currentPoint} is set to the origin.
     * @param points Array of {@link Vector2 | Vector2s}.
     */
    constructor(points?: Vector2[]);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Path`
     */
    override readonly type: string | 'Path';

    /**
     * The current offset of the path. Any new {@link THREE.Curve | Curve} added will start here.
     * @defaultValue `new THREE.Vector2()`
     */
    currentPoint: Vector2;

    /**
     * Adds an absolutely positioned {@link THREE.EllipseCurve | EllipseCurve} to the path.
     * @param x Expects a `Float`
     * @param y X, The absolute center of the arc. Expects a `Float`
     * @param radius The radius of the arc. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the arc clockwise. . Default `false`
     */
    absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;

    /**
     * Adds an absolutely positioned {@link THREE.EllipseCurve | EllipseCurve} to the path.
     * @param x Expects a `Float`
     * @param y X, The absolute center of the ellipse. Expects a `Float`
     * @param xRadius The radius of the ellipse in the x axis. Expects a `Float`
     * @param yRadius The radius of the ellipse in the y axis. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the ellipse clockwise. . Default `false`
     * @param rotation The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Optional, Expects a `Float`. Default `0`
     */
    absellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation?: number,
    ): this;

    /**
     * Adds an {@link THREE.EllipseCurve | EllipseCurve} to the path, positioned relative to {@link .currentPoint}.
     * @param x Expects a `Float`
     * @param y X, The center of the arc offset from the last call. Expects a `Float`
     * @param radius The radius of the arc. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the arc clockwise. . Default `false`
     */
    arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;

    /**
     * This creates a bezier curve from {@link .currentPoint} with (cp1X, cp1Y) and (cp2X, cp2Y) as control points and updates {@link .currentPoint} to x and y.
     * @param cp1X Expects a `Float`
     * @param cp1Y Expects a `Float`
     * @param cp2X Expects a `Float`
     * @param cp2Y Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;

    /**
     * Adds an {@link THREE.EllipseCurve | EllipseCurve} to the path, positioned relative to {@link .currentPoint}.
     * @param x Expects a `Float`
     * @param y X, The center of the ellipse offset from the last call. Expects a `Float`
     * @param xRadius The radius of the ellipse in the x axis. Expects a `Float`
     * @param yRadius The radius of the ellipse in the y axis. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the ellipse clockwise. . Default `false`
     * @param rotation The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Optional, Expects a `Float`. Default `0`
     */
    ellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    ): this;

    /**
     * Connects a {@link THREE.LineCurve | LineCurve} from {@link .currentPoint} to x, y onto the path.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    lineTo(x: number, y: number): this;

    /**
     * Move the {@link .currentPoint} to x, y.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    moveTo(x: number, y: number): this;

    /**
     * Creates a quadratic curve from {@link .currentPoint} with cpX and cpY as control point and updates {@link .currentPoint} to x and y.
     * @param cpX Expects a `Float`
     * @param cpY Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;

    /**
     * Points are added to the {@link CurvePath.curves | curves} array as {@link THREE.LineCurve | LineCurves}.
     * @param vector2s
     */
    setFromPoints(vectors: Vector2[]): this;

    /**
     * Connects a new {@link THREE.SplineCurve | SplineCurve} onto the path.
     * @param points An array of {@link Vector2 | Vector2's}
     */
    splineThru(pts: Vector2[]): this;
}

/**
 * Defines an arbitrary 2d {@link Shape} plane using paths with optional holes
 * @remarks
 * It can be used with {@link THREE.ExtrudeGeometry | ExtrudeGeometry}, {@link THREE.ShapeGeometry | ShapeGeometry}, to get points, or to get triangulated faces.
 * @example
 * ```typescript
 * const heartShape = new THREE.Shape();
 * heartShape.moveTo(25, 25);
 * heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
 * heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
 * heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
 * heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
 * heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
 * heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);
 * const extrudeSettings = {
 *     depth: 8,
 *     bevelEnabled: true,
 *     bevelSegments: 2,
 *     steps: 2,
 *     bevelSize: 1,
 *     bevelThickness: 1
 * };
 * const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
 * const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial());
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_shapes | geometry / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes | geometry / extrude / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes2 | geometry / extrude / shapes2 }
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Shape | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Shape.js | Source}
 */
declare class Shape extends Path {
    /**
     * Creates a {@link Shape} from the points
     * @remarks
     * The first point defines the offset, then successive points are added to the {@link CurvePath.curves | curves} array as {@link THREE.LineCurve | LineCurves}.
     * If no points are specified, an empty {@link Shape} is created and the {@link .currentPoint} is set to the origin.
     * @param points Array of {@link Vector2 | Vector2s}.
     */
    constructor(points?: Vector2[]);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Shape`
     */
    override readonly type: string | 'Shape';

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * An array of {@link Path | paths} that define the holes in the shape.
     * @defaultValue `[]`
     */
    holes: Path[];

    /**
     * Call {@link THREE.Curve.getPoints | getPoints} on the {@link Shape} and the {@link holes} array
     * @param divisions The fineness of the result. Expects a `Integer`
     */
    extractPoints(divisions: number): {
        shape: Vector2[];
        holes: Vector2[][];
    };

    /**
     * Get an array of {@link Vector2 | Vector2's} that represent the holes in the shape.
     * @param divisions The fineness of the result. Expects a `Integer`
     */
    getPointsHoles(divisions: number): Vector2[][];
}

interface ExtrudeGeometryOptions {
    /**
     * Number of points on the curves.
     * Expects a `Integer`.
     * @defaultValue `12`
     */
    curveSegments?: number | undefined;

    /**
     * Number of points used for subdividing segments along the depth of the extruded spline.
     * @defaultValue `1`
     */
    steps?: number | undefined;

    /**
     * Depth to extrude the shape.
     * @defaultValue `1`
     */
    depth?: number | undefined;

    /**
     * Turn on bevel. Applying beveling to the shape.
     * @defaultValue `true`
     */
    bevelEnabled?: boolean | undefined;

    /**
     * How deep into the original shape the bevel goes.
     * Expects a `Float`.
     * @defaultValue `0.2`
     */
    bevelThickness?: number | undefined;

    /**
     * Distance from the shape outline that the bevel extends
     * Expects a `Float`.
     * @defaultValue `bevelThickness - 0.1`
     */
    bevelSize?: number | undefined;

    /**
     * Distance from the shape outline that the bevel starts.
     * Expects a `Float`.
     * @defaultValue `0`
     */
    bevelOffset?: number | undefined;

    /**
     * Number of bevel layers/segments.
     * Expects a `Integer`.
     * @defaultValue `3`
     */
    bevelSegments?: number | undefined;

    /**
     * A 3D spline path along which the shape should be extruded.
     * @remarks Bevels not supported for path extrusion.
     */
    extrudePath?: Curve<Vector3> | undefined;

    /**
     * A object that provides UV generator functions.
     */
    UVGenerator?: UVGenerator | undefined;
}

interface UVGenerator {
    generateTopUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
    ): Vector2[];
    generateSideWallUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
        indexD: number,
    ): Vector2[];
}

/**
 * Creates extruded geometry from a path shape.
 * @remarks This object extrudes a 2D shape to a 3D geometry.
 * @remarks When creating a Mesh with this geometry, if you'd like to have a separate material used for its face and its extruded sides, you can use an array of materials
 * @remarks The first material will be applied to the face; the second material will be applied to the sides.
 * @example
 * ```typescript
 * const length = 12, width = 8;
 * const shape = new THREE.Shape();
 * shape.moveTo(0, 0);
 * shape.lineTo(0, width);
 * shape.lineTo(length, width);
 * shape.lineTo(length, 0);
 * shape.lineTo(0, 0);
 * const extrudeSettings = {
 *     steps: 2,
 *     depth: 16,
 *     bevelEnabled: true,
 *     bevelThickness: 1,
 *     bevelSize: 1,
 *     bevelOffset: 0,
 *     bevelSegments: 1
 * };
 * const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const mesh = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ExtrudeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js | Source}
 */
declare class ExtrudeGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link ExtrudeGeometry}
     * @param shapes Shape or an array of shapes. Default `new Shape([new Vector2(0.5, 0.5), new Vector2(-0.5, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)])`.
     * @param options Object that can contain the following parameters. @see {@link ExtrudeGeometryOptions} for defaults.
     */
    constructor(shapes?: Shape | Shape[], options?: ExtrudeGeometryOptions);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ExtrudeGeometry`
     */
    override readonly type: string | 'ExtrudeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly options: ExtrudeGeometryOptions;
    };

    addShape(shape: Shape): void;

    /** @internal */
    static fromJSON(data: {}, shapes: unknown): ExtrudeGeometry;
}

/**
 * parameters is an object with one or more properties defining the material's appearance.
 */
interface MeshBasicMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null;
    lightMapIntensity?: number | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    specularMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    fog?: boolean | undefined;
    envMap?: Texture | null | undefined;
    combine?: Combine | undefined;
    reflectivity?: number | undefined;
    refractionRatio?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
}

declare class MeshBasicMaterial extends Material {
    constructor(parameters?: MeshBasicMaterialParameters);

    /**
     * @default 'MeshBasicMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshBasicMaterialParameters): void;
}

/**
 * Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh | polygon mesh} based objects.
 * @remarks
 * Also serves as a base for other classes such as {@link THREE.SkinnedMesh | SkinnedMesh},  {@link THREE.InstancedMesh | InstancedMesh}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const {@link Mesh} = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Mesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js | Source}
 */
declare class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
    TEventMap extends Object3DEventMap = Object3DEventMap,
> extends Object3D<TEventMap> {
    /**
     * Create a new instance of {@link Mesh}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Mesh}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isMesh: true;

    /**
     * @override
     * @defaultValue `Mesh`
     */
    override readonly type: string | 'Mesh';

    /**
     * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
     * @defaultValue {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     */
    geometry: TGeometry;

    /**
     * An instance of material derived from the {@link THREE.Material | Material} base class or an array of materials, defining the object's appearance.
     * @defaultValue {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    material: TMaterial;

    /**
     * An array of weights typically from `0-1` that specify how much of the morph is applied.
     * @defaultValue `undefined`, _but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}._
     */
    morphTargetInfluences?: number[] | undefined;

    /**
     * A dictionary of morphTargets based on the `morphTarget.name` property.
     * @defaultValue `undefined`, _but rebuilt by {@link updateMorphTargets | .updateMorphTargets()}._
     *
     */
    morphTargetDictionary?: { [key: string]: number } | undefined;

    /**
     * Updates the morphTargets to have no influence on the object
     * @remarks Resets the {@link morphTargetInfluences} and {@link morphTargetDictionary} properties.
     */
    updateMorphTargets(): void;

    /**
     * Get the local-space position of the vertex at the given index,
     * taking into account the current animation state of both morph targets and skinning.
     * @param index Expects a `Integer`
     * @param target
     */
    getVertexPosition(index: number, target: Vector3): Vector3;
}

/**
 * Base class for implementing loaders.
 */
declare class Loader<TData = unknown, TUrl = string> {
    constructor(manager?: LoadingManager);

    /**
     * @default 'anonymous'
     */
    crossOrigin: string;

    /**
     * @default false
     */
    withCredentials: boolean;

    /**
     * @default ''
     */
    path: string;

    /**
     * @default ''
     */
    resourcePath: string;
    manager: LoadingManager;

    /**
     * @default {}
     */
    requestHeader: { [header: string]: string };

    load(
        url: TUrl,
        onLoad?: (data: TData) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;
    loadAsync(url: TUrl, onProgress?: (event: ProgressEvent) => void): Promise<TData>;

    setCrossOrigin(crossOrigin: string): this;
    setWithCredentials(value: boolean): this;
    setPath(path: string): this;
    setResourcePath(resourcePath: string): this;
    setRequestHeader(requestHeader: { [header: string]: string }): this;

    static DEFAULT_MATERIAL_NAME: string;
}

/**
 * Handles and keeps track of loaded and pending data.
 */
declare class LoadingManager {
    constructor(
        onLoad?: () => void,
        onProgress?: (url: string, loaded: number, total: number) => void,
        onError?: (url: string) => void,
    );

    /**
     * Will be called when loading of an item starts.
     * @param url The url of the item that started loading.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    onStart?: ((url: string, loaded: number, total: number) => void) | undefined;

    /**
     * Will be called when all items finish loading.
     * The default is a function with empty body.
     */
    onLoad: () => void;

    /**
     * Will be called for each loaded item.
     * The default is a function with empty body.
     * @param url The url of the item just loaded.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    onProgress: (url: string, loaded: number, total: number) => void;

    /**
     * Will be called when item loading fails.
     * The default is a function with empty body.
     * @param url The url of the item that errored.
     */
    onError: (url: string) => void;

    /**
     * If provided, the callback will be passed each resource URL before a request is sent.
     * The callback may return the original URL, or a new URL to override loading behavior.
     * This behavior can be used to load assets from .ZIP files, drag-and-drop APIs, and Data URIs.
     * @param callback URL modifier callback. Called with url argument, and must return resolvedURL.
     */
    setURLModifier(callback?: (url: string) => string): this;

    /**
     * Given a URL, uses the URL modifier callback (if any) and returns a resolved URL.
     * If no URL modifier is set, returns the original URL.
     * @param url the url to load
     */
    resolveURL(url: string): string;

    itemStart(url: string): void;
    itemEnd(url: string): void;
    itemError(url: string): void;

    // handlers

    addHandler(regex: RegExp, loader: Loader): this;
    removeHandler(regex: RegExp): this;
    getHandler(file: string): Loader | null;
}

/**
 * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js | Source}
 */
declare class CompressedTexture extends Texture {
    /**
     * This creates a new {@link THREE.CompressedTexture | CompressedTexture} object.
     * @param mipmaps The mipmaps array should contain objects with data, width and height.
     * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
     * @param width The width of the biggest mipmap.
     * @param height The height of the biggest mipmap.
     * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace .colorSpace}. Default {@link NoColorSpace}
     */
    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        format: CompressedPixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        anisotropy?: number,
        colorSpace?: ColorSpace,
    );

    /**
     * Read-only flag to check if a given object is of type {@link CompressedTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCompressedTexture: true;

    /**
     * Overridden with a object containing width and height.
     * @override
     */
    get image(): { width: number; height: number };
    set image(value: { width: number; height: number });

    /**
     *  The mipmaps array should contain objects with data, width and height. The mipmaps should be of the correct {@link format} and {@link type}.
     */
    mipmaps: ImageData[];

    /**
     * @override
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.CompressedPixelFormat}
     */
    format: CompressedPixelFormat;

    /**
     * @override No flipping for cube textures. (also flipping doesn't work for compressed textures)
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override Can't generate mipmaps for compressed textures. mips must be embedded in DDS files
     * @defaultValue `false`
     */
    generateMipmaps: boolean;
}

declare class CompressedTextureLoader extends Loader<CompressedTexture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: CompressedTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CompressedTexture;
}

/**
 * Creates a texture directly from raw data, width and height.
 * @example
 * ```typescript
 * // create a buffer with color data
 * const width = 512;
 * const height = 512;
 * const size = width * height;
 * const data = new Uint8Array(4 * size);
 * const color = new THREE.Color(0xffffff);
 * const r = Math.floor(color.r * 255);
 * const g = Math.floor(color.g * 255);
 * const b = Math.floor(color.b * 255);
 * for (let i = 0; i & lt; size; i++) {
 *     const stride = i * 4;
 *     data[stride] = r;
 *     data[stride + 1] = g;
 *     data[stride + 2] = b;
 *     data[stride + 3] = 255;
 * }
 * // used the buffer to create a [name]
 * const texture = new THREE.DataTexture(data, width, height);
 * texture.needsUpdate = true;
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataTexture.js | Source}
 */
declare class DataTexture extends Texture {
    /**
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
     */
    constructor(
        data?: BufferSource | null,
        width?: number,
        height?: number,
        format?: PixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        anisotropy?: number,
        colorSpace?: ColorSpace,
    );

    /**
     * Read-only flag to check if a given object is of type {@link DataTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isDataTexture: true;

    /**
     * Overridden with a record type holding data, width and height and depth.
     * @override
     */
    get image(): TextureImageData;
    set image(value: TextureImageData);

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * @defaultValue `1`
     */
    unpackAlignment: number;
}

/**
 * Class for loading a texture.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
declare class TextureLoader extends Loader<Texture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: Texture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): Texture;
}

declare class ImageBitmapLoader extends Loader<ImageBitmap> {
    constructor(manager?: LoadingManager);

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: undefined | object;

    readonly isImageBitmapLoader: true;

    setOptions(options: object): ImageBitmapLoader;
}

declare class FileLoader extends Loader<string | ArrayBuffer> {
    constructor(manager?: LoadingManager);

    mimeType: undefined | MimeType;
    responseType: undefined | string;

    setMimeType(mimeType: MimeType): FileLoader;
    setResponseType(responseType: string): FileLoader;
}

interface SpriteMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    rotation?: number | undefined;
    sizeAttenuation?: boolean | undefined;
    fog?: boolean | undefined;
}

declare class SpriteMaterial extends Material {
    constructor(parameters?: SpriteMaterialParameters);
    /**
     * @default 'SpriteMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 0
     */
    rotation: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * @default true
     */
    transparent: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    readonly isSpriteMaterial: true;

    setValues(parameters: SpriteMaterialParameters): void;
    copy(source: SpriteMaterial): this;
}

interface MeshStandardMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    roughness?: number | undefined;
    metalness?: number | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null | undefined;
    lightMapIntensity?: number | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    emissive?: ColorRepresentation | undefined;
    emissiveIntensity?: number | undefined;
    emissiveMap?: Texture | null | undefined;
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    roughnessMap?: Texture | null | undefined;
    metalnessMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    envMap?: Texture | null | undefined;
    envMapIntensity?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    fog?: boolean | undefined;
    flatShading?: boolean | undefined;
}

declare class MeshStandardMaterial extends Material {
    constructor(parameters?: MeshStandardMaterialParameters);

    /**
     * @default 'MeshStandardMaterial'
     */
    type: string;

    /**
     * @default { 'STANDARD': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default 1
     */
    roughness: number;

    /**
     * @default 0
     */
    metalness: number;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    roughnessMap: Texture | null;

    /**
     * @default null
     */
    metalnessMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default 1
     */
    envMapIntensity: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    isMeshStandardMaterial: boolean;

    setValues(parameters: MeshStandardMaterialParameters): void;
}

/**
 * A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied.
 * @remarks Sprites do not cast shadows, setting `castShadow = true` will have no effect.
 * @example
 * ```typescript
 * const map = new THREE.TextureLoader().load('sprite.png');
 * const material = new THREE.SpriteMaterial({
 *     map: map
 * });
 * const {@link Sprite} = new THREE.Sprite(material);
 * scene.add(sprite);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Sprite | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Sprite.js | Source}
 */
declare class Sprite extends Object3D {
    /**
     * Creates a new Sprite.
     * @param material An instance of {@link THREE.SpriteMaterial | SpriteMaterial}. Default {@link THREE.SpriteMaterial | `new SpriteMaterial()`}, _with white color_.
     */
    constructor(material?: SpriteMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Sprite}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSprite: true;

    /**
     * @override
     * @defaultValue `Sprite`
     */
    override readonly type: string | 'Sprite';

    /**
     * Whether the object gets rendered into shadow map.
     * No effect in {@link Sprite}.
     * @ignore
     * @hidden
     * @defaultValue `false`
     */
    override castShadow: false;

    geometry: BufferGeometry;

    /**
     * An instance of {@link THREE.SpriteMaterial | SpriteMaterial}, defining the object's appearance.
     * @defaultValue {@link THREE.SpriteMaterial | `new SpriteMaterial()`}, _with white color_.
     */
    material: SpriteMaterial;

    /**
     * The sprite's anchor point, and the point around which the {@link Sprite} rotates.
     * A value of (0.5, 0.5) corresponds to the midpoint of the sprite.
     * A value of (0, 0) corresponds to the lower left corner of the sprite.
     * @defaultValue {@link THREE.Vector2 | `new Vector2(0.5, 0.5)`}.
     */
    center: Vector2;
}

/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */
declare class Frustum {
    constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);

    /**
     * Array of 6 vectors.
     */
    planes: Plane[];

    set(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum;
    clone(): this;
    copy(frustum: Frustum): this;
    setFromProjectionMatrix(m: Matrix4, coordinateSystem?: CoordinateSystem): this;
    intersectsObject(object: Object3D): boolean;
    intersectsSprite(sprite: Sprite): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Box3): boolean;
    containsPoint(point: Vector3): boolean;
}

/**
 * Use an array of {@link Bone | bones} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh | SkinnedMesh}.
 * @example
 * ```typescript
 * // Create a simple "arm"
 * const bones = [];
 * const shoulder = new THREE.Bone();
 * const elbow = new THREE.Bone();
 * const hand = new THREE.Bone();
 * shoulder.add(elbow);
 * elbow.add(hand);
 * bones.push(shoulder);
 * bones.push(elbow);
 * bones.push(hand);
 * shoulder.position.y = -5;
 * elbow.position.y = 0;
 * hand.position.y = 5;
 * const armSkeleton = new THREE.Skeleton(bones);
 * See the[page: SkinnedMesh] page
 * for an example of usage with standard[page: BufferGeometry].
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Skeleton | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Skeleton.js | Source}
 */
declare class Skeleton {
    /**
     * Creates a new Skeleton.
     * @param bones The array of {@link THREE.Bone | bones}. Default `[]`.
     * @param boneInverses An array of {@link THREE.Matrix4 | Matrix4s}. Default `[]`.
     */
    constructor(bones?: Bone[], boneInverses?: Matrix4[]);

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * The array of {@link THREE.Bone | Bones}.
     * @remarks Note this is a copy of the original array, not a reference, so you can modify the original array without effecting this one.
     */
    bones: Bone[];

    /**
     * An array of {@link Matrix4 | Matrix4s} that represent the inverse of the {@link THREE.Matrix4 | matrixWorld} of the individual bones.
     */
    boneInverses: Matrix4[];

    /**
     * The array buffer holding the bone data when using a vertex texture.
     */
    boneMatrices: Float32Array;

    /**
     * The {@link THREE.DataTexture | DataTexture} holding the bone data when using a vertex texture.
     */
    boneTexture: null | DataTexture;

    /**
     * The size of the {@link boneTexture | .boneTexture}.
     * @remarks Expects a `Integer`
     */
    boneTextureSize: number;

    frame: number;

    init(): void;

    /**
     * Generates the {@link boneInverses} array if not provided in the constructor.
     */
    calculateInverses(): void;

    /**
     * Computes an instance of {@link THREE.DataTexture | DataTexture} in order to pass the bone data more efficiently to the shader
     * @remarks
     * The texture is assigned to {@link boneTexture}.
     */
    computeBoneTexture(): this;

    /**
     * Returns the skeleton to the base pose.
     */
    pose(): void;

    /**
     * Updates the {@link boneMatrices} and {@link boneTexture} after changing the bones
     * @remarks
     * This is called automatically by the {@link THREE.WebGLRenderer | WebGLRenderer} if the {@link Skeleton} is used with a {@link THREE.SkinnedMesh | SkinnedMesh}.
     */
    update(): void;

    /**
     * Returns a clone of this {@link Skeleton} object.
     */
    clone(): Skeleton;

    /**
     * Searches through the skeleton's bone array and returns the first with a matching name.
     * @param name String to match to the Bone's {@link THREE.Bone.name | .name} property.
     */
    getBoneByName(name: string): undefined | Bone;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;

    toJSON(): unknown;

    fromJSON(json: unknown, bones: Record<string, Bone>): void;
}

/**
 * A mesh that has a {@link THREE.Skeleton | Skeleton} with {@link Bone | bones} that can then be used to animate the vertices of the geometry.
 * @remarks
 * {@link SkinnedMesh} can only be used with WebGL 2 or
 * With WebGL 1 `OES_texture_float` and vertex textures support is required.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30);
 * // create the skin indices and skin weights manually
 * // (typically a loader would read this data from a 3D model for you)
 * const position = geometry.attributes.position;
 * const vertex = new THREE.Vector3();
 * const skinIndices = [];
 * const skinWeights = [];
 * for (let i = 0; i & lt; position.count; i++) {
 *     vertex.fromBufferAttribute(position, i);
 *     // compute skinIndex and skinWeight based on some configuration data
 *     const y = (vertex.y + sizing.halfHeight);
 *     const skinIndex = Math.floor(y / sizing.segmentHeight);
 *     const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;
 *     skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
 *     skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
 * }
 * geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
 * geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
 * // create skinned mesh and skeleton
 * const mesh = new THREE.SkinnedMesh(geometry, material);
 * const skeleton = new THREE.Skeleton(bones);
 * // see example from THREE.Skeleton
 * const rootBone = skeleton.bones[0];
 * mesh.add(rootBone);
 * // bind the skeleton to the mesh
 * mesh.bind(skeleton);
 * // move the bones and manipulate the model
 * skeleton.bones[0].rotation.x = -0.1;
 * skeleton.bones[1].rotation.x = 0.2;
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/SkinnedMesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/SkinnedMesh.js | Source}
 */
declare class SkinnedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
    /**
     * Create a new instance of {@link SkinnedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link SkinnedMesh}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSkinnedMesh: true;

    /**
     * @override
     * @defaultValue `SkinnedMesh`
     */
    override readonly type: string | 'SkinnedMesh';

    /**
     * Either `attached` or `detached`.
     *  - `attached` uses the {@link THREE.SkinnedMesh.matrixWorld | SkinnedMesh.matrixWorld} property for the base transform matrix of the bones.
     *  - `detached` uses the {@link THREE.SkinnedMesh.bindMatrix | SkinnedMesh.bindMatrix}.
     * @defaultValue `attached`.
     */
    bindMode: 'attached' | 'detached';

    /**
     * The base matrix that is used for the bound bone transforms.
     */
    bindMatrix: Matrix4;
    /**
     * The base matrix that is used for resetting the bound bone transforms.
     */
    bindMatrixInverse: Matrix4;

    /**
     * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @default `null`
     */
    boundingBox: Box3;

    /**
     * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @default `null`
     */
    boundingSphere: Sphere;

    /**
     * {@link THREE.Skeleton | Skeleton} representing the bone hierarchy of the skinned mesh.
     */
    skeleton: Skeleton;

    /**
     * Bind a skeleton to the skinned mesh
     * @remarks
     * The bindMatrix gets saved to .bindMatrix property and the .bindMatrixInverse gets calculated.
     * @param skeleton {@link THREE.Skeleton | Skeleton} created from a {@link Bone | Bones} tree.
     * @param bindMatrix {@link THREE.Matrix4 | Matrix4} that represents the base transform of the skeleton.
     */
    bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;

    /**
     * Computes the bounding box, updating {@link boundingBox | .boundingBox} attribute.
     * @remarks
     * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`. If an
     * instance of SkinnedMesh is animated, this method should be called per frame to compute a correct bounding box.
     */
    computeBoundingBox(): void;

    /**
     * Computes the bounding sphere, updating {@link boundingSphere | .boundingSphere} attribute.
     * @remarks
     * Bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`. If
     * an instance of SkinnedMesh is animated, this method should be called per frame to compute a correct bounding
     * sphere.
     */
    computeBoundingSphere(): void;

    /**
     * This method sets the skinned mesh in the rest pose (resets the pose).
     */
    pose(): void;

    /**
     * Normalizes the skin weights.
     */
    normalizeSkinWeights(): void;

    /**
     * Applies the bone transform associated with the given index to the given position vector
     * @remarks Returns the updated vector.
     * @param index Expects a `Integer`
     * @param vector
     */
    applyBoneTransform(index: number, vector: Vector3): Vector3;

    /**
     * @deprecated {@link THREE.SkinnedMesh}: {@link boneTransform | .boneTransform()} was renamed to {@link applyBoneTransform | .applyBoneTransform()} in **r151**.
     */
    boneTransform(index: number, target: Vector3): Vector3;
}

declare class CSS2DObject extends Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;
    center: Vector2;

    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera$1) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera$1) => void;
}

declare class Font {
    constructor(jsondata: any);

    /**
     * @default 'Font'
     */
    type: string;

    data: string;

    generateShapes(text: string, size: number): Shape[];
}

interface TextGeometryParameters extends ExtrudeGeometryOptions {
    font: Font;

    /**
     * Size of the text
     * Expects a `Float`.
     * @defaultValue `100`
     */
    size?: number | undefined;

    /**
     * Thickness to extrude text.
     * Expects a `Float`.
     * @defaultValue `50`
     */
    height?: number | undefined;

    /**
     * @override
     * @defaultValue `12`
     */
    curveSegments?: number | undefined;

    /**
     * @defaultValue `false`
     */
    bevelEnabled?: boolean | undefined;

    /**
     * How deep into text bevel goes.
     * Expects a `Float`.
     * @override
     * @defaultValue `10`
     */
    bevelThickness?: number | undefined;

    /**
     * How far from text outline is bevel.
     * Expects a `Float`.
     * @override
     * @defaultValue `8`
     */
    bevelSize?: number | undefined;

    /**
     * How far from text outline bevel starts.
     * Expects a `Float`.
     * @override
     * @defaultValue `0`
     */
    bevelOffset?: number | undefined;

    /**
     * @override
     * @defaultValue `3`
     */
    bevelSegments?: number | undefined;
}

/**
 * A class for generating text as a single geometry
 * @remarks
 * It is constructed by providing a string of text, and a set of parameters consisting of a loaded font and settings for the geometry's parent {@link THREE.ExtrudeGeometry | ExtrudeGeometry}
 * See the {@link THREE.FontLoader | FontLoader} page for additional details.
 * @example
 * ```typescript
 * const loader = new FontLoader();
 * loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
 *     const geometry = new TextGeometry('Hello three.js!', {
 *         font: font,
 *         size: 80,
 *         height: 5,
 *         curveSegments: 12,
 *         bevelEnabled: true,
 *         bevelThickness: 10,
 *         bevelSize: 8,
 *         bevelOffset: 0,
 *         bevelSegments: 5
 *     });
 * });
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
 * @see {@link https://threejs.org/docs/index.html#api/en/C:/rafaelsc/Source/threejs/three.js/docs/examples/en/geometries/TextGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/examples/jsm/geometries/TextGeometry.js | Source}
 */
declare class TextGeometry extends ExtrudeGeometry {
    /**
     * Create a new instance of {@link TextGeometry}
     * @param text The text that needs to be shown.
     * @param parameters Object that can contain the following parameters. @see {@link TextGeometryParameters} for defaults.
     */
    constructor(text: string, parameters?: TextGeometryParameters);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TextGeometry`
     */
    override readonly type: string | 'TextGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly options: TextGeometryParameters;
    };
}

declare class CSS3DObject extends Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;

    onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera$1) => void;
    onAfterRender: (renderer: unknown, scene: Scene, camera: Camera$1) => void;
}

declare class CSS3DSprite extends CSS3DObject {
    constructor(element: HTMLElement);
}

interface OrbitControlsEventMap {
    change: {};
    start: {};
    end: {};
}

/**
 * Orbit controls allow the camera to orbit around a target.
 * @param object - The camera to be controlled. The camera must not
 * be a child of another object, unless that object is the scene itself.
 * @param domElement - The HTML element used for
 * event listeners.
 */
declare class OrbitControls extends EventDispatcher<OrbitControlsEventMap> {
    constructor(object: Camera$1, domElement?: HTMLElement);

    /**
     * The camera being controlled.
     */
    object: Camera$1;

    /**
     * The HTMLElement used to listen for mouse / touch events.
     * This must be passed in the constructor;
     * changing it here will not set up new event listeners.
     */
    domElement: HTMLElement | Document;

    /**
     * When set to `false`, the controls will not respond to user input.
     * @default true
     */
    enabled: boolean;

    /**
     * The focus point of the controls, the .object orbits around this.
     * It can be updated manually at any point to change the focus
     * of the controls.
     */
    target: Vector3;

    /** @deprecated */
    center: Vector3;

    /**
     * How far you can dolly in ( PerspectiveCamera only ).
     * @default 0
     */
    minDistance: number;

    /**
     * How far you can dolly out ( PerspectiveCamera only ).
     * @default Infinity
     */
    maxDistance: number;

    /**
     * How far you can zoom in ( OrthographicCamera only ).
     * @default 0
     */
    minZoom: number;

    /**
     * How far you can zoom out ( OrthographicCamera only ).
     * @default Infinity
     */
    maxZoom: number;

    /**
     * How far you can orbit vertically, lower limit.
     * Range is 0 to Math.PI radians.
     * @default 0
     */
    minPolarAngle: number;

    /**
     * How far you can orbit vertically, upper limit.
     * Range is 0 to Math.PI radians.
     * @default Math.PI.
     */
    maxPolarAngle: number;

    /**
     * How far you can orbit horizontally, lower limit.
     * If set, the interval [ min, max ]
     * must be a sub-interval of [ - 2 PI, 2 PI ],
     * with ( max - min < 2 PI ).
     * @default Infinity
     */
    minAzimuthAngle: number;

    /**
     * How far you can orbit horizontally, upper limit.
     * If set, the interval [ min, max ] must be a sub-interval
     * of [ - 2 PI, 2 PI ], with ( max - min < 2 PI ).
     * @default Infinity
     */
    maxAzimuthAngle: number;

    /**
     * Set to true to enable damping (inertia), which can
     * be used to give a sense of weight to the controls.
     * Note that if this is enabled, you must call
     * .update () in your animation loop.
     * @default false
     */
    enableDamping: boolean;

    /**
     * The damping inertia used if .enableDamping is set to true.
     * Note that for this to work,
     * you must call .update () in your animation loop.
     * @default 0.05
     */
    dampingFactor: number;

    /**
     * Enable or disable zooming (dollying) of the camera.
     * @default true
     */
    enableZoom: boolean;

    /**
     * Speed of zooming / dollying.
     * @default 1
     */
    zoomSpeed: number;

    /**
     * Setting this property to `true` allows to zoom to the cursor's position.
     * @default false
     */
    zoomToCursor: boolean;

    /**
     * Enable or disable horizontal and
     * vertical rotation of the camera.
     * Note that it is possible to disable a single axis
     * by setting the min and max of the polar angle or
     * azimuth angle to the same value, which will cause
     * the vertical or horizontal rotation to be fixed at that value.
     * @default true
     */
    enableRotate: boolean;

    /**
     * Speed of rotation.
     * @default 1
     */
    rotateSpeed: number;

    /**
     * Enable or disable camera panning.
     * @default true
     */
    enablePan: boolean;

    /**
     * Speed of panning.
     * @default 1
     */
    panSpeed: number;

    /**
     * Defines how the camera's position is translated when panning.
     * If true, the camera pans in screen space. Otherwise,
     * the camera pans in the plane orthogonal to the camera's
     * up direction. Default is true for OrbitControls; false for MapControls.
     * @default true
     */
    screenSpacePanning: boolean;

    /**
     * How fast to pan the camera when the keyboard is used.
     * Default is 7.0 pixels per keypress.
     * @default 7
     */
    keyPanSpeed: number;

    /**
     * Set to true to automatically rotate around the target.
     * Note that if this is enabled, you must call .update() in your animation loop. If you want the auto-rotate speed
     * to be independent of the frame rate (the refresh rate of the display), you must pass the time `deltaTime`, in
     * seconds, to .update().
     */
    autoRotate: boolean;

    /**
     * How fast to rotate around the target if .autoRotate is true.
     * Default is 2.0, which equates to 30 seconds per orbit at 60fps.
     * Note that if .autoRotate is enabled, you must call
     * .update () in your animation loop.
     * @default 2
     */
    autoRotateSpeed: number;

    /**
     * This object contains references to the keycodes for controlling
     * camera panning. Default is the 4 arrow keys.
     */
    keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };

    /**
     * This object contains references to the mouse actions used
     * by the controls.
     */
    mouseButtons: Partial<{ LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }>;

    /**
     * This object contains references to the touch actions used by
     * the controls.
     */
    touches: Partial<{ ONE: TOUCH; TWO: TOUCH }>;

    /**
     * Used internally by the .saveState and .reset methods.
     */
    target0: Vector3;

    /**
     * Used internally by the .saveState and .reset methods.
     */
    position0: Vector3;

    /**
     * Used internally by the .saveState and .reset methods.
     */
    zoom0: number;

    /**
     * Update the controls. Must be called after any manual changes to the camera's transform, or in the update loop if
     * .autoRotate or .enableDamping are set. `deltaTime`, in seconds, is optional, and is only required if you want the
     * auto-rotate speed to be independent of the frame rate (the refresh rate of the display).
     */
    update(deltaTime?: number): boolean;

    /**
     * Adds key event listeners to the given DOM element. `window`
     * is a recommended argument for using this method.
     * @param domElement
     */
    listenToKeyEvents(domElement: HTMLElement | Window): void;

    /**
     * Removes the key event listener previously defined with {@link listenToKeyEvents}.
     */
    stopListenToKeyEvents(): void;

    /**
     * Save the current state of the controls. This can later be
     * recovered with .reset.
     */
    saveState(): void;

    /**
     * Reset the controls to their state from either the last time
     * the .saveState was called, or the initial state.
     */
    reset(): void;

    /**
     * Remove all the event listeners.
     */
    dispose(): void;

    /**
     * Get the current vertical rotation, in radians.
     */
    getPolarAngle(): number;

    /**
     * Get the current horizontal rotation, in radians.
     */
    getAzimuthalAngle(): number;

    /**
     * Returns the distance from the camera to the target.
     */
    getDistance(): number;
}

interface CommonModelOptions {
    scale?: number;
    name?: string;
    position?: {
        x?: number;
        y?: number;
        z?: number;
    };
    rotation?: {
        x?: number | string;
        y?: number | string;
        z?: number | string;
    };
}
type Position = {
    x?: number;
    y?: number;
    z?: number;
};
type Camera = THREE.Camera & Position;

interface AddControlsParams {
    callback?: (scene: Scene, camera: Camera$1) => void;
}
interface CreateAxesHelperParams {
    length?: number;
}
interface CreateLightParams {
    color?: number | string;
    colorOpacity?: number;
    ambientLightColor?: number | string;
    ambientLightColorOpacity?: number;
    directLightColor?: number | string;
    directLightColorOpacity?: number;
}
interface CreateCameraParams {
    width?: number;
    height?: number;
    position?: {
        x: number;
        y: number;
        z: number;
    };
    lookAt?: {
        x: number;
        y: number;
        z: number;
    };
}
interface CreateRendererParams {
    width?: number;
    height?: number;
    backgroundColor?: number | string;
    backgroundColorOpacity?: number;
}
type InitParams = {
    lightConfigs?: CreateLightParams;
    cameraConfigs?: CreateCameraParams;
    axesHelperConfigs?: CreateAxesHelperParams;
    rendererConfigs?: CreateRendererParams;
} | null;
interface CreateCss3dObjectParams {
    element: HTMLElement;
}
interface InitCss3dParams {
    scene: Scene;
    camera: Camera$1;
}
interface CreateTextParams {
    text: string;
    color?: number | string;
    fontSize?: number;
    thickness?: number;
    position?: {
        x: number;
        y: number;
        z: number;
    };
}
interface CreateCss2dObjectParams {
    content: string | HTMLElement;
    style: Record<string, any>;
    occludable: boolean;
}

declare class KTX2Loader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    setTranscoderPath(path: string): KTX2Loader;
    setWorkerLimit(limit: number): KTX2Loader;
    detectSupport(renderer: WebGLRenderer): KTX2Loader;
    dispose(): KTX2Loader;

    parse(
        buffer: ArrayBuffer,
        onLoad: (texture: CompressedTexture) => void,
        onError?: (event: ErrorEvent) => void,
    ): KTX2Loader;
}

interface GLTF {
    animations: AnimationClip[];
    scene: Group;
    scenes: Group[];
    cameras: Camera$1[];
    asset: {
        copyright?: string | undefined;
        generator?: string | undefined;
        version?: string | undefined;
        minVersion?: string | undefined;
        extensions?: any;
        extras?: any;
    };
    parser: GLTFParser;
    userData: any;
}

interface GLTFReference {
    materials?: number;
    nodes?: number;
    textures?: number;
    meshes?: number;
}

declare class GLTFParser {
    json: any;

    options: {
        path: string;
        manager: LoadingManager;
        ktx2Loader: KTX2Loader;
        meshoptDecoder: /* MeshoptDecoder */ any;
        crossOrigin: string;
        requestHeader: { [header: string]: string };
    };

    fileLoader: FileLoader;
    textureLoader: TextureLoader | ImageBitmapLoader;
    plugins: { [name: string]: GLTFLoaderPlugin };
    extensions: { [name: string]: any };
    associations: Map<Object3D | Material | Texture, GLTFReference>;

    setExtensions(extensions: { [name: string]: any }): void;
    setPlugins(plugins: { [name: string]: GLTFLoaderPlugin }): void;

    parse(onLoad: (gltf: GLTF) => void, onError?: (event: ErrorEvent) => void): void;

    getDependency: (type: string, index: number) => Promise<any>;
    getDependencies: (type: string) => Promise<any[]>;
    loadBuffer: (bufferIndex: number) => Promise<ArrayBuffer>;
    loadBufferView: (bufferViewIndex: number) => Promise<ArrayBuffer>;
    loadAccessor: (accessorIndex: number) => Promise<BufferAttribute | InterleavedBufferAttribute>;
    loadTexture: (textureIndex: number) => Promise<Texture>;
    loadTextureImage: (textureIndex: number, sourceIndex: number, loader: Loader) => Promise<Texture>;
    loadImageSource: (sourceIndex: number, loader: Loader) => Promise<Texture>;
    assignTexture: (
        materialParams: { [key: string]: any },
        mapName: string,
        mapDef: {
            index: number;
            texCoord?: number | undefined;
            extensions?: any;
        },
    ) => Promise<void>;
    assignFinalMaterial: (object: Mesh) => void;
    getMaterialType: () => typeof MeshStandardMaterial;
    loadMaterial: (materialIndex: number) => Promise<Material>;
    createUniqueName: (originalName: string) => string;
    createNodeMesh: (nodeIndex: number) => Promise<Group | Mesh | SkinnedMesh>;
    loadGeometries: (
        /**
         * GLTF.Primitive[]
         * See: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/mesh.primitive.schema.json
         */
        primitives: Array<{ [key: string]: any }>,
    ) => Promise<BufferGeometry[]>;
    loadMesh: (meshIndex: number) => Promise<Group | Mesh | SkinnedMesh>;
    loadCamera: (cameraIndex: number) => Promise<Camera$1>;
    loadSkin: (skinIndex: number) => Promise<Skeleton>;
    loadAnimation: (animationIndex: number) => Promise<AnimationClip>;
    loadNode: (nodeIndex: number) => Promise<Object3D>;
    loadScene: () => Promise<Group>;
}

interface GLTFLoaderPlugin {
    beforeRoot?: (() => Promise<void> | null) | undefined;
    afterRoot?: ((result: GLTF) => Promise<void> | null) | undefined;
    loadNode?: ((nodeIndex: number) => Promise<Object3D> | null) | undefined;
    loadMesh?: ((meshIndex: number) => Promise<Group | Mesh | SkinnedMesh> | null) | undefined;
    loadBufferView?: ((bufferViewIndex: number) => Promise<ArrayBuffer> | null) | undefined;
    loadMaterial?: ((materialIndex: number) => Promise<Material> | null) | undefined;
    loadTexture?: ((textureIndex: number) => Promise<Texture> | null) | undefined;
    getMaterialType?: ((materialIndex: number) => typeof Material | null) | undefined;
    extendMaterialParams?:
        | ((materialIndex: number, materialParams: { [key: string]: any }) => Promise<any> | null)
        | undefined;
    createNodeMesh?: ((nodeIndex: number) => Promise<Group | Mesh | SkinnedMesh> | null) | undefined;
    createNodeAttachment?: ((nodeIndex: number) => Promise<Object3D> | null) | undefined;
}

interface LoadGLTFParams {
    modelPath: string;
    options?: CommonModelOptions;
    callback?: (gltf: GLTF, model: THREE.Group<THREE.Object3DEventMap>) => void;
}

declare const lec3d: {
    loadGLTF: ({ modelPath, options, callback }: LoadGLTFParams) => void;
    init: (params: InitParams) => {
        renderer: WebGLRenderer;
        camera: Camera;
        scene: Scene;
        mountTo: (element: HTMLElement) => void;
        refresh: () => void;
        addControls: (params?: AddControlsParams | undefined) => OrbitControls;
        getClickEventTargets: (event: MouseEvent) => Intersection<Object3D<Object3DEventMap>>[];
    };
    initCss3d: ({ scene, camera }: InitCss3dParams) => {
        refresh: () => void;
        mountTo: (element: HTMLElement) => void;
        createCss3dObject: ({ element }: CreateCss3dObjectParams) => CSS3DObject;
        createCss3dSprite: ({ element }: CreateCss3dObjectParams) => CSS3DSprite;
        createText: ({ text, color, fontSize, thickness, position, }: CreateTextParams) => Mesh<TextGeometry, MeshBasicMaterial, Object3DEventMap>;
    };
    initCss2d: ({ scene, camera }: InitCss3dParams) => {
        refresh: () => void;
        mountTo: (element: HTMLElement) => void;
        createCss2dObject: (params: CreateCss2dObjectParams) => CSS2DObject;
    };
};

export { lec3d as default };
