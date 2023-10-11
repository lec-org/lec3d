/// <reference types="webxr" />
declare const REVISION: string;

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

/**
 * Texture all Magnification and Minification Filter Modes.
 * @see {@link MagnificationTextureFilter} and {@link MinificationTextureFilter}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://sbcode.net/threejs/mipmaps/ | Texture Mipmaps (non-official)}
 */
type TextureFilter = MagnificationTextureFilter | MinificationTextureFilter;

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

///////////////////////////////////////////////////////////////////////////////
// Loop styles for AnimationAction
declare const LoopOnce: 2200;
declare const LoopRepeat: 2201;
declare const LoopPingPong: 2202;
type AnimationActionLoopStyles = typeof LoopOnce | typeof LoopRepeat | typeof LoopPingPong;

// Interpolation
declare const InterpolateDiscrete: 2300;
declare const InterpolateLinear: 2301;
declare const InterpolateSmooth: 2302;
type InterpolationModes = typeof InterpolateDiscrete | typeof InterpolateLinear | typeof InterpolateSmooth;

// Interpolant ending modes
declare const ZeroCurvatureEnding: 2400;
declare const ZeroSlopeEnding: 2401;
declare const WrapAroundEnding: 2402;
type InterpolationEndingModes = typeof ZeroCurvatureEnding | typeof ZeroSlopeEnding | typeof WrapAroundEnding;

// Animation blending modes
declare const NormalAnimationBlendMode: 2500;
declare const AdditiveAnimationBlendMode: 2501;
type AnimationBlendMode = typeof NormalAnimationBlendMode | typeof AdditiveAnimationBlendMode;

// Triangle Draw modes
declare const TrianglesDrawMode: 0;
declare const TriangleStripDrawMode: 1;
declare const TriangleFanDrawMode: 2;
type TrianglesDrawModes = typeof TrianglesDrawMode | typeof TriangleStripDrawMode | typeof TriangleFanDrawMode;

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
// Depth packing strategies

declare const BasicDepthPacking: 3200;
declare const RGBADepthPacking: 3201;
type DepthPackingStrategies = typeof BasicDepthPacking | typeof RGBADepthPacking;

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

declare const GLSL1: '100';
declare const GLSL3: '300 es';
type GLSLVersion = typeof GLSL1 | typeof GLSL3;

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
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array: Int8Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Int8BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int8BufferAttribute | Int8BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int8Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array: Uint8Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Uint8BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint8BufferAttribute | Uint8BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray: Uint8ClampedArray}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Uint8ClampedBufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint8ClampedBufferAttribute | Uint8ClampedBufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8ClampedArray`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array: Int16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Int16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int16BufferAttribute | Int16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Uint16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint16BufferAttribute | Uint16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array: Int32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Int32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int32BufferAttribute | Int32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array: Uint32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Uint32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint32BufferAttribute | Uint32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Float16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float16BufferAttribute | Float16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array: Float32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Float32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float32BufferAttribute | Float32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array: Float64Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
declare class Float64BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float64BufferAttribute | Float64BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float64Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
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
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
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

/**
 * Abstract base class for cameras
 * @remarks
 * This class should always be inherited when you build a new camera.
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
 */
declare class Camera extends Object3D {
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

declare function SRGBToLinear(c: number): number;

declare namespace ColorManagement {
    /**
     * @default false
     */
    let enabled: boolean;

    /**
     * @default LinearSRGBColorSpace
     */
    let workingColorSpace: ColorSpace;

    function convert(
        color: Color,
        sourceColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
        targetColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
    ): Color;

    function fromWorkingColorSpace(
        color: Color,
        targetColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
    ): Color;

    function toWorkingColorSpace(
        color: Color,
        sourceColorSpace: typeof SRGBColorSpace | typeof LinearSRGBColorSpace | typeof DisplayP3ColorSpace,
    ): Color;
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

    project(camera: Camera): this;

    unproject(camera: Camera): this;

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

/**
 * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
 *  @example
 * ```typescript
 * const scene = new THREE.Scene();
 * scene.fog = new THREE.Fog(0xcccccc, 10, 15);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/Fog | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/Fog.js | Source}
 */
declare class Fog implements FogBase {
    /**
     * The color parameter is passed to the {@link THREE.Color | Color} constructor to set the color property
     * @remarks
     * Color can be a hexadecimal integer or a CSS-style string.
     * @param color
     * @param near Expects a `Float`
     * @param far Expects a `Float`
     */
    constructor(color: ColorRepresentation, near?: number, far?: number);

    /**
     * Read-only flag to check if a given object is of type {@link Fog}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isFog: true;

    /**
     * Optional name of the object
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
     * The minimum distance to start applying fog.
     * @remarks Objects that are less than **near** units from the active camera won't be affected by fog.
     * @defaultValue `1`
     * @remarks Expects a `Float`
     */
    near: number;

    /**
     * The maximum distance at which fog stops being calculated and applied.
     * @remarks Objects that are more than **far** units away from the active camera won't be affected by fog.
     * @defaultValue `1000`
     * @remarks Expects a `Float`
     */
    far: number;

    /**
     * Returns a new {@link Fog} instance with the same parameters as this one.
     */
    clone(): Fog;

    /**
     * Return {@link Fog} data in JSON format.
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

declare const UniformsLib: {
    common: {
        diffuse: IUniform<Color>;
        opacity: IUniform<number>;
        map: IUniform<unknown>;
        mapTransform: IUniform<Matrix3>;
        alphaMap: IUniform<unknown>;
        alphaMapTransform: IUniform<Matrix3>;
        alphaTest: IUniform<number>;
    };
    specularmap: {
        specularMap: IUniform<unknown>;
        specularMapTransform: IUniform<Matrix3>;
    };
    envmap: {
        envMap: IUniform<unknown>;
        flipEnvMap: IUniform<number>;
        reflectivity: IUniform<number>;
        ior: IUniform<number>;
        refractRatio: IUniform<number>;
    };
    aomap: {
        aoMap: IUniform<unknown>;
        aoMapIntensity: IUniform<number>;
        aoMapTransform: IUniform<Matrix3>;
    };
    lightmap: {
        lightMap: IUniform<number>;
        lightMapIntensity: IUniform<number>;
        lightMapTransform: IUniform<Matrix3>;
    };
    bumpmap: {
        bumpMap: IUniform<unknown>;
        bumpMapTransform: IUniform<Matrix3>;
        bumpScale: IUniform<number>;
    };
    normalmap: {
        normalMap: IUniform<unknown>;
        normalMapTransform: IUniform<Matrix3>;
        normalScale: IUniform<Vector2>;
    };
    displacementmap: {
        displacementMap: IUniform<unknown>;
        displacementMapTransform: IUniform<Matrix3>;
        displacementScale: IUniform<number>;
        displacementBias: IUniform<number>;
    };
    emissivemap: {
        emissiveMap: IUniform<unknown>;
        emissiveMapTransform: IUniform<Matrix3>;
    };
    metalnessmap: {
        metalnessMap: IUniform<unknown>;
        metalnessMapTransform: IUniform<Matrix3>;
    };
    roughnessmap: {
        roughnessMap: IUniform<unknown>;
        roughnessMapTransform: IUniform<Matrix3>;
    };
    gradientmap: {
        gradientMap: IUniform<unknown>;
    };
    fog: {
        fogDensity: IUniform<number>;
        fogNear: IUniform<number>;
        fogFar: IUniform<number>;
        fogColor: IUniform<Color>;
    };
    lights: {
        ambientLightColor: IUniform<unknown[]>;
        lightProbe: IUniform<unknown[]>;
        directionalLights: {
            value: unknown[];
            properties: {
                direction: {};
                color: {};
            };
        };
        directionalLightShadows: {
            value: unknown[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        directionalShadowMap: IUniform<unknown[]>;
        directionalShadowMatrix: IUniform<unknown[]>;
        spotLights: {
            value: unknown[];
            properties: {
                color: {};
                position: {};
                direction: {};
                distance: {};
                coneCos: {};
                penumbraCos: {};
                decay: {};
            };
        };
        spotLightShadows: {
            value: unknown[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        spotLightMap: IUniform<unknown[]>;
        spotShadowMap: IUniform<unknown[]>;
        spotLightMatrix: IUniform<unknown[]>;
        pointLights: {
            value: unknown[];
            properties: {
                color: {};
                position: {};
                decay: {};
                distance: {};
            };
        };
        pointLightShadows: {
            value: unknown[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
                shadowCameraNear: {};
                shadowCameraFar: {};
            };
        };
        pointShadowMap: IUniform<unknown[]>;
        pointShadowMatrix: IUniform<unknown[]>;
        hemisphereLights: {
            value: unknown[];
            properties: {
                direction: {};
                skycolor: {};
                groundColor: {};
            };
        };
        rectAreaLights: {
            value: unknown[];
            properties: {
                color: {};
                position: {};
                width: {};
                height: {};
            };
        };
        ltc_1: IUniform<unknown>;
        ltc_2: IUniform<unknown>;
    };
    points: {
        diffuse: IUniform<Color>;
        opacity: IUniform<number>;
        size: IUniform<number>;
        scale: IUniform<number>;
        map: IUniform<unknown>;
        alphaMap: IUniform<unknown>;
        alphaTest: IUniform<number>;
        uvTransform: IUniform<Matrix3>;
    };
    sprite: {
        diffuse: IUniform<Color>;
        opacity: IUniform<number>;
        center: IUniform<Vector2>;
        rotation: IUniform<number>;
        map: IUniform<unknown>;
        mapTransform: IUniform<Matrix3>;
        alphaMap: IUniform<unknown>;
        alphaTest: IUniform<number>;
    };
};

interface Shader {
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;
}

declare let ShaderLib: {
    [name: string]: Shader;
    basic: Shader;
    lambert: Shader;
    phong: Shader;
    standard: Shader;
    matcap: Shader;
    points: Shader;
    dashed: Shader;
    depth: Shader;
    normal: Shader;
    sprite: Shader;
    background: Shader;
    cube: Shader;
    equirect: Shader;
    distanceRGBA: Shader;
    shadow: Shader;
    physical: Shader;
};

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

declare class VectorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'vector'
     */
    ValueTypeName: string;
}

declare class StringKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    /**
     * @default 'string'
     */
    ValueTypeName: string;
}

declare class QuaternionKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'quaternion'
     */
    ValueTypeName: string;
}

declare class NumberKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'number'
     */
    ValueTypeName: string;
}

declare class ColorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'color'
     */
    ValueTypeName: string;
}

declare class BooleanKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>);

    /**
     * @default 'bool'
     */
    ValueTypeName: string;
}

declare class PropertyMixer {
    constructor(binding: any, typeName: string, valueSize: number);

    binding: any;
    valueSize: number;
    buffer: any;
    cumulativeWeight: number;
    cumulativeWeightAdditive: number;
    useCount: number;
    referenceCount: number;

    accumulate(accuIndex: number, weight: number): void;
    accumulateAdditive(weight: number): void;
    apply(accuIndex: number): void;
    saveOriginalState(): void;
    restoreOriginalState(): void;
}

interface ParseTrackNameResults {
    nodeName: string;
    objectName: string;
    objectIndex: string;
    propertyName: string;
    propertyIndex: string;
}

declare class PropertyBinding {
    constructor(rootNode: any, path: string, parsedPath?: any);

    path: string;
    parsedPath: any;
    node: any;
    rootNode: any;

    getValue(targetArray: any, offset: number): any;
    setValue(sourceArray: any, offset: number): void;
    bind(): void;
    unbind(): void;

    BindingType: { [bindingType: string]: number };
    Versioning: { [versioning: string]: number };

    GetterByBindingType: Array<() => void>;
    SetterByBindingTypeAndVersioning: Array<Array<() => void>>;

    static create(root: any, path: any, parsedPath?: any): PropertyBinding | PropertyBinding.Composite;
    static sanitizeNodeName(name: string): string;
    static parseTrackName(trackName: string): ParseTrackNameResults;
    static findNode(root: any, nodeName: string): any;
}

declare namespace PropertyBinding {
    class Composite {
        constructor(targetGroup: any, path: any, parsedPath?: any);

        getValue(array: any, offset: number): any;
        setValue(array: any, offset: number): void;
        bind(): void;
        unbind(): void;
    }
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

declare function arraySlice(array: any, from: number, to: number): any;
declare function convertArray(array: any, type: any, forceClone: boolean): any;
declare function isTypedArray(object: any): boolean;
declare function getKeyframeOrder(times: number[]): number[];
declare function sortedArray(values: any[], stride: number, order: number[]): any[];
declare function flattenJSON(jsonKeys: string[], times: any[], values: any[], valuePropertyName: string): void;

/**
 * @param sourceClip
 * @param name
 * @param startFrame
 * @param endFrame
 * @param [fps=30]
 */
declare function subclip(
    sourceClip: AnimationClip,
    name: string,
    startFrame: number,
    endFrame: number,
    fps?: number,
): AnimationClip;

/**
 * @param targetClip
 * @param [referenceFrame=0]
 * @param [referenceClip=targetClip]
 * @param [fps=30]
 */
declare function makeClipAdditive(
    targetClip: AnimationClip,
    referenceFrame?: number,
    referenceClip?: AnimationClip,
    fps?: number,
): AnimationClip;

declare const AnimationUtils_d_arraySlice: typeof arraySlice;
declare const AnimationUtils_d_convertArray: typeof convertArray;
declare const AnimationUtils_d_flattenJSON: typeof flattenJSON;
declare const AnimationUtils_d_getKeyframeOrder: typeof getKeyframeOrder;
declare const AnimationUtils_d_isTypedArray: typeof isTypedArray;
declare const AnimationUtils_d_makeClipAdditive: typeof makeClipAdditive;
declare const AnimationUtils_d_sortedArray: typeof sortedArray;
declare const AnimationUtils_d_subclip: typeof subclip;
declare namespace AnimationUtils_d {
  export { AnimationUtils_d_arraySlice as arraySlice, AnimationUtils_d_convertArray as convertArray, AnimationUtils_d_flattenJSON as flattenJSON, AnimationUtils_d_getKeyframeOrder as getKeyframeOrder, AnimationUtils_d_isTypedArray as isTypedArray, AnimationUtils_d_makeClipAdditive as makeClipAdditive, AnimationUtils_d_sortedArray as sortedArray, AnimationUtils_d_subclip as subclip };
}

declare class AnimationObjectGroup {
    constructor(...args: any[]);

    uuid: string;
    stats: {
        bindingsPerObject: number;
        objects: {
            total: number;
            inUse: number;
        };
    };
    readonly isAnimationObjectGroup: true;

    add(...args: any[]): void;
    remove(...args: any[]): void;
    uncache(...args: any[]): void;
}

// Animation ////////////////////////////////////////////////////////////////////////////////////////

declare class AnimationAction {
    constructor(mixer: AnimationMixer, clip: AnimationClip, localRoot?: Object3D, blendMode?: AnimationBlendMode);

    blendMode: AnimationBlendMode;

    /**
     * @default THREE.LoopRepeat
     */
    loop: AnimationActionLoopStyles;

    /**
     * @default 0
     */
    time: number;

    /**
     * @default 1
     */
    timeScale: number;

    /**
     * @default 1
     */
    weight: number;

    /**
     * @default Infinity
     */
    repetitions: number;

    /**
     * @default false
     */
    paused: boolean;

    /**
     * @default true
     */
    enabled: boolean;

    /**
     * @default false
     */
    clampWhenFinished: boolean;

    /**
     * @default true
     */
    zeroSlopeAtStart: boolean;

    /**
     * @default true
     */
    zeroSlopeAtEnd: boolean;

    play(): AnimationAction;
    stop(): AnimationAction;
    reset(): AnimationAction;
    isRunning(): boolean;
    isScheduled(): boolean;
    startAt(time: number): AnimationAction;
    setLoop(mode: AnimationActionLoopStyles, repetitions: number): AnimationAction;
    setEffectiveWeight(weight: number): AnimationAction;
    getEffectiveWeight(): number;
    fadeIn(duration: number): AnimationAction;
    fadeOut(duration: number): AnimationAction;
    crossFadeFrom(fadeOutAction: AnimationAction, duration: number, warp: boolean): AnimationAction;
    crossFadeTo(fadeInAction: AnimationAction, duration: number, warp: boolean): AnimationAction;
    stopFading(): AnimationAction;
    setEffectiveTimeScale(timeScale: number): AnimationAction;
    getEffectiveTimeScale(): number;
    setDuration(duration: number): AnimationAction;
    syncWith(action: AnimationAction): AnimationAction;
    halt(duration: number): AnimationAction;
    warp(statTimeScale: number, endTimeScale: number, duration: number): AnimationAction;
    stopWarping(): AnimationAction;
    getMixer(): AnimationMixer;
    getClip(): AnimationClip;
    getRoot(): Object3D;
}

interface AnimationMixerEventMap {
    loop: { action: AnimationAction; loopDelta: number };
    finished: { action: AnimationAction; direction: number };
}

declare class AnimationMixer extends EventDispatcher<AnimationMixerEventMap> {
    constructor(root: Object3D | AnimationObjectGroup);

    /**
     * @default 0
     */
    time: number;

    /**
     * @default 1.0
     */
    timeScale: number;

    clipAction(
        clip: AnimationClip,
        root?: Object3D | AnimationObjectGroup,
        blendMode?: AnimationBlendMode,
    ): AnimationAction;
    existingAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): AnimationAction | null;
    stopAllAction(): AnimationMixer;
    update(deltaTime: number): AnimationMixer;
    setTime(timeInSeconds: number): AnimationMixer;
    getRoot(): Object3D | AnimationObjectGroup;
    uncacheClip(clip: AnimationClip): void;
    uncacheRoot(root: Object3D | AnimationObjectGroup): void;
    uncacheAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): void;
}

/**
 * This contains methods for setting up an {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext}.
 * Used internally by the {@link AudioListener | AudioListener} and {@link AudioLoader | AudioLoader} classes.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioContext | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioContext.js | Source}
 */
declare namespace AudioContext {
    /**
     * Return the value of the variable `context` in the outer scope, if defined, otherwise set it to a new {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext}.
     */
    function getContext(): AudioContext;

    /**
     * Set the variable `context` in the outer scope to `value`.
     * @param value
     */
    function setContext(context: AudioContext): void;
}

/**
 * The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener | listener} of the all positional and non-positional audio effects in the scene.
 * A three.js application usually creates a single instance of {@link AudioListener}  * @remarks
 * It is a mandatory construtor parameter for audios entities like {@link Audio | Audio} and {@link PositionalAudio | PositionalAudio}.
 * In most cases, the listener object is a child of the camera
 * So the 3D transformation of the camera represents the 3D transformation of the listener.
 * @example
 * ```typescript
 * // create an {@link AudioListener} and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add(listener);
 * // create a global audio source
 * const sound = new THREE.Audio(listener);
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer);
 *     sound.setLoop(true);
 *     sound.setVolume(0.5);
 *     sound.play();
 * });
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioListener | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioListener.js | Source}
 */
declare class AudioListener extends Object3D {
    /**
     * Create a new AudioListener.
     */
    constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `AudioListener`
     */
    readonly type: string | 'AudioListener';

    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link {@link AudioListener} | listener} given in the constructor.
     */
    context: AudioContext;

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain()}.
     */
    gain: GainNode;

    /**
     * @defaultValue `null`
     */
    filter: AudioNode;

    /**
     * Time delta value for audio entities. Use in context of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime | AudioParam.linearRampToValueAtTimeDefault()}.
     * @defaultValue `0`
     */
    timeDelta: number;

    /**
     * Return the {@link AudioListener.gain | gainNode}.
     */
    getInput(): GainNode;
    /**
     * Set the {@link AudioListener.filter | filter} property to `null`.
     */
    removeFilter(): this;

    /**
     * Returns the value of the {@link AudioListener.filter | filter} property.
     */
    getFilter(): AudioNode;
    /**
     * Set the {@link AudioListener.filter | filter} property to `value`.
     * @param value
     */
    setFilter(value: AudioNode): this;

    /**
     * Return the volume.
     */
    getMasterVolume(): number;

    /**
     * Set the volume.
     * @param value
     */
    setMasterVolume(value: number): this;
}

// Extras / Audio /////////////////////////////////////////////////////////////////////

/**
 * Create a non-positional ( global ) {@link Audio} object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web {@link Audio} API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add(listener);
 * // create a global {@link Audio} source
 * const sound = new THREE.Audio(listener);
 * // load a sound and set it as the {@link Audio} object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer);
 *     sound.setLoop(true);
 *     sound.setVolume(0.5);
 *     sound.play();
 * });
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/Audio | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/Audio.js | Source}
 */
declare class Audio<NodeType extends AudioNode = GainNode> extends Object3D {
    /**
     * Create a new instance of {@link Audio}
     * @param listener (required) {@link AudioListener | AudioListener} instance.
     */
    constructor(listener: AudioListener);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Audio`
     */
    readonly type: string | 'Audio';

    /**
     * A reference to the listener object of this audio.
     */
    listener: AudioListener;

    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link AudioListener | listener} given in the constructor.
     */
    context: AudioContext;

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain}().
     */
    gain: GainNode;

    /**
     * Whether to start playback automatically.
     * @defaultValue `false`
     */
    autoplay: boolean;

    buffer: AudioBuffer | null;

    /**
     * Modify pitch, measured in cents. +/- 100 is a semitone. +/- 1200 is an octave.
     * @defaultValue `0`
     */
    detune: number;

    /**
     * @default false
     */
    loop: boolean;

    /**
     * @default 0
     */
    loopStart: number;

    /**
     * @default 0
     */
    loopEnd: number;

    /**
     * An offset to the time within the {@link Audio} buffer that playback should begin.
     * Same as the {@link Audio.offset | offset} parameter of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
     * @defaultValue `0`
     */
    offset: number;

    /**
     * Overrides the duration of the audio. Same as the {@link Audio.duration | duration} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
     * @defaultValue `undefined` _to play the whole buffer_.
     */
    duration: number | undefined;

    /**
     * Speed of playback.
     * @defaultValue `1`
     */
    playbackRate: number;

    /**
     * Whether the {@link Audio} is currently playing.
     * @defaultValue `false`
     */
    isPlaying: boolean;

    /**
     * Whether playback can be controlled using the {@link Audio.play | play}(), {@link Audio.pause | pause}() etc. methods.
     * @defaultValue `true`
     */
    hasPlaybackControl: boolean;

    /**
     * Type of the {@link Audio} source.
     * @defaultValue 'empty'.
     */
    sourceType: string;

    /**
     * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode | AudioBufferSourceNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBufferSource | AudioContext.createBufferSource()}.
     */
    source: AudioScheduledSourceNode | null;

    /**
     * Represents an array of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode | AudioNodes}.
     * Can be used to apply a variety of low-order filters to create more complex sound effects.
     * In most cases, the array contains instances of {@link https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode | BiquadFilterNodes}.
     * Filters are set via {@link THREE.Audio.setFilter | Audio.setFilter} or {@link THREE.Audio.setFilters | Audio.setFilters}.
     * @defaultValue `[]`
     */
    filters: AudioNode[];

    /**
     * Return the {@link Audio.gain | gainNode}.
     */
    getOutput(): NodeType;

    /**
     * Setup the {@link Audio.source | source} to the audioBuffer, and sets {@link Audio.sourceType | sourceType} to 'audioNode'.
     * @remarks Also sets {@link Audio.hasPlaybackControl | hasPlaybackControl} to false.
     */
    setNodeSource(audioNode: AudioScheduledSourceNode): this;

    /**
     * Applies the given object of type {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement | HTMLMediaElement} as the source of this audio.
     * @remarks Also sets {@link Audio.hasPlaybackControl | hasPlaybackControl} to false.
     */
    setMediaElementSource(mediaElement: HTMLMediaElement): this;

    /**
     * Applies the given object of type {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream | MediaStream} as the source of this audio.
     * @remarks Also sets {@link Audio.hasPlaybackControl | hasPlaybackControl} to false.
     */
    setMediaStreamSource(mediaStream: MediaStream): this;

    /**
     * Setup the {@link Audio.source | source} to the audioBuffer, and sets {@link Audio.sourceType | sourceType} to 'buffer'.
     * @remarks If {@link Audio.autoplay | autoplay}, also starts playback.
     */
    setBuffer(audioBuffer: AudioBuffer): this;

    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is true, starts playback.
     */
    play(delay?: number): this;
    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is true, pauses playback.
     */
    pause(): this;
    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is enabled, stops playback.
     */
    stop(): this;

    /**
     * Called automatically when playback finished.
     */
    onEnded(): void;

    /**
     * Connect to the {@link THREE.Audio.source | Audio.source}
     * @remarks This is used internally on initialisation and when setting / removing filters.
     */
    connect(): this;
    /**
     * Disconnect from the {@link THREE.Audio.source | Audio.source}
     * @remarks This is used internally when setting / removing filters.
     */
    disconnect(): this;

    /**
     * Returns the detuning of oscillation in cents.
     */
    getDetune(): number;
    /**
     * Defines the detuning of oscillation in cents.
     * @param value Expects a `Float`
     */
    setDetune(value: number): this;

    /**
     * Returns the first element of the {@link Audio.filters | filters} array.
     */
    getFilter(): AudioNode;
    /**
     * Applies a single filter node to the audio.
     */
    setFilter(filter: AudioNode): this;

    /**
     * Returns the {@link Audio.filters | filters} array.
     */
    getFilters(): AudioNode[];
    /**
     * Applies an array of filter nodes to the audio.
     * @param value Arrays of filters.
     */
    setFilters(value: AudioNode[]): this;

    /**
     * Return the value of {@link Audio.playbackRate | playbackRate}.
     */
    getPlaybackRate(): number;
    /**
     * If {@link Audio.hasPlaybackControl | hasPlaybackControl} is enabled, set the {@link Audio.playbackRate | playbackRate} to `value`.
     * @param value Expects a `Float`
     */
    setPlaybackRate(value: number): this;

    /**
     * Return the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop | source.loop} (whether playback should loop).
     */
    getLoop(): boolean;
    /**
     * Set {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop | source.loop} to `value` (whether playback should loop).
     * @param value
     */
    setLoop(value: boolean): this;

    /**
     * Set {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopStart | source.loopStart} to `value`.
     * @param value Expects a `Float`
     */
    setLoopStart(value: number): this;
    /**
     * Set {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopEnd | source.loopEnd} to `value`.
     * @param value Expects a `Float`
     */
    setLoopEnd(value: number): this;

    /**
     * Return the current volume.
     */
    getVolume(): number;
    /**
     * Set the volume.
     * @param value Expects a `Float`
     */
    setVolume(value: number): this;
}

/**
 * Create a positional audio object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add(listener);
 * // create the {@link PositionalAudio} object (passing in the listener)
 * const sound = new THREE.PositionalAudio(listener);
 * // load a sound and set it as the {@link PositionalAudio} object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load('sounds/song.ogg', function (buffer) {
 *     sound.setBuffer(buffer);
 *     sound.setRefDistance(20);
 *     sound.play();
 * });
 * // create an object for the sound to play from
 * const sphere = new THREE.SphereGeometry(20, 32, 16);
 * const material = new THREE.MeshPhongMaterial({
 *     color: 0xff2200
 * });
 * const mesh = new THREE.Mesh(sphere, material);
 * scene.add(mesh);
 * // finally add the sound to the mesh
 * mesh.add(sound);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_orientation | webaudio / orientation }
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/PositionalAudio | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/PositionalAudio.js | Source}
 */
declare class PositionalAudio extends Audio<PannerNode> {
    /**
     * Create a new instance of {@link PositionalAudio}
     * @param listener (required) {@link AudioListener | AudioListener} instance.
     */
    constructor(listener: AudioListener);

    /**
     * The PositionalAudio's {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode | PannerNode}.
     */
    panner: PannerNode;

    /**
     * Returns the {@link PositionalAudio.panner | panner}.
     */
    getOutput(): PannerNode;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance | panner.refDistance}.
     */
    getRefDistance(): number;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance | panner.refDistance}.
     * @param value Expects a `Float`
     */
    setRefDistance(value: number): this;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor | panner.rolloffFactor}.
     */
    getRolloffFactor(): number;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor | panner.rolloffFactor}.
     * @param value Expects a `Float`
     */
    setRolloffFactor(value: number): this;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel | panner.distanceModel}.
     */
    getDistanceModel(): string;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel | panner.distanceModel}.
     * @param value
     */
    setDistanceModel(value: string): this;

    /**
     * Returns the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance | panner.maxDistance}.
     */
    getMaxDistance(): number;
    /**
     * Sets the value of {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance | panner.maxDistance}.
     * @param value Expects a `Float`
     */
    setMaxDistance(value: number): this;

    /**
     * This method can be used in order to transform an omnidirectional sound into a {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode | directional sound}.
     * @param coneInnerAngle Expects a `Float`
     * @param coneOuterAngle Expects a `Float`
     * @param coneOuterGain Expects a `Float`
     */
    setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): this;
}

/**
 * Create a {@link AudioAnalyser} object, which uses an {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} to analyse audio data.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener();
 * camera.add(listener);
 * // create an Audio source
 * const sound = new THREE.Audio(listener);
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader();
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer);
 *     sound.setLoop(true);
 *     sound.setVolume(0.5);
 *     sound.play();
 * });
 * // create an AudioAnalyser, passing in the sound and desired fftSize
 * const analyser = new THREE.AudioAnalyser(sound, 32);
 * // get the average frequency of the sound
 * const data = analyser.getAverageFrequency();
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioAnalyser | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js | Source}
 */
declare class AudioAnalyser {
    /**
     * Create a new {@link {@link AudioAnalyser} | AudioAnalyser}.
     * @param audio
     * @param fftSize See {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize | AnalyserNode.fftSize }. Expects a `unsigned integer`. Default `2048`.
     */
    constructor(audio: Audio<AudioNode>, fftSize?: number);

    /**
     * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} used to analyze audio.
     */
    analyser: AnalyserNode;

    /**
     * A Uint8Array with size determined by {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount | analyser.frequencyBinCount} used to hold analysis data.
     */
    data: Uint8Array;

    /**
     * Uses the Web Audio's {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData | getByteFrequencyData} method
     */
    getFrequencyData(): Uint8Array;

    /**
     * Get the average of the frequencies returned by the {@link AudioAnalyser.getFrequencyData | getFrequencyData} method.
     */
    getAverageFrequency(): number;
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
declare class PerspectiveCamera extends Camera {
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
 * Dual {@link PerspectiveCamera | PerspectiveCamera}s used for effects such as
 * {@link https://en.wikipedia.org/wiki/Anaglyph_3D | 3D Anaglyph} or
 * {@link https://en.wikipedia.org/wiki/parallax_barrier | Parallax Barrier}.
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/StereoCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js | Source}
 */
declare class StereoCamera extends Camera {
    constructor();

    type: 'StereoCamera';

    /**
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    aspect: number;

    /**
     * @remarks Expects a `Float`
     * @defaultValue `0.064`
     */
    eyeSep: number;

    /**
     * The Left camera.
     * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 1}
     * @remarks Objects to be rendered by the **left** camera must also be added to this layer.
     */
    cameraL: PerspectiveCamera;

    /**
     * The Right camera.
     * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 2}
     * @remarks Objects to be rendered by the **right** camera must also be added to this layer.
     */
    cameraR: PerspectiveCamera;

    /**
     * Update the stereo cameras based on the camera passed in.
     * @param camera
     */
    update(camera: PerspectiveCamera): void;
}

/**
 * Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection | orthographic projection}.
 * In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.
 * This can be useful for rendering 2D scenes and UI elements, amongst other things.
 * @example
 * ```typescript
 * const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
 * scene.add(camera);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera | camera }
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | interactive / cubes / ortho }
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_advanced | postprocessing / advanced }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_dof2 | postprocessing / dof2 }
 * @see Example: {@link https://threejs.org/examples/#webgl_postprocessing_godrays | postprocessing / godrays }
 * @see Example: {@link https://threejs.org/examples/#webgl_rtt | rtt }
 * @see Example: {@link https://threejs.org/examples/#webgl_shaders_tonemapping | shaders / tonemapping }
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmap | shadowmap }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js | Source}
 */
declare class OrthographicCamera extends Camera {
    /**
     * Creates a new {@link OrthographicCamera}.
     * @remarks Together these define the camera's {@link https://en.wikipedia.org/wiki/Viewing_frustum | viewing frustum}.
     * @param left Camera frustum left plane. Default `-1`.
     * @param right Camera frustum right plane. Default `1`.
     * @param top Camera frustum top plane. Default `1`.
     * @param bottom Camera frustum bottom plane. Default `-1`.
     * @param near Camera frustum near plane. Default `0.1`.
     * @param far Camera frustum far plane. Default `2000`.
     */
    constructor(left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number);

    /**
     * Read-only flag to check if a given object is of type {@link OrthographicCamera}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isOrthographicCamera: true;

    /**
     * @override
     * @defaultValue `OrthographicCamera`
     */
    override readonly type: string | 'OrthographicCamera';

    /**
     * Gets or sets the zoom factor of the camera.
     * @defaultValue `1`
     */
    zoom: number;

    /**
     * Set by {@link setViewOffset | .setViewOffset()}.
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
     * Camera frustum left plane.
     * @remarks Expects a `Float`
     * @defaultValue `-1`
     */
    left: number;

    /**
     * Camera frustum right plane.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    right: number;

    /**
     * Camera frustum top plane.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    top: number;

    /**
     * Camera frustum bottom plane.
     * @remarks Expects a `Float`.
     * @defaultValue `-1`
     */
    bottom: number;

    /**
     * Camera frustum near plane.`.
     * @remarks The valid range is between `0` and the current value of the {@link far | .far} plane.
     * @remarks Note that, unlike for the {@link THREE.PerspectiveCamera | PerspectiveCamera}, `0` is a valid value for an {@link THREE.OrthographicCamera | OrthographicCamera's} near plane.
     * @remarks Expects a `Float`
     * @defaultValue `0.1`
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
     * Updates the camera projection matrix
     * @remarks Must be called after any change of parameters.
     */
    updateProjectionMatrix(): void;

    /**
     * Sets an offset in a larger {@link https://en.wikipedia.org/wiki/Viewing_frustum | viewing frustum}
     * @remarks
     * This is useful for multi-window or multi-monitor/multi-machine setups
     * For an example on how to use it see {@link PerspectiveCamera.setViewOffset | PerspectiveCamera}.
     * @see {@link THREE.PerspectiveCamera.setViewOffset | PerspectiveCamera}.
     * @param fullWidth Full width of multiview setup Expects a `Float`.
     * @param fullHeight Full height of multiview setup Expects a `Float`.
     * @param x Horizontal offset of subcamera Expects a `Float`.
     * @param y Vertical offset of subcamera Expects a `Float`.
     * @param width Width of subcamera Expects a `Float`.
     * @param height Height of subcamera Expects a `Float`.
     */
    setViewOffset(
        fullWidth: number,
        fullHeight: number,
        offsetX: number,
        offsetY: number,
        width: number,
        height: number,
    ): void;

    /**
     * Removes any offset set by the {@link setViewOffset | .setViewOffset} method.
     */
    clearViewOffset(): void;
}

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

declare class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size?: number, options?: WebGLRenderTargetOptions);

    texture: CubeTexture;

    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;

    clear(renderer: WebGLRenderer, color: boolean, depth: boolean, stencil: boolean): void;
}

/**
 * Creates **6** {@link THREE.PerspectiveCamera | cameras} that render to a {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}.
 * @remarks The cameras are added to the {@link children} array.
 * @example
 * ```typescript
 * // Create cube render target
 * const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
 *
 * // Create cube camera
 * const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget );
 * scene.add( cubeCamera );
 *
 * // Create car
 * const chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeRenderTarget.texture } );
 * const car = new THREE.Mesh( carGeometry, chromeMaterial );
 * scene.add( car );
 *
 * // Update the render target cube
 * car.visible = false;
 * cubeCamera.position.copy( car.position );
 * cubeCamera.update( renderer, scene );
 *
 * // Render the scene
 * car.visible = true;
 * renderer.render( scene, camera );
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_cubemap_dynamic | materials / cubemap / dynamic }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/CubeCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/CubeCamera.js | Source}
 */
declare class CubeCamera extends Object3D {
    /**
     * Constructs a {@link CubeCamera} that contains 6 {@link PerspectiveCamera | PerspectiveCameras} that render to a {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}.
     * @param near The near clipping distance.
     * @param far The far clipping distance.
     * @param renderTarget The destination cube render target.
     */
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget);

    /**
     * @override
     * @defaultValue `CubeCamera`
     */
    override readonly type: string | 'CubeCamera';

    /**
     * The destination cube render target.
     */
    renderTarget: WebGLCubeRenderTarget;

    coordinateSystem: CoordinateSystem;

    updateCoordinateSystem(): void;

    /**
     * Call this to update the {@link CubeCamera.renderTarget | renderTarget}.
     * @param renderer The current WebGL renderer
     * @param scene The current scene
     */
    update(renderer: WebGLRenderer, scene: Scene): void;
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

/**
 * Uniforms are global GLSL variables.
 * They are passed to shader programs.
 * @example
 * When declaring a uniform of a {@link THREE.ShaderMaterial | ShaderMaterial}, it is declared by value or by object.
 * ```typescript
 * uniforms: {
 *     time: {
 *         value: 1.0
 *     },
 *     resolution: new Uniform(new Vector2())
 * };
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform | WebGL2 / nodes / materials / instance / uniform}
 * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGPU / instance / uniform}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js | Source}
 */
declare class Uniform<T = any> {
    /**
     * Create a new instance of {@link THREE.Uniform | Uniform}
     * @param value An object containing the value to set up the uniform. It's type must be one of the Uniform Types described above.
     */
    constructor(value: T);

    /**
     * Current value of the uniform.
     */
    value: T;

    /**
     * Returns a clone of this uniform.
     * @remarks
     * If the uniform's {@link value} property is an {@link Object | Object} with a `clone()` method, this is used,
     * otherwise the value is copied by assignment Array values are **shared** between cloned {@link THREE.UniformUniform | Uniform}s.
     */
    clone(): Uniform<T>;
}

/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGL2 / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
 */
declare class UniformsGroup extends EventDispatcher<{ dispose: {} }> {
    constructor();

    readonly isUniformsGroup: true;

    id: number;

    usage: Usage;

    uniforms: Uniform[];

    add(uniform: Uniform): this;

    remove(uniform: Uniform): this;

    setName(name: string): this;

    setUsage(value: Usage): this;

    dispose(): this;

    copy(source: UniformsGroup): this;

    clone(): UniformsGroup;
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

/**
 * An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js | Source}
 */
declare class InstancedBufferGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link InstancedBufferGeometry}
     */
    constructor();

    /**
     * @defaultValue `InstancedBufferGeometry`
     */
    type: string;

    /**
     * Read-only flag to check if a given object is of type {@link InstancedBufferGeometry}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInstancedBufferGeometry: true;

    /**
     *
     * @defaultValue `Infinity`
     */
    instanceCount: number;

    /**
     * Copies the given {@link InstancedBufferGeometry} to this instance.
     * @param source
     * @override
     */
    copy(source: InstancedBufferGeometry): this;
}

/**
 * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
 */
declare class InstancedInterleavedBuffer extends InterleavedBuffer {
    /**
     * Create a new instance of {@link InstancedInterleavedBuffer}
     * @param array
     * @param itemSize
     * @param meshPerAttribute
     */
    constructor(array: TypedArray, stride: number, meshPerAttribute?: number);

    /**
     * @defaultValue `1`
     */
    meshPerAttribute: number;
}

/**
 * An instanced version of {@link THREE.BufferAttribute | BufferAttribute}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js | Source}
 */
declare class InstancedBufferAttribute extends BufferAttribute {
    /**
     * Create a new instance of {@link THREE.InstancedBufferAttribute | InstancedBufferAttribute}
     * @param array
     * @param itemSize
     * @param normalized
     * @param meshPerAttribute
     */
    constructor(array: TypedArray, itemSize: number, normalized?: boolean, meshPerAttribute?: number);

    /**
     * Defines how often a value of this buffer attribute should be repeated.
     * A value of one means that each value of the instanced attribute is used for a single instance.
     * A value of two means that each value is used for two consecutive instances (and so on).
     * @defaultValue `1`
     */
    meshPerAttribute: number;
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
    camera: Camera;

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
    setFromCamera(coords: Vector2, camera: Camera): void;

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

/**
 * Object for keeping track of time
 * @remarks
 * This uses {@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now | performance.now} if it is available,
 * otherwise it reverts to the less accurate {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now | Date.now}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Clock | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js | Source}
 */
declare class Clock {
    /**
     * Create a new instance of {@link THREE.Clock | Clock}
     * @param autoStart - Whether to automatically start the clock when {@link getDelta | .getDelta()} is called for the first time. Default `true`
     */
    constructor(autoStart?: boolean);

    /**
     * If set, starts the clock automatically when {@link getDelta | .getDelta()} is called for the first time.
     * @defaultValue `true`
     */
    autoStart: boolean;

    /**
     * Holds the time at which the clock's {@link start | .start()} method was last called.
     * @defaultValue `0`
     */
    startTime: number;

    /**
     * Holds the time at which the clock's {@link start | .start()}, {@link getElapsedTime | .getElapsedTime()} or {@link getDelta | .getDelta()} methods were last called.
     * @defaultValue `0`
     */
    oldTime: number;

    /**
     * Keeps track of the total time that the clock has been running.
     * @defaultValue `0`
     */
    elapsedTime: number;

    /**
     * Whether the clock is running or not.
     * @defaultValue `false`
     */
    running: boolean;

    /**
     * Starts clock.
     * @remarks
     * Also sets the {@link startTime | .startTime} and {@link oldTime | .oldTime} to the current time,
     * sets {@link elapsedTime | .elapsedTime} to `0` and {@link running | .running} to `true`.
     */
    start(): void;

    /**
     * Stops clock and sets {@link oldTime | oldTime} to the current time.
     */
    stop(): void;

    /**
     * Get the seconds passed since the clock started and sets {@link oldTime | .oldTime} to the current time.
     * @remarks
     * If {@link autoStart | .autoStart} is `true` and the clock is not running, also starts the clock.
     */
    getElapsedTime(): number;

    /**
     * Get the seconds passed since the time {@link oldTime | .oldTime} was set and sets {@link oldTime | .oldTime} to the current time.
     * @remarks
     * If {@link autoStart | .autoStart} is `true` and the clock is not running, also starts the clock.
     */
    getDelta(): number;
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
 * Creates a 2d curve in the shape of an ellipse
 * @remarks
 * Setting the {@link xRadius} equal to the {@link yRadius} will result in a circle.
 * @example
 * ```typescript
 * const curve = new THREE.EllipseCurve(
 *   0,  0,  // ax, aY
 *   10, 10, // xRadius, yRadius
 *   0,  2 * Math.PI, // aStartAngle, aEndAngle
 *   false,  // aClockwise
 *   0       // aRotation
 *   );
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
 * // Create the final object to add to the scene
 * const ellipse = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/EllipseCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/EllipseCurve.js | Source}
 */
declare class EllipseCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link EllipseCurve}.
     * @param aX The X center of the ellipse. Expects a `Float`. Default is `0`.
     * @param aY The Y center of the ellipse. Expects a `Float`. Default is `0`.
     * @param xRadius The radius of the ellipse in the x direction. Expects a `Float`. Default is `1`.
     * @param yRadius The radius of the ellipse in the y direction. Expects a `Float`. Default is `1`.
     * @param aStartAngle The start angle of the curve in radians starting from the positive X axis. Default is `0`.
     * @param aEndAngle The end angle of the curve in radians starting from the positive X axis. Default is `2 x Math.PI`.
     * @param aClockwise Whether the ellipse is drawn clockwise. Default is `false`.
     * @param aRotation The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Default is `0`.
     */
    constructor(
        aX?: number,
        aY?: number,
        xRadius?: number,
        yRadius?: number,
        aStartAngle?: number,
        aEndAngle?: number,
        aClockwise?: boolean,
        aRotation?: number,
    );

    /**
     * Read-only flag to check if a given object is of type {@link EllipseCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isEllipseCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `EllipseCurve`
     */
    override readonly type: string | 'EllipseCurve';

    /**
     * The X center of the ellipse.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aX: number;

    /**
     * The Y center of the ellipse.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aY: number;

    /**
     * The radius of the ellipse in the x direction.
     * @defaultValue `1`
     */
    xRadius: number;

    /**
     * The radius of the ellipse in the y direction.
     * @defaultValue `1`
     */
    yRadius: number;

    /**
     * The start angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aStartAngle: number;

    /**
     * The end angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `2 * Math.PI`
     */
    aEndAngle: number;

    /**
     * Whether the ellipse is drawn clockwise.
     * @defaultValue `false``
     */
    aClockwise: boolean;

    /**
     * The rotation angle of the ellipse in radians, counterclockwise from the positive X axis (optional).
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aRotation: number;
}

/**
 * Alias for {@link THREE.EllipseCurve | EllipseCurve}.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js | Source}
 */
declare class ArcCurve extends EllipseCurve {
    /**
     * This constructor creates a new {@link ArcCurve}.
     * @param aX The X center of the ellipse. Expects a `Float`. Default is `0`.
     * @param aY The Y center of the ellipse. Expects a `Float`. Default is `0`.
     * @param xRadius The radius of the ellipse in the x direction. Expects a `Float`. Default is `1`.
     * @param yRadius The radius of the ellipse in the y direction. Expects a `Float`. Default is `1`.
     * @param aStartAngle The start angle of the curve in radians starting from the positive X axis. Default is `0`.
     * @param aEndAngle The end angle of the curve in radians starting from the positive X axis. Default is `2 x Math.PI`.
     * @param aClockwise Whether the ellipse is drawn clockwise. Default is `false`.
     */
    constructor(
        aX?: number,
        aY?: number,
        aRadius?: number,
        aStartAngle?: number,
        aEndAngle?: number,
        aClockwise?: boolean,
    );

    /**
     * Read-only flag to check if a given object is of type {@link ArcCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isArcCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ArcCurve`
     */
    override readonly type: string | 'ArcCurve';
}

type CurveType = 'centripetal' | 'chordal' | 'catmullrom';

/**
 * Create a smooth **3D** spline curve from a series of points using the {@link https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline | Catmull-Rom} algorithm.
 * @example
 * ```typescript
 * //Create a closed wavey loop
 * const curve = new THREE.CatmullRomCurve3([
 * new THREE.Vector3(-10, 0, 10),
 * new THREE.Vector3(-5, 5, 5),
 * new THREE.Vector3(0, 0, 0),
 * new THREE.Vector3(5, -5, 5),
 * new THREE.Vector3(10, 0, 10)]);
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGL / geometry / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CatmullRomCurve3.js | Source}
 */
declare class CatmullRomCurve3 extends Curve<Vector3> {
    /**
     * This constructor creates a new {@link CatmullRomCurve3}.
     * @param points An array of {@link THREE.Vector3 | Vector3} points
     * @param closed Whether the curve is closed. Default `false`
     * @param curveType Type of the curve. Default `centripetal`
     * @param tension Tension of the curve. Expects a `Float`. Default `0.5`
     */
    constructor(points?: Vector3[], closed?: boolean, curveType?: CurveType, tension?: number);

    /**
     * Read-only flag to check if a given object is of type {@link CatmullRomCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCatmullRomCurve3 = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CatmullRomCurve3`
     */
    override readonly type: string | 'CatmullRomCurve3';

    /**
     * The curve will loop back onto itself when this is true.
     * @defaultValue `false`
     */
    closed: boolean;

    /**
     * The array of {@link THREE.Vector3 | Vector3} points that define the curve.
     * @remarks It needs at least two entries.
     * @defaultValue `[]`
     */
    points: Vector3[];

    /**
     * Possible values are `centripetal`, `chordal` and `catmullrom`.
     * @defaultValue `centripetal`
     */
    curveType: CurveType;

    /**
     * When {@link .curveType} is `catmullrom`, defines catmullrom's tension.
     * @remarks Expects a `Float`
     */
    tension: number;
}

/**
 * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve},
 * defined by a start point, endpoint and two control points.
 * @example
 * ```typescript
 * const curve = new THREE.CubicBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 15),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0));
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
 */
declare class CubicBezierCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link CubicBezierCurve}.
     * @param v0 The starting point. Default is `new THREE.Vector2()`.
     * @param v1 The first control point. Default is `new THREE.Vector2()`.
     * @param v2 The second control point. Default is `new THREE.Vector2()`.
     * @param v3 The ending point. Default is `new THREE.Vector2()`.
     */
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2, v3?: Vector2);

    /**
     * Read-only flag to check if a given object is of type {@link CubicBezierCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCubicBezierCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CubicBezierCurve`
     */
    override readonly type: string | 'CubicBezierCurve';

    /**
     * The starting point.
     * @defaultValue `new THREE.Vector2()`
     */
    v0: Vector2;

    /**
     * The first control point.
     * @defaultValue `new THREE.Vector2()`
     */
    v1: Vector2;

    /**
     * The second control point.
     * @defaultValue `new THREE.Vector2()`
     */
    v2: Vector2;

    /**
     * The ending point.
     * @defaultValue `new THREE.Vector2()`
     */
    v3: Vector2;
}

/**
 * Create a smooth **3D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve},
 * defined by a start point, endpoint and two control points.
 * @example
 * ```typescript
 * const curve = new THREE.CubicBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 15),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0));
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
 */
declare class CubicBezierCurve3 extends Curve<Vector3> {
    /**
     * This constructor creates a new {@link CubicBezierCurve3}.
     * @param v0 The starting point. Default is `new THREE.Vector3()`.
     * @param v1 The first control point. Default is `new THREE.Vector3()`.
     * @param v2 The second control point. Default is `new THREE.Vector3()`.
     * @param v3 The ending point. Default is `new THREE.Vector3()`.
     */
    constructor(v0?: Vector3, v1?: Vector3, v2?: Vector3, v3?: Vector3);

    /**
     * Read-only flag to check if a given object is of type {@link CubicBezierCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCubicBezierCurve3 = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CubicBezierCurve3`
     */
    override readonly type: string | 'CubicBezierCurve3';

    /**
     * The starting point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v0: Vector3;

    /**
     * The first control point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v1: Vector3;

    /**
     * The second control point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v2: Vector3;

    /**
     * The ending point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v3: Vector3;
}

/**
 * A curve representing a **2D** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js | Source}
 */
declare class LineCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link LineCurve}.
     * @param v1 The start point. Default is `new THREE.Vector2()`.
     * @param v2 The end point. Default is `new THREE.Vector2()`.
     */
    constructor(v1?: Vector2, v2?: Vector2);

    /**
     * Read-only flag to check if a given object is of type {@link LineCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `LineCurve`
     */
    override readonly type: string | 'LineCurve';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    v1: Vector2;

    /**
     * The end point
     * @defaultValue `new THREE.Vector2()`
     */
    v2: Vector2;
}

/**
 * A curve representing a **3D** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js | Source}
 */
declare class LineCurve3 extends Curve<Vector3> {
    /**
     * This constructor creates a new {@link LineCurve3}.
     * @param v1 The start point. Default is `new THREE.Vector3()`.
     * @param v2 The end point. Default is `new THREE.Vector3()`.
     */
    constructor(v1?: Vector3, v2?: Vector3);

    /**
     * Read-only flag to check if a given object is of type {@link LineCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineCurve3 = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `LineCurve3`
     */
    override readonly type: string | 'LineCurve3';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v1: Vector3;

    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v2: Vector3;
}

/**
 * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0));
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve.js | Source}
 */
declare class QuadraticBezierCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link QuadraticBezierCurve}.
     * @param v0 The start point. Default is `new THREE.Vector2()`.
     * @param v1 The control point. Default is `new THREE.Vector2()`.
     * @param v2 The end point. Default is `new THREE.Vector2()`.
     */
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2);

    /**
     * Read-only flag to check if a given object is of type {@link LineCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isQuadraticBezierCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `QuadraticBezierCurve`
     */
    override readonly type: string | 'QuadraticBezierCurve';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    v0: Vector2;

    /**
     * The control point.
     * @defaultValue `new THREE.Vector2()`
     */
    v1: Vector2;

    /**
     * The end point.
     * @defaultValue `new THREE.Vector2()`
     */
    v2: Vector2;
}

/**
 * Create a smooth **3D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve3(
 * new THREE.Vector3(-10, 0, 0),
 * new THREE.Vector3(20, 15, 0),
 * new THREE.Vector3(10, 0, 0));
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js | Source}
 */
declare class QuadraticBezierCurve3 extends Curve<Vector3> {
    /**
     * This constructor creates a new {@link QuadraticBezierCurve}.
     * @param v0 The start point. Default is `new THREE.Vector3()`.
     * @param v1 The control point. Default is `new THREE.Vector3()`.
     * @param v2 The end point. Default is `new THREE.Vector3()`.
     */
    constructor(v0?: Vector3, v1?: Vector3, v2?: Vector3);

    /**
     * Read-only flag to check if a given object is of type {@link QuadraticBezierCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isQuadraticBezierCurve3 = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `QuadraticBezierCurve3`
     */
    override readonly type: string | 'QuadraticBezierCurve3';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`
     */
    v0: Vector3;

    /**
     * The control point.
     * @defaultValue `new THREE.Vector3()`
     */
    v1: Vector3;

    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`
     */
    v2: Vector3;
}

/**
 * Create a smooth **2D** spline curve from a series of points.
 * @example
 * ```typescript
 * // Create a sine-like wave
 * const curve = new THREE.SplineCurve([
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 5),
 * new THREE.Vector2(0, 0),
 * new THREE.Vector2(5, -5),
 * new THREE.Vector2(10, 0)]);
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const splineObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/SplineCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/SplineCurve.js | Source}
 */
declare class SplineCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link SplineCurve}.
     * @param points An array of {@link THREE.Vector2 | Vector2} points that define the curve. Default `[]`
     */
    constructor(points?: Vector2[]);

    /**
     * Read-only flag to check if a given object is of type {@link SplineCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSplineCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `SplineCurve`
     */
    override readonly type: string | 'SplineCurve';

    /**
     * The array of {@link THREE.Vector2 | Vector2} points that define the curve.
     * @defaultValue `[]`
     */
    points: Vector2[];
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

/**
 * This class is used to convert a series of shapes to an array of {@link THREE.Path | Path's},
 * for example an SVG shape to a path.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/ShapePath | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/ShapePath.js | Source}
 */
declare class ShapePath {
    /**
     * Creates a new {@link ShapePath}
     * @remarks
     * Unlike a {@link THREE.Path | Path}, no points are passed in as the {@link ShapePath} is designed to be generated after creation.
     */
    constructor();

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ShapePath`
     */
    readonly type: 'ShapePath';

    /**
     * Array of {@link THREE.Path | Path's}s.
     * @defaultValue `[]`
     */
    subPaths: Path[];

    /**
     * The current {@link THREE.Path | Path} that is being generated.
     * @defaultValue `null`
     */
    readonly currentPath: Path | null;

    /**
     * {@link THREE.Color | Color} of the shape, by default set to white _(0xffffff)_.
     * @defaultValue `new THREE.Color()`
     */
    color: Color;

    /**
     * Starts a new {@link THREE.Path | Path} and calls {@link THREE.Path.moveTo | Path.moveTo}( x, y ) on that {@link THREE.Path | Path}
     * @remarks
     * Also points {@link ShapePath.currentPath | currentPath} to that {@link THREE.Path | Path}.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    moveTo(x: number, y: number): this;

    /**
     * This creates a line from the {@link ShapePath.currentPath | currentPath}'s offset to X and Y and updates the offset to X and Y.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    lineTo(x: number, y: number): this;

    /**
     * This creates a quadratic curve from the {@link ShapePath.currentPath | currentPath}'s
     * offset to _x_ and _y_ with _cpX_ and _cpY_ as control point and updates the {@link ShapePath.currentPath | currentPath}'s offset to _x_ and _y_.
     * @param cpX Expects a `Float`
     * @param cpY Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;

    /**
     * This creates a bezier curve from the {@link ShapePath.currentPath | currentPath}'s
     * offset to _x_ and _y_ with _cp1X_, _cp1Y_ and _cp2X_, _cp2Y_ as control points and
     * updates the {@link ShapePath.currentPath | currentPath}'s offset to _x_ and _y_.
     * @param cp1X Expects a `Float`
     * @param cp1Y Expects a `Float`
     * @param cp2X Expects a `Float`
     * @param cp2Y Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;

    /**
     * Connects a new {@link THREE.SplineCurve | SplineCurve} onto the {@link ShapePath.currentPath | currentPath}.
     * @param points An array of {@link THREE.Vector2 | Vector2}s
     */
    splineThru(pts: Vector2[]): this;

    /**
     * Converts the {@link ShapePath.subPaths | subPaths} array into an array of Shapes
     * @remarks
     * By default solid shapes are defined clockwise (CW) and holes are defined counterclockwise (CCW)
     * If isCCW is set to true, then those are flipped.
     * @param isCCW Changes how solids and holes are generated
     */
    toShapes(isCCW: boolean): Shape[];
}

/**
 * Used internally by {@link THREE.SplineCurve | SplineCurve}.
 * @param t Interpolation weight. Expects a `Float`
 * @param p0 Expects a `Float`
 * @param p1 Expects a `Float`
 * @param p2 Expects a `Float`
 * @param p3 P0, p1, p2, the points defining the spline curve. Expects a `Float`
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Interpolations | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Interpolations.js | Source}
 */
declare function CatmullRom(t: number, p0: number, p1: number, p2: number, p3: number): number;

/**
 * Used internally by {@link THREE.QuadraticBezierCurve3 | QuadraticBezierCurve3} and {@link THREE.QuadraticBezierCurve | QuadraticBezierCurve}.
 * @param t Interpolation weight. Expects a `Float`
 * @param p0 Expects a `Float`
 * @param p1 Expects a `Float`
 * @param p2 P0, p1, the starting, control and end points defining the curve. Expects a `Float`
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Interpolations | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Interpolations.js | Source}
 */
declare function QuadraticBezier(t: number, p0: number, p1: number, p2: number): number;

/**
 * Used internally by {@link THREE.CubicBezierCurve3 | CubicBezierCurve3} and {@link THREE.CubicBezierCurve | CubicBezierCurve}.
 * @param t Interpolation weight. Expects a `Float`
 * @param p0 Expects a `Float`
 * @param p1 Expects a `Float`
 * @param p2 Expects a `Float`
 * @param p3 P0, p1, p2, the starting, control(twice) and end points defining the curve. Expects a `Float`
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Interpolations | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Interpolations.js | Source}
 */
declare function CubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;

/**
 * Returns a half precision floating point value from the given single precision floating point value.
 * @param val A single precision floating point value.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/DataUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/DataUtils.js | Source}
 */
declare function toHalfFloat(val: number): number;

/**
 * Returns a single precision floating point value from the given half precision floating point value.
 * @param val A half precision floating point value.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/DataUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/DataUtils.js | Source}
 */
declare function fromHalfFloat(val: number): number;

declare const DataUtils_d_fromHalfFloat: typeof fromHalfFloat;
declare const DataUtils_d_toHalfFloat: typeof toHalfFloat;
declare namespace DataUtils_d {
  export { DataUtils_d_fromHalfFloat as fromHalfFloat, DataUtils_d_toHalfFloat as toHalfFloat };
}

/**
 * A class containing utility functions for images.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ImageUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ImageUtils.js | Source}
 */
declare namespace ImageUtils {
    /**
     * Returns a data URI containing a representation of the given image.
     * @param image The image object.
     */
    function getDataURL(
        image: HTMLImageElement | HTMLCanvasElement | CanvasImageSource | ImageBitmap | ImageData,
    ): string;

    /**
     * Converts the given sRGB image data to linear color space.
     * @param image
     */
    function sRGBToLinear(image: HTMLImageElement | HTMLCanvasElement | ImageBitmap): HTMLCanvasElement;

    /**
     * Converts the given sRGB image data to linear color space.
     * @param image
     */
    function sRGBToLinear(image: ImageData): {
        data: ImageData['data'];
        width: ImageData['width'];
        height: ImageData['height'];
    };
}

interface Vec2 {
    x: number;
    y: number;
}

/**
 * A class containing utility functions for shapes.
 * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js | Source}
 */
declare namespace ShapeUtils {
    /**
     * Calculate area of a ( 2D ) contour polygon.
     */
    function area(contour: Vec2[]): number;

    /**
     * Note that this is a linear function so it is necessary to calculate separately for x, y components of a polygon.
     * @remarks Used internally by {@link THREE.Path | Path}, {@link THREE.ExtrudeGeometry | ExtrudeGeometry} and {@link THREE.ShapeGeometry | ShapeGeometry}.
     */
    function isClockWise(pts: Vec2[]): boolean;

    /**
     * Used internally by {@link THREE.ExtrudeGeometry | ExtrudeGeometry} and {@link THREE.ShapeGeometry | ShapeGeometry} to calculate faces in shapes with holes.
     */
    function triangulateShape(contour: Vec2[], holes: Vec2[][]): number[][];
}

/**
 * This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture.
 * @remarks
 * This allows different levels of blur to be quickly accessed based on material roughness
 * Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution,
 * associated with higher roughness levels
 * In this way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation.
 * @remarks
 * Note: The minimum {@link THREE.MeshStandardMaterial | MeshStandardMaterial}'s roughness depends on the size of the provided texture
 * If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size.
 *
 * | texture size | minimum roughness  |
 * |--------------|--------------------|
 * | 16           | 0.21               |
 * | 32           | 0.15               |
 * | 64           | 0.11               |
 * | 128          | 0.076              |
 * | 256          | 0.054              |
 * | 512          | 0.038              |
 * | 1024         | 0.027              |
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/PMREMGenerator.js | Source}
 */
declare class PMREMGenerator {
    /**
     * This constructor creates a new PMREMGenerator.
     * @param renderer
     */
    constructor(renderer: WebGLRenderer);

    /**
     * Generates a PMREM from a supplied Scene, which can be faster than using an image if networking bandwidth is low
     * @remarks
     * Optional near and far planes ensure the scene is rendered in its entirety (the cubeCamera is placed at the origin).
     * @param scene The given scene.
     * @param sigma Specifies a blur radius in radians to be applied to the scene before PMREM generation. Default `0`.
     * @param near The near plane value. Default `0.1`.
     * @param far The far plane value. Default `100`.
     */
    fromScene(scene: Scene, sigma?: number, near?: number, far?: number): WebGLRenderTarget;

    /**
     * Generates a PMREM from an equirectangular texture.
     * @param equirectangular The equirectangular texture.
     */
    fromEquirectangular(equirectangular: Texture, renderTarget?: WebGLRenderTarget | null): WebGLRenderTarget;

    /**
     * Generates a PMREM from an cubemap texture.
     * @param cubemap The cubemap texture.
     */
    fromCubemap(cubemap: CubeTexture, renderTarget?: WebGLRenderTarget | null): WebGLRenderTarget;

    /**
     * Pre-compiles the cubemap shader
     * @remarks
     * You can get faster start-up by invoking this method during your texture's network fetch for increased concurrency.
     */
    compileCubemapShader(): void;

    /**
     * Pre-compiles the equirectangular shader
     * @remarks
     * You can get faster start-up by invoking this method during your texture's network fetch for increased concurrency.
     */
    compileEquirectangularShader(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'
 * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const cube = new THREE.Mesh(geometry, material);
 * scene.add(cube);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js | Source}
 */
declare class BoxGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link BoxGeometry}
     * @param width Width; that is, the length of the edges parallel to the X axis. Optional; Expects a `Float`. Default `1`
     * @param height Height; that is, the length of the edges parallel to the Y axis. Optional; Expects a `Float`. Default `1`
     * @param depth Depth; that is, the length of the edges parallel to the Z axis. Optional; Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented rectangular faces along the width of the sides. Optional; Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented rectangular faces along the height of the sides. Optional; Expects a `Integer`. Default `1`
     * @param depthSegments Number of segmented rectangular faces along the depth of the sides. Optional; Expects a `Integer`. Default `1`
     */
    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthSegments?: number,
        heightSegments?: number,
        depthSegments?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `BoxGeometry`
     */
    override readonly type: string | 'BoxGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly width: number;
        readonly height: number;
        readonly depth: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly depthSegments: number;
    };

    /** @internal */
    static fromJSON(data: {}): BoxGeometry;
}

/**
 * {@link CapsuleGeometry} is a geometry class for a capsule with given radii and height
 * @remarks It is constructed using a lathe.
 * @example
 * ```typescript
 * const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const capsule = new THREE.Mesh(geometry, material);
 * scene.add(capsule);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CapsuleGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CapsuleGeometry.js | Source}
 */
declare class CapsuleGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link CapsuleGeometry}
     * @param radius Radius of the capsule. Expects a `Float`. Default `1`
     * @param length Length of the middle section. Expects a `Float`. Default `1`
     * @param capSubdivisions Number of curve segments used to build the caps. Expects a `Integer`. Default `4`
     * @param radialSegments Number of segmented faces around the circumference of the capsule. Expects a `Integer`. Default `8`
     */
    constructor(radius?: number, length?: number, capSegments?: number, radialSegments?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CapsuleGeometry`
     */
    override readonly type: string | 'CapsuleGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly length: number;
        readonly capSegments: number;
        readonly radialSegments: number;
    };

    /** @internal */
    static fromJSON(data: {}): CapsuleGeometry;
}

/**
 * {@link CircleGeometry} is a simple shape of Euclidean geometry
 * @remarks
 * It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius
 * It is built counter-clockwise from a start angle and a given central angle
 * It can also be used to create regular polygons, where the number of segments determines the number of sides.
 * @example
 * ```typescript
 * const geometry = new THREE.CircleGeometry(5, 32);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const circle = new THREE.Mesh(geometry, material);
 * scene.add(circle);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CircleGeometry.js | Source}
 */
declare class CircleGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link CircleGeometry}
     * @param radius Radius of the circle. Expects a `Float`. Default `1`
     * @param segments Number of segments (triangles). Expects a `Integer`. Minimum `3`. Default `32`
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete circle_.
     */
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CircleGeometry`
     */
    override readonly type: string | 'CircleGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly segments: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): CircleGeometry;
}

/**
 * A class for generating cylinder geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const cylinder = new THREE.Mesh(geometry, material);
 * scene.add(cylinder);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CylinderGeometry.js | Source}
 */
declare class CylinderGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link CylinderGeometry}
     * @param radiusTop Radius of the cylinder at the top. Default `1`
     * @param radiusBottom Radius of the cylinder at the bottom. Default `1`
     * @param height Height of the cylinder. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cylinder. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cylinder. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the ends of the cylinder are open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Default `Math.PI * 2`, _which makes for a complete cylinder.
     */
    constructor(
        radiusTop?: number,
        radiusBottom?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CylinderGeometry`
     */
    override readonly type: string | 'CylinderGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radiusTop: number;
        readonly radiusBottom: number;
        readonly height: number;
        readonly radialSegments: number;
        readonly heightSegments: number;
        readonly openEnded: boolean;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: any): CylinderGeometry;
}

/**
 * A class for generating cone geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.ConeGeometry(5, 20, 32);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const cone = new THREE.Mesh(geometry, material);
 * scene.add(cone);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ConeGeometry.js | Source}
 */
declare class ConeGeometry extends CylinderGeometry {
    /**
     * Create a new instance of {@link ConeGeometry}
     * @param radius Radius of the cone base. Expects a `Float`. Default `1`
     * @param height Height of the cone. Expects a `Float`. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cone. Expects a `Integer`. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cone. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the base of the cone is open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete cone_.
     */
    constructor(
        radius?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ConeGeometry`
     */
    override readonly type: string | 'ConeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks {@link radiusTop} and {@link radiusBottom} are from base {@link THREE.CylinderGeometry} class.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    override readonly parameters: {
        readonly radius: number;
        readonly radiusTop: number;
        readonly radiusBottom: number;
        readonly height: number;
        readonly radialSegments: number;
        readonly heightSegments: number;
        readonly openEnded: boolean;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): ConeGeometry;
}

/**
 * A polyhedron is a solid in three dimensions with flat faces
 * @remarks
 * This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail
 * This class is used by {@link THREE.DodecahedronGeometry | DodecahedronGeometry}, {@link THREE.IcosahedronGeometry | IcosahedronGeometry},
 * {@link THREE.OctahedronGeometry | OctahedronGeometry}, and {@link THREE.TetrahedronGeometry | TetrahedronGeometry} to generate their respective geometries.
 * @example
 * ```typescript
 * const verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, ];
 * const indicesOfFaces = [
 * 2, 1, 0, 0, 3, 2,
 * 0, 4, 7, 7, 3, 0,
 * 0, 1, 5, 5, 4, 0,
 * 1, 2, 6, 6, 5, 1,
 * 2, 3, 7, 7, 6, 2,
 * 4, 5, 6, 6, 7, 4];
 * const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PolyhedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PolyhedronGeometry.js | Source}
 */
declare class PolyhedronGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link PolyhedronGeometry}
     * @param vertices Array of points of the form [1,1,1, -1,-1,-1, ... ]. Default `[]`.
     * @param indices Array of indices that make up the faces of the form [0,1,2, 2,3,0, ... ]. Default `[]`.
     * @param radius [page:The radius of the final shape Expects a `Float`. Default `1`
     * @param detail [page:How many levels to subdivide the geometry. The more detail, the smoother the shape. Expects a `Integer`. Default `0`
     */
    constructor(vertices?: number[], indices?: number[], radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `PolyhedronGeometry`
     */
    override readonly type: string | 'PolyhedronGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly vertices: number[];
        readonly indices: number[];
        readonly radius: number;
        readonly detail: number;
    };

    /** @internal */
    static fromJSON(data: {}): PolyhedronGeometry;
}

/**
 * A class for generating a dodecahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js | Source}
 */
declare class DodecahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link DodecahedronGeometry}
     * @param radius Radius of the dodecahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `DodecahedronGeometry`
     */
    override readonly type: string | 'DodecahedronGeometry';

    /** @internal */
    static fromJSON(data: {}): DodecahedronGeometry;
}

/**
 * This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry | geometry}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(100, 100, 100);
 * const edges = new THREE.EdgesGeometry(geometry);
 * const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
 *     color: 0xffffff
 * }));
 * scene.add(line);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/EdgesGeometry.js | Source}
 */
declare class EdgesGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> extends BufferGeometry {
    /**
     * Create a new instance of {@link EdgesGeometry}
     * @param geometry Any geometry object. Default `null`.
     * @param thresholdAngle An edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this value. Expects a `Integer`. Default `1` _degree_.
     */
    constructor(geometry?: TBufferGeometry | null, thresholdAngle?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `EdgesGeometry`
     */
    override readonly type: string | 'EdgesGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly geometry: TBufferGeometry | null;
        readonly thresholdAngle: number;
    };
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
 * A class for generating an icosahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js | Source}
 */
declare class IcosahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link IcosahedronGeometry}
     * @param radius Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds more vertices making it no longer an icosahedron.
     *               When detail is greater than 1, it's effectively a sphere. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `IcosahedronGeometry`
     */
    override readonly type: string | 'IcosahedronGeometry';

    /** @internal */
    static fromJSON(data: {}): IcosahedronGeometry;
}

/**
 * Creates meshes with axial symmetry like vases
 * @remarks
 * The lathe rotates around the Y axis.
 * @example
 * ```typescript
 * const points = [];
 * for (let i = 0; i & lt; 10; i++) {
 *     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
 * }
 * const geometry = new THREE.LatheGeometry(points);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const lathe = new THREE.Mesh(geometry, material);
 * scene.add(lathe);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js | Source}
 */
declare class LatheGeometry extends BufferGeometry {
    /**
     * This creates a {@link LatheGeometry} based on the parameters.
     * @param points Array of Vector2s. The x-coordinate of each point must be greater than zero.
     *               Default `[new Vector2(0, -0.5), new Vector2(0.5, 0), new Vector2(0, 0.5)]` _which creates a simple diamond shape_.
     * @param segments The number of circumference segments to generate. Expects a `Integer`. Default `12`.
     * @param phiStart The starting angle in radians. Expects a `Float`. Default `0`.
     * @param phiLength The radian (0 to 2*PI) range of the lathed section 2*PI is a closed lathe, less than 2PI is a portion. Expects a `Float`. Default `Math.PI * 2`.
     */
    constructor(points?: Vector2[], segments?: number, phiStart?: number, phiLength?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `LatheGeometry`
     */
    override readonly type: string | 'LatheGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly points: Vector2[];
        readonly segments: number;
        readonly phiStart: number;
        readonly phiLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): LatheGeometry;
}

/**
 * A class for generating an octahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js | Source}
 */
declare class OctahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link OctahedronGeometry}
     * @param radius Radius of the octahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than zero add vertices making it no longer an octahedron. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `OctahedronGeometry`
     */
    override readonly type: string | 'OctahedronGeometry';

    /** @internal */
    static fromJSON(data: {}): OctahedronGeometry;
}

/**
 * A class for generating plane geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.PlaneGeometry(1, 1);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00,
 *     side: THREE.DoubleSide
 * });
 * const plane = new THREE.Mesh(geometry, material);
 * scene.add(plane);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js | Source}
 */
declare class PlaneGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link PlaneGeometry}
     * @param width Width along the X axis. Expects a `Float`. Default `1`
     * @param height Height along the Y axis. Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented faces along the width of the sides. Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented faces along the height of the sides. Expects a `Integer`. Default `1`
     */
    constructor(width?: number, height?: number, widthSegments?: number, heightSegments?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `PlaneGeometry`
     */
    override readonly type: string | 'PlaneGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly width: number;
        readonly height: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
    };

    /** @internal */
    static fromJSON(data: {}): PlaneGeometry;
}

/**
 * A class for generating a two-dimensional ring geometry.
 * @example
 * ```typescript
 * const geometry = new THREE.RingGeometry(1, 5, 32);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00,
 *     side: THREE.DoubleSide
 * });
 * const mesh = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/RingGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/RingGeometry.js | Source}
 */
declare class RingGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link RingGeometry}
     * @param innerRadius Expects a `Float`. Default `0.5`.
     * @param outerRadius Expects a `Float`. Default `1`.
     * @param thetaSegments Number of segments. A higher number means the ring will be more round. Minimum is 3. Expects a `Integer`. Default `32`.
     * @param phiSegments Minimum is 1. Expects a `Integer`. Default `1`.
     * @param thetaStart Starting angle. Expects a `Float`. Default `0`.
     * @param thetaLength Central angle. Expects a `Float`. Default `Math.PI * 2`.
     */
    constructor(
        innerRadius?: number,
        outerRadius?: number,
        thetaSegments?: number,
        phiSegments?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `RingGeometry`
     */
    override readonly type: string | 'RingGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly innerRadius: number;
        readonly outerRadius: number;
        readonly thetaSegments: number;
        readonly phiSegments: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): RingGeometry;
}

/**
 * Creates an one-sided polygonal geometry from one or more path shapes.
 * @example
 * ```typescript
 * const x = 0, y = 0;
 * const heartShape = new THREE.Shape();
 * heartShape.moveTo(x + 5, y + 5);
 * heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
 * heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
 * heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
 * heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
 * heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
 * heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
 * const geometry = new THREE.ShapeGeometry(heartShape);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const mesh = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ShapeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ShapeGeometry.js | Source}
 */
declare class ShapeGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link ShapeGeometry}
     * @param shapes Array of shapes or a single {@link THREE.Shape | Shape}. Default `new Shape([new Vector2(0, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)])`, _a single triangle shape_.
     * @param curveSegments Number of segments per shape. Expects a `Integer`. Default `12`
     */
    constructor(shapes?: Shape | Shape[], curveSegments?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ShapeGeometry`
     */
    override readonly type: string | 'ShapeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly curveSegments: number;
    };

    /** @internal */
    static fromJSON(data: {}): ShapeGeometry;
}

/**
 * A class for generating sphere geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(15, 32, 16);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const sphere = new THREE.Mesh(geometry, material);
 * scene.add(sphere);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js | Source}
 */
declare class SphereGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link SphereGeometry}
     * @remarks
     * The geometry is created by sweeping and calculating vertexes
     * around the **Y** axis (horizontal sweep) and the **Z** axis (vertical sweep)
     * Thus, incomplete spheres (akin to `'sphere slices'`) can be created
     * through the use of different values of {@link phiStart}, {@link phiLength}, {@link thetaStart} and {@link thetaLength},
     * in order to define the points in which we start (or end) calculating those vertices.
     * @param radius Sphere radius. Expects a `Float`. Default `1`
     * @param widthSegments Number of horizontal segments. Minimum value is 3, and the Expects a `Integer`. Default `32`
     * @param heightSegments Number of vertical segments. Minimum value is 2, and the Expects a `Integer`. Default `16`
     * @param phiStart Specify horizontal starting angle. Expects a `Float`. Default `0`
     * @param phiLength Specify horizontal sweep angle size. Expects a `Float`. Default `Math.PI * 2`
     * @param thetaStart Specify vertical starting angle. Expects a `Float`. Default `0`
     * @param thetaLength Specify vertical sweep angle size. Expects a `Float`. Default `Math.PI`
     */
    constructor(
        radius?: number,
        widthSegments?: number,
        heightSegments?: number,
        phiStart?: number,
        phiLength?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `SphereGeometry`
     */
    override readonly type: string | 'SphereGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly phiStart: number;
        readonly phiLength: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): SphereGeometry;
}

/**
 * A class for generating a tetrahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js | Source}
 */
declare class TetrahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link TetrahedronGeometry}
     * @param radius Radius of the tetrahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TetrahedronGeometry`
     */
    override readonly type: string | 'TetrahedronGeometry';

    /** @internal */
    static fromJSON(data: {}): TetrahedronGeometry;
}

/**
 * A class for generating torus geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const torus = new THREE.Mesh(geometry, material);
 * scene.add(torus);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js | Source}
 */
declare class TorusGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link TorusGeometry}
     * @param radius Radius of the torus, from the center of the torus to the center of the tube. Expects a `Float`. Default `1`.
     * @param tube Radius of the tube. Expects a `Float`. Default `0.4`.
     * @param radialSegments Expects a `Integer`.Default is `12`.
     * @param tubularSegments Expects a `Integer`. Default `48`.
     * @param arc Central angle. Expects a `Float`. Default `Math.PI * 2`
     */
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TorusGeometry`
     */
    override readonly type: string | 'TorusGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly tube: number;
        readonly radialSegments: number;
        readonly tubularSegments: number;
        readonly arc: number;
    };

    /** @internal */
    static fromJSON(data: any): TorusGeometry;
}

/**
 * Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q
 * If p and q are not coprime, the result will be a torus link.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const torusKnot = new THREE.Mesh(geometry, material);
 * scene.add(torusKnot);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusKnotGeometry.js | Source}
 */
declare class TorusKnotGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link TorusKnotGeometry}
     * @param radius Radius of the torus.. Default `1`.
     * @param tube Expects a `Float`. Default `0.4`.
     * @param tubularSegments Expects a `Integer`. Default `64`.
     * @param radialSegments Expects a `Integer`. Default `8`.
     * @param p This value determines, how many times the geometry winds around its axis of rotational symmetry. Expects a `Integer`. Default `2`.
     * @param q This value determines, how many times the geometry winds around a circle in the interior of the torus. Expects a `Integer`. Default `3`.
     */
    constructor(
        radius?: number,
        tube?: number,
        tubularSegments?: number,
        radialSegments?: number,
        p?: number,
        q?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TorusKnotGeometry`
     */
    override readonly type: string | 'TorusKnotGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly tube: number;
        readonly tubularSegments: number;
        readonly radialSegments: number;
        readonly p: number;
        readonly q: number;
    };

    /** @internal */
    static fromJSON(data: {}): TorusKnotGeometry;
}

/**
 * Creates a tube that extrudes along a 3d curve.
 * @example
 * ```typescript
 * class CustomSinCurve extends THREE.Curve {
 *     constructor(scale = 1) {
 *         super();
 *         this.scale = scale;
 *     }
 *     getPoint(t, optionalTarget = new THREE.Vector3()) {
 *         const tx = t * 3 - 1.5;
 *         const ty = Math.sin(2 * Math.PI * t);
 *         const tz = 0;
 *         return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
 *     }
 * }
 * const path = new CustomSinCurve(10);
 * const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const mesh = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TubeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js | Source}
 */
declare class TubeGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link TubeGeometry}
     * @param path A 3D path that inherits from the {@link THREE.Curve | Curve} base class.
     *             Default {@link THREE.QuadraticBezierCurve3 | new THREE.QuadraticBezierCurve3(new Vector3(-1, -1, 0 ), new Vector3(-1, 1, 0), new Vector3(1, 1, 0))}.
     * @param tubularSegments The number of segments that make up the tube. Expects a `Integer`. Default `64`.
     * @param radius The radius of the tube. Expects a `Float`. Default `1`.
     * @param radialSegments The number of segments that make up the cross-section. Expects a `Integer`. Default `8`.
     * @param closed Is the tube open or closed. Default `false`.
     */
    constructor(
        path?: Curve<Vector3>,
        tubularSegments?: number,
        radius?: number,
        radialSegments?: number,
        closed?: boolean,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TubeGeometry`
     */
    override readonly type: string | 'TubeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly path: Curve<Vector3>;
        readonly tubularSegments: number;
        readonly radius: number;
        readonly radialSegments: number;
        readonly closed: boolean;
    };

    /**
     * An array of {@link THREE.Vector3 | Vector3} tangents
     */
    tangents: Vector3[];

    /**
     * An array of {@link THREE.Vector3 | Vector3} normals
     */
    normals: Vector3[];

    /**
     * An array of {@link THREE.Vector3 | Vector3} binormals
     */
    binormals: Vector3[];

    /** @internal */
    static fromJSON(data: {}): TubeGeometry;
}

/**
 * This can be used as a helper object to view a {@link BufferGeometry | geometry} as a wireframe.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(100, 100, 100);
 * const wireframe = new THREE.WireframeGeometry(geometry);
 * const line = new THREE.LineSegments(wireframe);
 * line.material.depthTest = false;
 * line.material.opacity = 0.25;
 * line.material.transparent = true;
 * scene.add(line);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js | Source}
 */
declare class WireframeGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> extends BufferGeometry {
    /**
     * Create a new instance of {@link WireframeGeometry}
     * @param geometry Any geometry object. Default `null`.
     */
    constructor(geometry?: TBufferGeometry);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `WireframeGeometry`
     */
    override readonly type: string | 'WireframeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly geometry: TBufferGeometry;
    };
}

/**
 * Serves as a base class for the other shadow classes.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/LightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightShadow.js | Source}
 */
declare class LightShadow<TCamera extends Camera = Camera> {
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

/**
 * A continuous line.
 * @remarks
 * This is nearly the same as {@link THREE.LineSegments | LineSegments},
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES}
 * @example
 * ```typescript
 * const material = new THREE.LineBasicMaterial({
 *     color: 0x0000ff
 * });
 * const points = [];
 * points.push(new THREE.Vector3(-10, 0, 0));
 * points.push(new THREE.Vector3(0, 10, 0));
 * points.push(new THREE.Vector3(10, 0, 0));
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const {@link Line} = new THREE.Line(geometry, material);
 * scene.add(line);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Line | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Line.js | Source}
 */
declare class Line<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    /**
     * Create a new instance of {@link Line}
     * @param geometry Vertices representing the {@link Line} segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Line}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLine: true;

    /**
     * @override
     * @defaultValue `Line`
     */
    override readonly type: string | 'Line';

    /**
     * Vertices representing the {@link Line} segment(s).
     */
    geometry: TGeometry;

    /**
     * Material for the line.
     */
    material: TMaterial;

    /**
     * An array of weights typically from `0-1` that specify how much of the morph is applied.
     * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
     */
    morphTargetInfluences?: number[] | undefined;

    /**
     * A dictionary of morphTargets based on the `morphTarget.name` property.
     * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
     */
    morphTargetDictionary?: { [key: string]: number } | undefined;

    /**
     * Computes an array of distance values which are necessary for {@link THREE.LineDashedMaterial | LineDashedMaterial}
     * @remarks
     * For each vertex in the geometry, the method calculates the cumulative length from the current point to the very beginning of the line.
     */
    computeLineDistances(): this;

    /**
     * Updates the morphTargets to have no influence on the object
     * @remarks
     * Resets the {@link morphTargetInfluences | .morphTargetInfluences} and {@link morphTargetDictionary | .morphTargetDictionary} properties.
     */
    updateMorphTargets(): void;
}

/**
 * A series of lines drawn between pairs of vertices.
 * @remarks
 * This is nearly the same as {@link THREE.Line | Line},
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js | Source}
 */
declare class LineSegments<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    /**
     * Create a new instance of {@link LineSegments}
     * @param geometry Pair(s) of vertices representing each line segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link LineSegments}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineSegments: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `LineSegments`
     */
    override readonly type: string | 'LineSegments';
}

/**
 * This displays a cone shaped helper object for a {@link THREE.SpotLight | SpotLight}.
 * @example
 * ```typescript
 * const spotLight = new THREE.SpotLight(0xffffff);
 * spotLight.position.set(10, 10, 10);
 * scene.add(spotLight);
 * const {@link SpotLightHelper} = new THREE.SpotLightHelper(spotLight);
 * scene.add(spotLightHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | WebGL/ lights / spotlights }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SpotLightHelper.js | Source}
 */
declare class SpotLightHelper extends Object3D {
    /**
     * Create a new instance of {@link SpotLightHelper}
     * @param light The {@link THREE.SpotLight | SpotLight} to be visualized.
     * @param color If this is not the set the helper will take the color of the light. Default `light.color`
     */
    constructor(light: Light, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `SpotLightHelper`
     */
    override readonly type: string | 'SpotLightHelper';

    /**
     * {@link THREE.LineSegments | LineSegments} used to visualize the light.
     */
    cone: LineSegments;

    /**
     * Reference to the {@link THREE.SpotLight | SpotLight} being visualized.
     */
    light: Light;

    /**
     * Reference to the spotLight's {@link Object3D.matrixWorld | matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * The color parameter passed in the constructor.
     * If this is changed, the helper's color will update the next time {@link SpotLightHelper.update | update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.Light.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Updates the light helper.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * A helper object to assist with visualizing a {@link Skeleton | Skeleton}
 * @remarks
 * The helper is rendered using a {@link LineBasicMaterial | LineBasicMaterial}.
 * @example
 * ```typescript
 * const helper = new THREE.SkeletonHelper(skinnedMesh);
 * scene.add(helper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | WebGL / animation / skinning / blending}
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | WebGL / animation / skinning / morph}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_bvh | WebGL / loader / bvh }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SkeletonHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SkeletonHelper.js | Source}
 */
declare class SkeletonHelper extends LineSegments {
    /**
     * Create a new instance of {@link SkeletonHelper}
     * @param object Usually an instance of {@link THREE.SkinnedMesh | SkinnedMesh}.
     * However, any instance of {@link THREE.Object3D | Object3D} can be used if it represents a hierarchy of {@link Bone | Bone}s (via {@link THREE.Object3D.children | Object3D.children}).
     */
    constructor(object: SkinnedMesh | Object3D);

    /**
     * Read-only flag to check if a given object is of type {@link SkeletonHelper}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSkeletonHelper = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `SkeletonHelper`
     */
    override readonly type: string | 'SkeletonHelper';

    /**
     * The list of bones that the helper renders as {@link Line | Lines}.
     */
    bones: Bone[];

    /**
     * The object passed in the constructor.
     */
    root: SkinnedMesh | Object3D;

    /**
     * Reference to the {@link THREE.Object3D.matrixWorld | root.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.Object3D.matrixWorld | root.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Updates the helper.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * Shadow for {@link THREE.PointLight | PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
 */
declare class PointLightShadow extends LightShadow<PerspectiveCamera> {
    /**
     * Read-only flag to check if a given object is of type {@link PointLightShadow}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isPointLightShadow = true;

    /**
     * Update the matrices for the camera and shadow, used internally by the renderer.
     * @param light The light for which the shadow is being rendered.
     */
    override updateMatrices(light: Light, viewportIndex?: number): void;
}

/**
 * A light that gets emitted from a single point in all directions
 * @remarks
 * A common use case for this is to replicate the light emitted from a bare lightbulb.
 * @example
 * ```typescript
 * const light = new THREE.PointLight(0xff0000, 1, 100);
 * light.position.set(50, 50, 50);
 * scene.add(light);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_pointlights | lights / pointlights }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_text | geometry / text }
 * @see Example: {@link https://threejs.org/examples/#webgl_lensflares | lensflares }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/PointLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLight.js | Source}
 */
declare class PointLight extends Light<PointLightShadow> {
    /**
     * Creates a new PointLight.
     * @param color Hexadecimal color of the light. Default is 0xffffff (white). Expects a `Integer`
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
     * @param distance Maximum range of the light. Default is 0 (no limit).
     * @param decay The amount the light dims along the distance of the light. Expects a `Float`. Default `2`
     */
    constructor(color?: ColorRepresentation, intensity?: number, distance?: number, decay?: number);

    /**
     * @default 'PointLight'
     */
    type: string;

    /**
     * The light's intensity.
     *
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminous intensity of the light measured in candela (cd).
     * @remarks Changing the intensity will also change the light's power.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    intensity: number;

    /**
     * When **Default mode** — When distance is zero, light does not attenuate. When distance is non-zero,
     * light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.
     *
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — When distance is zero,
     * light will attenuate according to inverse-square law to infinite distance.
     * When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff,
     * where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.
     *
     * @defaultValue `0.0`
     * @remarks Expects a `Float`
     */
    distance: number;

    /**
     * If set to `true` light will cast dynamic shadows.
     * **Warning**: This is expensive and requires tweaking to get shadows looking right.
     * @see {@link THREE.PointLightShadow | PointLightShadow} for details.
     * @defaultValue `false`
     */
    castShadow: boolean;

    /**
     * The amount the light dims along the distance of the light.
     * In context of physically-correct rendering the default value should not be changed.
     * @remarks Expects a `Float`
     * @defaultValue `2`
     */
    decay: number;

    /**
     * A {@link THREE.PointLightShadow | PointLightShadow} used to calculate shadows for this light.
     * The lightShadow's {@link LightShadow.camera | camera} is set to
     * a {@link THREE.PerspectiveCamera | PerspectiveCamera} with {@link PerspectiveCamera.fov | fov} of 90,
     * {@link PerspectiveCamera.aspect | aspect} of 1,
     * {@link PerspectiveCamera.near | near} clipping plane at 0.5
     * and {@link PerspectiveCamera.far | far} clipping plane at 500.
     * @defaultValue new THREE.PointLightShadow()
     */
    shadow: PointLightShadow;

    /**
     * The light's power.
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
     * @remarks Changing the power will also change the light's intensity.
     * @remarks Expects a `Float`
     */
    power: number;
}

/**
 * This displays a helper object consisting of a spherical {@link THREE.Mesh | Mesh} for visualizing a {@link THREE.PointLight | PointLight}.
 * @example
 * ```typescript
 * const pointLight = new THREE.PointLight(0xff0000, 1, 100);
 * pointLight.position.set(10, 10, 10);
 * scene.add(pointLight);
 * const sphereSize = 1;
 * const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize);
 * scene.add(pointLightHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PointLightHelper.js | Source}
 */
declare class PointLightHelper extends Object3D {
    /**
     * Create a new instance of {@link PointLightHelper}
     * @param light The light to be visualized.
     * @param sphereSize The size of the sphere helper. Expects a `Float`. Default `1`
     * @param color If this is not the set the helper will take the color of the light.
     */
    constructor(light: PointLight, sphereSize?: number, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `PointLightHelper`
     */
    override readonly type: string | 'PointLightHelper';

    /**
     * The {@link THREE.PointLight | PointLight} that is being visualized.
     */
    light: PointLight;

    /**
     * Reference to the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Updates the helper to match the position of the {@link THREE..light | .light}.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * A light source positioned directly above the scene, with color fading from the sky color to the ground color.
 * @remarks This light cannot be used to cast shadows.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
 * scene.add(light);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_hemisphere | lights / hemisphere }
 * @see Example: {@link https://threejs.org/examples/#misc_controls_pointerlock | controls / pointerlock }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_kinematics | loader / collada / kinematics }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_stl | loader / stl }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js | Source}
 */
declare class HemisphereLight extends Light<undefined> {
    /**
     * Creates a new {@link HemisphereLight}.
     * @param skyColor Hexadecimal color of the sky. Expects a `Integer`. Default `0xffffff` _(white)_.
     * @param groundColor Hexadecimal color of the ground. Expects a `Integer`. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link HemisphereLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isHemisphereLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `HemisphereLight`
     */
    override readonly type: string | 'HemisphereLight';

    /**
     * This is set equal to {@link THREE.Object3D.DEFAULT_UP}, so that the light shines from the top down.
     * @defaultValue {@link Object3D.DEFAULT_UP} _(0, 1, 0)_
     */
    override readonly position: Vector3;

    /**
     * The light's sky color, as passed in the constructor.
     * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
     */
    override color: Color;

    /**
     * The light's ground color, as passed in the constructor.
     * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
     */
    groundColor: Color;
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
 * Creates a visual aid consisting of a spherical {@link THREE.Mesh | Mesh} for a {@link THREE.HemisphereLight | HemisphereLight}.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
 * const helper = new THREE.HemisphereLightHelper(light, 5);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/HemisphereLightHelper.js | Source}
 */
declare class HemisphereLightHelper extends Object3D {
    /**
     *  Create a new instance of {@link HemisphereLightHelper}
     * @param light The light being visualized.
     * @param size Thr sphere size
     * @param color If this is not the set the helper will take the color of the light.
     */
    constructor(light: HemisphereLight, size: number, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `HemisphereLightHelper`
     */
    override readonly type: string | 'HemisphereLightHelper';

    /**
     * Reference to the HemisphereLight being visualized.
     */
    light: HemisphereLight;

    /**
     * Reference to the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    material: MeshBasicMaterial; // TODO: Double check if this need to be exposed or not.

    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    /**
     * Updates the helper to match the position and direction of the {@link .light | HemisphereLight}.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

interface LineBasicMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
    linewidth?: number | undefined;
    linecap?: string | undefined;
    linejoin?: string | undefined;
}

declare class LineBasicMaterial extends Material {
    constructor(parameters?: LineBasicMaterialParameters);

    /**
     * @default 'LineBasicMaterial'
     */
    type: string;

    /**
     * @default 0xffffff
     */
    color: Color;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default true
     */
    fog: boolean;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default 'round'
     */
    linecap: string;

    /**
     * @default 'round'
     */
    linejoin: string;

    /**
     * Sets the color of the lines using data from a {@link Texture}.
     */
    map: Texture | null;

    setValues(parameters: LineBasicMaterialParameters): void;
}

/**
 * The {@link GridHelper} is an object to define grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const size = 10;
 * const divisions = 10;
 * const {@link GridHelper} = new THREE.GridHelper(size, divisions);
 * scene.add(gridHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/GridHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/GridHelper.js | Source}
 */
declare class GridHelper extends LineSegments<BufferGeometry, LineBasicMaterial> {
    /**
     * Creates a new {@link GridHelper} of size 'size' and divided into 'divisions' segments per side
     * @remarks
     * Colors are optional.
     * @param size The size of the grid. Default `10`
     * @param divisions The number of divisions across the grid. Default `10`
     * @param colorCenterLine The color of the centerline. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x444444`
     * @param colorGrid The color of the lines of the grid. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x888888`
     */
    constructor(size?: number, divisions?: number, color1?: ColorRepresentation, color2?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `GridHelper`
     */
    override readonly type: string | 'GridHelper';

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * The {@link PolarGridHelper} is an object to define polar grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const radius = 10;
 * const sectors = 16;
 * const rings = 8;
 * const divisions = 64;
 * const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions);
 * scene.add(helper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PolarGridHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PolarGridHelper.js | Source}
 */
declare class PolarGridHelper extends LineSegments {
    /**
     * Creates a new {@link PolarGridHelper} of radius 'radius' with 'sectors' number of sectors and 'rings' number of rings, where each circle is smoothed into 'divisions' number of line segments.
     * @remarks Colors are optional.
     * @param radius The radius of the polar grid. This can be any positive number. Default `10`.
     * @param sectors The number of sectors the grid will be divided into. This can be any positive integer. Default `16`.
     * @param rings The number of rings. This can be any positive integer. Default `8`.
     * @param divisions The number of line segments used for each circle. This can be any positive integer that is 3 or greater. Default `64`.
     * @param color1 The first color used for grid elements. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x444444`.
     * @param color2 The second color used for grid elements. This can be a {@link THREE.Color | Color}, a hexadecimal value and an CSS-Color name. Default `0x888888`.
     */
    constructor(
        radius?: number,
        radials?: number,
        circles?: number,
        divisions?: number,
        color1?: ColorRepresentation,
        color2?: ColorRepresentation,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `PolarGridHelper`
     */
    override readonly type: string | 'PolarGridHelper';

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * This is used internally by {@link DirectionalLight | DirectionalLights} for calculating shadows.
 * Unlike the other shadow classes, this uses an {@link THREE.OrthographicCamera | OrthographicCamera} to calculate the shadows,
 * rather than a {@link THREE.PerspectiveCamera | PerspectiveCamera}
 * @remarks
 * This is because light rays from a {@link THREE.DirectionalLight | DirectionalLight} are parallel.
 * @example
 * ```typescript
 * //Create a WebGLRenderer and turn on shadows in the renderer
 * const renderer = new THREE.WebGLRenderer();
 * renderer.shadowMap.enabled = true;
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
 * //Create a DirectionalLight and turn on shadows for the light
 * const light = new THREE.DirectionalLight(0xffffff, 1);
 * light.position.set(0, 1, 0); //default; light shining from top
 * light.castShadow = true; // default false
 * scene.add(light);
 * //Set up shadow properties for the light
 * light.shadow.mapSize.width = 512; // default
 * light.shadow.mapSize.height = 512; // default
 * light.shadow.camera.near = 0.5; // default
 * light.shadow.camera.far = 500; // default
 * //Create a sphere that cast shadows (but does not receive them)
 * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
 * const sphereMaterial = new THREE.MeshStandardMaterial({
 *     color: 0xff0000
 * });
 * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
 * sphere.castShadow = true; //default is false
 * sphere.receiveShadow = false; //default
 * scene.add(sphere);
 * //Create a plane that receives shadows (but does not cast them)
 * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
 * const planeMaterial = new THREE.MeshStandardMaterial({
 *     color: 0x00ff00
 * })
 * const plane = new THREE.Mesh(planeGeometry, planeMaterial);
 * plane.receiveShadow = true;
 * scene.add(plane);
 * //Create a helper for the shadow camera (optional)
 * const helper = new THREE.CameraHelper(light.shadow.camera);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/DirectionalLightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLightShadow.js | Source}
 */
declare class DirectionalLightShadow extends LightShadow<OrthographicCamera> {
    /**
     * Create a new instance of {@link DirectionalLightShadow}
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link DirectionalLightShadow}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isDirectionalLightShadow: true;

    /**
     * The light's view of the world.
     * @remarks This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
     * @defaultValue is an {@link THREE.OrthographicCamera | OrthographicCamera} with
     * {@link OrthographicCamera.left | left} and {@link OrthographicCamera.bottom | bottom} set to -5,
     * {@link OrthographicCamera.right | right} and {@link OrthographicCamera.top | top} set to 5,
     * the {@link OrthographicCamera.near | near} clipping plane at 0.5 and
     * the {@link OrthographicCamera.far | far} clipping plane at 500.
     */
    camera: OrthographicCamera;
}

/**
 * A light that gets emitted in a specific direction
 * @remarks
 * This light will behave as though it is infinitely far away and the rays produced from it are all parallel
 * The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.
 * A common point of confusion for directional lights is that setting the rotation has no effect
 * @remarks
 * This is because three.js's {@link DirectionalLight} is the equivalent to what is often called a 'Target Direct Light' in other applications.
 * This means that its direction is calculated as pointing from the light's {@link THREE.Object3D.position | position} to the {@link THREE.DirectionalLight.target | target}'s
 * position (as opposed to a 'Free Direct Light' that just has a rotation component).
 * See the {@link THREE.DirectionalLight.target | target} property below for details on updating the target.
 * @example
 * ```typescript
 * // White directional light at half intensity shining from the top.
 * const {@link DirectionalLight} = new THREE.DirectionalLight(0xffffff, 0.5);
 * scene.add(directionalLight);
 * ```
 * @see Example: {@link https://threejs.org/examples/#misc_controls_fly | controls / fly }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | geometry / extrude / splines }
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_bumpmap | materials / bumpmap }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/DirectionalLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js | Source}
 */
declare class DirectionalLight extends Light<DirectionalLightShadow> {
    /**
     * Creates a new {@link DirectionalLight}.
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link DirectionalLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isDirectionalLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `DirectionalLight`
     */
    override readonly type: string | 'DirectionalLight';

    /**
     * Whether the object gets rendered into shadow map.
     * @remarks
     * If set to `true` light will cast dynamic shadows.
     * **Warning**: This is expensive and requires tweaking to get shadows looking right.
     * @see {@link THREE.DirectionalLightShadow | DirectionalLightShadow} for details.
     * @defaultValue `false`
     */
    override castShadow: boolean;

    /**
     * This is set equal to {@link THREE.Object3D.DEFAULT_UP}, so that the light shines from the top down.
     * @defaultValue {@link Object3D.DEFAULT_UP} _(0, 1, 0)_
     */
    override readonly position: Vector3;

    /**
     * A {@link THREE.DirectionalLightShadow | DirectionalLightShadow} used to calculate shadows for this light.
     * @defaultValue `new THREE.DirectionalLightShadow()`
     */
    shadow: DirectionalLightShadow;

    /**
     * The {@link DirectionalLight} points from its {@link DirectionalLight.position | position} to target.position.
     * @remarks **Note**: For the target's position to be changed to anything other than the default,
     * it must be added to the {@link THREE.Scene | scene} using
     * ```typescript
     * Scene.add( light.target );
     * ```
     * This is so that the target's {@link THREE.Object3D.matrixWorld | matrixWorld} gets automatically updated each frame.
     *
     * It is also possible to set the target to be another object in the scene (anything with a {@link THREE.Object3D.position | position} property),
     * like so:
     * ```typescript
     * const targetObject = new THREE.Object3D();
     * scene.add(targetObject);
     * light.target = targetObject;
     * ```
     * The {@link DirectionalLight} will now track the target object.
     * @defaultValue `new THREE.Object3D()` at _(0, 0, 0)_
     */
    target: Object3D;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * Helper object to assist with visualizing a {@link THREE.DirectionalLight | DirectionalLight}'s effect on the scene
 * @remarks
 * This consists of plane and a line representing the light's position and direction.
 * @example
 * ```typescript
 * const light = new THREE.DirectionalLight(0xFFFFFF);
 * const helper = new THREE.DirectionalLightHelper(light, 5);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js | Source}
 */
declare class DirectionalLightHelper extends Object3D {
    /**
     * Create a new instance of {@link DirectionalLightHelper}
     * @param light The light to be visualized.
     * @param size Dimensions of the plane. Default `1`
     * @param color If this is not the set the helper will take the color of the light. Default `light.color`
     */
    constructor(light: DirectionalLight, size?: number, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `DirectionalLightHelper`
     */
    override readonly type: string | 'DirectionalLightHelper';

    /**
     * Contains the line mesh showing the location of the directional light.
     */
    lightPlane: Line;

    /**
     * Reference to the {@link THREE.DirectionalLight | directionalLight} being visualized.
     */
    light: DirectionalLight;

    /**
     * Reference to the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    targetLine: Line; // TODO: Double check if this need to be exposed or not.

    /**
     * Updates the helper to match the position and direction of the {@link light | DirectionalLight} being visualized.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * This helps with visualizing what a camera contains in its frustum
 * @remarks
 * It visualizes the frustum of a camera using a {@link THREE.LineSegments | LineSegments}.
 * @remarks {@link CameraHelper} must be a child of the scene.
 * @example
 * ```typescript
 * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 * const helper = new THREE.CameraHelper(camera);
 * scene.add(helper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera | WebGL / camera}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGL / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/CameraHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/CameraHelper.js | Source}
 */
declare class CameraHelper extends LineSegments {
    /**
     * This create a new {@link CameraHelper} for the specified camera.
     * @param camera The camera to visualize.
     */
    constructor(camera: Camera);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `CameraHelper`
     */
    override readonly type: string | 'CameraHelper';

    /**
     * The camera being visualized.
     */
    camera: Camera;

    /**
     * This contains the points used to visualize the camera.
     */
    pointMap: { [id: string]: number[] };

    /**
     * Reference to the {@link THREE.Camera.matrixWorld | camera.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.Camera.matrixWorld | camera.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Defines the colors of the helper.
     * @param frustum
     * @param cone
     * @param up
     * @param target
     * @param cross
     */
    setColors(frustum: Color, cone: Color, up: Color, target: Color, cross: Color): this;

    /**
     * Updates the helper based on the projectionMatrix of the camera.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * Helper object to graphically show the world-axis-aligned bounding box around an object
 * @remarks
 * The actual bounding box is handled with {@link THREE.Box3 | Box3}, this is just a visual helper for debugging
 * It can be automatically resized with the {@link THREE.BoxHelper.update | BoxHelper.update} method when the object it's created from is transformed
 * Note that the object must have a {@link THREE.BufferGeometry | BufferGeometry} for this to work, so it won't work with {@link Sprite | Sprites}.
 * @example
 * ```typescript
 * const sphere = new THREE.SphereGeometry();
 * const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000));
 * const box = new THREE.BoxHelper(object, 0xffff00);
 * scene.add(box);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGL / loader / nrrd}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_drawrange | WebGL / buffergeometry / drawrange}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/BoxHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/BoxHelper.js | Source}
 */
declare class BoxHelper extends LineSegments<BufferGeometry, LineBasicMaterial> {
    /**
     * Creates a new wireframe box that bounds the passed object
     * @remarks
     * Internally this uses {@link THREE.Box3.setFromObject | Box3.setFromObject} to calculate the dimensions
     * Note that this includes any children.
     * @param object The object3D to show the world-axis-aligned bounding box.
     * @param color Hexadecimal value that defines the box's color. Default `0xffff00`
     */
    constructor(object: Object3D, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `BoxHelper`
     */
    override readonly type: string | 'BoxHelper';

    /**
     * Updates the helper's geometry to match the dimensions of the object, including any children
     * @remarks
     * See {@link THREE.Box3.setFromObject | Box3.setFromObject}.
     */
    update(object?: Object3D): void;

    /**
     * Updates the wireframe box for the passed object.
     * @param object {@link THREE.Object3D | Object3D} to create the helper of.
     */
    setFromObject(object: Object3D): this;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * Helper object to visualize a {@link THREE.Box3 | Box3}.
 * @example
 * ```typescript
 * const box = new THREE.Box3();
 * box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3));
 * const helper = new THREE.Box3Helper(box, 0xffff00);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/Box3Helper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js | Source}
 */
declare class Box3Helper extends LineSegments {
    /**
     * Creates a new wireframe box that represents the passed Box3.
     * @param box The Box3 to show.
     * @param color The box's color. Default `0xffff00`
     */
    constructor(box: Box3, color?: Color);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `Box3Helper`
     */
    override readonly type: string | 'Box3Helper';

    /**
     * The Box3 being visualized.
     */
    box: Box3;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * Helper object to visualize a {@link THREE.Plane | Plane}.
 * @example
 * ```typescript
 * const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3);
 * const helper = new THREE.PlaneHelper(plane, 1, 0xffff00);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PlaneHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PlaneHelper.js | Source}
 */
declare class PlaneHelper extends LineSegments {
    /**
     * Creates a new wireframe representation of the passed plane.
     * @param plane The plane to visualize.
     * @param size Side length of plane helper. Expects a `Float`. Default `1`
     * @param hex Color. Default `0xffff00`
     */
    constructor(plane: Plane, size?: number, hex?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `PlaneHelper`
     */
    override readonly type: string | 'PlaneHelper';

    /**
     * The {@link Plane | plane} being visualized.
     */
    plane: Plane;

    /**
     * The side lengths of plane helper.
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    size: number;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
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
 * An 3D arrow object for visualizing directions.
 * @example
 * ```typescript
 * const dir = new THREE.Vector3(1, 2, 0);
 * //normalize the direction vector (convert to vector of length 1)
 * dir.normalize();
 * const origin = new THREE.Vector3(0, 0, 0);
 * const length = 1;
 * const hex = 0xffff00;
 * const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex);
 * scene.add(arrowHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_shadowmesh | WebGL / shadowmesh}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/ArrowHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/ArrowHelper.js | Source}
 */
declare class ArrowHelper extends Object3D {
    /**
     * Create a new instance of {@link ArrowHelper}
     * @param dir Direction from origin. Must be a unit vector. Default `new THREE.Vector3(0, 0, 1)`
     * @param origin Point at which the arrow starts. Default `new THREE.Vector3(0, 0, 0)`
     * @param length Length of the arrow. Default `1`
     * @param hex Hexadecimal value to define color. Default `0xffff00`
     * @param headLength The length of the head of the arrow. Default `0.2 * length`
     * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
     */
    constructor(
        dir?: Vector3,
        origin?: Vector3,
        length?: number,
        color?: ColorRepresentation,
        headLength?: number,
        headWidth?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `ArrowHelper`
     */
    override readonly type: string | 'ArrowHelper';

    /**
     * Contains the line part of the arrowHelper.
     */
    line: Line;

    /**
     * Contains the cone part of the arrowHelper.
     */
    cone: Mesh;

    /**
     * Sets the color of the arrowHelper.
     * @param color The desired color.
     */
    setColor(color: ColorRepresentation): void;

    /**
     * @param dir The desired direction. Must be a unit vector.
     */
    setDirection(dir: Vector3): void;

    /**
     * Sets the length of the arrowhelper.
     * @param length The desired length.
     * @param headLength The length of the head of the arrow. Default `0.2 * length`
     * @param headWidth The width of the head of the arrow. Default `0.2 * headLength`
     */
    setLength(length: number, headLength?: number, headWidth?: number): void;

    /**
     * Copy the given object into this object
     * @remarks Note: event listeners and user-defined callbacks ({@link onAfterRender | .onAfterRender} and {@link onBeforeRender | .onBeforeRender}) are not copied.
     * @param source
     */
    override copy(source: this): this;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * An axis object to visualize the 3 axes in a simple way.
 * @remarks
 * The X axis is red
 * The Y axis is green
 * The Z axis is blue.
 * @example
 * ```typescript
 * const {@link AxesHelper} = new THREE.AxesHelper(5);
 * scene.add(axesHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression | WebGL / buffergeometry / compression}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex | WebGL / geometry / convex}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGL / loader / nrrd}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js | Source}
 */
declare class AxesHelper extends LineSegments {
    /**
     * Create a new instance of {@link AxesHelper}
     * @param size Size of the lines representing the axes. Default `1`
     */
    constructor(size?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `AxesHelper`
     */
    override readonly type: string | 'AxesHelper';

    /**
     * Sets the axes colors to {@link Color | xAxisColor}, {@link Color | yAxisColor}, {@link Color | zAxisColor}.
     * @param xAxisColor
     * @param yAxisColor
     * @param zAxisColor
     */
    setColors(xAxisColor: Color, yAxisColor: Color, zAxisColor: Color): this;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}

/**
 * This is used internally by {@link SpotLight | SpotLights} for calculating shadows.
 * @example
 * ```typescript
 * //Create a WebGLRenderer and turn on shadows in the renderer
 * const renderer = new THREE.WebGLRenderer();
 * renderer.shadowMap.enabled = true;
 * renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
 * //Create a SpotLight and turn on shadows for the light
 * const light = new THREE.SpotLight(0xffffff);
 * light.castShadow = true; // default false
 * scene.add(light);
 * //Set up shadow properties for the light
 * light.shadow.mapSize.width = 512; // default
 * light.shadow.mapSize.height = 512; // default
 * light.shadow.camera.near = 0.5; // default
 * light.shadow.camera.far = 500; // default
 * light.shadow.focus = 1; // default
 * //Create a sphere that cast shadows (but does not receive them)
 * const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
 * const sphereMaterial = new THREE.MeshStandardMaterial({
 *     color: 0xff0000
 * });
 * const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
 * sphere.castShadow = true; //default is false
 * sphere.receiveShadow = false; //default
 * scene.add(sphere);
 * //Create a plane that receives shadows (but does not cast them)
 * const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
 * const planeMaterial = new THREE.MeshStandardMaterial({
 *     color: 0x00ff00
 * })
 * const plane = new THREE.Mesh(planeGeometry, planeMaterial);
 * plane.receiveShadow = true;
 * scene.add(plane);
 * //Create a helper for the shadow camera (optional)
 * const helper = new THREE.CameraHelper(light.shadow.camera);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/shadows/SpotLightShadow | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLightShadow.js | Source}
 */
declare class SpotLightShadow extends LightShadow<PerspectiveCamera> {
    /**
     * Read-only flag to check if a given object is of type {@link SpotLightShadow}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSpotLightShadow: true;

    /**
     * The light's view of the world.
     * @remarks This is used to generate a depth map of the scene; objects behind other objects from the light's perspective will be in shadow.
     * @remarks
     * The {@link THREE.PerspectiveCamera.fov | fov} will track the {@link THREE.SpotLight.angle | angle} property
     * of the owning {@link SpotLight | SpotLight} via the {@link SpotLightShadow.update | update} method.
     * Similarly, the {@link THREE.PerspectiveCamera.aspect | aspect} property will track the aspect of the {@link LightShadow.mapSize | mapSize}.
     * If the {@link SpotLight.distance | distance} property of the light is set, the {@link THREE.PerspectiveCamera.far | far} clipping plane will track that, otherwise it defaults to `500`.
     * @defaultValue is a {@link THREE.PerspectiveCamera | PerspectiveCamera} with {@link THREE.PerspectiveCamera.near | near} clipping plane at `0.5`.
     */
    camera: PerspectiveCamera;

    /**
     * Used to focus the shadow camera.
     * @remarks The camera's field of view is set as a percentage of the spotlight's field-of-view. Range is `[0, 1]`. 0`.
     * @defaultValue `1`
     */
    focus: number;
}

/**
 * This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.
 * @example
 * ```typescript
 * // white {@link SpotLight} shining from the side, modulated by a texture, casting a shadow
 * const {@link SpotLight} = new THREE.SpotLight(0xffffff);
 * spotLight.position.set(100, 1000, 100);
 * spotLight.map = new THREE.TextureLoader().load(url);
 * spotLight.castShadow = true;
 * spotLight.shadow.mapSize.width = 1024;
 * spotLight.shadow.mapSize.height = 1024;
 * spotLight.shadow.camera.near = 500;
 * spotLight.shadow.camera.far = 4000;
 * spotLight.shadow.camera.fov = 30;
 * scene.add(spotLight);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlight | lights / {@link SpotLight} }
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | lights / spotlights }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/SpotLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/SpotLight.js | Source}
 */
declare class SpotLight extends Light<SpotLightShadow> {
    /**
     * Creates a new SpotLight.
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
     * @param distance Maximum range of the light. Default is 0 (no limit). Expects a `Float`.
     * @param angle Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
     * @param penumbra Percent of the {@link SpotLight} cone that is attenuated due to penumbra. Takes values between zero and 1. Expects a `Float`. Default `0`.
     * @param decay The amount the light dims along the distance of the light. Expects a `Float`. Default `2`.
     */
    constructor(
        color?: ColorRepresentation,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );

    /**
     * Read-only flag to check if a given object is of type {@link SpotLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSpotLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `SpotLight`
     */
    override readonly type: string | 'SpotLight';

    /**
     * This is set equal to {@link THREE.Object3D.DEFAULT_UP | Object3D.DEFAULT_UP} (0, 1, 0), so that the light shines from the top down.
     * @defaultValue `{@link Object3D.DEFAULT_UP}`
     */
    readonly position: Vector3;

    /**
     * The {@link SpotLight} points from its {@link SpotLight.position | position} to target.position.
     * @remarks
     * **Note**: For the target's position to be changed to anything other than the default,
     * it must be added to the {@link Scene | scene} using
     *
     * ```typescript
     * scene.add( light.target );
     * ```
     *
     * This is so that the target's {@link Object3D.matrixWorld | matrixWorld} gets automatically updated each frame.
     * It is also possible to set the target to be another object in the scene (anything with a {@link THREE.Object3D.position | position} property), like so:
     * ```typescript
     * const targetObject = new THREE.Object3D();
     * scene.add(targetObject);
     * light.target = targetObject;
     * ```
     * The {@link SpotLight} will now track the target object.
     * @defaultValue `new THREE.Object3D()` _The default position of the target is *(0, 0, 0)*._
     */
    target: Object3D;

    /**
     * If set to `true` light will cast dynamic shadows.
     * @remarks  **Warning**: This is expensive and requires tweaking to get shadows looking right. the {@link THREE.SpotLightShadow | SpotLightShadow} for details.
     * @defaultValue `false`
     */
    override castShadow: boolean;

    /**
     * The light's intensity.
     * @remarks Changing the intensity will also change the light's power.
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminous intensity of the light measured in candela (cd).
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    intensity: number;

    /**
     * When **Default mode** — When distance is zero, light does not attenuate. When distance is non-zero,
     * light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.
     *
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — When distance is zero,
     * light will attenuate according to inverse-square law to infinite distance.
     * When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff,
     * where it will then attenuate quickly and smoothly to `0`. Inherently, cutoffs are not physically correct.
     * @remarks Expects a `Float`
     * @defaultValue `0.0`
     */
    distance: number;

    /**
     * Maximum extent of the spotlight, in radians, from its direction.
     * @remarks Should be no more than `Math.PI/2`.
     * @remarks Expects a `Float`
     * @defaultValue `Math.PI / 3`
     */
    angle: number;

    /**
     * The amount the light dims along the distance of the light.
     * In context of physically-correct rendering the default value should not be changed.
     * @remarks Expects a `Float`
     * @defaultValue `2`
     */
    decay: number;

    /**
     * A {@link THREE.SpotLightShadow | SpotLightShadow} used to calculate shadows for this light.
     * @defaultValue `new THREE.SpotLightShadow()`
     */
    shadow: SpotLightShadow;

    /**
     * The light's power.
     * @remarks Changing the power will also change the light's intensity.
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** —  power is the luminous power of the light measured in lumens (lm).
     * @remarks Expects a `Float`
     */
    power: number;

    /**
     * Percent of the {@link SpotLight} cone that is attenuated due to penumbra.
     * @remarks Takes values between zero and 1.
     * @remarks Expects a `Float`
     * @defaultValue `0.0`
     */
    penumbra: number;

    /**
     * A {@link THREE.Texture | Texture} used to modulate the color of the light.
     * The spot light color is mixed with the _RGB_ value of this texture, with a ratio corresponding to its alpha value.
     * The cookie-like masking effect is reproduced using pixel values (0, 0, 0, 1-cookie_value).
     * @remarks **Warning**: {@link SpotLight.map} is disabled if {@link SpotLight.castShadow} is `false`.
     */
    map: Texture | null;
}

/**
 * {@link RectAreaLight} emits light uniformly across the face a rectangular plane
 * @remarks
 * This light type can be used to simulate light sources such as bright windows or strip lighting.
 * Important Notes:
 *  - There is no shadow support.
 *  - Only {@link MeshStandardMaterial | MeshStandardMaterial} and {@link MeshPhysicalMaterial | MeshPhysicalMaterial} are supported.
 *  - You have to include {@link https://threejs.org/examples/jsm/lights/RectAreaLightUniformsLib.js | RectAreaLightUniformsLib} into your scene and call `init()`.
 * @example
 * ```typescript
 * const width = 10;
 * const height = 10;
 * const intensity = 1;
 * const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
 * rectLight.position.set(5, 5, 0);
 * rectLight.lookAt(0, 0, 0);
 * scene.add(rectLight)
 * const rectLightHelper = new RectAreaLightHelper(rectLight);
 * rectLight.add(rectLightHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_rectarealight | WebGL / {@link RectAreaLight} }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/RectAreaLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js | Source}
 */
declare class RectAreaLight extends Light<undefined> {
    /**
     * Creates a new {@link RectAreaLight}.
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity The light's intensity, or brightness. Expects a `Float`. Default `1`
     * @param width Width of the light. Expects a `Float`. Default `10`
     * @param height Height of the light. Expects a `Float`. Default `10`
     */
    constructor(color?: ColorRepresentation, intensity?: number, width?: number, height?: number);

    /**
     * Read-only flag to check if a given object is of type {@link RectAreaLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isRectAreaLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `RectAreaLight`
     */
    override readonly type: string | 'RectAreaLight';

    /**
     * The width of the light.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    width: number;

    /**
     * The height of the light.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    height: number;

    /**
     * The light's intensity.
     * @remarks Changing the intensity will also change the light's power.
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — intensity is the luminance (brightness) of the light measured in nits (cd/m^2).
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    intensity: number;

    /**
     * The light's power.
     * @remarks Changing the power will also change the light's intensity.
     * When **{@link WebGLRenderer.useLegacyLights | legacy lighting mode} is disabled** — power is the luminous power of the light measured in lumens (lm).
     * @remarks Expects a `Float`
     */
    power: number;
}

/**
 * This light globally illuminates all objects in the scene equally.
 * @remarks This light cannot be used to cast shadows as it does not have a direction.
 * @example
 * ```typescript
 * const light = new THREE.AmbientLight(0x404040); // soft white light
 * scene.add(light);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js | Source}
 */
declare class AmbientLight extends Light<undefined> {
    /**
     * Creates a new {@link AmbientLight}.
     * @param color Numeric value of the RGB component of the color. Default `0xffffff`
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link AmbientLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isAmbientLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `AmbientLight`
     */
    override readonly type: string | 'AmbientLight';
}

declare class SphericalHarmonics3 {
    constructor();

    /**
     * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
     * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]
     */
    coefficients: Vector3[];
    readonly isSphericalHarmonics3: true;

    set(coefficients: Vector3[]): SphericalHarmonics3;
    zero(): SphericalHarmonics3;
    add(sh: SphericalHarmonics3): SphericalHarmonics3;
    addScaledSH(sh: SphericalHarmonics3, s: number): SphericalHarmonics3;
    scale(s: number): SphericalHarmonics3;
    lerp(sh: SphericalHarmonics3, alpha: number): SphericalHarmonics3;
    equals(sh: SphericalHarmonics3): boolean;
    copy(sh: SphericalHarmonics3): SphericalHarmonics3;
    clone(): this;

    /**
     * Sets the values of this spherical harmonics from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array with the values of this spherical harmonics, or copies them into the provided array.
     * @param array (optional) array to store the spherical harmonics to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Returns an array with the values of this spherical harmonics, or copies them into the provided array-like.
     * @param array array-like to store the spherical harmonics to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    getAt(normal: Vector3, target: Vector3): Vector3;
    getIrradianceAt(normal: Vector3, target: Vector3): Vector3;

    static getBasisAt(normal: Vector3, shBasis: number[]): void;
}

/**
 * Light probes are an alternative way of adding light to a 3D scene.
 * @remarks
 * Unlike classical light sources (e.g
 * directional, point or spot lights), light probes do not emit light
 * Instead they store information about light passing through 3D space
 * During rendering, the light that hits a 3D object is approximated by using the data from the light probe.
 * Light probes are usually created from (radiance) environment maps
 * The class {@link THREE.LightProbeGenerator | LightProbeGenerator} can be used to create light probes from
 * instances of {@link THREE.CubeTexture | CubeTexture} or {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}
 * However, light estimation data could also be provided in other forms e.g
 * by WebXR
 * This enables the rendering of augmented reality content that reacts to real world lighting.
 * The current probe implementation in three.js supports so-called diffuse light probes
 * This type of light probe is functionally equivalent to an irradiance environment map.
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe | WebGL / light probe }
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe_cubecamera | WebGL / light probe / cube camera }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/LightProbe | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightProbe.js | Source}
 */
declare class LightProbe extends Light {
    /**
     * Creates a new LightProbe.
     * @param sh An instance of {@link THREE.SphericalHarmonics3 | SphericalHarmonics3}. Default `new THREE.SphericalHarmonics3()``.
     * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`.
     */
    constructor(sh?: SphericalHarmonics3, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link DirectionalLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLightProbe: true;

    /**
     * A light probe uses spherical harmonics to encode lighting information.
     * @defaultValue `new THREE.SphericalHarmonics3()`
     */
    sh: SphericalHarmonics3;

    /** @internal */
    fromJSON(json: {}): LightProbe;
}

/**
 * Light probes are an alternative way of adding light to a 3D scene
 * @remarks
 * {@link AmbientLightProbe} is the light estimation data of a single ambient light in the scene
 * For more information about light probes, go to {@link THREE.LightProbe | LightProbe}.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLightProbe | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLightProbe.js | Source}
 */
declare class AmbientLightProbe extends LightProbe {
    /**
     * Creates a new {@link AmbientLightProbe}.
     * @param color An instance of Color, string representing a color or a number representing a color.
     * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link AmbientLightProbe}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isAmbientLightProbe: true;
}

/**
 * Light probes are an alternative way of adding light to a 3D scene
 * @remarks
 * {@link HemisphereLightProbe} is the light estimation data of a single hemisphere light in the scene
 * For more information about light probes, go to {@link THREE.LightProbe | LightProbe}.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLightProbe | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLightProbe.js | Source}
 */
declare class HemisphereLightProbe extends LightProbe {
    /**
     * Creates a new HemisphereLightProbe.
     * @param skyColor An instance of Color, string representing a color or a number representing a color.
     * @param groundColor An instance of Color, string representing a color or a number representing a color.
     * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link HemisphereLightProbe}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isHemisphereLightProbe: true;
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

declare const DefaultLoadingManager: LoadingManager;

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

declare class AnimationLoader extends Loader<AnimationClip[]> {
    constructor(manager?: LoadingManager);

    parse(json: readonly unknown[]): AnimationClip[];
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

interface TextureImageData {
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
}

interface Texture3DImageData extends TextureImageData {
    readonly depth: number;
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

declare class DataTextureLoader extends Loader<DataTexture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: DataTexture, texData: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): DataTexture;
}

declare class CubeTextureLoader extends Loader<CubeTexture, readonly string[]> {
    constructor(manager?: LoadingManager);

    load(
        url: readonly string[],
        onLoad?: (data: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CubeTexture;
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

declare class ObjectLoader extends Loader<Object3D> {
    constructor(manager?: LoadingManager);

    parse(json: unknown, onLoad?: (object: Object3D) => void): Object3D;
    parseAsync(json: unknown): Promise<Object3D>;
    parseGeometries(json: unknown): { [key: string]: InstancedBufferGeometry | BufferGeometry };
    parseMaterials(json: unknown, textures: { [key: string]: Texture }): { [key: string]: Material };
    parseAnimations(json: unknown): { [key: string]: AnimationClip };
    parseImages(json: unknown, onLoad?: () => void): { [key: string]: Source };
    parseImagesAsync(json: unknown): Promise<{ [key: string]: Source }>;
    parseTextures(json: unknown, images: { [key: string]: Source }): { [key: string]: Texture };
    parseObject(
        data: unknown,
        geometries: { [key: string]: InstancedBufferGeometry | BufferGeometry },
        materials: { [key: string]: Material },
        animations: { [key: string]: AnimationClip },
    ): Object3D;
}

declare class MaterialLoader extends Loader<Material> {
    constructor(manager?: LoadingManager);

    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    setTextures(textures: { [key: string]: Texture }): this;
    parse(json: unknown): Material;
}

declare class BufferGeometryLoader extends Loader<InstancedBufferGeometry | BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(json: unknown): InstancedBufferGeometry | BufferGeometry;
}

/**
 * A loader for loading an image.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
declare class ImageLoader extends Loader<HTMLImageElement> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: HTMLImageElement) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): HTMLImageElement;
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

interface LoaderUtils {
    decodeText(array: BufferSource): string;
    extractUrlBase(url: string): string;
    resolveURL(url: string, path: string): string;
}

declare const LoaderUtils: LoaderUtils;

declare namespace Cache {
    /**
     * @default false
     */
    let enabled: boolean;

    /**
     * @default {}
     */
    let files: any;

    function add(key: string, file: any): void;
    function get(key: string): any;
    function remove(key: string): void;
    function clear(): void;
}

declare class AudioLoader extends Loader<AudioBuffer> {
    constructor(manager?: LoadingManager);
}

interface ShadowMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
}

declare class ShadowMaterial extends Material {
    constructor(parameters?: ShadowMaterialParameters);

    /**
     * @default 'ShadowMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    color: Color;

    /**
     * @default true
     */
    transparent: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;
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

interface ShaderMaterialParameters extends MaterialParameters {
    uniforms?: { [uniform: string]: IUniform } | undefined;
    uniformsGroups?: UniformsGroup[] | undefined;
    vertexShader?: string | undefined;
    fragmentShader?: string | undefined;
    linewidth?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    lights?: boolean | undefined;
    clipping?: boolean | undefined;
    fog?: boolean | undefined;
    extensions?:
        | {
              derivatives?: boolean | undefined;
              fragDepth?: boolean | undefined;
              drawBuffers?: boolean | undefined;
              shaderTextureLOD?: boolean | undefined;
          }
        | undefined;
    glslVersion?: GLSLVersion | undefined;
}

declare class ShaderMaterial extends Material {
    constructor(parameters?: ShaderMaterialParameters);

    /**
     * @default 'ShaderMaterial'
     */
    type: string;

    /**
     * @default {}
     */
    defines: { [key: string]: any };

    /**
     * @default {}
     */
    uniforms: { [uniform: string]: IUniform };

    uniformsGroups: UniformsGroup[];

    vertexShader: string;

    fragmentShader: string;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    /**
     * @default false
     */
    lights: boolean;

    /**
     * @default false
     */
    clipping: boolean;

    /**
     * @deprecated Use {@link ShaderMaterial#extensions.derivatives extensions.derivatives} instead.
     */
    derivatives: any;

    /**
     * @default { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }
     */
    extensions: {
        derivatives: boolean;
        fragDepth: boolean;
        drawBuffers: boolean;
        shaderTextureLOD: boolean;
    };

    /**
     * @default { 'color': [ 1, 1, 1 ], 'uv': [ 0, 0 ], 'uv1': [ 0, 0 ] }
     */
    defaultAttributeValues: any;

    /**
     * @default undefined
     */
    index0AttributeName: string | undefined;

    /**
     * @default false
     */
    uniformsNeedUpdate: boolean;

    /**
     * @default null
     */
    glslVersion: GLSLVersion | null;

    isShaderMaterial: boolean;

    setValues(parameters: ShaderMaterialParameters): void;
    toJSON(meta: any): any;
}

declare class RawShaderMaterial extends ShaderMaterial {
    constructor(parameters?: ShaderMaterialParameters);
}

interface PointsMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    size?: number | undefined;
    sizeAttenuation?: boolean | undefined;
    fog?: boolean | undefined;
}

declare class PointsMaterial extends Material {
    constructor(parameters?: PointsMaterialParameters);

    /**
     * @default 'PointsMaterial'
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
     * @default 1
     */
    size: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: PointsMaterialParameters): void;
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

interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
    clearcoat?: number | undefined;
    clearcoatMap?: Texture | null | undefined;
    clearcoatRoughness?: number | undefined;
    clearcoatRoughnessMap?: Texture | null | undefined;
    clearcoatNormalScale?: Vector2 | undefined;
    clearcoatNormalMap?: Texture | null | undefined;

    reflectivity?: number | undefined;
    ior?: number | undefined;

    sheen?: number | undefined;
    sheenColor?: Color | undefined;
    sheenColorMap?: Texture | null | undefined;
    sheenRoughness?: number | undefined;
    sheenRoughnessMap?: Texture | null | undefined;

    transmission?: number | undefined;
    transmissionMap?: Texture | null | undefined;

    thickness?: number | undefined;
    thicknessMap?: Texture | null | undefined;

    attenuationDistance?: number | undefined;
    attenuationColor?: Color | undefined;

    specularIntensity?: number | undefined;
    specularColor?: Color | undefined;
    specularIntensityMap?: Texture | null | undefined;
    specularColorMap?: Texture | null | undefined;

    iridescenceMap?: Texture | null | undefined;
    iridescenceIOR?: number | undefined;
    iridescence?: number | undefined;
    iridescenceThicknessRange?: [number, number] | undefined;
    iridescenceThicknessMap?: Texture | null | undefined;

    anisotropy?: number | undefined;
    anisotropyRotation?: number | undefined;
    anisotropyMap?: Texture | null | undefined;
}

declare class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters?: MeshPhysicalMaterialParameters);

    /**
     * @default 'MeshPhysicalMaterial'
     */
    type: string;

    /**
     * @default { 'STANDARD': '', 'PHYSICAL': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default 0
     */
    clearcoat: number;

    /**
     * @default null
     */
    clearcoatMap: Texture | null;

    /**
     * @default 0
     */
    clearcoatRoughness: number;

    /**
     * @default null
     */
    clearcoatRoughnessMap: Texture | null;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    clearcoatNormalScale: Vector2;

    /**
     * @default null
     */
    clearcoatNormalMap: Texture | null;

    /**
     * @default 0.5
     */
    reflectivity: number;

    /**
     * @default 1.5
     */
    ior: number;

    /**
     * @default 0.0
     */
    sheen: number;

    /**
     * @default Color( 0x000000 )
     */
    sheenColor: Color;

    /**
     * @default null
     */
    sheenColorMap: Texture | null;

    /**
     * @default 1.0
     */
    sheenRoughness: number;

    /**
     * @default null
     */
    sheenRoughnessMap: Texture | null;

    /**
     * @default 0
     */
    transmission: number;

    /**
     * @default null
     */
    transmissionMap: Texture | null;

    /**
     * @default 0.01
     */
    thickness: number;

    /**
     * @default null
     */
    thicknessMap: Texture | null;

    /**
     * @default 0.0
     */
    attenuationDistance: number;

    /**
     * @default Color( 1, 1, 1 )
     */
    attenuationColor: Color;

    /**
     * @default 1.0
     */
    specularIntensity: number;

    /**
     * @default Color(1, 1, 1)
     */
    specularColor: Color;

    /**
     * @default null
     */
    specularIntensityMap: Texture | null;

    /**
     * @default null
     */
    specularColorMap: Texture | null;

    /**
     * @default null
     */
    iridescenceMap: Texture | null;

    /**
     * @default 1.3
     */
    iridescenceIOR: number;

    /**
     * @default 0
     */
    iridescence: number;

    /**
     * @default [100, 400]
     */
    iridescenceThicknessRange: [number, number];

    /**
     * @default null
     */
    iridescenceThicknessMap: Texture | null;

    /**
     * @default 0
     */
    anisotropy?: number;

    /**
     * @default 0
     */
    anisotropyRotation?: number;

    /**
     * @default null
     */
    anisotropyMap?: Texture | null;
}

interface MeshPhongMaterialParameters extends MaterialParameters {
    /** geometry color in hexadecimal. Default is 0xffffff. */
    color?: ColorRepresentation | undefined;
    specular?: ColorRepresentation | undefined;
    shininess?: number | undefined;
    opacity?: number | undefined;
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
    specularMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    envMap?: Texture | null | undefined;
    combine?: Combine | undefined;
    reflectivity?: number | undefined;
    refractionRatio?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
    fog?: boolean | undefined;
    flatShading?: boolean | undefined;
}

declare class MeshPhongMaterial extends Material {
    constructor(parameters?: MeshPhongMaterialParameters);

    /**
     * @default 'MeshNormalMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default new THREE.Color( 0x111111 )
     */
    specular: Color;

    /**
     * @default 30
     */
    shininess: number;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default null
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default null
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
     * @default new Vector2( 1, 1 )
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
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    /**
     * @deprecated Use {@link MeshStandardMaterial THREE.MeshStandardMaterial} instead.
     */
    metal: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshPhongMaterialParameters): void;
}

interface MeshToonMaterialParameters extends MaterialParameters {
    /** geometry color in hexadecimal. Default is 0xffffff. */
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    gradientMap?: Texture | null | undefined;
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
    alphaMap?: Texture | null | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
    fog?: boolean | undefined;
}

declare class MeshToonMaterial extends Material {
    constructor(parameters?: MeshToonMaterialParameters);

    /**
     * @default 'MeshToonMaterial'
     */
    type: string;

    /**
     * @default { 'TOON': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    gradientMap: Texture | null;

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
    alphaMap: Texture | null;

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

    setValues(parameters: MeshToonMaterialParameters): void;
}

interface MeshNormalMaterialParameters extends MaterialParameters {
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;

    flatShading?: boolean | undefined;
}

declare class MeshNormalMaterial extends Material {
    constructor(parameters?: MeshNormalMaterialParameters);

    /**
     * @default 'MeshNormalMaterial'
     */
    type: string;

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
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    setValues(parameters: MeshNormalMaterialParameters): void;
}

interface MeshLambertMaterialParameters extends MaterialParameters {
    bumpMap?: Texture | undefined;
    bumpScale?: number | undefined;
    color?: ColorRepresentation | undefined;
    displacementMap?: Texture | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    emissive?: ColorRepresentation | undefined;
    emissiveIntensity?: number | undefined;
    emissiveMap?: Texture | null | undefined;
    flatShading?: boolean | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null | undefined;
    lightMapIntensity?: number | undefined;
    normalMap?: Texture | undefined;
    normalScale?: Vector2 | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    specularMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    envMap?: Texture | null | undefined;
    combine?: Combine | undefined;
    reflectivity?: number | undefined;
    refractionRatio?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
    fog?: boolean | undefined;
}

declare class MeshLambertMaterial extends Material {
    constructor(parameters?: MeshLambertMaterialParameters);

    /**
     * @default 'MeshLambertMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

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
     * @default false
     */
    flatShading: boolean;

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
    normalMap: Texture | null;

    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

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

    setValues(parameters: MeshLambertMaterialParameters): void;
}

interface MeshDepthMaterialParameters extends MaterialParameters {
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    depthPacking?: DepthPackingStrategies | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
}

declare class MeshDepthMaterial extends Material {
    constructor(parameters?: MeshDepthMaterialParameters);

    /**
     * @default 'MeshDepthMaterial'
     */
    type: string;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default THREE.BasicDepthPacking
     */
    depthPacking: DepthPackingStrategies;

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
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    setValues(parameters: MeshDepthMaterialParameters): void;
}

interface MeshDistanceMaterialParameters extends MaterialParameters {
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    farDistance?: number | undefined;
    nearDistance?: number | undefined;
    referencePosition?: Vector3 | undefined;
}

declare class MeshDistanceMaterial extends Material {
    constructor(parameters?: MeshDistanceMaterialParameters);

    /**
     * @default 'MeshDistanceMaterial'
     */
    type: string;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

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
     * @default false
     */
    fog: boolean;

    setValues(parameters: MeshDistanceMaterialParameters): void;
}

interface MeshMatcapMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    matcap?: Texture | null | undefined;
    map?: Texture | null | undefined;
    bumpMap?: Texture | null | undefined;
    bumpScale?: number | undefined;
    normalMap?: Texture | null | undefined;
    normalMapType?: NormalMapTypes | undefined;
    normalScale?: Vector2 | undefined;
    displacementMap?: Texture | null | undefined;
    displacementScale?: number | undefined;
    displacementBias?: number | undefined;
    alphaMap?: Texture | null | undefined;
    fog?: boolean | undefined;
    flatShading?: boolean | undefined;
}

declare class MeshMatcapMaterial extends Material {
    constructor(parameters?: MeshMatcapMaterialParameters);

    /**
     * @default 'MeshMatcapMaterial'
     */
    type: string;

    /**
     * @default { 'MATCAP': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    matcap: Texture | null;

    /**
     * @default null
     */
    map: Texture | null;

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
     * @default new Vector2( 1, 1 )
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
    alphaMap: Texture | null;

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

    setValues(parameters: MeshMatcapMaterialParameters): void;
}

interface LineDashedMaterialParameters extends LineBasicMaterialParameters {
    scale?: number | undefined;
    dashSize?: number | undefined;
    gapSize?: number | undefined;
}

declare class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters?: LineDashedMaterialParameters);

    /**
     * @default 'LineDashedMaterial'
     */
    type: string;

    /**
     * @default 1
     */
    scale: number;

    /**
     * @default 1
     */
    dashSize: number;

    /**
     * @default 1
     */
    gapSize: number;
    readonly isLineDashedMaterial: true;

    setValues(parameters: LineDashedMaterialParameters): void;
}

declare class QuaternionLinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
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

// Math //////////////////////////////////////////////////////////////////////////////////

declare class Box2 {
    constructor(min?: Vector2, max?: Vector2);

    /**
     * @default new THREE.Vector2( + Infinity, + Infinity )
     */
    min: Vector2;

    /**
     * @default new THREE.Vector2( - Infinity, - Infinity )
     */
    max: Vector2;

    set(min: Vector2, max: Vector2): Box2;
    setFromPoints(points: Vector2[]): Box2;
    setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
    clone(): this;
    copy(box: Box2): this;
    makeEmpty(): Box2;
    isEmpty(): boolean;
    getCenter(target: Vector2): Vector2;
    getSize(target: Vector2): Vector2;
    expandByPoint(point: Vector2): Box2;
    expandByVector(vector: Vector2): Box2;
    expandByScalar(scalar: number): Box2;
    containsPoint(point: Vector2): boolean;
    containsBox(box: Box2): boolean;
    getParameter(point: Vector2, target: Vector2): Vector2;
    intersectsBox(box: Box2): boolean;
    clampPoint(point: Vector2, target: Vector2): Vector2;
    distanceToPoint(point: Vector2): number;
    intersect(box: Box2): Box2;
    union(box: Box2): Box2;
    translate(offset: Vector2): Box2;
    equals(box: Box2): boolean;
    /**
     * @deprecated Use {@link Box2#isEmpty .isEmpty()} instead.
     */
    empty(): any;
    /**
     * @deprecated Use {@link Box2#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;
}

/**
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/math/MathUtils.js|src/math/MathUtils.js}
 */

declare const DEG2RAD: number;

declare const RAD2DEG: number;

declare function generateUUID(): string;

/**
 * Clamps the x to be between a and b.
 *
 * @param value Value to be clamped.
 * @param min Minimum value.
 * @param max Maximum value.
 */
declare function clamp(value: number, min: number, max: number): number;

declare function euclideanModulo(n: number, m: number): number;

/**
 * Linear mapping of x from range [a1, a2] to range [b1, b2].
 *
 * @param x Value to be mapped.
 * @param a1 Minimum value for range A.
 * @param a2 Maximum value for range A.
 * @param b1 Minimum value for range B.
 * @param b2 Maximum value for range B.
 */
declare function mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;

declare function inverseLerp(x: number, y: number, t: number): number;

/**
 * Returns a value linearly interpolated from two known points based
 * on the given interval - t = 0 will return x and t = 1 will return y.
 *
 * @param x Start point.
 * @param y End point.
 * @param t interpolation factor in the closed interval [0, 1]
 */
declare function lerp(x: number, y: number, t: number): number;

/**
 * Smoothly interpolate a number from x toward y in a spring-like
 * manner using the dt to maintain frame rate independent movement.
 *
 * @param x Current point.
 * @param y Target point.
 * @param lambda A higher lambda value will make the movement more sudden, and a lower value will make the movement more gradual.
 * @param dt Delta time in seconds.
 */
declare function damp(x: number, y: number, lambda: number, dt: number): number;

/**
 * Returns a value that alternates between 0 and length.
 *
 * @param x The value to pingpong.
 * @param length The positive value the export function will pingpong to. Default is 1.
 */
declare function pingpong(x: number, length?: number): number;

declare function smoothstep(x: number, min: number, max: number): number;

declare function smootherstep(x: number, min: number, max: number): number;

/**
 * Random integer from low to high interval.
 */
declare function randInt(low: number, high: number): number;

/**
 * Random float from low to high interval.
 */
declare function randFloat(low: number, high: number): number;

/**
 * Random float from - range / 2 to range / 2 interval.
 */
declare function randFloatSpread(range: number): number;

/**
 * Deterministic pseudo-random float in the interval [ 0, 1 ].
 */
declare function seededRandom(seed?: number): number;

declare function degToRad(degrees: number): number;

declare function radToDeg(radians: number): number;

declare function isPowerOfTwo(value: number): boolean;

declare function ceilPowerOfTwo(value: number): number;

declare function floorPowerOfTwo(value: number): number;

declare function setQuaternionFromProperEuler(q: Quaternion, a: number, b: number, c: number, order: string): void;

declare function denormalize(
    value: number,
    array: Float32Array | Uint32Array | Uint16Array | Uint8Array | Int32Array | Int16Array | Int8Array,
): number;

declare function normalize(
    value: number,
    array: Float32Array | Uint32Array | Uint16Array | Uint8Array | Int32Array | Int16Array | Int8Array,
): number;

declare const MathUtils: {
    DEG2RAD: typeof DEG2RAD;
    RAD2DEG: typeof RAD2DEG;
    generateUUID: typeof generateUUID;
    clamp: typeof clamp;
    euclideanModulo: typeof euclideanModulo;
    mapLinear: typeof mapLinear;
    inverseLerp: typeof inverseLerp;
    lerp: typeof lerp;
    damp: typeof damp;
    pingpong: typeof pingpong;
    smoothstep: typeof smoothstep;
    smootherstep: typeof smootherstep;
    randInt: typeof randInt;
    randFloat: typeof randFloat;
    randFloatSpread: typeof randFloatSpread;
    seededRandom: typeof seededRandom;
    degToRad: typeof degToRad;
    radToDeg: typeof radToDeg;
    isPowerOfTwo: typeof isPowerOfTwo;
    ceilPowerOfTwo: typeof ceilPowerOfTwo;
    floorPowerOfTwo: typeof floorPowerOfTwo;
    setQuaternionFromProperEuler: typeof setQuaternionFromProperEuler;
    normalize: typeof normalize;
    denormalize: typeof denormalize;
};

declare const MathUtils_d_DEG2RAD: typeof DEG2RAD;
declare const MathUtils_d_MathUtils: typeof MathUtils;
declare const MathUtils_d_RAD2DEG: typeof RAD2DEG;
declare const MathUtils_d_ceilPowerOfTwo: typeof ceilPowerOfTwo;
declare const MathUtils_d_clamp: typeof clamp;
declare const MathUtils_d_damp: typeof damp;
declare const MathUtils_d_degToRad: typeof degToRad;
declare const MathUtils_d_denormalize: typeof denormalize;
declare const MathUtils_d_euclideanModulo: typeof euclideanModulo;
declare const MathUtils_d_floorPowerOfTwo: typeof floorPowerOfTwo;
declare const MathUtils_d_generateUUID: typeof generateUUID;
declare const MathUtils_d_inverseLerp: typeof inverseLerp;
declare const MathUtils_d_isPowerOfTwo: typeof isPowerOfTwo;
declare const MathUtils_d_lerp: typeof lerp;
declare const MathUtils_d_mapLinear: typeof mapLinear;
declare const MathUtils_d_normalize: typeof normalize;
declare const MathUtils_d_pingpong: typeof pingpong;
declare const MathUtils_d_radToDeg: typeof radToDeg;
declare const MathUtils_d_randFloat: typeof randFloat;
declare const MathUtils_d_randFloatSpread: typeof randFloatSpread;
declare const MathUtils_d_randInt: typeof randInt;
declare const MathUtils_d_seededRandom: typeof seededRandom;
declare const MathUtils_d_setQuaternionFromProperEuler: typeof setQuaternionFromProperEuler;
declare const MathUtils_d_smootherstep: typeof smootherstep;
declare const MathUtils_d_smoothstep: typeof smoothstep;
declare namespace MathUtils_d {
  export { MathUtils_d_DEG2RAD as DEG2RAD, MathUtils_d_MathUtils as MathUtils, MathUtils_d_RAD2DEG as RAD2DEG, MathUtils_d_ceilPowerOfTwo as ceilPowerOfTwo, MathUtils_d_clamp as clamp, MathUtils_d_damp as damp, MathUtils_d_degToRad as degToRad, MathUtils_d_denormalize as denormalize, MathUtils_d_euclideanModulo as euclideanModulo, MathUtils_d_floorPowerOfTwo as floorPowerOfTwo, MathUtils_d_generateUUID as generateUUID, MathUtils_d_inverseLerp as inverseLerp, MathUtils_d_isPowerOfTwo as isPowerOfTwo, MathUtils_d_lerp as lerp, MathUtils_d_mapLinear as mapLinear, MathUtils_d_normalize as normalize, MathUtils_d_pingpong as pingpong, MathUtils_d_radToDeg as radToDeg, MathUtils_d_randFloat as randFloat, MathUtils_d_randFloatSpread as randFloatSpread, MathUtils_d_randInt as randInt, MathUtils_d_seededRandom as seededRandom, MathUtils_d_setQuaternionFromProperEuler as setQuaternionFromProperEuler, MathUtils_d_smootherstep as smootherstep, MathUtils_d_smoothstep as smoothstep };
}

/**
 * Every level is associated with an object, and rendering can be switched between them at the distances specified
 * @remarks
 * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
 * @example
 * ```typescript
 * const {@link LOD} = new THREE.LOD();
 * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
 * for (let i = 0; i & lt; 3; i++) {
 *     const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
 *     const mesh = new THREE.Mesh(geometry, material);
 *     lod.addLevel(mesh, i * 75);
 * }
 * scene.add(lod);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lod | webgl / {@link LOD} }
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LOD | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LOD.js | Source}
 */
declare class LOD extends Object3D {
    /**
     * Creates a new {@link LOD}.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link LOD}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLOD: true;

    /**
     * @override
     * @defaultValue `LOD`
     */
    override readonly type: string | 'LOD';

    /**
     * An array of level objects
     */
    levels: Array<{
        /** The Object3D to display at this level. */
        object: Object3D;
        /** The distance at which to display this level of detail. Expects a `Float`. */
        distance: number;
        /** Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. */
        hysteresis: number;
    }>;

    /**
     * Whether the {@link LOD} object is updated automatically by the renderer per frame or not.
     * If set to `false`, you have to call {@link update | .update()} in the render loop by yourself.
     * @defaultValue `true`
     */
    autoUpdate: boolean;

    /**
     * Adds a mesh that will display at a certain distance and greater. Typically the further away the distance, the lower the detail on the mesh.
     *
     * @param object The Object3D to display at this level.
     * @param distance The distance at which to display this level of detail. Expects a `Float`. Default `0.0`.
     * @param hysteresis Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. Default `0.0`.
     */
    addLevel(object: Object3D, distance?: number, hysteresis?: number): this;

    /**
     * Get the currently active {@link LOD} level
     * @remarks
     * As index of the levels array.
     */
    getCurrentLevel(): number;

    /**
     * Get a reference to the first {@link THREE.Object3D | Object3D} (mesh) that is greater than {@link distance}.
     * @param distance Expects a `Float`
     */
    getObjectForDistance(distance: number): Object3D | null;

    /**
     * Set the visibility of each {@link levels | level}'s {@link THREE.Object3D | object} based on distance from the {@link THREE.Camera | camera}.
     * @param camera
     */
    update(camera: Camera): void;
}

interface InstancedMeshEventMap extends Object3DEventMap {
    dispose: {};
}

/**
 * A special version of {@link THREE.Mesh | Mesh} with instanced rendering support
 * @remarks
 * Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material but with different world transformations
 * @remarks
 * The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_dynamic | WebGL / instancing / dynamic}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_performance | WebGL / instancing / performance}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_scatter | WebGL / instancing / scatter}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | WebGL / instancing / raycast}
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/InstancedMesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/InstancedMesh.js | Source}
 */
declare class InstancedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial, InstancedMeshEventMap> {
    /**
     * Create a new instance of {@link InstancedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     * @param count The **maximum** number of instances of this Mesh. Expects a `Integer`
     */
    constructor(geometry: TGeometry | undefined, material: TMaterial | undefined, count: number);

    /**
     * Read-only flag to check if a given object is of type {@link InstancedMesh}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInstancedMesh: true;

    /**
     * This bounding box encloses all instances of the {@link InstancedMesh},, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingBox: Box3 | null;

    /**
     * This bounding sphere encloses all instances of the {@link InstancedMesh}, which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingSphere: Sphere | null;

    /**
     * The number of instances.
     * @remarks
     * The `count` value passed into the {@link InstancedMesh | constructor} represents the **maximum** number of instances of this mesh.
     * You can change the number of instances at runtime to an integer value in the range `[0, count]`.
     * @remarks If you need more instances than the original `count` value, you have to create a new InstancedMesh.
     * @remarks Expects a `Integer`
     */
    count: number;

    /**
     * Represents the colors of all instances.
     * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate()} flag to `true` if you modify instanced data via {@link setColorAt | .setColorAt()}.
     * @defaultValue `null`
     */
    instanceColor: InstancedBufferAttribute | null;

    /**
     * Represents the local transformation of all instances.
     * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate()} flag to `true` if you modify instanced data via {@link setMatrixAt | .setMatrixAt()}.
     */
    instanceMatrix: InstancedBufferAttribute;

    /**
     * Computes bounding box of the all instances, updating {@link boundingBox | .boundingBox} attribute.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingBox(): void;

    /**
     * Computes bounding sphere of the all instances, updating {@link boundingSphere | .boundingSphere} attribute.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingSphere(): void;

    /**
     * Get the color of the defined instance.
     * @param index The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param color This color object will be set to the color of the defined instance.
     */
    getColorAt(index: number, color: Color): void;

    /**
     * Sets the given color to the defined instance
     * @remarks
     * Make sure you set {@link InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate()} to `true` after updating all the colors.
     * @param index The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param color The color of a single instance.
     */
    setColorAt(index: number, color: Color): void;

    /**
     * Get the local transformation matrix of the defined instance.
     * @param index The index of an instance Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param matrix This 4x4 matrix will be set to the local transformation matrix of the defined instance.
     */
    getMatrixAt(index: number, matrix: Matrix4): void;

    /**
     * Sets the given local transformation matrix to the defined instance.
     * @remarks
     * Make sure you set {@link InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate()} flag to `true` after updating all the matrices.
     * @param index The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param matrix A 4x4 matrix representing the local transformation of a single instance.
     */
    setMatrixAt(index: number, matrix: Matrix4): void;

    /**
     * No effect in {@link InstancedMesh}.
     * @ignore
     * @hidden
     */
    override updateMorphTargets(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
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

/**
 * A continuous line that connects back to the start.
 * @remarks
 * This is nearly the same as {@link THREE.Line | Line},
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_LOOP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP},
 * which draws a straight line to the next vertex, and connects the last vertex back to the first.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js | Source}
 */
declare class LineLoop<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    /**
     * Create a new instance of {@link LineLoop}
     * @param geometry  List of vertices representing points on the line loop. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link LineLoop}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineLoop: true;

    /**
     * @override
     * @defaultValue `LineLoop`
     */
    override readonly type: string | 'LineLoop';
}

/**
 * A class for displaying {@link Points}
 * @remarks
 * The {@link Points} are rendered by the {@link THREE.WebGLRenderer | WebGLRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.POINTS}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Points | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Points.js | Source}
 */
declare class Points<
    TGeometry extends BufferGeometry<NormalOrGLBufferAttributes> = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    /**
     * Create a new instance of {@link Points}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.PointsMaterial | `new THREE.PointsMaterial()`}.
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * Read-only flag to check if a given object is of type {@link Points}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isPoints: true;

    /**
     * @override
     * @defaultValue `Points`
     */
    override readonly type: string | 'Points';

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
     * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
     * @remarks each vertex designates the position of a particle in the system.
     */
    geometry: TGeometry;

    /**
     * An instance of {@link THREE.Material | Material}, defining the object's appearance.
     * @defaultValue {@link THREE.PointsMaterial | `new THREE.PointsMaterial()`}, _with randomised colour_.
     */
    material: TMaterial;

    /**
     * Updates the morphTargets to have no influence on the object
     * @remarks Resets the {@link morphTargetInfluences} and {@link morphTargetDictionary} properties.
     */
    updateMorphTargets(): void;
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

declare class WebGL1Renderer extends WebGLRenderer {
    constructor(parameters?: WebGLRendererParameters);
    readonly isWebGL1Renderer: true;
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
 * Represents a three-dimensional render target.
 */
declare class WebGL3DRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGL3DRenderTarget.
     *
     * @param width the width of the render target, in pixels.
     * @param height the height of the render target, in pixels.
     * @param depth the depth of the render target.
     */
    constructor(width?: number, height?: number, depth?: number);

    /**
     * The depth of the render target.
     */
    depth: number;

    /**
     * The texture property is overwritten with an instance of {@link Data3DTexture}.
     */
    texture: Data3DTexture;

    readonly isWebGL3DRenderTarget: true;
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

/**
 * This type of render target represents an array of textures.
 */
declare class WebGLArrayRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGLArrayRenderTarget.
     *
     * @param width the width of the render target, in pixels.
     * @param height the height of the render target, in pixels.
     * @param depth the depth/layer count of the render target.
     */
    constructor(width?: number, height?: number, depth?: number);

    /**
     * The depth of the render target.
     */
    depth: number;

    /**
     * The texture property is overwritten with an instance of {@link DataArrayTexture}.
     */
    texture: DataArrayTexture;

    readonly isWebGLArrayRenderTarget: true;
}

declare function cloneUniforms(uniforms_src: any): any;
declare function mergeUniforms(uniforms: any): any;

declare function cloneUniformsGroups(src: UniformsGroup[]): UniformsGroup[];

declare namespace UniformsUtils {
    export { mergeUniforms as merge, cloneUniforms as clone };
}

// Renderers / Shaders /////////////////////////////////////////////////////////////////////
declare const ShaderChunk: {
    alphahash_fragment: string;
    alphahash_pars_fragment: string;
    alphamap_fragment: string;
    alphamap_pars_fragment: string;
    alphatest_fragment: string;
    alphatest_pars_fragment: string;
    aomap_fragment: string;
    aomap_pars_fragment: string;
    begin_vertex: string;
    beginnormal_vertex: string;
    bsdfs: string;
    iridescence_fragment: string;
    bumpmap_pars_fragment: string;
    clipping_planes_fragment: string;
    clipping_planes_pars_fragment: string;
    clipping_planes_pars_vertex: string;
    clipping_planes_vertex: string;
    color_fragment: string;
    color_pars_fragment: string;
    color_pars_vertex: string;
    color_vertex: string;
    common: string;
    cube_uv_reflection_fragment: string;
    defaultnormal_vertex: string;
    displacementmap_pars_vertex: string;
    displacementmap_vertex: string;
    emissivemap_fragment: string;
    emissivemap_pars_fragment: string;
    colorspace_fragment: string;
    colorspace_pars_fragment: string;
    envmap_fragment: string;
    envmap_common_pars_fragment: string;
    envmap_pars_fragment: string;
    envmap_pars_vertex: string;
    envmap_physical_pars_fragment: string;
    envmap_vertex: string;
    fog_vertex: string;
    fog_pars_vertex: string;
    fog_fragment: string;
    fog_pars_fragment: string;
    gradientmap_pars_fragment: string;
    lightmap_fragment: string;
    lightmap_pars_fragment: string;
    lights_lambert_fragment: string;
    lights_lambert_pars_fragment: string;
    lights_pars_begin: string;
    lights_toon_fragment: string;
    lights_toon_pars_fragment: string;
    lights_phong_fragment: string;
    lights_phong_pars_fragment: string;
    lights_physical_fragment: string;
    lights_physical_pars_fragment: string;
    lights_fragment_begin: string;
    lights_fragment_maps: string;
    lights_fragment_end: string;
    logdepthbuf_fragment: string;
    logdepthbuf_pars_fragment: string;
    logdepthbuf_pars_vertex: string;
    logdepthbuf_vertex: string;
    map_fragment: string;
    map_pars_fragment: string;
    map_particle_fragment: string;
    map_particle_pars_fragment: string;
    metalnessmap_fragment: string;
    metalnessmap_pars_fragment: string;
    morphcolor_vertex: string;
    morphnormal_vertex: string;
    morphtarget_pars_vertex: string;
    morphtarget_vertex: string;
    normal_fragment_begin: string;
    normal_fragment_maps: string;
    normal_pars_fragment: string;
    normal_pars_vertex: string;
    normal_vertex: string;
    normalmap_pars_fragment: string;
    clearcoat_normal_fragment_begin: string;
    clearcoat_normal_fragment_maps: string;
    clearcoat_pars_fragment: string;
    iridescence_pars_fragment: string;
    opaque_fragment: string;
    packing: string;
    premultiplied_alpha_fragment: string;
    project_vertex: string;
    dithering_fragment: string;
    dithering_pars_fragment: string;
    roughnessmap_fragment: string;
    roughnessmap_pars_fragment: string;
    shadowmap_pars_fragment: string;
    shadowmap_pars_vertex: string;
    shadowmap_vertex: string;
    shadowmask_pars_fragment: string;
    skinbase_vertex: string;
    skinning_pars_vertex: string;
    skinning_vertex: string;
    skinnormal_vertex: string;
    specularmap_fragment: string;
    specularmap_pars_fragment: string;
    tonemapping_fragment: string;
    tonemapping_pars_fragment: string;
    transmission_fragment: string;
    transmission_pars_fragment: string;
    uv_pars_fragment: string;
    uv_pars_vertex: string;
    uv_vertex: string;
    worldpos_vertex: string;

    background_vert: string;
    background_frag: string;
    backgroundCube_vert: string;
    backgroundCube_frag: string;
    cube_vert: string;
    cube_frag: string;
    depth_vert: string;
    depth_frag: string;
    distanceRGBA_vert: string;
    distanceRGBA_frag: string;
    equirect_vert: string;
    equirect_frag: string;
    linedashed_vert: string;
    linedashed_frag: string;
    meshbasic_vert: string;
    meshbasic_frag: string;
    meshlambert_vert: string;
    meshlambert_frag: string;
    meshmatcap_vert: string;
    meshmatcap_frag: string;
    meshnormal_vert: string;
    meshnormal_frag: string;
    meshphong_vert: string;
    meshphong_frag: string;
    meshphysical_vert: string;
    meshphysical_frag: string;
    meshtoon_vert: string;
    meshtoon_frag: string;
    points_vert: string;
    points_frag: string;
    shadow_vert: string;
    shadow_frag: string;
    sprite_vert: string;
    sprite_frag: string;
};

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

// Renderers / WebGL /////////////////////////////////////////////////////////////////////


declare class WebGLBufferRenderer {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        info: WebGLInfo,
        capabilities: WebGLCapabilities,
    );

    setMode(value: any): void;
    render(start: any, count: number): void;
    renderInstances(start: any, count: number, primcount: number): void;
}

declare class WebGLClipping {
    constructor(properties: WebGLProperties);

    uniform: { value: any; needsUpdate: boolean };

    /**
     * @default 0
     */
    numPlanes: number;

    /**
     * @default 0
     */
    numIntersection: number;

    init(planes: any[], enableLocalClipping: boolean): boolean;
    beginShadows(): void;
    endShadows(): void;
    setGlobalState(planes: Plane[], camera: Camera): void;
    setState(material: Material, camera: Camera, useCache: boolean): void;
}

declare class WebGLCubeUVMaps {
    constructor(renderer: WebGLRenderer);

    get<T>(texture: T): T extends Texture ? Texture : T;
    dispose(): void;
}

declare class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: WebGLCapabilities);

    get(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute):
        | {
              buffer: WebGLBuffer;
              type: number;
              bytesPerElement: number;
              version: number;
          }
        | undefined;

    remove(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute, bufferType: number): void;
}

declare class WebGLGeometries {
    constructor(gl: WebGLRenderingContext, attributes: WebGLAttributes, info: WebGLInfo);

    get(object: Object3D, geometry: BufferGeometry): BufferGeometry;
    update(geometry: BufferGeometry): void;
    getWireframeAttribute(geometry: BufferGeometry): BufferAttribute;
}

declare class WebGLIndexedBufferRenderer {
    constructor(gl: WebGLRenderingContext, extensions: any, info: any, capabilities: any);

    setMode(value: any): void;
    setIndex(index: any): void;
    render(start: any, count: number): void;
    renderInstances(start: any, count: number, primcount: number): void;
}

declare class WebGLLights {
    constructor(extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    state: {
        version: number;

        hash: {
            directionalLength: number;
            pointLength: number;
            spotLength: number;
            rectAreaLength: number;
            hemiLength: number;

            numDirectionalShadows: number;
            numPointShadows: number;
            numSpotShadows: number;
        };

        ambient: number[];
        probe: any[];
        directional: any[];
        directionalShadow: any[];
        directionalShadowMap: any[];
        directionalShadowMatrix: any[];
        spot: any[];
        spotShadow: any[];
        spotShadowMap: any[];
        spotShadowMatrix: any[];
        rectArea: any[];
        point: any[];
        pointShadow: any[];
        pointShadowMap: any[];
        pointShadowMatrix: any[];
        hemi: any[];
    };

    get(light: any): any;
    setup(lights: any): void;
    setupView(lights: any, camera: any): void;
}

declare class WebGLObjects {
    constructor(gl: WebGLRenderingContext, geometries: any, attributes: any, info: any);

    update(object: any): any;
    dispose(): void;
}

declare class WebGLCubeMaps {
    constructor(renderer: WebGLRenderer);

    get(texture: any): any;
    dispose(): void;
}

declare class WebGLBindingStates {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        attributes: WebGLAttributes,
        capabilities: WebGLCapabilities,
    );

    setup(
        object: Object3D,
        material: Material,
        program: WebGLProgram,
        geometry: BufferGeometry,
        index: BufferAttribute,
    ): void;
    reset(): void;
    resetDefaultState(): void;
    dispose(): void;
    releaseStatesOfGeometry(): void;
    releaseStatesOfProgram(): void;
    initAttributes(): void;
    enableAttribute(attribute: number): void;
    disableUnusedAttributes(): void;
}

declare class WebGLPrograms {
    constructor(
        renderer: WebGLRenderer,
        cubemaps: WebGLCubeMaps,
        extensions: WebGLExtensions,
        capabilities: WebGLCapabilities,
        bindingStates: WebGLBindingStates,
        clipping: WebGLClipping,
    );

    programs: WebGLProgram[];

    getParameters(material: Material, lights: any, shadows: object[], scene: Scene, object: any): any;
    getProgramCacheKey(parameters: any): string;
    getUniforms(material: Material): object;
    acquireProgram(parameters: any, cacheKey: string): WebGLProgram;
    releaseProgram(program: WebGLProgram): void;
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

    render(shadowsArray: Light[], scene: Scene, camera: Camera): void;

    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    cullFace: any;
}

declare function WebGLUniformsGroups(
    gl: WebGLRenderingContext,
    info: WebGLInfo,
    capabilities: WebGLCapabilities,
    state: WebGLState,
): {
    dispose: () => void;
    update: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
    bind: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
};

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

/**
 * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
 * @example
 * ```typescript
 * const scene = new THREE.Scene();
 * scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain | webgl geometry terrain}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js | Source}
 */
declare class FogExp2 implements FogBase {
    /**
     * The color parameter is passed to the {@link THREE.Color | Color} constructor to set the color property
     * @remarks Color can be a hexadecimal integer or a CSS-style string.
     * @param color
     * @param density Expects a `Float`
     */
    constructor(color: ColorRepresentation, density?: number);

    /**
     * Read-only flag to check if a given object is of type {@link FogExp2}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isFogExp2: true;

    /**
     * Optional name of the object
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
     * Defines how fast the fog will grow dense.
     * @defaultValue `0.00025`
     * @remarks Expects a `Float`
     */
    density: number;

    /**
     * Returns a new {@link FogExp2} instance with the same parameters as this one.
     */
    clone(): FogExp2;

    /**
     * Return {@link FogExp2} data in JSON format.
     */
    toJSON(): any;
}

/**
 * Creates a texture for use with a video.
 * @remarks
 * Note: After the initial use of a texture, the video cannot be changed
 * Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one.
 * @example
 * ```typescript
 * // assuming you have created a HTML video element with id="video"
 * const video = document.getElementById('video');
 * const texture = new THREE.VideoTexture(video);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video | materials / video}
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video_webcam | materials / video / webcam}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_kinect | video / kinect}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_panorama_equirectangular | video / panorama / equirectangular}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_video | vr / video}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/VideoTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js | Source}
 */
declare class VideoTexture extends Texture {
    /**
     * Create a new instance of {@link VideoTexture}
     * @param video The video element to use as the texture.
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     */
    constructor(
        video: HTMLVideoElement,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    /**
     * Read-only flag to check if a given object is of type {@link VideoTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isVideoTexture: true;

    /**
     * @override
     * @defaultValue {@link THREE.LinearFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.LinearFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * You will **not** need to set this manually here as it is handled by the {@link update | update()} method.
     */
    set needsUpdate(value: boolean);

    /**
     * This is called automatically and sets {@link needsUpdate | .needsUpdate } to `true` every time a new frame is available.
     */
    update(): void;
}

/**
 * Creates an texture 2D array based on data in compressed form, for example from a
 * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js | Source}
 */
declare class CompressedArrayTexture extends CompressedTexture {
    /**
     * Create a new instance of {@link CompressedArrayTexture}
     * @param mipmaps The mipmaps array should contain objects with data, width and height.
     * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
     * @param width The width of the biggest mipmap.
     * @param height The height of the biggest mipmap.
     * @param depth The number of layers of the 2D array texture
     * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     */
    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        depth: number,
        format: CompressedPixelFormat,
        type?: TextureDataType,
    );

    /**
     * Read-only flag to check if a given object is of type {@link CompressedArrayTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCompressedArrayTexture: true;

    /**
     * Overridden with a object containing width and height.
     * @override
     */
    get image(): { width: number; height: number; depth: number };
    set image(value: { width: number; height: number; depth: number });

    /**
     * This defines how the texture is wrapped in the depth direction.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    wrapR: Wrapping;
}

/**
 * Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas | canvas element}.
 * @remarks
 * This is almost the same as the base {@link Texture | Texture} class,
 * except that it sets {@link Texture.needsUpdate | needsUpdate} to `true` immediately.
 * @see {@link THREE.Texture | Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CanvasTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CanvasTexture.js | Source}
 */
declare class CanvasTexture extends Texture {
    /**
     * This creates a new {@link THREE.CanvasTexture | CanvasTexture} object.
     * @param canvas The HTML canvas element from which to load the texture.
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     */
    constructor(
        canvas: TexImageSource | OffscreenCanvas,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    /**
     * Read-only flag to check if a given object is of type {@link CanvasTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCanvasTexture: true;
}

/**
 * This class can only be used in combination with {@link THREE.WebGLRenderer.copyFramebufferToTexture | WebGLRenderer.copyFramebufferToTexture()}.
 * @example
 * ```typescript
 * const pixelRatio = window.devicePixelRatio;
 * const textureSize = 128 * pixelRatio;
 *
 * // instantiate a framebuffer texture
 * const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat );
 *
 * // calculate start position for copying part of the frame data
 * const vector = new Vector2();
 * vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2 );
 * vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2 );
 *
 * // render the scene
 * renderer.clear();
 * renderer.render( scene, camera );
 *
 * // copy part of the rendered frame into the framebuffer texture
 * renderer.copyFramebufferToTexture( vector, frameTexture );
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_framebuffer_texture | webgl_framebuffer_texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/FramebufferTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/FramebufferTexture.js | Source}
 */
declare class FramebufferTexture extends Texture {
    /**
     * Create a new instance of {@link FramebufferTexture}
     * @param width The width of the texture.
     * @param height The height of the texture.
     */
    constructor(width: number, height: number);

    /**
     * Read-only flag to check if a given object is of type {@link FramebufferTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isFramebufferTexture: true;

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
    generateMipmaps: boolean;
}

declare function createCanvasElement(): HTMLCanvasElement;

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

interface Renderer {
    domElement: HTMLCanvasElement;

    render(scene: Object3D, camera: Camera): void;
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
        camera: Camera,
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
    compile(scene: Object3D, camera: Camera): void;

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
    render(scene: Object3D, camera: Camera): void;

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
        camera: Camera,
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
        camera: Camera,
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

// Type definitions for three 0.156
// Project: https://threejs.org/
// Definitions by: Josh Ellis <https://github.com/joshuaellis>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const THREE$1_ACESFilmicToneMapping: typeof ACESFilmicToneMapping;
declare const THREE$1_AddEquation: typeof AddEquation;
declare const THREE$1_AddOperation: typeof AddOperation;
declare const THREE$1_AdditiveAnimationBlendMode: typeof AdditiveAnimationBlendMode;
declare const THREE$1_AdditiveBlending: typeof AdditiveBlending;
declare const THREE$1_AlphaFormat: typeof AlphaFormat;
declare const THREE$1_AlwaysCompare: typeof AlwaysCompare;
declare const THREE$1_AlwaysDepth: typeof AlwaysDepth;
declare const THREE$1_AlwaysStencilFunc: typeof AlwaysStencilFunc;
type THREE$1_AmbientLight = AmbientLight;
declare const THREE$1_AmbientLight: typeof AmbientLight;
type THREE$1_AmbientLightProbe = AmbientLightProbe;
declare const THREE$1_AmbientLightProbe: typeof AmbientLightProbe;
type THREE$1_AnimationAction = AnimationAction;
declare const THREE$1_AnimationAction: typeof AnimationAction;
type THREE$1_AnimationActionLoopStyles = AnimationActionLoopStyles;
type THREE$1_AnimationBlendMode = AnimationBlendMode;
type THREE$1_AnimationClip = AnimationClip;
declare const THREE$1_AnimationClip: typeof AnimationClip;
type THREE$1_AnimationLoader = AnimationLoader;
declare const THREE$1_AnimationLoader: typeof AnimationLoader;
type THREE$1_AnimationMixer = AnimationMixer;
declare const THREE$1_AnimationMixer: typeof AnimationMixer;
type THREE$1_AnimationMixerEventMap = AnimationMixerEventMap;
type THREE$1_AnimationObjectGroup = AnimationObjectGroup;
declare const THREE$1_AnimationObjectGroup: typeof AnimationObjectGroup;
type THREE$1_AnyMapping = AnyMapping;
type THREE$1_AnyPixelFormat = AnyPixelFormat;
type THREE$1_ArcCurve = ArcCurve;
declare const THREE$1_ArcCurve: typeof ArcCurve;
type THREE$1_ArrayCamera = ArrayCamera;
declare const THREE$1_ArrayCamera: typeof ArrayCamera;
type THREE$1_ArrowHelper = ArrowHelper;
declare const THREE$1_ArrowHelper: typeof ArrowHelper;
type THREE$1_AttributeGPUType = AttributeGPUType;
type THREE$1_Audio<NodeType extends AudioNode = GainNode> = Audio<NodeType>;
declare const THREE$1_Audio: typeof Audio;
type THREE$1_AudioAnalyser = AudioAnalyser;
declare const THREE$1_AudioAnalyser: typeof AudioAnalyser;
declare const THREE$1_AudioContext: typeof AudioContext;
type THREE$1_AudioListener = AudioListener;
declare const THREE$1_AudioListener: typeof AudioListener;
type THREE$1_AudioLoader = AudioLoader;
declare const THREE$1_AudioLoader: typeof AudioLoader;
type THREE$1_AxesHelper = AxesHelper;
declare const THREE$1_AxesHelper: typeof AxesHelper;
declare const THREE$1_BackSide: typeof BackSide;
type THREE$1_BaseEvent<TEventType extends string = string> = BaseEvent<TEventType>;
declare const THREE$1_BasicDepthPacking: typeof BasicDepthPacking;
declare const THREE$1_BasicShadowMap: typeof BasicShadowMap;
type THREE$1_Blending = Blending;
type THREE$1_BlendingDstFactor = BlendingDstFactor;
type THREE$1_BlendingEquation = BlendingEquation;
type THREE$1_BlendingSrcFactor = BlendingSrcFactor;
type THREE$1_Bone = Bone;
declare const THREE$1_Bone: typeof Bone;
type THREE$1_BooleanKeyframeTrack = BooleanKeyframeTrack;
declare const THREE$1_BooleanKeyframeTrack: typeof BooleanKeyframeTrack;
type THREE$1_Box2 = Box2;
declare const THREE$1_Box2: typeof Box2;
type THREE$1_Box3 = Box3;
declare const THREE$1_Box3: typeof Box3;
type THREE$1_Box3Helper = Box3Helper;
declare const THREE$1_Box3Helper: typeof Box3Helper;
type THREE$1_BoxGeometry = BoxGeometry;
declare const THREE$1_BoxGeometry: typeof BoxGeometry;
type THREE$1_BoxHelper = BoxHelper;
declare const THREE$1_BoxHelper: typeof BoxHelper;
type THREE$1_BufferAttribute = BufferAttribute;
declare const THREE$1_BufferAttribute: typeof BufferAttribute;
type THREE$1_BufferGeometry<Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes> = BufferGeometry<Attributes>;
declare const THREE$1_BufferGeometry: typeof BufferGeometry;
type THREE$1_BufferGeometryLoader = BufferGeometryLoader;
declare const THREE$1_BufferGeometryLoader: typeof BufferGeometryLoader;
declare const THREE$1_ByteType: typeof ByteType;
declare const THREE$1_Cache: typeof Cache;
type THREE$1_Camera = Camera;
declare const THREE$1_Camera: typeof Camera;
type THREE$1_CameraHelper = CameraHelper;
declare const THREE$1_CameraHelper: typeof CameraHelper;
type THREE$1_CanvasTexture = CanvasTexture;
declare const THREE$1_CanvasTexture: typeof CanvasTexture;
type THREE$1_CapsuleGeometry = CapsuleGeometry;
declare const THREE$1_CapsuleGeometry: typeof CapsuleGeometry;
declare const THREE$1_CatmullRom: typeof CatmullRom;
type THREE$1_CatmullRomCurve3 = CatmullRomCurve3;
declare const THREE$1_CatmullRomCurve3: typeof CatmullRomCurve3;
declare const THREE$1_CineonToneMapping: typeof CineonToneMapping;
type THREE$1_CircleGeometry = CircleGeometry;
declare const THREE$1_CircleGeometry: typeof CircleGeometry;
declare const THREE$1_ClampToEdgeWrapping: typeof ClampToEdgeWrapping;
type THREE$1_Clock = Clock;
declare const THREE$1_Clock: typeof Clock;
type THREE$1_Color = Color;
declare const THREE$1_Color: typeof Color;
type THREE$1_ColorKeyframeTrack = ColorKeyframeTrack;
declare const THREE$1_ColorKeyframeTrack: typeof ColorKeyframeTrack;
declare const THREE$1_ColorManagement: typeof ColorManagement;
type THREE$1_ColorRepresentation = ColorRepresentation;
type THREE$1_ColorSpace = ColorSpace;
type THREE$1_Combine = Combine;
type THREE$1_CompressedArrayTexture = CompressedArrayTexture;
declare const THREE$1_CompressedArrayTexture: typeof CompressedArrayTexture;
type THREE$1_CompressedPixelFormat = CompressedPixelFormat;
type THREE$1_CompressedTexture = CompressedTexture;
declare const THREE$1_CompressedTexture: typeof CompressedTexture;
type THREE$1_CompressedTextureLoader = CompressedTextureLoader;
declare const THREE$1_CompressedTextureLoader: typeof CompressedTextureLoader;
type THREE$1_ConeGeometry = ConeGeometry;
declare const THREE$1_ConeGeometry: typeof ConeGeometry;
type THREE$1_CoordinateSystem = CoordinateSystem;
type THREE$1_CubeCamera = CubeCamera;
declare const THREE$1_CubeCamera: typeof CubeCamera;
declare const THREE$1_CubeReflectionMapping: typeof CubeReflectionMapping;
declare const THREE$1_CubeRefractionMapping: typeof CubeRefractionMapping;
type THREE$1_CubeTexture = CubeTexture;
declare const THREE$1_CubeTexture: typeof CubeTexture;
type THREE$1_CubeTextureLoader = CubeTextureLoader;
declare const THREE$1_CubeTextureLoader: typeof CubeTextureLoader;
type THREE$1_CubeTextureMapping = CubeTextureMapping;
declare const THREE$1_CubeUVReflectionMapping: typeof CubeUVReflectionMapping;
declare const THREE$1_CubicBezier: typeof CubicBezier;
type THREE$1_CubicBezierCurve = CubicBezierCurve;
declare const THREE$1_CubicBezierCurve: typeof CubicBezierCurve;
type THREE$1_CubicBezierCurve3 = CubicBezierCurve3;
declare const THREE$1_CubicBezierCurve3: typeof CubicBezierCurve3;
type THREE$1_CubicInterpolant = CubicInterpolant;
declare const THREE$1_CubicInterpolant: typeof CubicInterpolant;
type THREE$1_CullFace = CullFace;
declare const THREE$1_CullFaceBack: typeof CullFaceBack;
declare const THREE$1_CullFaceFront: typeof CullFaceFront;
declare const THREE$1_CullFaceFrontBack: typeof CullFaceFrontBack;
declare const THREE$1_CullFaceNone: typeof CullFaceNone;
type THREE$1_Curve<T extends Vector> = Curve<T>;
declare const THREE$1_Curve: typeof Curve;
type THREE$1_CurvePath<T extends Vector> = CurvePath<T>;
declare const THREE$1_CurvePath: typeof CurvePath;
type THREE$1_CurveType = CurveType;
declare const THREE$1_CustomBlending: typeof CustomBlending;
declare const THREE$1_CustomToneMapping: typeof CustomToneMapping;
type THREE$1_CylinderGeometry = CylinderGeometry;
declare const THREE$1_CylinderGeometry: typeof CylinderGeometry;
type THREE$1_Cylindrical = Cylindrical;
declare const THREE$1_Cylindrical: typeof Cylindrical;
type THREE$1_Data3DTexture = Data3DTexture;
declare const THREE$1_Data3DTexture: typeof Data3DTexture;
type THREE$1_DataArrayTexture = DataArrayTexture;
declare const THREE$1_DataArrayTexture: typeof DataArrayTexture;
type THREE$1_DataTexture = DataTexture;
declare const THREE$1_DataTexture: typeof DataTexture;
type THREE$1_DataTextureLoader = DataTextureLoader;
declare const THREE$1_DataTextureLoader: typeof DataTextureLoader;
declare const THREE$1_DecrementStencilOp: typeof DecrementStencilOp;
declare const THREE$1_DecrementWrapStencilOp: typeof DecrementWrapStencilOp;
type THREE$1_DeepTexturePixelFormat = DeepTexturePixelFormat;
declare const THREE$1_DefaultLoadingManager: typeof DefaultLoadingManager;
declare const THREE$1_DepthFormat: typeof DepthFormat;
type THREE$1_DepthModes = DepthModes;
type THREE$1_DepthPackingStrategies = DepthPackingStrategies;
declare const THREE$1_DepthStencilFormat: typeof DepthStencilFormat;
type THREE$1_DepthTexture = DepthTexture;
declare const THREE$1_DepthTexture: typeof DepthTexture;
type THREE$1_DirectionalLight = DirectionalLight;
declare const THREE$1_DirectionalLight: typeof DirectionalLight;
type THREE$1_DirectionalLightHelper = DirectionalLightHelper;
declare const THREE$1_DirectionalLightHelper: typeof DirectionalLightHelper;
type THREE$1_DirectionalLightShadow = DirectionalLightShadow;
declare const THREE$1_DirectionalLightShadow: typeof DirectionalLightShadow;
type THREE$1_DiscreteInterpolant = DiscreteInterpolant;
declare const THREE$1_DiscreteInterpolant: typeof DiscreteInterpolant;
declare const THREE$1_DisplayP3ColorSpace: typeof DisplayP3ColorSpace;
type THREE$1_DodecahedronGeometry = DodecahedronGeometry;
declare const THREE$1_DodecahedronGeometry: typeof DodecahedronGeometry;
declare const THREE$1_DoubleSide: typeof DoubleSide;
declare const THREE$1_DstAlphaFactor: typeof DstAlphaFactor;
declare const THREE$1_DstColorFactor: typeof DstColorFactor;
declare const THREE$1_DynamicCopyUsage: typeof DynamicCopyUsage;
declare const THREE$1_DynamicDrawUsage: typeof DynamicDrawUsage;
declare const THREE$1_DynamicReadUsage: typeof DynamicReadUsage;
type THREE$1_EdgesGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> = EdgesGeometry<TBufferGeometry>;
declare const THREE$1_EdgesGeometry: typeof EdgesGeometry;
type THREE$1_EllipseCurve = EllipseCurve;
declare const THREE$1_EllipseCurve: typeof EllipseCurve;
declare const THREE$1_EqualCompare: typeof EqualCompare;
declare const THREE$1_EqualDepth: typeof EqualDepth;
declare const THREE$1_EqualStencilFunc: typeof EqualStencilFunc;
declare const THREE$1_EquirectangularReflectionMapping: typeof EquirectangularReflectionMapping;
declare const THREE$1_EquirectangularRefractionMapping: typeof EquirectangularRefractionMapping;
type THREE$1_Euler = Euler;
declare const THREE$1_Euler: typeof Euler;
type THREE$1_EulerOrder = EulerOrder;
type THREE$1_Event<TEventType extends string = string, TTarget = unknown> = Event<TEventType, TTarget>;
type THREE$1_EventDispatcher<TEventMap extends {} = {}> = EventDispatcher<TEventMap>;
declare const THREE$1_EventDispatcher: typeof EventDispatcher;
type THREE$1_EventListener<TEventData, TEventType extends string, TTarget> = EventListener<TEventData, TEventType, TTarget>;
type THREE$1_ExtrudeGeometry = ExtrudeGeometry;
declare const THREE$1_ExtrudeGeometry: typeof ExtrudeGeometry;
type THREE$1_ExtrudeGeometryOptions = ExtrudeGeometryOptions;
type THREE$1_Face = Face;
type THREE$1_FileLoader = FileLoader;
declare const THREE$1_FileLoader: typeof FileLoader;
type THREE$1_Float16BufferAttribute = Float16BufferAttribute;
declare const THREE$1_Float16BufferAttribute: typeof Float16BufferAttribute;
type THREE$1_Float32BufferAttribute = Float32BufferAttribute;
declare const THREE$1_Float32BufferAttribute: typeof Float32BufferAttribute;
type THREE$1_Float64BufferAttribute = Float64BufferAttribute;
declare const THREE$1_Float64BufferAttribute: typeof Float64BufferAttribute;
declare const THREE$1_FloatType: typeof FloatType;
type THREE$1_Fog = Fog;
declare const THREE$1_Fog: typeof Fog;
type THREE$1_FogBase = FogBase;
type THREE$1_FogExp2 = FogExp2;
declare const THREE$1_FogExp2: typeof FogExp2;
type THREE$1_FramebufferTexture = FramebufferTexture;
declare const THREE$1_FramebufferTexture: typeof FramebufferTexture;
declare const THREE$1_FrontSide: typeof FrontSide;
type THREE$1_Frustum = Frustum;
declare const THREE$1_Frustum: typeof Frustum;
type THREE$1_GLBufferAttribute = GLBufferAttribute;
declare const THREE$1_GLBufferAttribute: typeof GLBufferAttribute;
declare const THREE$1_GLSL1: typeof GLSL1;
declare const THREE$1_GLSL3: typeof GLSL3;
type THREE$1_GLSLVersion = GLSLVersion;
declare const THREE$1_GreaterCompare: typeof GreaterCompare;
declare const THREE$1_GreaterDepth: typeof GreaterDepth;
declare const THREE$1_GreaterEqualCompare: typeof GreaterEqualCompare;
declare const THREE$1_GreaterEqualDepth: typeof GreaterEqualDepth;
declare const THREE$1_GreaterEqualStencilFunc: typeof GreaterEqualStencilFunc;
declare const THREE$1_GreaterStencilFunc: typeof GreaterStencilFunc;
type THREE$1_GridHelper = GridHelper;
declare const THREE$1_GridHelper: typeof GridHelper;
type THREE$1_Group<TEventMap extends Object3DEventMap = Object3DEventMap> = Group<TEventMap>;
declare const THREE$1_Group: typeof Group;
type THREE$1_HSL = HSL;
declare const THREE$1_HalfFloatType: typeof HalfFloatType;
type THREE$1_HemisphereLight = HemisphereLight;
declare const THREE$1_HemisphereLight: typeof HemisphereLight;
type THREE$1_HemisphereLightHelper = HemisphereLightHelper;
declare const THREE$1_HemisphereLightHelper: typeof HemisphereLightHelper;
type THREE$1_HemisphereLightProbe = HemisphereLightProbe;
declare const THREE$1_HemisphereLightProbe: typeof HemisphereLightProbe;
type THREE$1_IUniform<TValue = any> = IUniform<TValue>;
type THREE$1_IcosahedronGeometry = IcosahedronGeometry;
declare const THREE$1_IcosahedronGeometry: typeof IcosahedronGeometry;
type THREE$1_ImageBitmapLoader = ImageBitmapLoader;
declare const THREE$1_ImageBitmapLoader: typeof ImageBitmapLoader;
type THREE$1_ImageLoader = ImageLoader;
declare const THREE$1_ImageLoader: typeof ImageLoader;
declare const THREE$1_ImageUtils: typeof ImageUtils;
declare const THREE$1_IncrementStencilOp: typeof IncrementStencilOp;
declare const THREE$1_IncrementWrapStencilOp: typeof IncrementWrapStencilOp;
type THREE$1_InstancedBufferAttribute = InstancedBufferAttribute;
declare const THREE$1_InstancedBufferAttribute: typeof InstancedBufferAttribute;
type THREE$1_InstancedBufferGeometry = InstancedBufferGeometry;
declare const THREE$1_InstancedBufferGeometry: typeof InstancedBufferGeometry;
type THREE$1_InstancedInterleavedBuffer = InstancedInterleavedBuffer;
declare const THREE$1_InstancedInterleavedBuffer: typeof InstancedInterleavedBuffer;
type THREE$1_InstancedMesh<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = InstancedMesh<TGeometry, TMaterial>;
declare const THREE$1_InstancedMesh: typeof InstancedMesh;
type THREE$1_InstancedMeshEventMap = InstancedMeshEventMap;
type THREE$1_Int16BufferAttribute = Int16BufferAttribute;
declare const THREE$1_Int16BufferAttribute: typeof Int16BufferAttribute;
type THREE$1_Int32BufferAttribute = Int32BufferAttribute;
declare const THREE$1_Int32BufferAttribute: typeof Int32BufferAttribute;
type THREE$1_Int8BufferAttribute = Int8BufferAttribute;
declare const THREE$1_Int8BufferAttribute: typeof Int8BufferAttribute;
declare const THREE$1_IntType: typeof IntType;
type THREE$1_InterleavedBuffer = InterleavedBuffer;
declare const THREE$1_InterleavedBuffer: typeof InterleavedBuffer;
type THREE$1_InterleavedBufferAttribute = InterleavedBufferAttribute;
declare const THREE$1_InterleavedBufferAttribute: typeof InterleavedBufferAttribute;
type THREE$1_Interpolant = Interpolant;
declare const THREE$1_Interpolant: typeof Interpolant;
declare const THREE$1_InterpolateDiscrete: typeof InterpolateDiscrete;
declare const THREE$1_InterpolateLinear: typeof InterpolateLinear;
declare const THREE$1_InterpolateSmooth: typeof InterpolateSmooth;
type THREE$1_InterpolationEndingModes = InterpolationEndingModes;
type THREE$1_InterpolationModes = InterpolationModes;
type THREE$1_Intersection<TIntersected extends Object3D = Object3D> = Intersection<TIntersected>;
declare const THREE$1_InvertStencilOp: typeof InvertStencilOp;
declare const THREE$1_KeepStencilOp: typeof KeepStencilOp;
type THREE$1_KeyframeTrack = KeyframeTrack;
declare const THREE$1_KeyframeTrack: typeof KeyframeTrack;
type THREE$1_LOD = LOD;
declare const THREE$1_LOD: typeof LOD;
type THREE$1_LatheGeometry = LatheGeometry;
declare const THREE$1_LatheGeometry: typeof LatheGeometry;
type THREE$1_Layers = Layers;
declare const THREE$1_Layers: typeof Layers;
declare const THREE$1_LessCompare: typeof LessCompare;
declare const THREE$1_LessDepth: typeof LessDepth;
declare const THREE$1_LessEqualCompare: typeof LessEqualCompare;
declare const THREE$1_LessEqualDepth: typeof LessEqualDepth;
declare const THREE$1_LessEqualStencilFunc: typeof LessEqualStencilFunc;
declare const THREE$1_LessStencilFunc: typeof LessStencilFunc;
type THREE$1_Light<TShadowSupport extends LightShadow | undefined = LightShadow | undefined> = Light<TShadowSupport>;
declare const THREE$1_Light: typeof Light;
type THREE$1_LightProbe = LightProbe;
declare const THREE$1_LightProbe: typeof LightProbe;
type THREE$1_LightShadow<TCamera extends Camera = Camera> = LightShadow<TCamera>;
declare const THREE$1_LightShadow: typeof LightShadow;
type THREE$1_Line<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Line<TGeometry, TMaterial>;
declare const THREE$1_Line: typeof Line;
type THREE$1_Line3 = Line3;
declare const THREE$1_Line3: typeof Line3;
type THREE$1_LineBasicMaterial = LineBasicMaterial;
declare const THREE$1_LineBasicMaterial: typeof LineBasicMaterial;
type THREE$1_LineBasicMaterialParameters = LineBasicMaterialParameters;
type THREE$1_LineCurve = LineCurve;
declare const THREE$1_LineCurve: typeof LineCurve;
type THREE$1_LineCurve3 = LineCurve3;
declare const THREE$1_LineCurve3: typeof LineCurve3;
type THREE$1_LineDashedMaterial = LineDashedMaterial;
declare const THREE$1_LineDashedMaterial: typeof LineDashedMaterial;
type THREE$1_LineDashedMaterialParameters = LineDashedMaterialParameters;
type THREE$1_LineLoop<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = LineLoop<TGeometry, TMaterial>;
declare const THREE$1_LineLoop: typeof LineLoop;
type THREE$1_LineSegments<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = LineSegments<TGeometry, TMaterial>;
declare const THREE$1_LineSegments: typeof LineSegments;
declare const THREE$1_LinearDisplayP3ColorSpace: typeof LinearDisplayP3ColorSpace;
declare const THREE$1_LinearEncoding: typeof LinearEncoding;
declare const THREE$1_LinearFilter: typeof LinearFilter;
type THREE$1_LinearInterpolant = LinearInterpolant;
declare const THREE$1_LinearInterpolant: typeof LinearInterpolant;
declare const THREE$1_LinearMipMapLinearFilter: typeof LinearMipMapLinearFilter;
declare const THREE$1_LinearMipMapNearestFilter: typeof LinearMipMapNearestFilter;
declare const THREE$1_LinearMipmapLinearFilter: typeof LinearMipmapLinearFilter;
declare const THREE$1_LinearMipmapNearestFilter: typeof LinearMipmapNearestFilter;
declare const THREE$1_LinearSRGBColorSpace: typeof LinearSRGBColorSpace;
declare const THREE$1_LinearToneMapping: typeof LinearToneMapping;
type THREE$1_Loader<TData = unknown, TUrl = string> = Loader<TData, TUrl>;
declare const THREE$1_Loader: typeof Loader;
declare const THREE$1_LoaderUtils: typeof LoaderUtils;
type THREE$1_LoadingManager = LoadingManager;
declare const THREE$1_LoadingManager: typeof LoadingManager;
declare const THREE$1_LoopOnce: typeof LoopOnce;
declare const THREE$1_LoopPingPong: typeof LoopPingPong;
declare const THREE$1_LoopRepeat: typeof LoopRepeat;
declare const THREE$1_LuminanceAlphaFormat: typeof LuminanceAlphaFormat;
declare const THREE$1_LuminanceFormat: typeof LuminanceFormat;
type THREE$1_MOUSE = MOUSE;
declare const THREE$1_MOUSE: typeof MOUSE;
type THREE$1_MagnificationTextureFilter = MagnificationTextureFilter;
type THREE$1_Mapping = Mapping;
type THREE$1_Material = Material;
declare const THREE$1_Material: typeof Material;
type THREE$1_MaterialLoader = MaterialLoader;
declare const THREE$1_MaterialLoader: typeof MaterialLoader;
type THREE$1_MaterialParameters = MaterialParameters;
type THREE$1_Matrix = Matrix;
type THREE$1_Matrix3 = Matrix3;
declare const THREE$1_Matrix3: typeof Matrix3;
type THREE$1_Matrix3Tuple = Matrix3Tuple;
type THREE$1_Matrix4 = Matrix4;
declare const THREE$1_Matrix4: typeof Matrix4;
type THREE$1_Matrix4Tuple = Matrix4Tuple;
declare const THREE$1_MaxEquation: typeof MaxEquation;
type THREE$1_Mesh<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[], TEventMap extends Object3DEventMap = Object3DEventMap> = Mesh<TGeometry, TMaterial, TEventMap>;
declare const THREE$1_Mesh: typeof Mesh;
type THREE$1_MeshBasicMaterial = MeshBasicMaterial;
declare const THREE$1_MeshBasicMaterial: typeof MeshBasicMaterial;
type THREE$1_MeshBasicMaterialParameters = MeshBasicMaterialParameters;
type THREE$1_MeshDepthMaterial = MeshDepthMaterial;
declare const THREE$1_MeshDepthMaterial: typeof MeshDepthMaterial;
type THREE$1_MeshDepthMaterialParameters = MeshDepthMaterialParameters;
type THREE$1_MeshDistanceMaterial = MeshDistanceMaterial;
declare const THREE$1_MeshDistanceMaterial: typeof MeshDistanceMaterial;
type THREE$1_MeshDistanceMaterialParameters = MeshDistanceMaterialParameters;
type THREE$1_MeshLambertMaterial = MeshLambertMaterial;
declare const THREE$1_MeshLambertMaterial: typeof MeshLambertMaterial;
type THREE$1_MeshLambertMaterialParameters = MeshLambertMaterialParameters;
type THREE$1_MeshMatcapMaterial = MeshMatcapMaterial;
declare const THREE$1_MeshMatcapMaterial: typeof MeshMatcapMaterial;
type THREE$1_MeshMatcapMaterialParameters = MeshMatcapMaterialParameters;
type THREE$1_MeshNormalMaterial = MeshNormalMaterial;
declare const THREE$1_MeshNormalMaterial: typeof MeshNormalMaterial;
type THREE$1_MeshNormalMaterialParameters = MeshNormalMaterialParameters;
type THREE$1_MeshPhongMaterial = MeshPhongMaterial;
declare const THREE$1_MeshPhongMaterial: typeof MeshPhongMaterial;
type THREE$1_MeshPhongMaterialParameters = MeshPhongMaterialParameters;
type THREE$1_MeshPhysicalMaterial = MeshPhysicalMaterial;
declare const THREE$1_MeshPhysicalMaterial: typeof MeshPhysicalMaterial;
type THREE$1_MeshPhysicalMaterialParameters = MeshPhysicalMaterialParameters;
type THREE$1_MeshStandardMaterial = MeshStandardMaterial;
declare const THREE$1_MeshStandardMaterial: typeof MeshStandardMaterial;
type THREE$1_MeshStandardMaterialParameters = MeshStandardMaterialParameters;
type THREE$1_MeshToonMaterial = MeshToonMaterial;
declare const THREE$1_MeshToonMaterial: typeof MeshToonMaterial;
type THREE$1_MeshToonMaterialParameters = MeshToonMaterialParameters;
declare const THREE$1_MinEquation: typeof MinEquation;
type THREE$1_MinificationTextureFilter = MinificationTextureFilter;
declare const THREE$1_MirroredRepeatWrapping: typeof MirroredRepeatWrapping;
declare const THREE$1_MixOperation: typeof MixOperation;
type THREE$1_MorphTarget = MorphTarget;
declare const THREE$1_MultiplyBlending: typeof MultiplyBlending;
declare const THREE$1_MultiplyOperation: typeof MultiplyOperation;
declare const THREE$1_NearestFilter: typeof NearestFilter;
declare const THREE$1_NearestMipMapLinearFilter: typeof NearestMipMapLinearFilter;
declare const THREE$1_NearestMipMapNearestFilter: typeof NearestMipMapNearestFilter;
declare const THREE$1_NearestMipmapLinearFilter: typeof NearestMipmapLinearFilter;
declare const THREE$1_NearestMipmapNearestFilter: typeof NearestMipmapNearestFilter;
declare const THREE$1_NeverCompare: typeof NeverCompare;
declare const THREE$1_NeverDepth: typeof NeverDepth;
declare const THREE$1_NeverStencilFunc: typeof NeverStencilFunc;
declare const THREE$1_NoBlending: typeof NoBlending;
declare const THREE$1_NoColorSpace: typeof NoColorSpace;
declare const THREE$1_NoToneMapping: typeof NoToneMapping;
declare const THREE$1_NormalAnimationBlendMode: typeof NormalAnimationBlendMode;
declare const THREE$1_NormalBlending: typeof NormalBlending;
type THREE$1_NormalBufferAttributes = NormalBufferAttributes;
type THREE$1_NormalMapTypes = NormalMapTypes;
type THREE$1_NormalOrGLBufferAttributes = NormalOrGLBufferAttributes;
declare const THREE$1_NotEqualCompare: typeof NotEqualCompare;
declare const THREE$1_NotEqualDepth: typeof NotEqualDepth;
declare const THREE$1_NotEqualStencilFunc: typeof NotEqualStencilFunc;
type THREE$1_NumberKeyframeTrack = NumberKeyframeTrack;
declare const THREE$1_NumberKeyframeTrack: typeof NumberKeyframeTrack;
type THREE$1_Object3D<TEventMap extends Object3DEventMap = Object3DEventMap> = Object3D<TEventMap>;
declare const THREE$1_Object3D: typeof Object3D;
type THREE$1_Object3DEventMap = Object3DEventMap;
type THREE$1_ObjectLoader = ObjectLoader;
declare const THREE$1_ObjectLoader: typeof ObjectLoader;
declare const THREE$1_ObjectSpaceNormalMap: typeof ObjectSpaceNormalMap;
type THREE$1_OctahedronGeometry = OctahedronGeometry;
declare const THREE$1_OctahedronGeometry: typeof OctahedronGeometry;
type THREE$1_OffscreenCanvas = OffscreenCanvas;
declare const THREE$1_OneFactor: typeof OneFactor;
declare const THREE$1_OneMinusDstAlphaFactor: typeof OneMinusDstAlphaFactor;
declare const THREE$1_OneMinusDstColorFactor: typeof OneMinusDstColorFactor;
declare const THREE$1_OneMinusSrcAlphaFactor: typeof OneMinusSrcAlphaFactor;
declare const THREE$1_OneMinusSrcColorFactor: typeof OneMinusSrcColorFactor;
type THREE$1_OrthographicCamera = OrthographicCamera;
declare const THREE$1_OrthographicCamera: typeof OrthographicCamera;
declare const THREE$1_PCFShadowMap: typeof PCFShadowMap;
declare const THREE$1_PCFSoftShadowMap: typeof PCFSoftShadowMap;
type THREE$1_PMREMGenerator = PMREMGenerator;
declare const THREE$1_PMREMGenerator: typeof PMREMGenerator;
type THREE$1_ParseTrackNameResults = ParseTrackNameResults;
type THREE$1_Path = Path;
declare const THREE$1_Path: typeof Path;
type THREE$1_PerspectiveCamera = PerspectiveCamera;
declare const THREE$1_PerspectiveCamera: typeof PerspectiveCamera;
type THREE$1_PixelFormat = PixelFormat;
type THREE$1_PixelFormatGPU = PixelFormatGPU;
type THREE$1_Plane = Plane;
declare const THREE$1_Plane: typeof Plane;
type THREE$1_PlaneGeometry = PlaneGeometry;
declare const THREE$1_PlaneGeometry: typeof PlaneGeometry;
type THREE$1_PlaneHelper = PlaneHelper;
declare const THREE$1_PlaneHelper: typeof PlaneHelper;
type THREE$1_PointLight = PointLight;
declare const THREE$1_PointLight: typeof PointLight;
type THREE$1_PointLightHelper = PointLightHelper;
declare const THREE$1_PointLightHelper: typeof PointLightHelper;
type THREE$1_PointLightShadow = PointLightShadow;
declare const THREE$1_PointLightShadow: typeof PointLightShadow;
type THREE$1_Points<TGeometry extends BufferGeometry<NormalOrGLBufferAttributes> = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = Points<TGeometry, TMaterial>;
declare const THREE$1_Points: typeof Points;
type THREE$1_PointsMaterial = PointsMaterial;
declare const THREE$1_PointsMaterial: typeof PointsMaterial;
type THREE$1_PointsMaterialParameters = PointsMaterialParameters;
type THREE$1_PolarGridHelper = PolarGridHelper;
declare const THREE$1_PolarGridHelper: typeof PolarGridHelper;
type THREE$1_PolyhedronGeometry = PolyhedronGeometry;
declare const THREE$1_PolyhedronGeometry: typeof PolyhedronGeometry;
type THREE$1_PositionalAudio = PositionalAudio;
declare const THREE$1_PositionalAudio: typeof PositionalAudio;
declare const THREE$1_PropertyBinding: typeof PropertyBinding;
type THREE$1_PropertyMixer = PropertyMixer;
declare const THREE$1_PropertyMixer: typeof PropertyMixer;
declare const THREE$1_QuadraticBezier: typeof QuadraticBezier;
type THREE$1_QuadraticBezierCurve = QuadraticBezierCurve;
declare const THREE$1_QuadraticBezierCurve: typeof QuadraticBezierCurve;
type THREE$1_QuadraticBezierCurve3 = QuadraticBezierCurve3;
declare const THREE$1_QuadraticBezierCurve3: typeof QuadraticBezierCurve3;
type THREE$1_Quaternion = Quaternion;
declare const THREE$1_Quaternion: typeof Quaternion;
type THREE$1_QuaternionKeyframeTrack = QuaternionKeyframeTrack;
declare const THREE$1_QuaternionKeyframeTrack: typeof QuaternionKeyframeTrack;
type THREE$1_QuaternionLinearInterpolant = QuaternionLinearInterpolant;
declare const THREE$1_QuaternionLinearInterpolant: typeof QuaternionLinearInterpolant;
declare const THREE$1_RED_GREEN_RGTC2_Format: typeof RED_GREEN_RGTC2_Format;
declare const THREE$1_RED_RGTC1_Format: typeof RED_RGTC1_Format;
declare const THREE$1_REVISION: typeof REVISION;
type THREE$1_RGB = RGB;
declare const THREE$1_RGBADepthPacking: typeof RGBADepthPacking;
declare const THREE$1_RGBAFormat: typeof RGBAFormat;
declare const THREE$1_RGBAIntegerFormat: typeof RGBAIntegerFormat;
declare const THREE$1_RGBA_ASTC_10x10_Format: typeof RGBA_ASTC_10x10_Format;
declare const THREE$1_RGBA_ASTC_10x5_Format: typeof RGBA_ASTC_10x5_Format;
declare const THREE$1_RGBA_ASTC_10x6_Format: typeof RGBA_ASTC_10x6_Format;
declare const THREE$1_RGBA_ASTC_10x8_Format: typeof RGBA_ASTC_10x8_Format;
declare const THREE$1_RGBA_ASTC_12x10_Format: typeof RGBA_ASTC_12x10_Format;
declare const THREE$1_RGBA_ASTC_12x12_Format: typeof RGBA_ASTC_12x12_Format;
declare const THREE$1_RGBA_ASTC_4x4_Format: typeof RGBA_ASTC_4x4_Format;
declare const THREE$1_RGBA_ASTC_5x4_Format: typeof RGBA_ASTC_5x4_Format;
declare const THREE$1_RGBA_ASTC_5x5_Format: typeof RGBA_ASTC_5x5_Format;
declare const THREE$1_RGBA_ASTC_6x5_Format: typeof RGBA_ASTC_6x5_Format;
declare const THREE$1_RGBA_ASTC_6x6_Format: typeof RGBA_ASTC_6x6_Format;
declare const THREE$1_RGBA_ASTC_8x5_Format: typeof RGBA_ASTC_8x5_Format;
declare const THREE$1_RGBA_ASTC_8x6_Format: typeof RGBA_ASTC_8x6_Format;
declare const THREE$1_RGBA_ASTC_8x8_Format: typeof RGBA_ASTC_8x8_Format;
declare const THREE$1_RGBA_BPTC_Format: typeof RGBA_BPTC_Format;
declare const THREE$1_RGBA_ETC2_EAC_Format: typeof RGBA_ETC2_EAC_Format;
declare const THREE$1_RGBA_PVRTC_2BPPV1_Format: typeof RGBA_PVRTC_2BPPV1_Format;
declare const THREE$1_RGBA_PVRTC_4BPPV1_Format: typeof RGBA_PVRTC_4BPPV1_Format;
declare const THREE$1_RGBA_S3TC_DXT1_Format: typeof RGBA_S3TC_DXT1_Format;
declare const THREE$1_RGBA_S3TC_DXT3_Format: typeof RGBA_S3TC_DXT3_Format;
declare const THREE$1_RGBA_S3TC_DXT5_Format: typeof RGBA_S3TC_DXT5_Format;
declare const THREE$1_RGB_BPTC_SIGNED_Format: typeof RGB_BPTC_SIGNED_Format;
declare const THREE$1_RGB_BPTC_UNSIGNED_Format: typeof RGB_BPTC_UNSIGNED_Format;
declare const THREE$1_RGB_ETC1_Format: typeof RGB_ETC1_Format;
declare const THREE$1_RGB_ETC2_Format: typeof RGB_ETC2_Format;
declare const THREE$1_RGB_PVRTC_2BPPV1_Format: typeof RGB_PVRTC_2BPPV1_Format;
declare const THREE$1_RGB_PVRTC_4BPPV1_Format: typeof RGB_PVRTC_4BPPV1_Format;
declare const THREE$1_RGB_S3TC_DXT1_Format: typeof RGB_S3TC_DXT1_Format;
declare const THREE$1_RGFormat: typeof RGFormat;
declare const THREE$1_RGIntegerFormat: typeof RGIntegerFormat;
type THREE$1_RawShaderMaterial = RawShaderMaterial;
declare const THREE$1_RawShaderMaterial: typeof RawShaderMaterial;
type THREE$1_Ray = Ray;
declare const THREE$1_Ray: typeof Ray;
type THREE$1_Raycaster = Raycaster;
declare const THREE$1_Raycaster: typeof Raycaster;
type THREE$1_RaycasterParameters = RaycasterParameters;
type THREE$1_RectAreaLight = RectAreaLight;
declare const THREE$1_RectAreaLight: typeof RectAreaLight;
declare const THREE$1_RedFormat: typeof RedFormat;
declare const THREE$1_RedIntegerFormat: typeof RedIntegerFormat;
declare const THREE$1_ReinhardToneMapping: typeof ReinhardToneMapping;
type THREE$1_RenderItem = RenderItem;
type THREE$1_RenderTarget<TTexture extends Texture | Texture[] = Texture> = RenderTarget<TTexture>;
declare const THREE$1_RenderTarget: typeof RenderTarget;
type THREE$1_RenderTargetOptions = RenderTargetOptions;
type THREE$1_Renderer = Renderer;
declare const THREE$1_RepeatWrapping: typeof RepeatWrapping;
declare const THREE$1_ReplaceStencilOp: typeof ReplaceStencilOp;
declare const THREE$1_ReverseSubtractEquation: typeof ReverseSubtractEquation;
type THREE$1_RingGeometry = RingGeometry;
declare const THREE$1_RingGeometry: typeof RingGeometry;
declare const THREE$1_SIGNED_RED_GREEN_RGTC2_Format: typeof SIGNED_RED_GREEN_RGTC2_Format;
declare const THREE$1_SIGNED_RED_RGTC1_Format: typeof SIGNED_RED_RGTC1_Format;
declare const THREE$1_SRGBColorSpace: typeof SRGBColorSpace;
declare const THREE$1_SRGBToLinear: typeof SRGBToLinear;
type THREE$1_Scene = Scene;
declare const THREE$1_Scene: typeof Scene;
type THREE$1_Shader = Shader;
declare const THREE$1_ShaderChunk: typeof ShaderChunk;
declare const THREE$1_ShaderLib: typeof ShaderLib;
type THREE$1_ShaderMaterial = ShaderMaterial;
declare const THREE$1_ShaderMaterial: typeof ShaderMaterial;
type THREE$1_ShaderMaterialParameters = ShaderMaterialParameters;
type THREE$1_ShadowMapType = ShadowMapType;
type THREE$1_ShadowMaterial = ShadowMaterial;
declare const THREE$1_ShadowMaterial: typeof ShadowMaterial;
type THREE$1_ShadowMaterialParameters = ShadowMaterialParameters;
type THREE$1_Shape = Shape;
declare const THREE$1_Shape: typeof Shape;
type THREE$1_ShapeGeometry = ShapeGeometry;
declare const THREE$1_ShapeGeometry: typeof ShapeGeometry;
type THREE$1_ShapePath = ShapePath;
declare const THREE$1_ShapePath: typeof ShapePath;
declare const THREE$1_ShapeUtils: typeof ShapeUtils;
declare const THREE$1_ShortType: typeof ShortType;
type THREE$1_Side = Side;
type THREE$1_Skeleton = Skeleton;
declare const THREE$1_Skeleton: typeof Skeleton;
type THREE$1_SkeletonHelper = SkeletonHelper;
declare const THREE$1_SkeletonHelper: typeof SkeletonHelper;
type THREE$1_SkinnedMesh<TGeometry extends BufferGeometry = BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> = SkinnedMesh<TGeometry, TMaterial>;
declare const THREE$1_SkinnedMesh: typeof SkinnedMesh;
type THREE$1_Source = Source;
declare const THREE$1_Source: typeof Source;
type THREE$1_Sphere = Sphere;
declare const THREE$1_Sphere: typeof Sphere;
type THREE$1_SphereGeometry = SphereGeometry;
declare const THREE$1_SphereGeometry: typeof SphereGeometry;
type THREE$1_Spherical = Spherical;
declare const THREE$1_Spherical: typeof Spherical;
type THREE$1_SphericalHarmonics3 = SphericalHarmonics3;
declare const THREE$1_SphericalHarmonics3: typeof SphericalHarmonics3;
type THREE$1_SplineCurve = SplineCurve;
declare const THREE$1_SplineCurve: typeof SplineCurve;
type THREE$1_SpotLight = SpotLight;
declare const THREE$1_SpotLight: typeof SpotLight;
type THREE$1_SpotLightHelper = SpotLightHelper;
declare const THREE$1_SpotLightHelper: typeof SpotLightHelper;
type THREE$1_SpotLightShadow = SpotLightShadow;
declare const THREE$1_SpotLightShadow: typeof SpotLightShadow;
type THREE$1_Sprite = Sprite;
declare const THREE$1_Sprite: typeof Sprite;
type THREE$1_SpriteMaterial = SpriteMaterial;
declare const THREE$1_SpriteMaterial: typeof SpriteMaterial;
type THREE$1_SpriteMaterialParameters = SpriteMaterialParameters;
declare const THREE$1_SrcAlphaFactor: typeof SrcAlphaFactor;
declare const THREE$1_SrcAlphaSaturateFactor: typeof SrcAlphaSaturateFactor;
declare const THREE$1_SrcColorFactor: typeof SrcColorFactor;
declare const THREE$1_StaticCopyUsage: typeof StaticCopyUsage;
declare const THREE$1_StaticDrawUsage: typeof StaticDrawUsage;
declare const THREE$1_StaticReadUsage: typeof StaticReadUsage;
type THREE$1_StencilFunc = StencilFunc;
type THREE$1_StencilOp = StencilOp;
type THREE$1_StereoCamera = StereoCamera;
declare const THREE$1_StereoCamera: typeof StereoCamera;
declare const THREE$1_StreamCopyUsage: typeof StreamCopyUsage;
declare const THREE$1_StreamDrawUsage: typeof StreamDrawUsage;
declare const THREE$1_StreamReadUsage: typeof StreamReadUsage;
type THREE$1_StringKeyframeTrack = StringKeyframeTrack;
declare const THREE$1_StringKeyframeTrack: typeof StringKeyframeTrack;
declare const THREE$1_SubtractEquation: typeof SubtractEquation;
declare const THREE$1_SubtractiveBlending: typeof SubtractiveBlending;
type THREE$1_TOUCH = TOUCH;
declare const THREE$1_TOUCH: typeof TOUCH;
declare const THREE$1_TangentSpaceNormalMap: typeof TangentSpaceNormalMap;
type THREE$1_TetrahedronGeometry = TetrahedronGeometry;
declare const THREE$1_TetrahedronGeometry: typeof TetrahedronGeometry;
type THREE$1_Texture = Texture;
declare const THREE$1_Texture: typeof Texture;
type THREE$1_TextureComparisonFunction = TextureComparisonFunction;
type THREE$1_TextureDataType = TextureDataType;
type THREE$1_TextureEncoding = TextureEncoding;
type THREE$1_TextureFilter = TextureFilter;
type THREE$1_TextureLoader = TextureLoader;
declare const THREE$1_TextureLoader: typeof TextureLoader;
type THREE$1_ToneMapping = ToneMapping;
type THREE$1_TorusGeometry = TorusGeometry;
declare const THREE$1_TorusGeometry: typeof TorusGeometry;
type THREE$1_TorusKnotGeometry = TorusKnotGeometry;
declare const THREE$1_TorusKnotGeometry: typeof TorusKnotGeometry;
type THREE$1_Triangle = Triangle;
declare const THREE$1_Triangle: typeof Triangle;
declare const THREE$1_TriangleFanDrawMode: typeof TriangleFanDrawMode;
declare const THREE$1_TriangleStripDrawMode: typeof TriangleStripDrawMode;
declare const THREE$1_TrianglesDrawMode: typeof TrianglesDrawMode;
type THREE$1_TrianglesDrawModes = TrianglesDrawModes;
type THREE$1_TubeGeometry = TubeGeometry;
declare const THREE$1_TubeGeometry: typeof TubeGeometry;
declare const THREE$1_TwoPassDoubleSide: typeof TwoPassDoubleSide;
type THREE$1_TypedArray = TypedArray;
type THREE$1_UVGenerator = UVGenerator;
declare const THREE$1_UVMapping: typeof UVMapping;
type THREE$1_Uint16BufferAttribute = Uint16BufferAttribute;
declare const THREE$1_Uint16BufferAttribute: typeof Uint16BufferAttribute;
type THREE$1_Uint32BufferAttribute = Uint32BufferAttribute;
declare const THREE$1_Uint32BufferAttribute: typeof Uint32BufferAttribute;
type THREE$1_Uint8BufferAttribute = Uint8BufferAttribute;
declare const THREE$1_Uint8BufferAttribute: typeof Uint8BufferAttribute;
type THREE$1_Uint8ClampedBufferAttribute = Uint8ClampedBufferAttribute;
declare const THREE$1_Uint8ClampedBufferAttribute: typeof Uint8ClampedBufferAttribute;
type THREE$1_Uniform<T = any> = Uniform<T>;
declare const THREE$1_Uniform: typeof Uniform;
type THREE$1_UniformsGroup = UniformsGroup;
declare const THREE$1_UniformsGroup: typeof UniformsGroup;
declare const THREE$1_UniformsLib: typeof UniformsLib;
declare const THREE$1_UniformsUtils: typeof UniformsUtils;
declare const THREE$1_UnsignedByteType: typeof UnsignedByteType;
declare const THREE$1_UnsignedInt248Type: typeof UnsignedInt248Type;
declare const THREE$1_UnsignedIntType: typeof UnsignedIntType;
declare const THREE$1_UnsignedShort4444Type: typeof UnsignedShort4444Type;
declare const THREE$1_UnsignedShort5551Type: typeof UnsignedShort5551Type;
declare const THREE$1_UnsignedShortType: typeof UnsignedShortType;
type THREE$1_Usage = Usage;
declare const THREE$1_VSMShadowMap: typeof VSMShadowMap;
type THREE$1_Vec2 = Vec2;
type THREE$1_Vector = Vector;
type THREE$1_Vector2 = Vector2;
declare const THREE$1_Vector2: typeof Vector2;
type THREE$1_Vector2Tuple = Vector2Tuple;
type THREE$1_Vector3 = Vector3;
declare const THREE$1_Vector3: typeof Vector3;
type THREE$1_Vector3Tuple = Vector3Tuple;
type THREE$1_Vector4 = Vector4;
declare const THREE$1_Vector4: typeof Vector4;
type THREE$1_Vector4Tuple = Vector4Tuple;
type THREE$1_VectorKeyframeTrack = VectorKeyframeTrack;
declare const THREE$1_VectorKeyframeTrack: typeof VectorKeyframeTrack;
type THREE$1_VideoTexture = VideoTexture;
declare const THREE$1_VideoTexture: typeof VideoTexture;
type THREE$1_WebGL1PixelFormat = WebGL1PixelFormat;
type THREE$1_WebGL1Renderer = WebGL1Renderer;
declare const THREE$1_WebGL1Renderer: typeof WebGL1Renderer;
type THREE$1_WebGL2PixelFormat = WebGL2PixelFormat;
type THREE$1_WebGL3DRenderTarget = WebGL3DRenderTarget;
declare const THREE$1_WebGL3DRenderTarget: typeof WebGL3DRenderTarget;
type THREE$1_WebGLArrayRenderTarget = WebGLArrayRenderTarget;
declare const THREE$1_WebGLArrayRenderTarget: typeof WebGLArrayRenderTarget;
type THREE$1_WebGLBufferRenderer = WebGLBufferRenderer;
declare const THREE$1_WebGLBufferRenderer: typeof WebGLBufferRenderer;
type THREE$1_WebGLCapabilities = WebGLCapabilities;
declare const THREE$1_WebGLCapabilities: typeof WebGLCapabilities;
type THREE$1_WebGLCapabilitiesParameters = WebGLCapabilitiesParameters;
type THREE$1_WebGLClipping = WebGLClipping;
declare const THREE$1_WebGLClipping: typeof WebGLClipping;
type THREE$1_WebGLColorBuffer = WebGLColorBuffer;
declare const THREE$1_WebGLColorBuffer: typeof WebGLColorBuffer;
declare const THREE$1_WebGLCoordinateSystem: typeof WebGLCoordinateSystem;
type THREE$1_WebGLCubeRenderTarget = WebGLCubeRenderTarget;
declare const THREE$1_WebGLCubeRenderTarget: typeof WebGLCubeRenderTarget;
type THREE$1_WebGLCubeUVMaps = WebGLCubeUVMaps;
declare const THREE$1_WebGLCubeUVMaps: typeof WebGLCubeUVMaps;
type THREE$1_WebGLDebug = WebGLDebug;
type THREE$1_WebGLDepthBuffer = WebGLDepthBuffer;
declare const THREE$1_WebGLDepthBuffer: typeof WebGLDepthBuffer;
type THREE$1_WebGLExtensions = WebGLExtensions;
declare const THREE$1_WebGLExtensions: typeof WebGLExtensions;
type THREE$1_WebGLGeometries = WebGLGeometries;
declare const THREE$1_WebGLGeometries: typeof WebGLGeometries;
type THREE$1_WebGLIndexedBufferRenderer = WebGLIndexedBufferRenderer;
declare const THREE$1_WebGLIndexedBufferRenderer: typeof WebGLIndexedBufferRenderer;
type THREE$1_WebGLInfo = WebGLInfo;
declare const THREE$1_WebGLInfo: typeof WebGLInfo;
type THREE$1_WebGLLights = WebGLLights;
declare const THREE$1_WebGLLights: typeof WebGLLights;
type THREE$1_WebGLMultipleRenderTargets = WebGLMultipleRenderTargets;
declare const THREE$1_WebGLMultipleRenderTargets: typeof WebGLMultipleRenderTargets;
type THREE$1_WebGLObjects = WebGLObjects;
declare const THREE$1_WebGLObjects: typeof WebGLObjects;
type THREE$1_WebGLProgram = WebGLProgram;
declare const THREE$1_WebGLProgram: typeof WebGLProgram;
type THREE$1_WebGLPrograms = WebGLPrograms;
declare const THREE$1_WebGLPrograms: typeof WebGLPrograms;
type THREE$1_WebGLProperties = WebGLProperties;
declare const THREE$1_WebGLProperties: typeof WebGLProperties;
type THREE$1_WebGLRenderList = WebGLRenderList;
declare const THREE$1_WebGLRenderList: typeof WebGLRenderList;
type THREE$1_WebGLRenderLists = WebGLRenderLists;
declare const THREE$1_WebGLRenderLists: typeof WebGLRenderLists;
type THREE$1_WebGLRenderTarget<TTexture extends Texture | Texture[] = Texture> = WebGLRenderTarget<TTexture>;
declare const THREE$1_WebGLRenderTarget: typeof WebGLRenderTarget;
type THREE$1_WebGLRenderTargetOptions = WebGLRenderTargetOptions;
type THREE$1_WebGLRenderer = WebGLRenderer;
declare const THREE$1_WebGLRenderer: typeof WebGLRenderer;
type THREE$1_WebGLRendererParameters = WebGLRendererParameters;
type THREE$1_WebGLShadowMap = WebGLShadowMap;
declare const THREE$1_WebGLShadowMap: typeof WebGLShadowMap;
type THREE$1_WebGLState = WebGLState;
declare const THREE$1_WebGLState: typeof WebGLState;
type THREE$1_WebGLStencilBuffer = WebGLStencilBuffer;
declare const THREE$1_WebGLStencilBuffer: typeof WebGLStencilBuffer;
type THREE$1_WebGLTextures = WebGLTextures;
declare const THREE$1_WebGLTextures: typeof WebGLTextures;
type THREE$1_WebGLUniforms = WebGLUniforms;
declare const THREE$1_WebGLUniforms: typeof WebGLUniforms;
declare const THREE$1_WebGLUniformsGroups: typeof WebGLUniformsGroups;
type THREE$1_WebGLUtils = WebGLUtils;
declare const THREE$1_WebGLUtils: typeof WebGLUtils;
declare const THREE$1_WebGPUCoordinateSystem: typeof WebGPUCoordinateSystem;
type THREE$1_WebXRArrayCamera = WebXRArrayCamera;
type THREE$1_WebXRCamera = WebXRCamera;
type THREE$1_WebXRController = WebXRController;
declare const THREE$1_WebXRController: typeof WebXRController;
type THREE$1_WebXRManager = WebXRManager;
declare const THREE$1_WebXRManager: typeof WebXRManager;
type THREE$1_WebXRManagerEventMap = WebXRManagerEventMap;
type THREE$1_WebXRSpaceEventMap = WebXRSpaceEventMap;
type THREE$1_WireframeGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> = WireframeGeometry<TBufferGeometry>;
declare const THREE$1_WireframeGeometry: typeof WireframeGeometry;
declare const THREE$1_WrapAroundEnding: typeof WrapAroundEnding;
type THREE$1_Wrapping = Wrapping;
type THREE$1_XRControllerEventType = XRControllerEventType;
type THREE$1_XRGripSpace = XRGripSpace;
declare const THREE$1_XRGripSpace: typeof XRGripSpace;
type THREE$1_XRHandInputState = XRHandInputState;
type THREE$1_XRHandJoints = XRHandJoints;
type THREE$1_XRHandSpace = XRHandSpace;
declare const THREE$1_XRHandSpace: typeof XRHandSpace;
type THREE$1_XRJointSpace = XRJointSpace;
declare const THREE$1_XRJointSpace: typeof XRJointSpace;
type THREE$1_XRTargetRaySpace = XRTargetRaySpace;
declare const THREE$1_XRTargetRaySpace: typeof XRTargetRaySpace;
declare const THREE$1_ZeroCurvatureEnding: typeof ZeroCurvatureEnding;
declare const THREE$1_ZeroFactor: typeof ZeroFactor;
declare const THREE$1_ZeroSlopeEnding: typeof ZeroSlopeEnding;
declare const THREE$1_ZeroStencilOp: typeof ZeroStencilOp;
declare const THREE$1__SRGBAFormat: typeof _SRGBAFormat;
declare const THREE$1_cloneUniforms: typeof cloneUniforms;
declare const THREE$1_cloneUniformsGroups: typeof cloneUniformsGroups;
declare const THREE$1_createCanvasElement: typeof createCanvasElement;
declare const THREE$1_mergeUniforms: typeof mergeUniforms;
declare const THREE$1_sRGBEncoding: typeof sRGBEncoding;
declare namespace THREE$1 {
  export { THREE$1_ACESFilmicToneMapping as ACESFilmicToneMapping, THREE$1_AddEquation as AddEquation, THREE$1_AddOperation as AddOperation, THREE$1_AdditiveAnimationBlendMode as AdditiveAnimationBlendMode, THREE$1_AdditiveBlending as AdditiveBlending, THREE$1_AlphaFormat as AlphaFormat, THREE$1_AlwaysCompare as AlwaysCompare, THREE$1_AlwaysDepth as AlwaysDepth, THREE$1_AlwaysStencilFunc as AlwaysStencilFunc, THREE$1_AmbientLight as AmbientLight, THREE$1_AmbientLightProbe as AmbientLightProbe, THREE$1_AnimationAction as AnimationAction, type THREE$1_AnimationActionLoopStyles as AnimationActionLoopStyles, type THREE$1_AnimationBlendMode as AnimationBlendMode, THREE$1_AnimationClip as AnimationClip, THREE$1_AnimationLoader as AnimationLoader, THREE$1_AnimationMixer as AnimationMixer, type THREE$1_AnimationMixerEventMap as AnimationMixerEventMap, THREE$1_AnimationObjectGroup as AnimationObjectGroup, AnimationUtils_d as AnimationUtils, type THREE$1_AnyMapping as AnyMapping, type THREE$1_AnyPixelFormat as AnyPixelFormat, THREE$1_ArcCurve as ArcCurve, THREE$1_ArrayCamera as ArrayCamera, THREE$1_ArrowHelper as ArrowHelper, type THREE$1_AttributeGPUType as AttributeGPUType, THREE$1_Audio as Audio, THREE$1_AudioAnalyser as AudioAnalyser, THREE$1_AudioContext as AudioContext, THREE$1_AudioListener as AudioListener, THREE$1_AudioLoader as AudioLoader, THREE$1_AxesHelper as AxesHelper, THREE$1_BackSide as BackSide, type THREE$1_BaseEvent as BaseEvent, THREE$1_BasicDepthPacking as BasicDepthPacking, THREE$1_BasicShadowMap as BasicShadowMap, type THREE$1_Blending as Blending, type THREE$1_BlendingDstFactor as BlendingDstFactor, type THREE$1_BlendingEquation as BlendingEquation, type THREE$1_BlendingSrcFactor as BlendingSrcFactor, THREE$1_Bone as Bone, THREE$1_BooleanKeyframeTrack as BooleanKeyframeTrack, THREE$1_Box2 as Box2, THREE$1_Box3 as Box3, THREE$1_Box3Helper as Box3Helper, THREE$1_BoxGeometry as BoxGeometry, THREE$1_BoxHelper as BoxHelper, THREE$1_BufferAttribute as BufferAttribute, THREE$1_BufferGeometry as BufferGeometry, THREE$1_BufferGeometryLoader as BufferGeometryLoader, THREE$1_ByteType as ByteType, THREE$1_Cache as Cache, THREE$1_Camera as Camera, THREE$1_CameraHelper as CameraHelper, THREE$1_CanvasTexture as CanvasTexture, THREE$1_CapsuleGeometry as CapsuleGeometry, THREE$1_CatmullRom as CatmullRom, THREE$1_CatmullRomCurve3 as CatmullRomCurve3, THREE$1_CineonToneMapping as CineonToneMapping, THREE$1_CircleGeometry as CircleGeometry, THREE$1_ClampToEdgeWrapping as ClampToEdgeWrapping, THREE$1_Clock as Clock, THREE$1_Color as Color, THREE$1_ColorKeyframeTrack as ColorKeyframeTrack, THREE$1_ColorManagement as ColorManagement, type THREE$1_ColorRepresentation as ColorRepresentation, type THREE$1_ColorSpace as ColorSpace, type THREE$1_Combine as Combine, THREE$1_CompressedArrayTexture as CompressedArrayTexture, type THREE$1_CompressedPixelFormat as CompressedPixelFormat, THREE$1_CompressedTexture as CompressedTexture, THREE$1_CompressedTextureLoader as CompressedTextureLoader, THREE$1_ConeGeometry as ConeGeometry, type THREE$1_CoordinateSystem as CoordinateSystem, THREE$1_CubeCamera as CubeCamera, THREE$1_CubeReflectionMapping as CubeReflectionMapping, THREE$1_CubeRefractionMapping as CubeRefractionMapping, THREE$1_CubeTexture as CubeTexture, THREE$1_CubeTextureLoader as CubeTextureLoader, type THREE$1_CubeTextureMapping as CubeTextureMapping, THREE$1_CubeUVReflectionMapping as CubeUVReflectionMapping, THREE$1_CubicBezier as CubicBezier, THREE$1_CubicBezierCurve as CubicBezierCurve, THREE$1_CubicBezierCurve3 as CubicBezierCurve3, THREE$1_CubicInterpolant as CubicInterpolant, type THREE$1_CullFace as CullFace, THREE$1_CullFaceBack as CullFaceBack, THREE$1_CullFaceFront as CullFaceFront, THREE$1_CullFaceFrontBack as CullFaceFrontBack, THREE$1_CullFaceNone as CullFaceNone, THREE$1_Curve as Curve, THREE$1_CurvePath as CurvePath, type THREE$1_CurveType as CurveType, THREE$1_CustomBlending as CustomBlending, THREE$1_CustomToneMapping as CustomToneMapping, THREE$1_CylinderGeometry as CylinderGeometry, THREE$1_Cylindrical as Cylindrical, THREE$1_Data3DTexture as Data3DTexture, THREE$1_DataArrayTexture as DataArrayTexture, THREE$1_DataTexture as DataTexture, THREE$1_DataTextureLoader as DataTextureLoader, DataUtils_d as DataUtils, THREE$1_DecrementStencilOp as DecrementStencilOp, THREE$1_DecrementWrapStencilOp as DecrementWrapStencilOp, type THREE$1_DeepTexturePixelFormat as DeepTexturePixelFormat, THREE$1_DefaultLoadingManager as DefaultLoadingManager, THREE$1_DepthFormat as DepthFormat, type THREE$1_DepthModes as DepthModes, type THREE$1_DepthPackingStrategies as DepthPackingStrategies, THREE$1_DepthStencilFormat as DepthStencilFormat, THREE$1_DepthTexture as DepthTexture, THREE$1_DirectionalLight as DirectionalLight, THREE$1_DirectionalLightHelper as DirectionalLightHelper, THREE$1_DirectionalLightShadow as DirectionalLightShadow, THREE$1_DiscreteInterpolant as DiscreteInterpolant, THREE$1_DisplayP3ColorSpace as DisplayP3ColorSpace, THREE$1_DodecahedronGeometry as DodecahedronGeometry, THREE$1_DoubleSide as DoubleSide, THREE$1_DstAlphaFactor as DstAlphaFactor, THREE$1_DstColorFactor as DstColorFactor, THREE$1_DynamicCopyUsage as DynamicCopyUsage, THREE$1_DynamicDrawUsage as DynamicDrawUsage, THREE$1_DynamicReadUsage as DynamicReadUsage, THREE$1_EdgesGeometry as EdgesGeometry, THREE$1_EllipseCurve as EllipseCurve, THREE$1_EqualCompare as EqualCompare, THREE$1_EqualDepth as EqualDepth, THREE$1_EqualStencilFunc as EqualStencilFunc, THREE$1_EquirectangularReflectionMapping as EquirectangularReflectionMapping, THREE$1_EquirectangularRefractionMapping as EquirectangularRefractionMapping, THREE$1_Euler as Euler, type THREE$1_EulerOrder as EulerOrder, type THREE$1_Event as Event, THREE$1_EventDispatcher as EventDispatcher, type THREE$1_EventListener as EventListener, THREE$1_ExtrudeGeometry as ExtrudeGeometry, type THREE$1_ExtrudeGeometryOptions as ExtrudeGeometryOptions, type THREE$1_Face as Face, THREE$1_FileLoader as FileLoader, THREE$1_Float16BufferAttribute as Float16BufferAttribute, THREE$1_Float32BufferAttribute as Float32BufferAttribute, THREE$1_Float64BufferAttribute as Float64BufferAttribute, THREE$1_FloatType as FloatType, THREE$1_Fog as Fog, type THREE$1_FogBase as FogBase, THREE$1_FogExp2 as FogExp2, THREE$1_FramebufferTexture as FramebufferTexture, THREE$1_FrontSide as FrontSide, THREE$1_Frustum as Frustum, THREE$1_GLBufferAttribute as GLBufferAttribute, THREE$1_GLSL1 as GLSL1, THREE$1_GLSL3 as GLSL3, type THREE$1_GLSLVersion as GLSLVersion, THREE$1_GreaterCompare as GreaterCompare, THREE$1_GreaterDepth as GreaterDepth, THREE$1_GreaterEqualCompare as GreaterEqualCompare, THREE$1_GreaterEqualDepth as GreaterEqualDepth, THREE$1_GreaterEqualStencilFunc as GreaterEqualStencilFunc, THREE$1_GreaterStencilFunc as GreaterStencilFunc, THREE$1_GridHelper as GridHelper, THREE$1_Group as Group, type THREE$1_HSL as HSL, THREE$1_HalfFloatType as HalfFloatType, THREE$1_HemisphereLight as HemisphereLight, THREE$1_HemisphereLightHelper as HemisphereLightHelper, THREE$1_HemisphereLightProbe as HemisphereLightProbe, type THREE$1_IUniform as IUniform, THREE$1_IcosahedronGeometry as IcosahedronGeometry, THREE$1_ImageBitmapLoader as ImageBitmapLoader, THREE$1_ImageLoader as ImageLoader, THREE$1_ImageUtils as ImageUtils, THREE$1_IncrementStencilOp as IncrementStencilOp, THREE$1_IncrementWrapStencilOp as IncrementWrapStencilOp, THREE$1_InstancedBufferAttribute as InstancedBufferAttribute, THREE$1_InstancedBufferGeometry as InstancedBufferGeometry, THREE$1_InstancedInterleavedBuffer as InstancedInterleavedBuffer, THREE$1_InstancedMesh as InstancedMesh, type THREE$1_InstancedMeshEventMap as InstancedMeshEventMap, THREE$1_Int16BufferAttribute as Int16BufferAttribute, THREE$1_Int32BufferAttribute as Int32BufferAttribute, THREE$1_Int8BufferAttribute as Int8BufferAttribute, THREE$1_IntType as IntType, THREE$1_InterleavedBuffer as InterleavedBuffer, THREE$1_InterleavedBufferAttribute as InterleavedBufferAttribute, THREE$1_Interpolant as Interpolant, THREE$1_InterpolateDiscrete as InterpolateDiscrete, THREE$1_InterpolateLinear as InterpolateLinear, THREE$1_InterpolateSmooth as InterpolateSmooth, type THREE$1_InterpolationEndingModes as InterpolationEndingModes, type THREE$1_InterpolationModes as InterpolationModes, type THREE$1_Intersection as Intersection, THREE$1_InvertStencilOp as InvertStencilOp, THREE$1_KeepStencilOp as KeepStencilOp, THREE$1_KeyframeTrack as KeyframeTrack, THREE$1_LOD as LOD, THREE$1_LatheGeometry as LatheGeometry, THREE$1_Layers as Layers, THREE$1_LessCompare as LessCompare, THREE$1_LessDepth as LessDepth, THREE$1_LessEqualCompare as LessEqualCompare, THREE$1_LessEqualDepth as LessEqualDepth, THREE$1_LessEqualStencilFunc as LessEqualStencilFunc, THREE$1_LessStencilFunc as LessStencilFunc, THREE$1_Light as Light, THREE$1_LightProbe as LightProbe, THREE$1_LightShadow as LightShadow, THREE$1_Line as Line, THREE$1_Line3 as Line3, THREE$1_LineBasicMaterial as LineBasicMaterial, type THREE$1_LineBasicMaterialParameters as LineBasicMaterialParameters, THREE$1_LineCurve as LineCurve, THREE$1_LineCurve3 as LineCurve3, THREE$1_LineDashedMaterial as LineDashedMaterial, type THREE$1_LineDashedMaterialParameters as LineDashedMaterialParameters, THREE$1_LineLoop as LineLoop, THREE$1_LineSegments as LineSegments, THREE$1_LinearDisplayP3ColorSpace as LinearDisplayP3ColorSpace, THREE$1_LinearEncoding as LinearEncoding, THREE$1_LinearFilter as LinearFilter, THREE$1_LinearInterpolant as LinearInterpolant, THREE$1_LinearMipMapLinearFilter as LinearMipMapLinearFilter, THREE$1_LinearMipMapNearestFilter as LinearMipMapNearestFilter, THREE$1_LinearMipmapLinearFilter as LinearMipmapLinearFilter, THREE$1_LinearMipmapNearestFilter as LinearMipmapNearestFilter, THREE$1_LinearSRGBColorSpace as LinearSRGBColorSpace, THREE$1_LinearToneMapping as LinearToneMapping, THREE$1_Loader as Loader, THREE$1_LoaderUtils as LoaderUtils, THREE$1_LoadingManager as LoadingManager, THREE$1_LoopOnce as LoopOnce, THREE$1_LoopPingPong as LoopPingPong, THREE$1_LoopRepeat as LoopRepeat, THREE$1_LuminanceAlphaFormat as LuminanceAlphaFormat, THREE$1_LuminanceFormat as LuminanceFormat, THREE$1_MOUSE as MOUSE, type THREE$1_MagnificationTextureFilter as MagnificationTextureFilter, type THREE$1_Mapping as Mapping, THREE$1_Material as Material, THREE$1_MaterialLoader as MaterialLoader, type THREE$1_MaterialParameters as MaterialParameters, MathUtils_d as MathUtils, type THREE$1_Matrix as Matrix, THREE$1_Matrix3 as Matrix3, type THREE$1_Matrix3Tuple as Matrix3Tuple, THREE$1_Matrix4 as Matrix4, type THREE$1_Matrix4Tuple as Matrix4Tuple, THREE$1_MaxEquation as MaxEquation, THREE$1_Mesh as Mesh, THREE$1_MeshBasicMaterial as MeshBasicMaterial, type THREE$1_MeshBasicMaterialParameters as MeshBasicMaterialParameters, THREE$1_MeshDepthMaterial as MeshDepthMaterial, type THREE$1_MeshDepthMaterialParameters as MeshDepthMaterialParameters, THREE$1_MeshDistanceMaterial as MeshDistanceMaterial, type THREE$1_MeshDistanceMaterialParameters as MeshDistanceMaterialParameters, THREE$1_MeshLambertMaterial as MeshLambertMaterial, type THREE$1_MeshLambertMaterialParameters as MeshLambertMaterialParameters, THREE$1_MeshMatcapMaterial as MeshMatcapMaterial, type THREE$1_MeshMatcapMaterialParameters as MeshMatcapMaterialParameters, THREE$1_MeshNormalMaterial as MeshNormalMaterial, type THREE$1_MeshNormalMaterialParameters as MeshNormalMaterialParameters, THREE$1_MeshPhongMaterial as MeshPhongMaterial, type THREE$1_MeshPhongMaterialParameters as MeshPhongMaterialParameters, THREE$1_MeshPhysicalMaterial as MeshPhysicalMaterial, type THREE$1_MeshPhysicalMaterialParameters as MeshPhysicalMaterialParameters, THREE$1_MeshStandardMaterial as MeshStandardMaterial, type THREE$1_MeshStandardMaterialParameters as MeshStandardMaterialParameters, THREE$1_MeshToonMaterial as MeshToonMaterial, type THREE$1_MeshToonMaterialParameters as MeshToonMaterialParameters, THREE$1_MinEquation as MinEquation, type THREE$1_MinificationTextureFilter as MinificationTextureFilter, THREE$1_MirroredRepeatWrapping as MirroredRepeatWrapping, THREE$1_MixOperation as MixOperation, type THREE$1_MorphTarget as MorphTarget, THREE$1_MultiplyBlending as MultiplyBlending, THREE$1_MultiplyOperation as MultiplyOperation, THREE$1_NearestFilter as NearestFilter, THREE$1_NearestMipMapLinearFilter as NearestMipMapLinearFilter, THREE$1_NearestMipMapNearestFilter as NearestMipMapNearestFilter, THREE$1_NearestMipmapLinearFilter as NearestMipmapLinearFilter, THREE$1_NearestMipmapNearestFilter as NearestMipmapNearestFilter, THREE$1_NeverCompare as NeverCompare, THREE$1_NeverDepth as NeverDepth, THREE$1_NeverStencilFunc as NeverStencilFunc, THREE$1_NoBlending as NoBlending, THREE$1_NoColorSpace as NoColorSpace, THREE$1_NoToneMapping as NoToneMapping, THREE$1_NormalAnimationBlendMode as NormalAnimationBlendMode, THREE$1_NormalBlending as NormalBlending, type THREE$1_NormalBufferAttributes as NormalBufferAttributes, type THREE$1_NormalMapTypes as NormalMapTypes, type THREE$1_NormalOrGLBufferAttributes as NormalOrGLBufferAttributes, THREE$1_NotEqualCompare as NotEqualCompare, THREE$1_NotEqualDepth as NotEqualDepth, THREE$1_NotEqualStencilFunc as NotEqualStencilFunc, THREE$1_NumberKeyframeTrack as NumberKeyframeTrack, THREE$1_Object3D as Object3D, type THREE$1_Object3DEventMap as Object3DEventMap, THREE$1_ObjectLoader as ObjectLoader, THREE$1_ObjectSpaceNormalMap as ObjectSpaceNormalMap, THREE$1_OctahedronGeometry as OctahedronGeometry, type THREE$1_OffscreenCanvas as OffscreenCanvas, THREE$1_OneFactor as OneFactor, THREE$1_OneMinusDstAlphaFactor as OneMinusDstAlphaFactor, THREE$1_OneMinusDstColorFactor as OneMinusDstColorFactor, THREE$1_OneMinusSrcAlphaFactor as OneMinusSrcAlphaFactor, THREE$1_OneMinusSrcColorFactor as OneMinusSrcColorFactor, THREE$1_OrthographicCamera as OrthographicCamera, THREE$1_PCFShadowMap as PCFShadowMap, THREE$1_PCFSoftShadowMap as PCFSoftShadowMap, THREE$1_PMREMGenerator as PMREMGenerator, type THREE$1_ParseTrackNameResults as ParseTrackNameResults, THREE$1_Path as Path, THREE$1_PerspectiveCamera as PerspectiveCamera, type THREE$1_PixelFormat as PixelFormat, type THREE$1_PixelFormatGPU as PixelFormatGPU, THREE$1_Plane as Plane, THREE$1_PlaneGeometry as PlaneGeometry, THREE$1_PlaneHelper as PlaneHelper, THREE$1_PointLight as PointLight, THREE$1_PointLightHelper as PointLightHelper, THREE$1_PointLightShadow as PointLightShadow, THREE$1_Points as Points, THREE$1_PointsMaterial as PointsMaterial, type THREE$1_PointsMaterialParameters as PointsMaterialParameters, THREE$1_PolarGridHelper as PolarGridHelper, THREE$1_PolyhedronGeometry as PolyhedronGeometry, THREE$1_PositionalAudio as PositionalAudio, THREE$1_PropertyBinding as PropertyBinding, THREE$1_PropertyMixer as PropertyMixer, THREE$1_QuadraticBezier as QuadraticBezier, THREE$1_QuadraticBezierCurve as QuadraticBezierCurve, THREE$1_QuadraticBezierCurve3 as QuadraticBezierCurve3, THREE$1_Quaternion as Quaternion, THREE$1_QuaternionKeyframeTrack as QuaternionKeyframeTrack, THREE$1_QuaternionLinearInterpolant as QuaternionLinearInterpolant, THREE$1_RED_GREEN_RGTC2_Format as RED_GREEN_RGTC2_Format, THREE$1_RED_RGTC1_Format as RED_RGTC1_Format, THREE$1_REVISION as REVISION, type THREE$1_RGB as RGB, THREE$1_RGBADepthPacking as RGBADepthPacking, THREE$1_RGBAFormat as RGBAFormat, THREE$1_RGBAIntegerFormat as RGBAIntegerFormat, THREE$1_RGBA_ASTC_10x10_Format as RGBA_ASTC_10x10_Format, THREE$1_RGBA_ASTC_10x5_Format as RGBA_ASTC_10x5_Format, THREE$1_RGBA_ASTC_10x6_Format as RGBA_ASTC_10x6_Format, THREE$1_RGBA_ASTC_10x8_Format as RGBA_ASTC_10x8_Format, THREE$1_RGBA_ASTC_12x10_Format as RGBA_ASTC_12x10_Format, THREE$1_RGBA_ASTC_12x12_Format as RGBA_ASTC_12x12_Format, THREE$1_RGBA_ASTC_4x4_Format as RGBA_ASTC_4x4_Format, THREE$1_RGBA_ASTC_5x4_Format as RGBA_ASTC_5x4_Format, THREE$1_RGBA_ASTC_5x5_Format as RGBA_ASTC_5x5_Format, THREE$1_RGBA_ASTC_6x5_Format as RGBA_ASTC_6x5_Format, THREE$1_RGBA_ASTC_6x6_Format as RGBA_ASTC_6x6_Format, THREE$1_RGBA_ASTC_8x5_Format as RGBA_ASTC_8x5_Format, THREE$1_RGBA_ASTC_8x6_Format as RGBA_ASTC_8x6_Format, THREE$1_RGBA_ASTC_8x8_Format as RGBA_ASTC_8x8_Format, THREE$1_RGBA_BPTC_Format as RGBA_BPTC_Format, THREE$1_RGBA_ETC2_EAC_Format as RGBA_ETC2_EAC_Format, THREE$1_RGBA_PVRTC_2BPPV1_Format as RGBA_PVRTC_2BPPV1_Format, THREE$1_RGBA_PVRTC_4BPPV1_Format as RGBA_PVRTC_4BPPV1_Format, THREE$1_RGBA_S3TC_DXT1_Format as RGBA_S3TC_DXT1_Format, THREE$1_RGBA_S3TC_DXT3_Format as RGBA_S3TC_DXT3_Format, THREE$1_RGBA_S3TC_DXT5_Format as RGBA_S3TC_DXT5_Format, THREE$1_RGB_BPTC_SIGNED_Format as RGB_BPTC_SIGNED_Format, THREE$1_RGB_BPTC_UNSIGNED_Format as RGB_BPTC_UNSIGNED_Format, THREE$1_RGB_ETC1_Format as RGB_ETC1_Format, THREE$1_RGB_ETC2_Format as RGB_ETC2_Format, THREE$1_RGB_PVRTC_2BPPV1_Format as RGB_PVRTC_2BPPV1_Format, THREE$1_RGB_PVRTC_4BPPV1_Format as RGB_PVRTC_4BPPV1_Format, THREE$1_RGB_S3TC_DXT1_Format as RGB_S3TC_DXT1_Format, THREE$1_RGFormat as RGFormat, THREE$1_RGIntegerFormat as RGIntegerFormat, THREE$1_RawShaderMaterial as RawShaderMaterial, THREE$1_Ray as Ray, THREE$1_Raycaster as Raycaster, type THREE$1_RaycasterParameters as RaycasterParameters, THREE$1_RectAreaLight as RectAreaLight, THREE$1_RedFormat as RedFormat, THREE$1_RedIntegerFormat as RedIntegerFormat, THREE$1_ReinhardToneMapping as ReinhardToneMapping, type THREE$1_RenderItem as RenderItem, THREE$1_RenderTarget as RenderTarget, type THREE$1_RenderTargetOptions as RenderTargetOptions, type THREE$1_Renderer as Renderer, THREE$1_RepeatWrapping as RepeatWrapping, THREE$1_ReplaceStencilOp as ReplaceStencilOp, THREE$1_ReverseSubtractEquation as ReverseSubtractEquation, THREE$1_RingGeometry as RingGeometry, THREE$1_SIGNED_RED_GREEN_RGTC2_Format as SIGNED_RED_GREEN_RGTC2_Format, THREE$1_SIGNED_RED_RGTC1_Format as SIGNED_RED_RGTC1_Format, THREE$1_SRGBColorSpace as SRGBColorSpace, THREE$1_SRGBToLinear as SRGBToLinear, THREE$1_Scene as Scene, type THREE$1_Shader as Shader, THREE$1_ShaderChunk as ShaderChunk, THREE$1_ShaderLib as ShaderLib, THREE$1_ShaderMaterial as ShaderMaterial, type THREE$1_ShaderMaterialParameters as ShaderMaterialParameters, type THREE$1_ShadowMapType as ShadowMapType, THREE$1_ShadowMaterial as ShadowMaterial, type THREE$1_ShadowMaterialParameters as ShadowMaterialParameters, THREE$1_Shape as Shape, THREE$1_ShapeGeometry as ShapeGeometry, THREE$1_ShapePath as ShapePath, THREE$1_ShapeUtils as ShapeUtils, THREE$1_ShortType as ShortType, type THREE$1_Side as Side, THREE$1_Skeleton as Skeleton, THREE$1_SkeletonHelper as SkeletonHelper, THREE$1_SkinnedMesh as SkinnedMesh, THREE$1_Source as Source, THREE$1_Sphere as Sphere, THREE$1_SphereGeometry as SphereGeometry, THREE$1_Spherical as Spherical, THREE$1_SphericalHarmonics3 as SphericalHarmonics3, THREE$1_SplineCurve as SplineCurve, THREE$1_SpotLight as SpotLight, THREE$1_SpotLightHelper as SpotLightHelper, THREE$1_SpotLightShadow as SpotLightShadow, THREE$1_Sprite as Sprite, THREE$1_SpriteMaterial as SpriteMaterial, type THREE$1_SpriteMaterialParameters as SpriteMaterialParameters, THREE$1_SrcAlphaFactor as SrcAlphaFactor, THREE$1_SrcAlphaSaturateFactor as SrcAlphaSaturateFactor, THREE$1_SrcColorFactor as SrcColorFactor, THREE$1_StaticCopyUsage as StaticCopyUsage, THREE$1_StaticDrawUsage as StaticDrawUsage, THREE$1_StaticReadUsage as StaticReadUsage, type THREE$1_StencilFunc as StencilFunc, type THREE$1_StencilOp as StencilOp, THREE$1_StereoCamera as StereoCamera, THREE$1_StreamCopyUsage as StreamCopyUsage, THREE$1_StreamDrawUsage as StreamDrawUsage, THREE$1_StreamReadUsage as StreamReadUsage, THREE$1_StringKeyframeTrack as StringKeyframeTrack, THREE$1_SubtractEquation as SubtractEquation, THREE$1_SubtractiveBlending as SubtractiveBlending, THREE$1_TOUCH as TOUCH, THREE$1_TangentSpaceNormalMap as TangentSpaceNormalMap, THREE$1_TetrahedronGeometry as TetrahedronGeometry, THREE$1_Texture as Texture, type THREE$1_TextureComparisonFunction as TextureComparisonFunction, type THREE$1_TextureDataType as TextureDataType, type THREE$1_TextureEncoding as TextureEncoding, type THREE$1_TextureFilter as TextureFilter, THREE$1_TextureLoader as TextureLoader, type THREE$1_ToneMapping as ToneMapping, THREE$1_TorusGeometry as TorusGeometry, THREE$1_TorusKnotGeometry as TorusKnotGeometry, THREE$1_Triangle as Triangle, THREE$1_TriangleFanDrawMode as TriangleFanDrawMode, THREE$1_TriangleStripDrawMode as TriangleStripDrawMode, THREE$1_TrianglesDrawMode as TrianglesDrawMode, type THREE$1_TrianglesDrawModes as TrianglesDrawModes, THREE$1_TubeGeometry as TubeGeometry, THREE$1_TwoPassDoubleSide as TwoPassDoubleSide, type THREE$1_TypedArray as TypedArray, type THREE$1_UVGenerator as UVGenerator, THREE$1_UVMapping as UVMapping, THREE$1_Uint16BufferAttribute as Uint16BufferAttribute, THREE$1_Uint32BufferAttribute as Uint32BufferAttribute, THREE$1_Uint8BufferAttribute as Uint8BufferAttribute, THREE$1_Uint8ClampedBufferAttribute as Uint8ClampedBufferAttribute, THREE$1_Uniform as Uniform, THREE$1_UniformsGroup as UniformsGroup, THREE$1_UniformsLib as UniformsLib, THREE$1_UniformsUtils as UniformsUtils, THREE$1_UnsignedByteType as UnsignedByteType, THREE$1_UnsignedInt248Type as UnsignedInt248Type, THREE$1_UnsignedIntType as UnsignedIntType, THREE$1_UnsignedShort4444Type as UnsignedShort4444Type, THREE$1_UnsignedShort5551Type as UnsignedShort5551Type, THREE$1_UnsignedShortType as UnsignedShortType, type THREE$1_Usage as Usage, THREE$1_VSMShadowMap as VSMShadowMap, type THREE$1_Vec2 as Vec2, type THREE$1_Vector as Vector, THREE$1_Vector2 as Vector2, type THREE$1_Vector2Tuple as Vector2Tuple, THREE$1_Vector3 as Vector3, type THREE$1_Vector3Tuple as Vector3Tuple, THREE$1_Vector4 as Vector4, type THREE$1_Vector4Tuple as Vector4Tuple, THREE$1_VectorKeyframeTrack as VectorKeyframeTrack, THREE$1_VideoTexture as VideoTexture, type THREE$1_WebGL1PixelFormat as WebGL1PixelFormat, THREE$1_WebGL1Renderer as WebGL1Renderer, type THREE$1_WebGL2PixelFormat as WebGL2PixelFormat, THREE$1_WebGL3DRenderTarget as WebGL3DRenderTarget, THREE$1_WebGLArrayRenderTarget as WebGLArrayRenderTarget, THREE$1_WebGLBufferRenderer as WebGLBufferRenderer, THREE$1_WebGLCapabilities as WebGLCapabilities, type THREE$1_WebGLCapabilitiesParameters as WebGLCapabilitiesParameters, THREE$1_WebGLClipping as WebGLClipping, THREE$1_WebGLColorBuffer as WebGLColorBuffer, THREE$1_WebGLCoordinateSystem as WebGLCoordinateSystem, THREE$1_WebGLCubeRenderTarget as WebGLCubeRenderTarget, THREE$1_WebGLCubeUVMaps as WebGLCubeUVMaps, type THREE$1_WebGLDebug as WebGLDebug, THREE$1_WebGLDepthBuffer as WebGLDepthBuffer, THREE$1_WebGLExtensions as WebGLExtensions, THREE$1_WebGLGeometries as WebGLGeometries, THREE$1_WebGLIndexedBufferRenderer as WebGLIndexedBufferRenderer, THREE$1_WebGLInfo as WebGLInfo, THREE$1_WebGLLights as WebGLLights, THREE$1_WebGLMultipleRenderTargets as WebGLMultipleRenderTargets, THREE$1_WebGLObjects as WebGLObjects, THREE$1_WebGLProgram as WebGLProgram, THREE$1_WebGLPrograms as WebGLPrograms, THREE$1_WebGLProperties as WebGLProperties, THREE$1_WebGLRenderList as WebGLRenderList, THREE$1_WebGLRenderLists as WebGLRenderLists, THREE$1_WebGLRenderTarget as WebGLRenderTarget, type THREE$1_WebGLRenderTargetOptions as WebGLRenderTargetOptions, THREE$1_WebGLRenderer as WebGLRenderer, type THREE$1_WebGLRendererParameters as WebGLRendererParameters, WebGLShader$1 as WebGLShader, THREE$1_WebGLShadowMap as WebGLShadowMap, THREE$1_WebGLState as WebGLState, THREE$1_WebGLStencilBuffer as WebGLStencilBuffer, THREE$1_WebGLTextures as WebGLTextures, THREE$1_WebGLUniforms as WebGLUniforms, THREE$1_WebGLUniformsGroups as WebGLUniformsGroups, THREE$1_WebGLUtils as WebGLUtils, THREE$1_WebGPUCoordinateSystem as WebGPUCoordinateSystem, type THREE$1_WebXRArrayCamera as WebXRArrayCamera, type THREE$1_WebXRCamera as WebXRCamera, THREE$1_WebXRController as WebXRController, THREE$1_WebXRManager as WebXRManager, type THREE$1_WebXRManagerEventMap as WebXRManagerEventMap, type THREE$1_WebXRSpaceEventMap as WebXRSpaceEventMap, THREE$1_WireframeGeometry as WireframeGeometry, THREE$1_WrapAroundEnding as WrapAroundEnding, type THREE$1_Wrapping as Wrapping, type THREE$1_XRControllerEventType as XRControllerEventType, THREE$1_XRGripSpace as XRGripSpace, type THREE$1_XRHandInputState as XRHandInputState, type THREE$1_XRHandJoints as XRHandJoints, THREE$1_XRHandSpace as XRHandSpace, THREE$1_XRJointSpace as XRJointSpace, THREE$1_XRTargetRaySpace as XRTargetRaySpace, THREE$1_ZeroCurvatureEnding as ZeroCurvatureEnding, THREE$1_ZeroFactor as ZeroFactor, THREE$1_ZeroSlopeEnding as ZeroSlopeEnding, THREE$1_ZeroStencilOp as ZeroStencilOp, THREE$1__SRGBAFormat as _SRGBAFormat, THREE$1_cloneUniforms as cloneUniforms, THREE$1_cloneUniformsGroups as cloneUniformsGroups, THREE$1_createCanvasElement as createCanvasElement, THREE$1_mergeUniforms as mergeUniforms, THREE$1_sRGBEncoding as sRGBEncoding };
}

interface Get3dClickEventTargetsParams {
    scene: Scene;
    camera: Camera;
    event: MouseEvent;
}
interface AddControlsParams {
    callback?: (scene: Scene, camera: Camera) => void;
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
    cameras: Camera[];
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
    loadCamera: (cameraIndex: number) => Promise<Camera>;
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
    THREE: typeof THREE$1;
    loadGLTF: ({ modelPath, options, callback }: LoadGLTFParams) => void;
    get3dClickEventTargets: ({ scene, camera, event, }: Get3dClickEventTargetsParams) => Intersection<Object3D<Object3DEventMap>>[];
    init: (params: InitParams) => {
        renderer: WebGLRenderer;
        camera: PerspectiveCamera;
        scene: Scene;
        mountTo: (element: HTMLElement) => void;
        refresh: () => void;
        addControls: ({ callback }: AddControlsParams) => void;
    };
};

export { lec3d as default };
