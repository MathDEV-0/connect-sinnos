
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Inscricao
 * 
 */
export type Inscricao = $Result.DefaultSelection<Prisma.$InscricaoPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Midia
 * 
 */
export type Midia = $Result.DefaultSelection<Prisma.$MidiaPayload>
/**
 * Model Comunidade
 * 
 */
export type Comunidade = $Result.DefaultSelection<Prisma.$ComunidadePayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscricao`: Exposes CRUD operations for the **Inscricao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscricaos
    * const inscricaos = await prisma.inscricao.findMany()
    * ```
    */
  get inscricao(): Prisma.InscricaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.midia`: Exposes CRUD operations for the **Midia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Midias
    * const midias = await prisma.midia.findMany()
    * ```
    */
  get midia(): Prisma.MidiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comunidade`: Exposes CRUD operations for the **Comunidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comunidades
    * const comunidades = await prisma.comunidade.findMany()
    * ```
    */
  get comunidade(): Prisma.ComunidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Inscricao: 'Inscricao',
    Post: 'Post',
    Midia: 'Midia',
    Comunidade: 'Comunidade',
    Categoria: 'Categoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "inscricao" | "post" | "midia" | "comunidade" | "categoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Inscricao: {
        payload: Prisma.$InscricaoPayload<ExtArgs>
        fields: Prisma.InscricaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscricaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscricaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findFirst: {
            args: Prisma.InscricaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscricaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findMany: {
            args: Prisma.InscricaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          create: {
            args: Prisma.InscricaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          createMany: {
            args: Prisma.InscricaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscricaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          delete: {
            args: Prisma.InscricaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          update: {
            args: Prisma.InscricaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          deleteMany: {
            args: Prisma.InscricaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscricaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InscricaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          upsert: {
            args: Prisma.InscricaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          aggregate: {
            args: Prisma.InscricaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscricao>
          }
          groupBy: {
            args: Prisma.InscricaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscricaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscricaoCountArgs<ExtArgs>
            result: $Utils.Optional<InscricaoCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Midia: {
        payload: Prisma.$MidiaPayload<ExtArgs>
        fields: Prisma.MidiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MidiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MidiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          findFirst: {
            args: Prisma.MidiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MidiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          findMany: {
            args: Prisma.MidiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>[]
          }
          create: {
            args: Prisma.MidiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          createMany: {
            args: Prisma.MidiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MidiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>[]
          }
          delete: {
            args: Prisma.MidiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          update: {
            args: Prisma.MidiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          deleteMany: {
            args: Prisma.MidiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MidiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MidiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>[]
          }
          upsert: {
            args: Prisma.MidiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MidiaPayload>
          }
          aggregate: {
            args: Prisma.MidiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMidia>
          }
          groupBy: {
            args: Prisma.MidiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MidiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MidiaCountArgs<ExtArgs>
            result: $Utils.Optional<MidiaCountAggregateOutputType> | number
          }
        }
      }
      Comunidade: {
        payload: Prisma.$ComunidadePayload<ExtArgs>
        fields: Prisma.ComunidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComunidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComunidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          findFirst: {
            args: Prisma.ComunidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComunidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          findMany: {
            args: Prisma.ComunidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          create: {
            args: Prisma.ComunidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          createMany: {
            args: Prisma.ComunidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComunidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          delete: {
            args: Prisma.ComunidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          update: {
            args: Prisma.ComunidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          deleteMany: {
            args: Prisma.ComunidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComunidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComunidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>[]
          }
          upsert: {
            args: Prisma.ComunidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComunidadePayload>
          }
          aggregate: {
            args: Prisma.ComunidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComunidade>
          }
          groupBy: {
            args: Prisma.ComunidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComunidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComunidadeCountArgs<ExtArgs>
            result: $Utils.Optional<ComunidadeCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    inscricao?: InscricaoOmit
    post?: PostOmit
    midia?: MidiaOmit
    comunidade?: ComunidadeOmit
    categoria?: CategoriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    inscricoes: number
    posts: number
    midias: number
    comunidades: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricoes?: boolean | UsuarioCountOutputTypeCountInscricoesArgs
    posts?: boolean | UsuarioCountOutputTypeCountPostsArgs
    midias?: boolean | UsuarioCountOutputTypeCountMidiasArgs
    comunidades?: boolean | UsuarioCountOutputTypeCountComunidadesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountInscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMidiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MidiaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComunidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComunidadeWhereInput
  }


  /**
   * Count Type ComunidadeCountOutputType
   */

  export type ComunidadeCountOutputType = {
    posts: number
    usuarios: number
  }

  export type ComunidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ComunidadeCountOutputTypeCountPostsArgs
    usuarios?: boolean | ComunidadeCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * ComunidadeCountOutputType without action
   */
  export type ComunidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComunidadeCountOutputType
     */
    select?: ComunidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComunidadeCountOutputType without action
   */
  export type ComunidadeCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * ComunidadeCountOutputType without action
   */
  export type ComunidadeCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    senha: string | null
    tipodeConta: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    sobrenome: string | null
    email: string | null
    senha: string | null
    tipodeConta: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    email: number
    senha: number
    tipodeConta: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    tipodeConta?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    tipodeConta?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    email?: true
    senha?: true
    tipodeConta?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    tipodeConta?: boolean
    inscricoes?: boolean | Usuario$inscricoesArgs<ExtArgs>
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    midias?: boolean | Usuario$midiasArgs<ExtArgs>
    comunidades?: boolean | Usuario$comunidadesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    tipodeConta?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    tipodeConta?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    email?: boolean
    senha?: boolean
    tipodeConta?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "email" | "senha" | "tipodeConta", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricoes?: boolean | Usuario$inscricoesArgs<ExtArgs>
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    midias?: boolean | Usuario$midiasArgs<ExtArgs>
    comunidades?: boolean | Usuario$comunidadesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      inscricoes: Prisma.$InscricaoPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      midias: Prisma.$MidiaPayload<ExtArgs>[]
      comunidades: Prisma.$ComunidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      sobrenome: string
      email: string
      senha: string
      tipodeConta: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscricoes<T extends Usuario$inscricoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$inscricoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Usuario$postsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    midias<T extends Usuario$midiasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$midiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comunidades<T extends Usuario$comunidadesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comunidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly sobrenome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipodeConta: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.inscricoes
   */
  export type Usuario$inscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    cursor?: InscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Usuario.posts
   */
  export type Usuario$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Usuario.midias
   */
  export type Usuario$midiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    where?: MidiaWhereInput
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    cursor?: MidiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Usuario.comunidades
   */
  export type Usuario$comunidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    where?: ComunidadeWhereInput
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    cursor?: ComunidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Inscricao
   */

  export type AggregateInscricao = {
    _count: InscricaoCountAggregateOutputType | null
    _avg: InscricaoAvgAggregateOutputType | null
    _sum: InscricaoSumAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  export type InscricaoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type InscricaoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type InscricaoMinAggregateOutputType = {
    id: number | null
    dataInscricao: string | null
    usuarioId: number | null
  }

  export type InscricaoMaxAggregateOutputType = {
    id: number | null
    dataInscricao: string | null
    usuarioId: number | null
  }

  export type InscricaoCountAggregateOutputType = {
    id: number
    dataInscricao: number
    usuarioId: number
    _all: number
  }


  export type InscricaoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type InscricaoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type InscricaoMinAggregateInputType = {
    id?: true
    dataInscricao?: true
    usuarioId?: true
  }

  export type InscricaoMaxAggregateInputType = {
    id?: true
    dataInscricao?: true
    usuarioId?: true
  }

  export type InscricaoCountAggregateInputType = {
    id?: true
    dataInscricao?: true
    usuarioId?: true
    _all?: true
  }

  export type InscricaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricao to aggregate.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscricaos
    **/
    _count?: true | InscricaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscricaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscricaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscricaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscricaoMaxAggregateInputType
  }

  export type GetInscricaoAggregateType<T extends InscricaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInscricao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscricao[P]>
      : GetScalarType<T[P], AggregateInscricao[P]>
  }




  export type InscricaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithAggregationInput | InscricaoOrderByWithAggregationInput[]
    by: InscricaoScalarFieldEnum[] | InscricaoScalarFieldEnum
    having?: InscricaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscricaoCountAggregateInputType | true
    _avg?: InscricaoAvgAggregateInputType
    _sum?: InscricaoSumAggregateInputType
    _min?: InscricaoMinAggregateInputType
    _max?: InscricaoMaxAggregateInputType
  }

  export type InscricaoGroupByOutputType = {
    id: number
    dataInscricao: string
    usuarioId: number
    _count: InscricaoCountAggregateOutputType | null
    _avg: InscricaoAvgAggregateOutputType | null
    _sum: InscricaoSumAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  type GetInscricaoGroupByPayload<T extends InscricaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscricaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscricaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
            : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
        }
      >
    >


  export type InscricaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataInscricao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataInscricao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataInscricao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectScalar = {
    id?: boolean
    dataInscricao?: boolean
    usuarioId?: boolean
  }

  export type InscricaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataInscricao" | "usuarioId", ExtArgs["result"]["inscricao"]>
  export type InscricaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type InscricaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type InscricaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $InscricaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscricao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataInscricao: string
      usuarioId: number
    }, ExtArgs["result"]["inscricao"]>
    composites: {}
  }

  type InscricaoGetPayload<S extends boolean | null | undefined | InscricaoDefaultArgs> = $Result.GetResult<Prisma.$InscricaoPayload, S>

  type InscricaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscricaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscricaoCountAggregateInputType | true
    }

  export interface InscricaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscricao'], meta: { name: 'Inscricao' } }
    /**
     * Find zero or one Inscricao that matches the filter.
     * @param {InscricaoFindUniqueArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscricaoFindUniqueArgs>(args: SelectSubset<T, InscricaoFindUniqueArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscricao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscricaoFindUniqueOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscricaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InscricaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscricaoFindFirstArgs>(args?: SelectSubset<T, InscricaoFindFirstArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscricao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscricaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InscricaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscricaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscricaos
     * const inscricaos = await prisma.inscricao.findMany()
     * 
     * // Get first 10 Inscricaos
     * const inscricaos = await prisma.inscricao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscricaoFindManyArgs>(args?: SelectSubset<T, InscricaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscricao.
     * @param {InscricaoCreateArgs} args - Arguments to create a Inscricao.
     * @example
     * // Create one Inscricao
     * const Inscricao = await prisma.inscricao.create({
     *   data: {
     *     // ... data to create a Inscricao
     *   }
     * })
     * 
     */
    create<T extends InscricaoCreateArgs>(args: SelectSubset<T, InscricaoCreateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscricaos.
     * @param {InscricaoCreateManyArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscricaoCreateManyArgs>(args?: SelectSubset<T, InscricaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscricaos and returns the data saved in the database.
     * @param {InscricaoCreateManyAndReturnArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscricaos and only return the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscricaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InscricaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscricao.
     * @param {InscricaoDeleteArgs} args - Arguments to delete one Inscricao.
     * @example
     * // Delete one Inscricao
     * const Inscricao = await prisma.inscricao.delete({
     *   where: {
     *     // ... filter to delete one Inscricao
     *   }
     * })
     * 
     */
    delete<T extends InscricaoDeleteArgs>(args: SelectSubset<T, InscricaoDeleteArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscricao.
     * @param {InscricaoUpdateArgs} args - Arguments to update one Inscricao.
     * @example
     * // Update one Inscricao
     * const inscricao = await prisma.inscricao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscricaoUpdateArgs>(args: SelectSubset<T, InscricaoUpdateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscricaos.
     * @param {InscricaoDeleteManyArgs} args - Arguments to filter Inscricaos to delete.
     * @example
     * // Delete a few Inscricaos
     * const { count } = await prisma.inscricao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscricaoDeleteManyArgs>(args?: SelectSubset<T, InscricaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscricaoUpdateManyArgs>(args: SelectSubset<T, InscricaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos and returns the data updated in the database.
     * @param {InscricaoUpdateManyAndReturnArgs} args - Arguments to update many Inscricaos.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscricaos and only return the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InscricaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InscricaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscricao.
     * @param {InscricaoUpsertArgs} args - Arguments to update or create a Inscricao.
     * @example
     * // Update or create a Inscricao
     * const inscricao = await prisma.inscricao.upsert({
     *   create: {
     *     // ... data to create a Inscricao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscricao we want to update
     *   }
     * })
     */
    upsert<T extends InscricaoUpsertArgs>(args: SelectSubset<T, InscricaoUpsertArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoCountArgs} args - Arguments to filter Inscricaos to count.
     * @example
     * // Count the number of Inscricaos
     * const count = await prisma.inscricao.count({
     *   where: {
     *     // ... the filter for the Inscricaos we want to count
     *   }
     * })
    **/
    count<T extends InscricaoCountArgs>(
      args?: Subset<T, InscricaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscricaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InscricaoAggregateArgs>(args: Subset<T, InscricaoAggregateArgs>): Prisma.PrismaPromise<GetInscricaoAggregateType<T>>

    /**
     * Group by Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InscricaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscricaoGroupByArgs['orderBy'] }
        : { orderBy?: InscricaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InscricaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscricaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscricao model
   */
  readonly fields: InscricaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscricao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscricaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inscricao model
   */
  interface InscricaoFieldRefs {
    readonly id: FieldRef<"Inscricao", 'Int'>
    readonly dataInscricao: FieldRef<"Inscricao", 'String'>
    readonly usuarioId: FieldRef<"Inscricao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inscricao findUnique
   */
  export type InscricaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findUniqueOrThrow
   */
  export type InscricaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findFirst
   */
  export type InscricaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findFirstOrThrow
   */
  export type InscricaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findMany
   */
  export type InscricaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricaos to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao create
   */
  export type InscricaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscricao.
     */
    data: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
  }

  /**
   * Inscricao createMany
   */
  export type InscricaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
  }

  /**
   * Inscricao createManyAndReturn
   */
  export type InscricaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscricao update
   */
  export type InscricaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscricao.
     */
    data: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
    /**
     * Choose, which Inscricao to update.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao updateMany
   */
  export type InscricaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscricaos.
     */
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Inscricaos to update
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to update.
     */
    limit?: number
  }

  /**
   * Inscricao updateManyAndReturn
   */
  export type InscricaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * The data used to update Inscricaos.
     */
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Inscricaos to update
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscricao upsert
   */
  export type InscricaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscricao to update in case it exists.
     */
    where: InscricaoWhereUniqueInput
    /**
     * In case the Inscricao found by the `where` argument doesn't exist, create a new Inscricao with this data.
     */
    create: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
    /**
     * In case the Inscricao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
  }

  /**
   * Inscricao delete
   */
  export type InscricaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter which Inscricao to delete.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao deleteMany
   */
  export type InscricaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricaos to delete
     */
    where?: InscricaoWhereInput
    /**
     * Limit how many Inscricaos to delete.
     */
    limit?: number
  }

  /**
   * Inscricao without action
   */
  export type InscricaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inscricao
     */
    omit?: InscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
    comunidadeId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    comunidadeId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    conteudo: string | null
    dataPublicacao: string | null
    autorId: number | null
    comunidadeId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    conteudo: string | null
    dataPublicacao: string | null
    autorId: number | null
    comunidadeId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    tipo: number
    conteudo: number
    dataPublicacao: number
    autorId: number
    comunidadeId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    autorId?: true
    comunidadeId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    autorId?: true
    comunidadeId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    tipo?: true
    conteudo?: true
    dataPublicacao?: true
    autorId?: true
    comunidadeId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    tipo?: true
    conteudo?: true
    dataPublicacao?: true
    autorId?: true
    comunidadeId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    tipo?: true
    conteudo?: true
    dataPublicacao?: true
    autorId?: true
    comunidadeId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    tipo: string
    conteudo: string
    dataPublicacao: string
    autorId: number
    comunidadeId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    conteudo?: boolean
    dataPublicacao?: boolean
    autorId?: boolean
    comunidadeId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comunidade?: boolean | Post$comunidadeArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    conteudo?: boolean
    dataPublicacao?: boolean
    autorId?: boolean
    comunidadeId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comunidade?: boolean | Post$comunidadeArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    conteudo?: boolean
    dataPublicacao?: boolean
    autorId?: boolean
    comunidadeId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comunidade?: boolean | Post$comunidadeArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    tipo?: boolean
    conteudo?: boolean
    dataPublicacao?: boolean
    autorId?: boolean
    comunidadeId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "conteudo" | "dataPublicacao" | "autorId" | "comunidadeId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comunidade?: boolean | Post$comunidadeArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comunidade?: boolean | Post$comunidadeArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comunidade?: boolean | Post$comunidadeArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      comunidade: Prisma.$ComunidadePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      conteudo: string
      dataPublicacao: string
      autorId: number
      comunidadeId: number | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comunidade<T extends Post$comunidadeArgs<ExtArgs> = {}>(args?: Subset<T, Post$comunidadeArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly tipo: FieldRef<"Post", 'String'>
    readonly conteudo: FieldRef<"Post", 'String'>
    readonly dataPublicacao: FieldRef<"Post", 'String'>
    readonly autorId: FieldRef<"Post", 'Int'>
    readonly comunidadeId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comunidade
   */
  export type Post$comunidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    where?: ComunidadeWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Midia
   */

  export type AggregateMidia = {
    _count: MidiaCountAggregateOutputType | null
    _avg: MidiaAvgAggregateOutputType | null
    _sum: MidiaSumAggregateOutputType | null
    _min: MidiaMinAggregateOutputType | null
    _max: MidiaMaxAggregateOutputType | null
  }

  export type MidiaAvgAggregateOutputType = {
    id: number | null
    qualidade: number | null
    usuarioId: number | null
  }

  export type MidiaSumAggregateOutputType = {
    id: number | null
    qualidade: number | null
    usuarioId: number | null
  }

  export type MidiaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    criador: string | null
    dataCriacao: string | null
    tipo: string | null
    duracao: string | null
    qualidade: number | null
    apresentador: string | null
    usuarioId: number | null
  }

  export type MidiaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    criador: string | null
    dataCriacao: string | null
    tipo: string | null
    duracao: string | null
    qualidade: number | null
    apresentador: string | null
    usuarioId: number | null
  }

  export type MidiaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    criador: number
    dataCriacao: number
    tipo: number
    duracao: number
    qualidade: number
    apresentador: number
    usuarioId: number
    _all: number
  }


  export type MidiaAvgAggregateInputType = {
    id?: true
    qualidade?: true
    usuarioId?: true
  }

  export type MidiaSumAggregateInputType = {
    id?: true
    qualidade?: true
    usuarioId?: true
  }

  export type MidiaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    criador?: true
    dataCriacao?: true
    tipo?: true
    duracao?: true
    qualidade?: true
    apresentador?: true
    usuarioId?: true
  }

  export type MidiaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    criador?: true
    dataCriacao?: true
    tipo?: true
    duracao?: true
    qualidade?: true
    apresentador?: true
    usuarioId?: true
  }

  export type MidiaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    criador?: true
    dataCriacao?: true
    tipo?: true
    duracao?: true
    qualidade?: true
    apresentador?: true
    usuarioId?: true
    _all?: true
  }

  export type MidiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Midia to aggregate.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Midias
    **/
    _count?: true | MidiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MidiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MidiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MidiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MidiaMaxAggregateInputType
  }

  export type GetMidiaAggregateType<T extends MidiaAggregateArgs> = {
        [P in keyof T & keyof AggregateMidia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMidia[P]>
      : GetScalarType<T[P], AggregateMidia[P]>
  }




  export type MidiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MidiaWhereInput
    orderBy?: MidiaOrderByWithAggregationInput | MidiaOrderByWithAggregationInput[]
    by: MidiaScalarFieldEnum[] | MidiaScalarFieldEnum
    having?: MidiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MidiaCountAggregateInputType | true
    _avg?: MidiaAvgAggregateInputType
    _sum?: MidiaSumAggregateInputType
    _min?: MidiaMinAggregateInputType
    _max?: MidiaMaxAggregateInputType
  }

  export type MidiaGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    criador: string
    dataCriacao: string
    tipo: string
    duracao: string | null
    qualidade: number | null
    apresentador: string | null
    usuarioId: number
    _count: MidiaCountAggregateOutputType | null
    _avg: MidiaAvgAggregateOutputType | null
    _sum: MidiaSumAggregateOutputType | null
    _min: MidiaMinAggregateOutputType | null
    _max: MidiaMaxAggregateOutputType | null
  }

  type GetMidiaGroupByPayload<T extends MidiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MidiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MidiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MidiaGroupByOutputType[P]>
            : GetScalarType<T[P], MidiaGroupByOutputType[P]>
        }
      >
    >


  export type MidiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    criador?: boolean
    dataCriacao?: boolean
    tipo?: boolean
    duracao?: boolean
    qualidade?: boolean
    apresentador?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["midia"]>

  export type MidiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    criador?: boolean
    dataCriacao?: boolean
    tipo?: boolean
    duracao?: boolean
    qualidade?: boolean
    apresentador?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["midia"]>

  export type MidiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    criador?: boolean
    dataCriacao?: boolean
    tipo?: boolean
    duracao?: boolean
    qualidade?: boolean
    apresentador?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["midia"]>

  export type MidiaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    criador?: boolean
    dataCriacao?: boolean
    tipo?: boolean
    duracao?: boolean
    qualidade?: boolean
    apresentador?: boolean
    usuarioId?: boolean
  }

  export type MidiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "criador" | "dataCriacao" | "tipo" | "duracao" | "qualidade" | "apresentador" | "usuarioId", ExtArgs["result"]["midia"]>
  export type MidiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MidiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MidiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MidiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Midia"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      criador: string
      dataCriacao: string
      tipo: string
      duracao: string | null
      qualidade: number | null
      apresentador: string | null
      usuarioId: number
    }, ExtArgs["result"]["midia"]>
    composites: {}
  }

  type MidiaGetPayload<S extends boolean | null | undefined | MidiaDefaultArgs> = $Result.GetResult<Prisma.$MidiaPayload, S>

  type MidiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MidiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MidiaCountAggregateInputType | true
    }

  export interface MidiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Midia'], meta: { name: 'Midia' } }
    /**
     * Find zero or one Midia that matches the filter.
     * @param {MidiaFindUniqueArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MidiaFindUniqueArgs>(args: SelectSubset<T, MidiaFindUniqueArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Midia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MidiaFindUniqueOrThrowArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MidiaFindUniqueOrThrowArgs>(args: SelectSubset<T, MidiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Midia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaFindFirstArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MidiaFindFirstArgs>(args?: SelectSubset<T, MidiaFindFirstArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Midia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaFindFirstOrThrowArgs} args - Arguments to find a Midia
     * @example
     * // Get one Midia
     * const midia = await prisma.midia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MidiaFindFirstOrThrowArgs>(args?: SelectSubset<T, MidiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Midias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Midias
     * const midias = await prisma.midia.findMany()
     * 
     * // Get first 10 Midias
     * const midias = await prisma.midia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const midiaWithIdOnly = await prisma.midia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MidiaFindManyArgs>(args?: SelectSubset<T, MidiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Midia.
     * @param {MidiaCreateArgs} args - Arguments to create a Midia.
     * @example
     * // Create one Midia
     * const Midia = await prisma.midia.create({
     *   data: {
     *     // ... data to create a Midia
     *   }
     * })
     * 
     */
    create<T extends MidiaCreateArgs>(args: SelectSubset<T, MidiaCreateArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Midias.
     * @param {MidiaCreateManyArgs} args - Arguments to create many Midias.
     * @example
     * // Create many Midias
     * const midia = await prisma.midia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MidiaCreateManyArgs>(args?: SelectSubset<T, MidiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Midias and returns the data saved in the database.
     * @param {MidiaCreateManyAndReturnArgs} args - Arguments to create many Midias.
     * @example
     * // Create many Midias
     * const midia = await prisma.midia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Midias and only return the `id`
     * const midiaWithIdOnly = await prisma.midia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MidiaCreateManyAndReturnArgs>(args?: SelectSubset<T, MidiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Midia.
     * @param {MidiaDeleteArgs} args - Arguments to delete one Midia.
     * @example
     * // Delete one Midia
     * const Midia = await prisma.midia.delete({
     *   where: {
     *     // ... filter to delete one Midia
     *   }
     * })
     * 
     */
    delete<T extends MidiaDeleteArgs>(args: SelectSubset<T, MidiaDeleteArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Midia.
     * @param {MidiaUpdateArgs} args - Arguments to update one Midia.
     * @example
     * // Update one Midia
     * const midia = await prisma.midia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MidiaUpdateArgs>(args: SelectSubset<T, MidiaUpdateArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Midias.
     * @param {MidiaDeleteManyArgs} args - Arguments to filter Midias to delete.
     * @example
     * // Delete a few Midias
     * const { count } = await prisma.midia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MidiaDeleteManyArgs>(args?: SelectSubset<T, MidiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Midias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Midias
     * const midia = await prisma.midia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MidiaUpdateManyArgs>(args: SelectSubset<T, MidiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Midias and returns the data updated in the database.
     * @param {MidiaUpdateManyAndReturnArgs} args - Arguments to update many Midias.
     * @example
     * // Update many Midias
     * const midia = await prisma.midia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Midias and only return the `id`
     * const midiaWithIdOnly = await prisma.midia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MidiaUpdateManyAndReturnArgs>(args: SelectSubset<T, MidiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Midia.
     * @param {MidiaUpsertArgs} args - Arguments to update or create a Midia.
     * @example
     * // Update or create a Midia
     * const midia = await prisma.midia.upsert({
     *   create: {
     *     // ... data to create a Midia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Midia we want to update
     *   }
     * })
     */
    upsert<T extends MidiaUpsertArgs>(args: SelectSubset<T, MidiaUpsertArgs<ExtArgs>>): Prisma__MidiaClient<$Result.GetResult<Prisma.$MidiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Midias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaCountArgs} args - Arguments to filter Midias to count.
     * @example
     * // Count the number of Midias
     * const count = await prisma.midia.count({
     *   where: {
     *     // ... the filter for the Midias we want to count
     *   }
     * })
    **/
    count<T extends MidiaCountArgs>(
      args?: Subset<T, MidiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MidiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Midia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MidiaAggregateArgs>(args: Subset<T, MidiaAggregateArgs>): Prisma.PrismaPromise<GetMidiaAggregateType<T>>

    /**
     * Group by Midia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MidiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MidiaGroupByArgs['orderBy'] }
        : { orderBy?: MidiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MidiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMidiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Midia model
   */
  readonly fields: MidiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Midia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MidiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Midia model
   */
  interface MidiaFieldRefs {
    readonly id: FieldRef<"Midia", 'Int'>
    readonly nome: FieldRef<"Midia", 'String'>
    readonly descricao: FieldRef<"Midia", 'String'>
    readonly criador: FieldRef<"Midia", 'String'>
    readonly dataCriacao: FieldRef<"Midia", 'String'>
    readonly tipo: FieldRef<"Midia", 'String'>
    readonly duracao: FieldRef<"Midia", 'String'>
    readonly qualidade: FieldRef<"Midia", 'Int'>
    readonly apresentador: FieldRef<"Midia", 'String'>
    readonly usuarioId: FieldRef<"Midia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Midia findUnique
   */
  export type MidiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia findUniqueOrThrow
   */
  export type MidiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia findFirst
   */
  export type MidiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Midias.
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Midias.
     */
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Midia findFirstOrThrow
   */
  export type MidiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midia to fetch.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Midias.
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Midias.
     */
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Midia findMany
   */
  export type MidiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter, which Midias to fetch.
     */
    where?: MidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Midias to fetch.
     */
    orderBy?: MidiaOrderByWithRelationInput | MidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Midias.
     */
    cursor?: MidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Midias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Midias.
     */
    skip?: number
    distinct?: MidiaScalarFieldEnum | MidiaScalarFieldEnum[]
  }

  /**
   * Midia create
   */
  export type MidiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Midia.
     */
    data: XOR<MidiaCreateInput, MidiaUncheckedCreateInput>
  }

  /**
   * Midia createMany
   */
  export type MidiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Midias.
     */
    data: MidiaCreateManyInput | MidiaCreateManyInput[]
  }

  /**
   * Midia createManyAndReturn
   */
  export type MidiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * The data used to create many Midias.
     */
    data: MidiaCreateManyInput | MidiaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Midia update
   */
  export type MidiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Midia.
     */
    data: XOR<MidiaUpdateInput, MidiaUncheckedUpdateInput>
    /**
     * Choose, which Midia to update.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia updateMany
   */
  export type MidiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Midias.
     */
    data: XOR<MidiaUpdateManyMutationInput, MidiaUncheckedUpdateManyInput>
    /**
     * Filter which Midias to update
     */
    where?: MidiaWhereInput
    /**
     * Limit how many Midias to update.
     */
    limit?: number
  }

  /**
   * Midia updateManyAndReturn
   */
  export type MidiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * The data used to update Midias.
     */
    data: XOR<MidiaUpdateManyMutationInput, MidiaUncheckedUpdateManyInput>
    /**
     * Filter which Midias to update
     */
    where?: MidiaWhereInput
    /**
     * Limit how many Midias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Midia upsert
   */
  export type MidiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Midia to update in case it exists.
     */
    where: MidiaWhereUniqueInput
    /**
     * In case the Midia found by the `where` argument doesn't exist, create a new Midia with this data.
     */
    create: XOR<MidiaCreateInput, MidiaUncheckedCreateInput>
    /**
     * In case the Midia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MidiaUpdateInput, MidiaUncheckedUpdateInput>
  }

  /**
   * Midia delete
   */
  export type MidiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
    /**
     * Filter which Midia to delete.
     */
    where: MidiaWhereUniqueInput
  }

  /**
   * Midia deleteMany
   */
  export type MidiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Midias to delete
     */
    where?: MidiaWhereInput
    /**
     * Limit how many Midias to delete.
     */
    limit?: number
  }

  /**
   * Midia without action
   */
  export type MidiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Midia
     */
    select?: MidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Midia
     */
    omit?: MidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MidiaInclude<ExtArgs> | null
  }


  /**
   * Model Comunidade
   */

  export type AggregateComunidade = {
    _count: ComunidadeCountAggregateOutputType | null
    _avg: ComunidadeAvgAggregateOutputType | null
    _sum: ComunidadeSumAggregateOutputType | null
    _min: ComunidadeMinAggregateOutputType | null
    _max: ComunidadeMaxAggregateOutputType | null
  }

  export type ComunidadeAvgAggregateOutputType = {
    id: number | null
    membros: number | null
  }

  export type ComunidadeSumAggregateOutputType = {
    id: number | null
    membros: number | null
  }

  export type ComunidadeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    membros: number | null
  }

  export type ComunidadeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    membros: number | null
  }

  export type ComunidadeCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    membros: number
    _all: number
  }


  export type ComunidadeAvgAggregateInputType = {
    id?: true
    membros?: true
  }

  export type ComunidadeSumAggregateInputType = {
    id?: true
    membros?: true
  }

  export type ComunidadeMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    membros?: true
  }

  export type ComunidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    membros?: true
  }

  export type ComunidadeCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    membros?: true
    _all?: true
  }

  export type ComunidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comunidade to aggregate.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comunidades
    **/
    _count?: true | ComunidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComunidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComunidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComunidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComunidadeMaxAggregateInputType
  }

  export type GetComunidadeAggregateType<T extends ComunidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateComunidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComunidade[P]>
      : GetScalarType<T[P], AggregateComunidade[P]>
  }




  export type ComunidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComunidadeWhereInput
    orderBy?: ComunidadeOrderByWithAggregationInput | ComunidadeOrderByWithAggregationInput[]
    by: ComunidadeScalarFieldEnum[] | ComunidadeScalarFieldEnum
    having?: ComunidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComunidadeCountAggregateInputType | true
    _avg?: ComunidadeAvgAggregateInputType
    _sum?: ComunidadeSumAggregateInputType
    _min?: ComunidadeMinAggregateInputType
    _max?: ComunidadeMaxAggregateInputType
  }

  export type ComunidadeGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    membros: number
    _count: ComunidadeCountAggregateOutputType | null
    _avg: ComunidadeAvgAggregateOutputType | null
    _sum: ComunidadeSumAggregateOutputType | null
    _min: ComunidadeMinAggregateOutputType | null
    _max: ComunidadeMaxAggregateOutputType | null
  }

  type GetComunidadeGroupByPayload<T extends ComunidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComunidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComunidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComunidadeGroupByOutputType[P]>
            : GetScalarType<T[P], ComunidadeGroupByOutputType[P]>
        }
      >
    >


  export type ComunidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    membros?: boolean
    posts?: boolean | Comunidade$postsArgs<ExtArgs>
    usuarios?: boolean | Comunidade$usuariosArgs<ExtArgs>
    _count?: boolean | ComunidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    membros?: boolean
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    membros?: boolean
  }, ExtArgs["result"]["comunidade"]>

  export type ComunidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    membros?: boolean
  }

  export type ComunidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "membros", ExtArgs["result"]["comunidade"]>
  export type ComunidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Comunidade$postsArgs<ExtArgs>
    usuarios?: boolean | Comunidade$usuariosArgs<ExtArgs>
    _count?: boolean | ComunidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComunidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComunidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComunidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comunidade"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      membros: number
    }, ExtArgs["result"]["comunidade"]>
    composites: {}
  }

  type ComunidadeGetPayload<S extends boolean | null | undefined | ComunidadeDefaultArgs> = $Result.GetResult<Prisma.$ComunidadePayload, S>

  type ComunidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComunidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComunidadeCountAggregateInputType | true
    }

  export interface ComunidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comunidade'], meta: { name: 'Comunidade' } }
    /**
     * Find zero or one Comunidade that matches the filter.
     * @param {ComunidadeFindUniqueArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComunidadeFindUniqueArgs>(args: SelectSubset<T, ComunidadeFindUniqueArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comunidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComunidadeFindUniqueOrThrowArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComunidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, ComunidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comunidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindFirstArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComunidadeFindFirstArgs>(args?: SelectSubset<T, ComunidadeFindFirstArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comunidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindFirstOrThrowArgs} args - Arguments to find a Comunidade
     * @example
     * // Get one Comunidade
     * const comunidade = await prisma.comunidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComunidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, ComunidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comunidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comunidades
     * const comunidades = await prisma.comunidade.findMany()
     * 
     * // Get first 10 Comunidades
     * const comunidades = await prisma.comunidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comunidadeWithIdOnly = await prisma.comunidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComunidadeFindManyArgs>(args?: SelectSubset<T, ComunidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comunidade.
     * @param {ComunidadeCreateArgs} args - Arguments to create a Comunidade.
     * @example
     * // Create one Comunidade
     * const Comunidade = await prisma.comunidade.create({
     *   data: {
     *     // ... data to create a Comunidade
     *   }
     * })
     * 
     */
    create<T extends ComunidadeCreateArgs>(args: SelectSubset<T, ComunidadeCreateArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comunidades.
     * @param {ComunidadeCreateManyArgs} args - Arguments to create many Comunidades.
     * @example
     * // Create many Comunidades
     * const comunidade = await prisma.comunidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComunidadeCreateManyArgs>(args?: SelectSubset<T, ComunidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comunidades and returns the data saved in the database.
     * @param {ComunidadeCreateManyAndReturnArgs} args - Arguments to create many Comunidades.
     * @example
     * // Create many Comunidades
     * const comunidade = await prisma.comunidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comunidades and only return the `id`
     * const comunidadeWithIdOnly = await prisma.comunidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComunidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, ComunidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comunidade.
     * @param {ComunidadeDeleteArgs} args - Arguments to delete one Comunidade.
     * @example
     * // Delete one Comunidade
     * const Comunidade = await prisma.comunidade.delete({
     *   where: {
     *     // ... filter to delete one Comunidade
     *   }
     * })
     * 
     */
    delete<T extends ComunidadeDeleteArgs>(args: SelectSubset<T, ComunidadeDeleteArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comunidade.
     * @param {ComunidadeUpdateArgs} args - Arguments to update one Comunidade.
     * @example
     * // Update one Comunidade
     * const comunidade = await prisma.comunidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComunidadeUpdateArgs>(args: SelectSubset<T, ComunidadeUpdateArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comunidades.
     * @param {ComunidadeDeleteManyArgs} args - Arguments to filter Comunidades to delete.
     * @example
     * // Delete a few Comunidades
     * const { count } = await prisma.comunidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComunidadeDeleteManyArgs>(args?: SelectSubset<T, ComunidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comunidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comunidades
     * const comunidade = await prisma.comunidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComunidadeUpdateManyArgs>(args: SelectSubset<T, ComunidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comunidades and returns the data updated in the database.
     * @param {ComunidadeUpdateManyAndReturnArgs} args - Arguments to update many Comunidades.
     * @example
     * // Update many Comunidades
     * const comunidade = await prisma.comunidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comunidades and only return the `id`
     * const comunidadeWithIdOnly = await prisma.comunidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComunidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, ComunidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comunidade.
     * @param {ComunidadeUpsertArgs} args - Arguments to update or create a Comunidade.
     * @example
     * // Update or create a Comunidade
     * const comunidade = await prisma.comunidade.upsert({
     *   create: {
     *     // ... data to create a Comunidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comunidade we want to update
     *   }
     * })
     */
    upsert<T extends ComunidadeUpsertArgs>(args: SelectSubset<T, ComunidadeUpsertArgs<ExtArgs>>): Prisma__ComunidadeClient<$Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comunidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeCountArgs} args - Arguments to filter Comunidades to count.
     * @example
     * // Count the number of Comunidades
     * const count = await prisma.comunidade.count({
     *   where: {
     *     // ... the filter for the Comunidades we want to count
     *   }
     * })
    **/
    count<T extends ComunidadeCountArgs>(
      args?: Subset<T, ComunidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComunidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comunidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComunidadeAggregateArgs>(args: Subset<T, ComunidadeAggregateArgs>): Prisma.PrismaPromise<GetComunidadeAggregateType<T>>

    /**
     * Group by Comunidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComunidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComunidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComunidadeGroupByArgs['orderBy'] }
        : { orderBy?: ComunidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComunidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComunidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comunidade model
   */
  readonly fields: ComunidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comunidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComunidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Comunidade$postsArgs<ExtArgs> = {}>(args?: Subset<T, Comunidade$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Comunidade$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Comunidade$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comunidade model
   */
  interface ComunidadeFieldRefs {
    readonly id: FieldRef<"Comunidade", 'Int'>
    readonly nome: FieldRef<"Comunidade", 'String'>
    readonly descricao: FieldRef<"Comunidade", 'String'>
    readonly membros: FieldRef<"Comunidade", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comunidade findUnique
   */
  export type ComunidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade findUniqueOrThrow
   */
  export type ComunidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade findFirst
   */
  export type ComunidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comunidades.
     */
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade findFirstOrThrow
   */
  export type ComunidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidade to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comunidades.
     */
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade findMany
   */
  export type ComunidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter, which Comunidades to fetch.
     */
    where?: ComunidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comunidades to fetch.
     */
    orderBy?: ComunidadeOrderByWithRelationInput | ComunidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comunidades.
     */
    cursor?: ComunidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comunidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comunidades.
     */
    skip?: number
    distinct?: ComunidadeScalarFieldEnum | ComunidadeScalarFieldEnum[]
  }

  /**
   * Comunidade create
   */
  export type ComunidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Comunidade.
     */
    data: XOR<ComunidadeCreateInput, ComunidadeUncheckedCreateInput>
  }

  /**
   * Comunidade createMany
   */
  export type ComunidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comunidades.
     */
    data: ComunidadeCreateManyInput | ComunidadeCreateManyInput[]
  }

  /**
   * Comunidade createManyAndReturn
   */
  export type ComunidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Comunidades.
     */
    data: ComunidadeCreateManyInput | ComunidadeCreateManyInput[]
  }

  /**
   * Comunidade update
   */
  export type ComunidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Comunidade.
     */
    data: XOR<ComunidadeUpdateInput, ComunidadeUncheckedUpdateInput>
    /**
     * Choose, which Comunidade to update.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade updateMany
   */
  export type ComunidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comunidades.
     */
    data: XOR<ComunidadeUpdateManyMutationInput, ComunidadeUncheckedUpdateManyInput>
    /**
     * Filter which Comunidades to update
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to update.
     */
    limit?: number
  }

  /**
   * Comunidade updateManyAndReturn
   */
  export type ComunidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * The data used to update Comunidades.
     */
    data: XOR<ComunidadeUpdateManyMutationInput, ComunidadeUncheckedUpdateManyInput>
    /**
     * Filter which Comunidades to update
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to update.
     */
    limit?: number
  }

  /**
   * Comunidade upsert
   */
  export type ComunidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Comunidade to update in case it exists.
     */
    where: ComunidadeWhereUniqueInput
    /**
     * In case the Comunidade found by the `where` argument doesn't exist, create a new Comunidade with this data.
     */
    create: XOR<ComunidadeCreateInput, ComunidadeUncheckedCreateInput>
    /**
     * In case the Comunidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComunidadeUpdateInput, ComunidadeUncheckedUpdateInput>
  }

  /**
   * Comunidade delete
   */
  export type ComunidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
    /**
     * Filter which Comunidade to delete.
     */
    where: ComunidadeWhereUniqueInput
  }

  /**
   * Comunidade deleteMany
   */
  export type ComunidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comunidades to delete
     */
    where?: ComunidadeWhereInput
    /**
     * Limit how many Comunidades to delete.
     */
    limit?: number
  }

  /**
   * Comunidade.posts
   */
  export type Comunidade$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Comunidade.usuarios
   */
  export type Comunidade$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Comunidade without action
   */
  export type ComunidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comunidade
     */
    select?: ComunidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comunidade
     */
    omit?: ComunidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComunidadeInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["categoria"]>

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    email: 'email',
    senha: 'senha',
    tipodeConta: 'tipodeConta'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const InscricaoScalarFieldEnum: {
    id: 'id',
    dataInscricao: 'dataInscricao',
    usuarioId: 'usuarioId'
  };

  export type InscricaoScalarFieldEnum = (typeof InscricaoScalarFieldEnum)[keyof typeof InscricaoScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    conteudo: 'conteudo',
    dataPublicacao: 'dataPublicacao',
    autorId: 'autorId',
    comunidadeId: 'comunidadeId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const MidiaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    criador: 'criador',
    dataCriacao: 'dataCriacao',
    tipo: 'tipo',
    duracao: 'duracao',
    qualidade: 'qualidade',
    apresentador: 'apresentador',
    usuarioId: 'usuarioId'
  };

  export type MidiaScalarFieldEnum = (typeof MidiaScalarFieldEnum)[keyof typeof MidiaScalarFieldEnum]


  export const ComunidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    membros: 'membros'
  };

  export type ComunidadeScalarFieldEnum = (typeof ComunidadeScalarFieldEnum)[keyof typeof ComunidadeScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipodeConta?: StringFilter<"Usuario"> | string
    inscricoes?: InscricaoListRelationFilter
    posts?: PostListRelationFilter
    midias?: MidiaListRelationFilter
    comunidades?: ComunidadeListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipodeConta?: SortOrder
    inscricoes?: InscricaoOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    midias?: MidiaOrderByRelationAggregateInput
    comunidades?: ComunidadeOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipodeConta?: StringFilter<"Usuario"> | string
    inscricoes?: InscricaoListRelationFilter
    posts?: PostListRelationFilter
    midias?: MidiaListRelationFilter
    comunidades?: ComunidadeListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipodeConta?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    sobrenome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipodeConta?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type InscricaoWhereInput = {
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    id?: IntFilter<"Inscricao"> | number
    dataInscricao?: StringFilter<"Inscricao"> | string
    usuarioId?: IntFilter<"Inscricao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type InscricaoOrderByWithRelationInput = {
    id?: SortOrder
    dataInscricao?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type InscricaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    dataInscricao?: StringFilter<"Inscricao"> | string
    usuarioId?: IntFilter<"Inscricao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type InscricaoOrderByWithAggregationInput = {
    id?: SortOrder
    dataInscricao?: SortOrder
    usuarioId?: SortOrder
    _count?: InscricaoCountOrderByAggregateInput
    _avg?: InscricaoAvgOrderByAggregateInput
    _max?: InscricaoMaxOrderByAggregateInput
    _min?: InscricaoMinOrderByAggregateInput
    _sum?: InscricaoSumOrderByAggregateInput
  }

  export type InscricaoScalarWhereWithAggregatesInput = {
    AND?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    OR?: InscricaoScalarWhereWithAggregatesInput[]
    NOT?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inscricao"> | number
    dataInscricao?: StringWithAggregatesFilter<"Inscricao"> | string
    usuarioId?: IntWithAggregatesFilter<"Inscricao"> | number
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    tipo?: StringFilter<"Post"> | string
    conteudo?: StringFilter<"Post"> | string
    dataPublicacao?: StringFilter<"Post"> | string
    autorId?: IntFilter<"Post"> | number
    comunidadeId?: IntNullableFilter<"Post"> | number | null
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comunidade?: XOR<ComunidadeNullableScalarRelationFilter, ComunidadeWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    conteudo?: SortOrder
    dataPublicacao?: SortOrder
    autorId?: SortOrder
    comunidadeId?: SortOrderInput | SortOrder
    autor?: UsuarioOrderByWithRelationInput
    comunidade?: ComunidadeOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    tipo?: StringFilter<"Post"> | string
    conteudo?: StringFilter<"Post"> | string
    dataPublicacao?: StringFilter<"Post"> | string
    autorId?: IntFilter<"Post"> | number
    comunidadeId?: IntNullableFilter<"Post"> | number | null
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comunidade?: XOR<ComunidadeNullableScalarRelationFilter, ComunidadeWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    conteudo?: SortOrder
    dataPublicacao?: SortOrder
    autorId?: SortOrder
    comunidadeId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    tipo?: StringWithAggregatesFilter<"Post"> | string
    conteudo?: StringWithAggregatesFilter<"Post"> | string
    dataPublicacao?: StringWithAggregatesFilter<"Post"> | string
    autorId?: IntWithAggregatesFilter<"Post"> | number
    comunidadeId?: IntNullableWithAggregatesFilter<"Post"> | number | null
  }

  export type MidiaWhereInput = {
    AND?: MidiaWhereInput | MidiaWhereInput[]
    OR?: MidiaWhereInput[]
    NOT?: MidiaWhereInput | MidiaWhereInput[]
    id?: IntFilter<"Midia"> | number
    nome?: StringFilter<"Midia"> | string
    descricao?: StringFilter<"Midia"> | string
    criador?: StringFilter<"Midia"> | string
    dataCriacao?: StringFilter<"Midia"> | string
    tipo?: StringFilter<"Midia"> | string
    duracao?: StringNullableFilter<"Midia"> | string | null
    qualidade?: IntNullableFilter<"Midia"> | number | null
    apresentador?: StringNullableFilter<"Midia"> | string | null
    usuarioId?: IntFilter<"Midia"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MidiaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    criador?: SortOrder
    dataCriacao?: SortOrder
    tipo?: SortOrder
    duracao?: SortOrderInput | SortOrder
    qualidade?: SortOrderInput | SortOrder
    apresentador?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type MidiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MidiaWhereInput | MidiaWhereInput[]
    OR?: MidiaWhereInput[]
    NOT?: MidiaWhereInput | MidiaWhereInput[]
    nome?: StringFilter<"Midia"> | string
    descricao?: StringFilter<"Midia"> | string
    criador?: StringFilter<"Midia"> | string
    dataCriacao?: StringFilter<"Midia"> | string
    tipo?: StringFilter<"Midia"> | string
    duracao?: StringNullableFilter<"Midia"> | string | null
    qualidade?: IntNullableFilter<"Midia"> | number | null
    apresentador?: StringNullableFilter<"Midia"> | string | null
    usuarioId?: IntFilter<"Midia"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MidiaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    criador?: SortOrder
    dataCriacao?: SortOrder
    tipo?: SortOrder
    duracao?: SortOrderInput | SortOrder
    qualidade?: SortOrderInput | SortOrder
    apresentador?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: MidiaCountOrderByAggregateInput
    _avg?: MidiaAvgOrderByAggregateInput
    _max?: MidiaMaxOrderByAggregateInput
    _min?: MidiaMinOrderByAggregateInput
    _sum?: MidiaSumOrderByAggregateInput
  }

  export type MidiaScalarWhereWithAggregatesInput = {
    AND?: MidiaScalarWhereWithAggregatesInput | MidiaScalarWhereWithAggregatesInput[]
    OR?: MidiaScalarWhereWithAggregatesInput[]
    NOT?: MidiaScalarWhereWithAggregatesInput | MidiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Midia"> | number
    nome?: StringWithAggregatesFilter<"Midia"> | string
    descricao?: StringWithAggregatesFilter<"Midia"> | string
    criador?: StringWithAggregatesFilter<"Midia"> | string
    dataCriacao?: StringWithAggregatesFilter<"Midia"> | string
    tipo?: StringWithAggregatesFilter<"Midia"> | string
    duracao?: StringNullableWithAggregatesFilter<"Midia"> | string | null
    qualidade?: IntNullableWithAggregatesFilter<"Midia"> | number | null
    apresentador?: StringNullableWithAggregatesFilter<"Midia"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Midia"> | number
  }

  export type ComunidadeWhereInput = {
    AND?: ComunidadeWhereInput | ComunidadeWhereInput[]
    OR?: ComunidadeWhereInput[]
    NOT?: ComunidadeWhereInput | ComunidadeWhereInput[]
    id?: IntFilter<"Comunidade"> | number
    nome?: StringFilter<"Comunidade"> | string
    descricao?: StringFilter<"Comunidade"> | string
    membros?: IntFilter<"Comunidade"> | number
    posts?: PostListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }

  export type ComunidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    membros?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type ComunidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComunidadeWhereInput | ComunidadeWhereInput[]
    OR?: ComunidadeWhereInput[]
    NOT?: ComunidadeWhereInput | ComunidadeWhereInput[]
    nome?: StringFilter<"Comunidade"> | string
    descricao?: StringFilter<"Comunidade"> | string
    membros?: IntFilter<"Comunidade"> | number
    posts?: PostListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type ComunidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    membros?: SortOrder
    _count?: ComunidadeCountOrderByAggregateInput
    _avg?: ComunidadeAvgOrderByAggregateInput
    _max?: ComunidadeMaxOrderByAggregateInput
    _min?: ComunidadeMinOrderByAggregateInput
    _sum?: ComunidadeSumOrderByAggregateInput
  }

  export type ComunidadeScalarWhereWithAggregatesInput = {
    AND?: ComunidadeScalarWhereWithAggregatesInput | ComunidadeScalarWhereWithAggregatesInput[]
    OR?: ComunidadeScalarWhereWithAggregatesInput[]
    NOT?: ComunidadeScalarWhereWithAggregatesInput | ComunidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comunidade"> | number
    nome?: StringWithAggregatesFilter<"Comunidade"> | string
    descricao?: StringWithAggregatesFilter<"Comunidade"> | string
    membros?: IntWithAggregatesFilter<"Comunidade"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringFilter<"Categoria"> | string
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type UsuarioCreateInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoCreateNestedManyWithoutUsuarioInput
    posts?: PostCreateNestedManyWithoutAutorInput
    midias?: MidiaCreateNestedManyWithoutUsuarioInput
    comunidades?: ComunidadeCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutUsuarioInput
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
    midias?: MidiaUncheckedCreateNestedManyWithoutUsuarioInput
    comunidades?: ComunidadeUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUpdateManyWithoutUsuarioNestedInput
    posts?: PostUpdateManyWithoutAutorNestedInput
    midias?: MidiaUpdateManyWithoutUsuarioNestedInput
    comunidades?: ComunidadeUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutUsuarioNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutUsuarioNestedInput
    comunidades?: ComunidadeUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoCreateInput = {
    dataInscricao: string
    usuario: UsuarioCreateNestedOneWithoutInscricoesInput
  }

  export type InscricaoUncheckedCreateInput = {
    id?: number
    dataInscricao: string
    usuarioId: number
  }

  export type InscricaoUpdateInput = {
    dataInscricao?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutInscricoesNestedInput
  }

  export type InscricaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInscricao?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type InscricaoCreateManyInput = {
    id?: number
    dataInscricao: string
    usuarioId: number
  }

  export type InscricaoUpdateManyMutationInput = {
    dataInscricao?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInscricao?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    tipo: string
    conteudo: string
    dataPublicacao: string
    autor: UsuarioCreateNestedOneWithoutPostsInput
    comunidade?: ComunidadeCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    tipo: string
    conteudo: string
    dataPublicacao: string
    autorId: number
    comunidadeId?: number | null
  }

  export type PostUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    comunidade?: ComunidadeUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    autorId?: IntFieldUpdateOperationsInput | number
    comunidadeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id?: number
    tipo: string
    conteudo: string
    dataPublicacao: string
    autorId: number
    comunidadeId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    autorId?: IntFieldUpdateOperationsInput | number
    comunidadeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MidiaCreateInput = {
    nome: string
    descricao: string
    criador: string
    dataCriacao: string
    tipo: string
    duracao?: string | null
    qualidade?: number | null
    apresentador?: string | null
    usuario: UsuarioCreateNestedOneWithoutMidiasInput
  }

  export type MidiaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    criador: string
    dataCriacao: string
    tipo: string
    duracao?: string | null
    qualidade?: number | null
    apresentador?: string | null
    usuarioId: number
  }

  export type MidiaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criador?: StringFieldUpdateOperationsInput | string
    dataCriacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    duracao?: NullableStringFieldUpdateOperationsInput | string | null
    qualidade?: NullableIntFieldUpdateOperationsInput | number | null
    apresentador?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMidiasNestedInput
  }

  export type MidiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criador?: StringFieldUpdateOperationsInput | string
    dataCriacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    duracao?: NullableStringFieldUpdateOperationsInput | string | null
    qualidade?: NullableIntFieldUpdateOperationsInput | number | null
    apresentador?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type MidiaCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    criador: string
    dataCriacao: string
    tipo: string
    duracao?: string | null
    qualidade?: number | null
    apresentador?: string | null
    usuarioId: number
  }

  export type MidiaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criador?: StringFieldUpdateOperationsInput | string
    dataCriacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    duracao?: NullableStringFieldUpdateOperationsInput | string | null
    qualidade?: NullableIntFieldUpdateOperationsInput | number | null
    apresentador?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MidiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criador?: StringFieldUpdateOperationsInput | string
    dataCriacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    duracao?: NullableStringFieldUpdateOperationsInput | string | null
    qualidade?: NullableIntFieldUpdateOperationsInput | number | null
    apresentador?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ComunidadeCreateInput = {
    nome: string
    descricao: string
    membros: number
    posts?: PostCreateNestedManyWithoutComunidadeInput
    usuarios?: UsuarioCreateNestedManyWithoutComunidadesInput
  }

  export type ComunidadeUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    membros: number
    posts?: PostUncheckedCreateNestedManyWithoutComunidadeInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutComunidadesInput
  }

  export type ComunidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
    posts?: PostUpdateManyWithoutComunidadeNestedInput
    usuarios?: UsuarioUpdateManyWithoutComunidadesNestedInput
  }

  export type ComunidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutComunidadeNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutComunidadesNestedInput
  }

  export type ComunidadeCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    membros: number
  }

  export type ComunidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
  }

  export type ComunidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    nome: string
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type InscricaoListRelationFilter = {
    every?: InscricaoWhereInput
    some?: InscricaoWhereInput
    none?: InscricaoWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type MidiaListRelationFilter = {
    every?: MidiaWhereInput
    some?: MidiaWhereInput
    none?: MidiaWhereInput
  }

  export type ComunidadeListRelationFilter = {
    every?: ComunidadeWhereInput
    some?: ComunidadeWhereInput
    none?: ComunidadeWhereInput
  }

  export type InscricaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MidiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComunidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipodeConta?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipodeConta?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipodeConta?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type InscricaoCountOrderByAggregateInput = {
    id?: SortOrder
    dataInscricao?: SortOrder
    usuarioId?: SortOrder
  }

  export type InscricaoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type InscricaoMaxOrderByAggregateInput = {
    id?: SortOrder
    dataInscricao?: SortOrder
    usuarioId?: SortOrder
  }

  export type InscricaoMinOrderByAggregateInput = {
    id?: SortOrder
    dataInscricao?: SortOrder
    usuarioId?: SortOrder
  }

  export type InscricaoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ComunidadeNullableScalarRelationFilter = {
    is?: ComunidadeWhereInput | null
    isNot?: ComunidadeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    conteudo?: SortOrder
    dataPublicacao?: SortOrder
    autorId?: SortOrder
    comunidadeId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    comunidadeId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    conteudo?: SortOrder
    dataPublicacao?: SortOrder
    autorId?: SortOrder
    comunidadeId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    conteudo?: SortOrder
    dataPublicacao?: SortOrder
    autorId?: SortOrder
    comunidadeId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    comunidadeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MidiaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    criador?: SortOrder
    dataCriacao?: SortOrder
    tipo?: SortOrder
    duracao?: SortOrder
    qualidade?: SortOrder
    apresentador?: SortOrder
    usuarioId?: SortOrder
  }

  export type MidiaAvgOrderByAggregateInput = {
    id?: SortOrder
    qualidade?: SortOrder
    usuarioId?: SortOrder
  }

  export type MidiaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    criador?: SortOrder
    dataCriacao?: SortOrder
    tipo?: SortOrder
    duracao?: SortOrder
    qualidade?: SortOrder
    apresentador?: SortOrder
    usuarioId?: SortOrder
  }

  export type MidiaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    criador?: SortOrder
    dataCriacao?: SortOrder
    tipo?: SortOrder
    duracao?: SortOrder
    qualidade?: SortOrder
    apresentador?: SortOrder
    usuarioId?: SortOrder
  }

  export type MidiaSumOrderByAggregateInput = {
    id?: SortOrder
    qualidade?: SortOrder
    usuarioId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComunidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    membros?: SortOrder
  }

  export type ComunidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    membros?: SortOrder
  }

  export type ComunidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    membros?: SortOrder
  }

  export type ComunidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    membros?: SortOrder
  }

  export type ComunidadeSumOrderByAggregateInput = {
    id?: SortOrder
    membros?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InscricaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InscricaoCreateWithoutUsuarioInput, InscricaoUncheckedCreateWithoutUsuarioInput> | InscricaoCreateWithoutUsuarioInput[] | InscricaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutUsuarioInput | InscricaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: InscricaoCreateManyUsuarioInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type MidiaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MidiaCreateWithoutUsuarioInput, MidiaUncheckedCreateWithoutUsuarioInput> | MidiaCreateWithoutUsuarioInput[] | MidiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutUsuarioInput | MidiaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MidiaCreateManyUsuarioInputEnvelope
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
  }

  export type ComunidadeCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ComunidadeCreateWithoutUsuariosInput, ComunidadeUncheckedCreateWithoutUsuariosInput> | ComunidadeCreateWithoutUsuariosInput[] | ComunidadeUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComunidadeCreateOrConnectWithoutUsuariosInput | ComunidadeCreateOrConnectWithoutUsuariosInput[]
    connect?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
  }

  export type InscricaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<InscricaoCreateWithoutUsuarioInput, InscricaoUncheckedCreateWithoutUsuarioInput> | InscricaoCreateWithoutUsuarioInput[] | InscricaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutUsuarioInput | InscricaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: InscricaoCreateManyUsuarioInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type MidiaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MidiaCreateWithoutUsuarioInput, MidiaUncheckedCreateWithoutUsuarioInput> | MidiaCreateWithoutUsuarioInput[] | MidiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutUsuarioInput | MidiaCreateOrConnectWithoutUsuarioInput[]
    createMany?: MidiaCreateManyUsuarioInputEnvelope
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
  }

  export type ComunidadeUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ComunidadeCreateWithoutUsuariosInput, ComunidadeUncheckedCreateWithoutUsuariosInput> | ComunidadeCreateWithoutUsuariosInput[] | ComunidadeUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComunidadeCreateOrConnectWithoutUsuariosInput | ComunidadeCreateOrConnectWithoutUsuariosInput[]
    connect?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type InscricaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InscricaoCreateWithoutUsuarioInput, InscricaoUncheckedCreateWithoutUsuarioInput> | InscricaoCreateWithoutUsuarioInput[] | InscricaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutUsuarioInput | InscricaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutUsuarioInput | InscricaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InscricaoCreateManyUsuarioInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutUsuarioInput | InscricaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutUsuarioInput | InscricaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutorInput | PostUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutorInput | PostUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutorInput | PostUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type MidiaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MidiaCreateWithoutUsuarioInput, MidiaUncheckedCreateWithoutUsuarioInput> | MidiaCreateWithoutUsuarioInput[] | MidiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutUsuarioInput | MidiaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MidiaUpsertWithWhereUniqueWithoutUsuarioInput | MidiaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MidiaCreateManyUsuarioInputEnvelope
    set?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    disconnect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    delete?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    update?: MidiaUpdateWithWhereUniqueWithoutUsuarioInput | MidiaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MidiaUpdateManyWithWhereWithoutUsuarioInput | MidiaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
  }

  export type ComunidadeUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ComunidadeCreateWithoutUsuariosInput, ComunidadeUncheckedCreateWithoutUsuariosInput> | ComunidadeCreateWithoutUsuariosInput[] | ComunidadeUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComunidadeCreateOrConnectWithoutUsuariosInput | ComunidadeCreateOrConnectWithoutUsuariosInput[]
    upsert?: ComunidadeUpsertWithWhereUniqueWithoutUsuariosInput | ComunidadeUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    disconnect?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    delete?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    connect?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    update?: ComunidadeUpdateWithWhereUniqueWithoutUsuariosInput | ComunidadeUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ComunidadeUpdateManyWithWhereWithoutUsuariosInput | ComunidadeUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ComunidadeScalarWhereInput | ComunidadeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InscricaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<InscricaoCreateWithoutUsuarioInput, InscricaoUncheckedCreateWithoutUsuarioInput> | InscricaoCreateWithoutUsuarioInput[] | InscricaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutUsuarioInput | InscricaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutUsuarioInput | InscricaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: InscricaoCreateManyUsuarioInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutUsuarioInput | InscricaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutUsuarioInput | InscricaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutorInput | PostUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutorInput | PostUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutorInput | PostUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type MidiaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MidiaCreateWithoutUsuarioInput, MidiaUncheckedCreateWithoutUsuarioInput> | MidiaCreateWithoutUsuarioInput[] | MidiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MidiaCreateOrConnectWithoutUsuarioInput | MidiaCreateOrConnectWithoutUsuarioInput[]
    upsert?: MidiaUpsertWithWhereUniqueWithoutUsuarioInput | MidiaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MidiaCreateManyUsuarioInputEnvelope
    set?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    disconnect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    delete?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    connect?: MidiaWhereUniqueInput | MidiaWhereUniqueInput[]
    update?: MidiaUpdateWithWhereUniqueWithoutUsuarioInput | MidiaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MidiaUpdateManyWithWhereWithoutUsuarioInput | MidiaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
  }

  export type ComunidadeUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ComunidadeCreateWithoutUsuariosInput, ComunidadeUncheckedCreateWithoutUsuariosInput> | ComunidadeCreateWithoutUsuariosInput[] | ComunidadeUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComunidadeCreateOrConnectWithoutUsuariosInput | ComunidadeCreateOrConnectWithoutUsuariosInput[]
    upsert?: ComunidadeUpsertWithWhereUniqueWithoutUsuariosInput | ComunidadeUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    disconnect?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    delete?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    connect?: ComunidadeWhereUniqueInput | ComunidadeWhereUniqueInput[]
    update?: ComunidadeUpdateWithWhereUniqueWithoutUsuariosInput | ComunidadeUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ComunidadeUpdateManyWithWhereWithoutUsuariosInput | ComunidadeUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ComunidadeScalarWhereInput | ComunidadeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutInscricoesInput = {
    create?: XOR<UsuarioCreateWithoutInscricoesInput, UsuarioUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscricoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutInscricoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutInscricoesInput, UsuarioUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscricoesInput
    upsert?: UsuarioUpsertWithoutInscricoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutInscricoesInput, UsuarioUpdateWithoutInscricoesInput>, UsuarioUncheckedUpdateWithoutInscricoesInput>
  }

  export type UsuarioCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ComunidadeCreateNestedOneWithoutPostsInput = {
    create?: XOR<ComunidadeCreateWithoutPostsInput, ComunidadeUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ComunidadeCreateOrConnectWithoutPostsInput
    connect?: ComunidadeWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    upsert?: UsuarioUpsertWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPostsInput, UsuarioUpdateWithoutPostsInput>, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type ComunidadeUpdateOneWithoutPostsNestedInput = {
    create?: XOR<ComunidadeCreateWithoutPostsInput, ComunidadeUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ComunidadeCreateOrConnectWithoutPostsInput
    upsert?: ComunidadeUpsertWithoutPostsInput
    disconnect?: ComunidadeWhereInput | boolean
    delete?: ComunidadeWhereInput | boolean
    connect?: ComunidadeWhereUniqueInput
    update?: XOR<XOR<ComunidadeUpdateToOneWithWhereWithoutPostsInput, ComunidadeUpdateWithoutPostsInput>, ComunidadeUncheckedUpdateWithoutPostsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutMidiasInput = {
    create?: XOR<UsuarioCreateWithoutMidiasInput, UsuarioUncheckedCreateWithoutMidiasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMidiasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutMidiasNestedInput = {
    create?: XOR<UsuarioCreateWithoutMidiasInput, UsuarioUncheckedCreateWithoutMidiasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMidiasInput
    upsert?: UsuarioUpsertWithoutMidiasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMidiasInput, UsuarioUpdateWithoutMidiasInput>, UsuarioUncheckedUpdateWithoutMidiasInput>
  }

  export type PostCreateNestedManyWithoutComunidadeInput = {
    create?: XOR<PostCreateWithoutComunidadeInput, PostUncheckedCreateWithoutComunidadeInput> | PostCreateWithoutComunidadeInput[] | PostUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PostCreateOrConnectWithoutComunidadeInput | PostCreateOrConnectWithoutComunidadeInput[]
    createMany?: PostCreateManyComunidadeInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutComunidadesInput = {
    create?: XOR<UsuarioCreateWithoutComunidadesInput, UsuarioUncheckedCreateWithoutComunidadesInput> | UsuarioCreateWithoutComunidadesInput[] | UsuarioUncheckedCreateWithoutComunidadesInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadesInput | UsuarioCreateOrConnectWithoutComunidadesInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutComunidadeInput = {
    create?: XOR<PostCreateWithoutComunidadeInput, PostUncheckedCreateWithoutComunidadeInput> | PostCreateWithoutComunidadeInput[] | PostUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PostCreateOrConnectWithoutComunidadeInput | PostCreateOrConnectWithoutComunidadeInput[]
    createMany?: PostCreateManyComunidadeInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutComunidadesInput = {
    create?: XOR<UsuarioCreateWithoutComunidadesInput, UsuarioUncheckedCreateWithoutComunidadesInput> | UsuarioCreateWithoutComunidadesInput[] | UsuarioUncheckedCreateWithoutComunidadesInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadesInput | UsuarioCreateOrConnectWithoutComunidadesInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutComunidadeNestedInput = {
    create?: XOR<PostCreateWithoutComunidadeInput, PostUncheckedCreateWithoutComunidadeInput> | PostCreateWithoutComunidadeInput[] | PostUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PostCreateOrConnectWithoutComunidadeInput | PostCreateOrConnectWithoutComunidadeInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutComunidadeInput | PostUpsertWithWhereUniqueWithoutComunidadeInput[]
    createMany?: PostCreateManyComunidadeInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutComunidadeInput | PostUpdateWithWhereUniqueWithoutComunidadeInput[]
    updateMany?: PostUpdateManyWithWhereWithoutComunidadeInput | PostUpdateManyWithWhereWithoutComunidadeInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutComunidadesNestedInput = {
    create?: XOR<UsuarioCreateWithoutComunidadesInput, UsuarioUncheckedCreateWithoutComunidadesInput> | UsuarioCreateWithoutComunidadesInput[] | UsuarioUncheckedCreateWithoutComunidadesInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadesInput | UsuarioCreateOrConnectWithoutComunidadesInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutComunidadesInput | UsuarioUpsertWithWhereUniqueWithoutComunidadesInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutComunidadesInput | UsuarioUpdateWithWhereUniqueWithoutComunidadesInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutComunidadesInput | UsuarioUpdateManyWithWhereWithoutComunidadesInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutComunidadeNestedInput = {
    create?: XOR<PostCreateWithoutComunidadeInput, PostUncheckedCreateWithoutComunidadeInput> | PostCreateWithoutComunidadeInput[] | PostUncheckedCreateWithoutComunidadeInput[]
    connectOrCreate?: PostCreateOrConnectWithoutComunidadeInput | PostCreateOrConnectWithoutComunidadeInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutComunidadeInput | PostUpsertWithWhereUniqueWithoutComunidadeInput[]
    createMany?: PostCreateManyComunidadeInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutComunidadeInput | PostUpdateWithWhereUniqueWithoutComunidadeInput[]
    updateMany?: PostUpdateManyWithWhereWithoutComunidadeInput | PostUpdateManyWithWhereWithoutComunidadeInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutComunidadesNestedInput = {
    create?: XOR<UsuarioCreateWithoutComunidadesInput, UsuarioUncheckedCreateWithoutComunidadesInput> | UsuarioCreateWithoutComunidadesInput[] | UsuarioUncheckedCreateWithoutComunidadesInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutComunidadesInput | UsuarioCreateOrConnectWithoutComunidadesInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutComunidadesInput | UsuarioUpsertWithWhereUniqueWithoutComunidadesInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutComunidadesInput | UsuarioUpdateWithWhereUniqueWithoutComunidadesInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutComunidadesInput | UsuarioUpdateManyWithWhereWithoutComunidadesInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InscricaoCreateWithoutUsuarioInput = {
    dataInscricao: string
  }

  export type InscricaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    dataInscricao: string
  }

  export type InscricaoCreateOrConnectWithoutUsuarioInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutUsuarioInput, InscricaoUncheckedCreateWithoutUsuarioInput>
  }

  export type InscricaoCreateManyUsuarioInputEnvelope = {
    data: InscricaoCreateManyUsuarioInput | InscricaoCreateManyUsuarioInput[]
  }

  export type PostCreateWithoutAutorInput = {
    tipo: string
    conteudo: string
    dataPublicacao: string
    comunidade?: ComunidadeCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutAutorInput = {
    id?: number
    tipo: string
    conteudo: string
    dataPublicacao: string
    comunidadeId?: number | null
  }

  export type PostCreateOrConnectWithoutAutorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput>
  }

  export type PostCreateManyAutorInputEnvelope = {
    data: PostCreateManyAutorInput | PostCreateManyAutorInput[]
  }

  export type MidiaCreateWithoutUsuarioInput = {
    nome: string
    descricao: string
    criador: string
    dataCriacao: string
    tipo: string
    duracao?: string | null
    qualidade?: number | null
    apresentador?: string | null
  }

  export type MidiaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    descricao: string
    criador: string
    dataCriacao: string
    tipo: string
    duracao?: string | null
    qualidade?: number | null
    apresentador?: string | null
  }

  export type MidiaCreateOrConnectWithoutUsuarioInput = {
    where: MidiaWhereUniqueInput
    create: XOR<MidiaCreateWithoutUsuarioInput, MidiaUncheckedCreateWithoutUsuarioInput>
  }

  export type MidiaCreateManyUsuarioInputEnvelope = {
    data: MidiaCreateManyUsuarioInput | MidiaCreateManyUsuarioInput[]
  }

  export type ComunidadeCreateWithoutUsuariosInput = {
    nome: string
    descricao: string
    membros: number
    posts?: PostCreateNestedManyWithoutComunidadeInput
  }

  export type ComunidadeUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    descricao: string
    membros: number
    posts?: PostUncheckedCreateNestedManyWithoutComunidadeInput
  }

  export type ComunidadeCreateOrConnectWithoutUsuariosInput = {
    where: ComunidadeWhereUniqueInput
    create: XOR<ComunidadeCreateWithoutUsuariosInput, ComunidadeUncheckedCreateWithoutUsuariosInput>
  }

  export type InscricaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: InscricaoWhereUniqueInput
    update: XOR<InscricaoUpdateWithoutUsuarioInput, InscricaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<InscricaoCreateWithoutUsuarioInput, InscricaoUncheckedCreateWithoutUsuarioInput>
  }

  export type InscricaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: InscricaoWhereUniqueInput
    data: XOR<InscricaoUpdateWithoutUsuarioInput, InscricaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type InscricaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: InscricaoScalarWhereInput
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type InscricaoScalarWhereInput = {
    AND?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    OR?: InscricaoScalarWhereInput[]
    NOT?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    id?: IntFilter<"Inscricao"> | number
    dataInscricao?: StringFilter<"Inscricao"> | string
    usuarioId?: IntFilter<"Inscricao"> | number
  }

  export type PostUpsertWithWhereUniqueWithoutAutorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAutorInput, PostUncheckedUpdateWithoutAutorInput>
    create: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAutorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAutorInput, PostUncheckedUpdateWithoutAutorInput>
  }

  export type PostUpdateManyWithWhereWithoutAutorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAutorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    tipo?: StringFilter<"Post"> | string
    conteudo?: StringFilter<"Post"> | string
    dataPublicacao?: StringFilter<"Post"> | string
    autorId?: IntFilter<"Post"> | number
    comunidadeId?: IntNullableFilter<"Post"> | number | null
  }

  export type MidiaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MidiaWhereUniqueInput
    update: XOR<MidiaUpdateWithoutUsuarioInput, MidiaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MidiaCreateWithoutUsuarioInput, MidiaUncheckedCreateWithoutUsuarioInput>
  }

  export type MidiaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MidiaWhereUniqueInput
    data: XOR<MidiaUpdateWithoutUsuarioInput, MidiaUncheckedUpdateWithoutUsuarioInput>
  }

  export type MidiaUpdateManyWithWhereWithoutUsuarioInput = {
    where: MidiaScalarWhereInput
    data: XOR<MidiaUpdateManyMutationInput, MidiaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MidiaScalarWhereInput = {
    AND?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
    OR?: MidiaScalarWhereInput[]
    NOT?: MidiaScalarWhereInput | MidiaScalarWhereInput[]
    id?: IntFilter<"Midia"> | number
    nome?: StringFilter<"Midia"> | string
    descricao?: StringFilter<"Midia"> | string
    criador?: StringFilter<"Midia"> | string
    dataCriacao?: StringFilter<"Midia"> | string
    tipo?: StringFilter<"Midia"> | string
    duracao?: StringNullableFilter<"Midia"> | string | null
    qualidade?: IntNullableFilter<"Midia"> | number | null
    apresentador?: StringNullableFilter<"Midia"> | string | null
    usuarioId?: IntFilter<"Midia"> | number
  }

  export type ComunidadeUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ComunidadeWhereUniqueInput
    update: XOR<ComunidadeUpdateWithoutUsuariosInput, ComunidadeUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ComunidadeCreateWithoutUsuariosInput, ComunidadeUncheckedCreateWithoutUsuariosInput>
  }

  export type ComunidadeUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ComunidadeWhereUniqueInput
    data: XOR<ComunidadeUpdateWithoutUsuariosInput, ComunidadeUncheckedUpdateWithoutUsuariosInput>
  }

  export type ComunidadeUpdateManyWithWhereWithoutUsuariosInput = {
    where: ComunidadeScalarWhereInput
    data: XOR<ComunidadeUpdateManyMutationInput, ComunidadeUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ComunidadeScalarWhereInput = {
    AND?: ComunidadeScalarWhereInput | ComunidadeScalarWhereInput[]
    OR?: ComunidadeScalarWhereInput[]
    NOT?: ComunidadeScalarWhereInput | ComunidadeScalarWhereInput[]
    id?: IntFilter<"Comunidade"> | number
    nome?: StringFilter<"Comunidade"> | string
    descricao?: StringFilter<"Comunidade"> | string
    membros?: IntFilter<"Comunidade"> | number
  }

  export type UsuarioCreateWithoutInscricoesInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    posts?: PostCreateNestedManyWithoutAutorInput
    midias?: MidiaCreateNestedManyWithoutUsuarioInput
    comunidades?: ComunidadeCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutInscricoesInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
    midias?: MidiaUncheckedCreateNestedManyWithoutUsuarioInput
    comunidades?: ComunidadeUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioCreateOrConnectWithoutInscricoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInscricoesInput, UsuarioUncheckedCreateWithoutInscricoesInput>
  }

  export type UsuarioUpsertWithoutInscricoesInput = {
    update: XOR<UsuarioUpdateWithoutInscricoesInput, UsuarioUncheckedUpdateWithoutInscricoesInput>
    create: XOR<UsuarioCreateWithoutInscricoesInput, UsuarioUncheckedCreateWithoutInscricoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutInscricoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutInscricoesInput, UsuarioUncheckedUpdateWithoutInscricoesInput>
  }

  export type UsuarioUpdateWithoutInscricoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutAutorNestedInput
    midias?: MidiaUpdateManyWithoutUsuarioNestedInput
    comunidades?: ComunidadeUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInscricoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutUsuarioNestedInput
    comunidades?: ComunidadeUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioCreateWithoutPostsInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoCreateNestedManyWithoutUsuarioInput
    midias?: MidiaCreateNestedManyWithoutUsuarioInput
    comunidades?: ComunidadeCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutPostsInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutUsuarioInput
    midias?: MidiaUncheckedCreateNestedManyWithoutUsuarioInput
    comunidades?: ComunidadeUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioCreateOrConnectWithoutPostsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
  }

  export type ComunidadeCreateWithoutPostsInput = {
    nome: string
    descricao: string
    membros: number
    usuarios?: UsuarioCreateNestedManyWithoutComunidadesInput
  }

  export type ComunidadeUncheckedCreateWithoutPostsInput = {
    id?: number
    nome: string
    descricao: string
    membros: number
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutComunidadesInput
  }

  export type ComunidadeCreateOrConnectWithoutPostsInput = {
    where: ComunidadeWhereUniqueInput
    create: XOR<ComunidadeCreateWithoutPostsInput, ComunidadeUncheckedCreateWithoutPostsInput>
  }

  export type UsuarioUpsertWithoutPostsInput = {
    update: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type UsuarioUpdateWithoutPostsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUpdateManyWithoutUsuarioNestedInput
    midias?: MidiaUpdateManyWithoutUsuarioNestedInput
    comunidades?: ComunidadeUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutUsuarioNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutUsuarioNestedInput
    comunidades?: ComunidadeUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type ComunidadeUpsertWithoutPostsInput = {
    update: XOR<ComunidadeUpdateWithoutPostsInput, ComunidadeUncheckedUpdateWithoutPostsInput>
    create: XOR<ComunidadeCreateWithoutPostsInput, ComunidadeUncheckedCreateWithoutPostsInput>
    where?: ComunidadeWhereInput
  }

  export type ComunidadeUpdateToOneWithWhereWithoutPostsInput = {
    where?: ComunidadeWhereInput
    data: XOR<ComunidadeUpdateWithoutPostsInput, ComunidadeUncheckedUpdateWithoutPostsInput>
  }

  export type ComunidadeUpdateWithoutPostsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
    usuarios?: UsuarioUpdateManyWithoutComunidadesNestedInput
  }

  export type ComunidadeUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
    usuarios?: UsuarioUncheckedUpdateManyWithoutComunidadesNestedInput
  }

  export type UsuarioCreateWithoutMidiasInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoCreateNestedManyWithoutUsuarioInput
    posts?: PostCreateNestedManyWithoutAutorInput
    comunidades?: ComunidadeCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutMidiasInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutUsuarioInput
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
    comunidades?: ComunidadeUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioCreateOrConnectWithoutMidiasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMidiasInput, UsuarioUncheckedCreateWithoutMidiasInput>
  }

  export type UsuarioUpsertWithoutMidiasInput = {
    update: XOR<UsuarioUpdateWithoutMidiasInput, UsuarioUncheckedUpdateWithoutMidiasInput>
    create: XOR<UsuarioCreateWithoutMidiasInput, UsuarioUncheckedCreateWithoutMidiasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMidiasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMidiasInput, UsuarioUncheckedUpdateWithoutMidiasInput>
  }

  export type UsuarioUpdateWithoutMidiasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUpdateManyWithoutUsuarioNestedInput
    posts?: PostUpdateManyWithoutAutorNestedInput
    comunidades?: ComunidadeUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMidiasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutUsuarioNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
    comunidades?: ComunidadeUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type PostCreateWithoutComunidadeInput = {
    tipo: string
    conteudo: string
    dataPublicacao: string
    autor: UsuarioCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutComunidadeInput = {
    id?: number
    tipo: string
    conteudo: string
    dataPublicacao: string
    autorId: number
  }

  export type PostCreateOrConnectWithoutComunidadeInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutComunidadeInput, PostUncheckedCreateWithoutComunidadeInput>
  }

  export type PostCreateManyComunidadeInputEnvelope = {
    data: PostCreateManyComunidadeInput | PostCreateManyComunidadeInput[]
  }

  export type UsuarioCreateWithoutComunidadesInput = {
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoCreateNestedManyWithoutUsuarioInput
    posts?: PostCreateNestedManyWithoutAutorInput
    midias?: MidiaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComunidadesInput = {
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    tipodeConta: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutUsuarioInput
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
    midias?: MidiaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComunidadesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComunidadesInput, UsuarioUncheckedCreateWithoutComunidadesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutComunidadeInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutComunidadeInput, PostUncheckedUpdateWithoutComunidadeInput>
    create: XOR<PostCreateWithoutComunidadeInput, PostUncheckedCreateWithoutComunidadeInput>
  }

  export type PostUpdateWithWhereUniqueWithoutComunidadeInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutComunidadeInput, PostUncheckedUpdateWithoutComunidadeInput>
  }

  export type PostUpdateManyWithWhereWithoutComunidadeInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutComunidadeInput>
  }

  export type UsuarioUpsertWithWhereUniqueWithoutComunidadesInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutComunidadesInput, UsuarioUncheckedUpdateWithoutComunidadesInput>
    create: XOR<UsuarioCreateWithoutComunidadesInput, UsuarioUncheckedCreateWithoutComunidadesInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutComunidadesInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutComunidadesInput, UsuarioUncheckedUpdateWithoutComunidadesInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutComunidadesInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutComunidadesInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    sobrenome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    tipodeConta?: StringFilter<"Usuario"> | string
  }

  export type InscricaoCreateManyUsuarioInput = {
    id?: number
    dataInscricao: string
  }

  export type PostCreateManyAutorInput = {
    id?: number
    tipo: string
    conteudo: string
    dataPublicacao: string
    comunidadeId?: number | null
  }

  export type MidiaCreateManyUsuarioInput = {
    id?: number
    nome: string
    descricao: string
    criador: string
    dataCriacao: string
    tipo: string
    duracao?: string | null
    qualidade?: number | null
    apresentador?: string | null
  }

  export type InscricaoUpdateWithoutUsuarioInput = {
    dataInscricao?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInscricao?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataInscricao?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutAutorInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    comunidade?: ComunidadeUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    comunidadeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    comunidadeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MidiaUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criador?: StringFieldUpdateOperationsInput | string
    dataCriacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    duracao?: NullableStringFieldUpdateOperationsInput | string | null
    qualidade?: NullableIntFieldUpdateOperationsInput | number | null
    apresentador?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MidiaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criador?: StringFieldUpdateOperationsInput | string
    dataCriacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    duracao?: NullableStringFieldUpdateOperationsInput | string | null
    qualidade?: NullableIntFieldUpdateOperationsInput | number | null
    apresentador?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MidiaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    criador?: StringFieldUpdateOperationsInput | string
    dataCriacao?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    duracao?: NullableStringFieldUpdateOperationsInput | string | null
    qualidade?: NullableIntFieldUpdateOperationsInput | number | null
    apresentador?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComunidadeUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
    posts?: PostUpdateManyWithoutComunidadeNestedInput
  }

  export type ComunidadeUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutComunidadeNestedInput
  }

  export type ComunidadeUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    membros?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyComunidadeInput = {
    id?: number
    tipo: string
    conteudo: string
    dataPublicacao: string
    autorId: number
  }

  export type PostUpdateWithoutComunidadeInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyWithoutComunidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: StringFieldUpdateOperationsInput | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUpdateWithoutComunidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUpdateManyWithoutUsuarioNestedInput
    posts?: PostUpdateManyWithoutAutorNestedInput
    midias?: MidiaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComunidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutUsuarioNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
    midias?: MidiaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutComunidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipodeConta?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}