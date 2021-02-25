enum FileAccess {
    // 常量成员
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // 计算出来的成员
    G = "123".length
}